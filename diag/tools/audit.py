# -*- coding: utf-8 -*-
"""Quality audit for the generated question bank.

Reads js/questions.js (the artifact the pages actually load), not the authoring
modules, so it checks what students will see. Exits non-zero on any FAIL.

Usage:  python -I tools/audit.py
"""

import io
import json
import os
import re
import sys
import xml.dom.minidom as minidom

if hasattr(sys.stdout, "reconfigure"):      # Windows consoles default to cp1252
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ced  # noqa: E402

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
QJS = os.path.join(ROOT, "js", "questions.js")

LETTERS = ["A", "B", "C", "D"]
results = []


def check(name, ok, detail="", warn_only=False):
    status = "PASS" if ok else ("WARN" if warn_only else "FAIL")
    results.append((status, name, detail))
    return ok


def load():
    src = io.open(QJS, encoding="utf-8").read()

    def grab(varname):
        start = src.index("const %s = " % varname) + len("const %s = " % varname)
        depth, i, instr, esc = 0, start, False, False
        while i < len(src):
            c = src[i]
            if instr:
                if esc:
                    esc = False
                elif c == "\\":
                    esc = True
                elif c == '"':
                    instr = False
            else:
                if c == '"':
                    instr = True
                elif c in "[{":
                    depth += 1
                elif c in "]}":
                    depth -= 1
                    if depth == 0:
                        return json.loads(src[start:i + 1])
            i += 1
        raise ValueError("could not parse %s" % varname)

    return grab("APES_QUESTIONS"), grab("APES_META")


NUMRE = re.compile(r"-?\d[\d,]*\.?\d*")


def leading_number(text):
    m = NUMRE.search(text.replace("−", "-"))
    return float(m.group(0).replace(",", "")) if m else None


def main():
    qs, meta = load()
    n = len(qs)
    print("=" * 74)
    print("APES DIAGNOSTIC QUALITY AUDIT  —  %d items" % n)
    print("=" * 74)

    # ---- 1. blueprint ---------------------------------------------------
    print("\n[1] ITEMS PER UNIT vs CED BLUEPRINT")
    ok_bp = True
    for num, name, weight, want in ced.UNITS:
        got = sum(1 for q in qs if q["unit"] == "Unit %d" % num)
        pct = got / float(n) * 100
        lo, hi = ced.WEIGHT_RANGES[weight]
        inrange = lo <= pct <= hi and got == want
        ok_bp = ok_bp and inrange
        print("    Unit %d  %-38s %2d items  %5.2f%%  CED %-7s %s"
              % (num, name[:38], got, pct, weight, "ok" if inrange else "MISMATCH"))
    check("items per unit match blueprint and CED weight ranges", ok_bp)

    # ---- 2. difficulty + skill mix --------------------------------------
    print("\n[2] DIFFICULTY MIX")
    diffs = {}
    for q in qs:
        d = q["difficulty"].split("—")[0].strip()
        diffs[d] = diffs.get(d, 0) + 1
    for d in ("1", "2", "3"):
        print("    %s %-14s %2d items (%4.1f%%)"
              % (d, ced.DIFFICULTY[int(d)].split("—")[1].strip(),
                 diffs.get(d, 0), diffs.get(d, 0) / float(n) * 100))
    check("all three difficulty levels present, none above 60%",
          len(diffs) == 3 and max(diffs.values()) / float(n) <= 0.60)

    print("\n[3] SCIENCE PRACTICE / SKILL MIX")
    skills, practices = {}, {}
    for q in qs:
        s = q["sp"].replace("Skill ", "")
        skills[s] = skills.get(s, 0) + 1
        practices[s.split(".")[0]] = practices.get(s.split(".")[0], 0) + 1
    for p in "1234567":
        print("    Practice %s  %-26s %2d items"
              % (p, dict((c.split()[1], nm) for c, nm, d in
                         [(c, nm, d) for c, nm, d in ced.PRACTICES]).get(p, ""),
                 practices.get(p, 0)))
    print("    skills used: %s" % ", ".join("%s(%d)" % (k, skills[k]) for k in sorted(skills)))
    check("all 7 science practices represented", all(practices.get(p, 0) > 0 for p in "1234567"))
    unassessed = [s for s in skills if s not in ced.SKILLS]
    check("no unassessed or invalid skill codes used", not unassessed, str(unassessed))

    # ---- 4. CED topic validity ------------------------------------------
    bad_topics = [q["id"] for q in qs if q.get("topic") not in ced.TOPICS]
    check("every topic code is a confirmed CED topic", not bad_topics, str(bad_topics))
    bad_bi = [q["id"] for q in qs if ced.TOPICS[q["topic"]][0] != q["big_idea"]]
    check("big_idea matches the CED Big Idea for each topic", not bad_bi, str(bad_bi))

    # ---- 5. answer-letter distribution ---------------------------------
    print("\n[4] ANSWER LETTER DISTRIBUTION")
    counts = dict((L, 0) for L in LETTERS)
    for q in qs:
        counts[q["correct"]] += 1
    avg = n / 4.0
    for L in LETTERS:
        print("    %s  %2d  (average %.1f, deviation %+.1f)" % (L, counts[L], avg, counts[L] - avg))
    check("each letter within 1 of the average",
          all(abs(counts[L] - avg) <= 1.0 for L in LETTERS))

    seq = [q["correct"] for q in qs]
    run, best, at = 1, 1, 1
    for i in range(1, n):
        run = run + 1 if seq[i] == seq[i - 1] else 1
        if run > best:
            best, at = run, i
    print("    longest run of identical letters: %d (ending at Q%d)" % (best, at + 1))
    check("no run of more than 2 identical correct letters", best <= 2)

    # ---- 6. length cues -------------------------------------------------
    print("\n[5] OPTION LENGTH CUES")
    longest_correct = 0
    ratios = []
    for q in qs:
        lens = dict((L, len(q["options"][L])) for L in LETTERS)
        c = lens[q["correct"]]
        others = [lens[L] for L in LETTERS if L != q["correct"]]
        if c > max(others):
            longest_correct += 1
        ratios.append((c / float(min(others)), q["id"]))
    ratios.sort(reverse=True)
    exp = n / 4.0
    print("    correct option is strictly longest: %d of %d (chance ≈ %.0f)"
          % (longest_correct, n, exp))
    print("    max correct/shortest-distractor length ratio: %.2f (Q%d)"
          % (ratios[0][0], ratios[0][1]))
    # Binomial sd at p=0.25, n=80 is ~3.9; allow +/- 2 sd around chance.
    check("correct-is-longest count is within 2 sd of chance (12-28)",
          12 <= longest_correct <= 28,
          "got %d, chance %.0f" % (longest_correct, exp))
    prose_ratios = [r for r, qid in ratios
                    if not _is_numeric_item(next(q for q in qs if q["id"] == qid))]
    check("no prose item has a correct/shortest ratio above 1.6",
          max(prose_ratios) <= 1.6, "max %.2f" % max(prose_ratios))

    # ---- 7. numeric ordering + duplicates -------------------------------
    print("\n[6] NUMERIC ORDERING AND DUPLICATE OPTIONS")
    not_asc, dupes, near_dupes = [], [], []
    numeric_items = 0
    for q in qs:
        texts = [q["options"][L] for L in LETTERS]
        if len(set(t.strip().lower() for t in texts)) != 4:
            dupes.append(q["id"])
        if _is_numeric_item(q):
            numeric_items += 1
            vals = [leading_number(t) for t in texts]
            if any(v is None for v in vals):
                not_asc.append(q["id"])
            else:
                if vals != sorted(vals):
                    not_asc.append(q["id"])
                for i in range(3):
                    a, b = vals[i], vals[i + 1]
                    if b != 0 and abs(a - b) / max(abs(b), 1e-12) < 0.01:
                        near_dupes.append(q["id"])
    print("    numeric items: %d of %d" % (numeric_items, n))
    check("all numeric option sets ascend", not not_asc, str(not_asc))
    check("no duplicate options within an item", not dupes, str(dupes))
    check("no two numeric options within 1% of each other",
          not near_dupes, str(sorted(set(near_dupes))))

    # ---- 8. explanations ------------------------------------------------
    print("\n[7] EXPLANATIONS")
    short, missing_bi, missing_focus, missing_distractor = [], [], [], []
    wc = []
    for q in qs:
        e = q["explanation"]
        words = len(e.split())
        wc.append(words)
        if words < 30:
            short.append(q["id"])
        if not e.startswith("Big Idea:"):
            missing_bi.append(q["id"])
        if "Diagnostic focus:" not in e:
            missing_focus.append(q["id"])
        for L in LETTERS:
            if L == q["correct"]:
                continue
            if ("\n%s — " % L) not in e:
                missing_distractor.append((q["id"], L))
    print("    explanation length: min %d, median %d, max %d words"
          % (min(wc), sorted(wc)[len(wc) // 2], max(wc)))
    check("no explanation under 30 words", not short, str(short))
    check("every explanation names its Big Idea", not missing_bi, str(missing_bi))
    check("every explanation has a diagnostic focus", not missing_focus, str(missing_focus))
    check("every distractor is addressed by letter in its explanation",
          not missing_distractor, str(missing_distractor[:8]))

    # ---- 9. stems -------------------------------------------------------
    print("\n[8] STEMS AND STIMULI")
    no_q, short_stem, leaky = [], [], []
    for q in qs:
        s = q["stem"]
        if "?" not in s:
            no_q.append(q["id"])
        if len(s) < 60:
            short_stem.append(q["id"])
        # a stem must not contain the correct option verbatim
        if q["options"][q["correct"]].lower()[:40] in s.lower():
            leaky.append(q["id"])
    check("every stem poses a complete question", not no_q, str(no_q))
    check("no stem shorter than 60 characters", not short_stem, str(short_stem))
    check("no stem leaks its correct option text", not leaky, str(leaky))

    # ---- 10. stimulus rendering ----------------------------------------
    withvis = [q for q in qs if q["visual"]]
    broken = []
    for q in withvis:
        try:
            minidom.parseString(q["visual"])
        except Exception as e:
            broken.append((q["id"], str(e)[:60]))
    print("    items with a stimulus figure: %d of %d (%.0f%%)"
          % (len(withvis), n, len(withvis) / float(n) * 100))
    check("every stimulus parses as well-formed XML", not broken, str(broken))
    check("at least 35% of items carry a stimulus figure",
          len(withvis) / float(n) >= 0.35, "%.0f%%" % (len(withvis) / float(n) * 100))

    # ---- 11. metadata consistency --------------------------------------
    print("\n[9] METADATA")
    qnums = [i for u in meta["units"] for i in u["questions"]]
    check("metadata question numbers cover 1..%d exactly" % n,
          sorted(qnums) == list(range(1, n + 1)))
    check("metadata exam length matches CED Section I",
          meta["examMinutes"] == ced.EXAM_MINUTES and meta["totalQuestions"] == n)
    unit_ok = all(
        all(qs[i - 1]["unit"] == u["code"] for i in u["questions"]) for u in meta["units"])
    check("every metadata unit range maps to items of that unit", unit_ok)

    # ---- summary --------------------------------------------------------
    print("\n" + "=" * 74)
    fails = [r for r in results if r[0] == "FAIL"]
    warns = [r for r in results if r[0] == "WARN"]
    for status, name, detail in results:
        if status != "PASS":
            print("  %s  %s%s" % (status, name, ("  — " + detail) if detail else ""))
    print("  %d checks: %d pass, %d warn, %d FAIL"
          % (len(results), len(results) - len(fails) - len(warns), len(warns), len(fails)))
    print("=" * 74)
    return 1 if fails else 0


def _is_numeric_item(q):
    """An item is numeric if all four options start with a number."""
    for L in LETTERS:
        t = q["options"][L].strip().replace("−", "-")
        if not re.match(r"^-?\d", t):
            return False
    return True


if __name__ == "__main__":
    sys.exit(main())
