# -*- coding: utf-8 -*-
"""Question-authoring framework for the APES diagnostic.

Questions are authored content-first: each item declares the correct option
text, three distractors each paired with the reason it is wrong, and the
positive reasoning. Option LETTERS are assigned by `assign_letters()` at build
time, which:

  * orders numeric option sets ascending (so the key cannot be read off the
    ordering), and
  * assigns the remaining items so each letter is correct 20 +/- 1 times with
    no run of more than two identical correct letters.

Because explanations reference distractors by content, not by letter, letter
assignment can be reshuffled without invalidating any prose.
"""

import random
import re

import ced

LETTERS = ["A", "B", "C", "D"]


class Item(object):
    __slots__ = ("topic", "skill", "diff", "stem", "visual", "answer",
                 "distractors", "why_right", "focus", "numeric", "set_id")

    def __init__(self, topic, skill, diff, stem, answer, distractors,
                 why_right, focus, visual="", numeric=False, set_id=None):
        assert topic in ced.TOPICS, "unknown CED topic %r" % topic
        assert skill in ced.SKILLS, "unknown/unassessed CED skill %r" % skill
        assert diff in (1, 2, 3), "difficulty must be 1-3"
        assert len(distractors) == 3, "need exactly 3 distractors (got %d)" % len(distractors)
        for d in distractors:
            assert len(d) == 2, "each distractor is (text, why_wrong)"
            assert d[1].strip(), "distractor missing its why-wrong note"
        assert why_right.strip() and focus.strip()
        self.topic, self.skill, self.diff = topic, skill, diff
        self.stem, self.visual = stem, visual
        self.answer, self.distractors = answer, distractors
        self.why_right, self.focus = why_right, focus
        self.numeric, self.set_id = numeric, set_id

    # -- derived CED fields ----------------------------------------------
    @property
    def unit_num(self):
        return int(self.topic.split(".")[0])

    @property
    def big_idea(self):
        return ced.TOPICS[self.topic][0]

    @property
    def topic_title(self):
        return ced.TOPICS[self.topic][1]

    @property
    def unit_name(self):
        return dict((u[0], u[1]) for u in ced.UNITS)[self.unit_num]

    def option_texts(self):
        return [self.answer] + [d[0] for d in self.distractors]


ITEMS = []


def Q(**kw):
    """Register one item, in exam order."""
    ITEMS.append(Item(**kw))


# ──────────────────────────────────────────────────────────────────────────
# Numeric ordering
# ──────────────────────────────────────────────────────────────────────────
_NUM = re.compile(r"-?\d[\d,]*\.?\d*")


def numeric_value(text):
    """Leading numeric value of an option, for ascending ordering."""
    m = _NUM.search(text.replace("−", "-"))
    if not m:
        raise ValueError("numeric option has no number: %r" % text[:60])
    return float(m.group(0).replace(",", ""))


def ordered_numeric(item):
    """Return (texts_in_ascending_order, correct_letter)."""
    texts = item.option_texts()
    vals = [numeric_value(t) for t in texts]
    if len(set(vals)) != 4:
        raise ValueError("numeric item has duplicate values: %r" % vals)
    order = sorted(range(4), key=lambda i: vals[i])
    ranked = [texts[i] for i in order]
    return ranked, LETTERS[order.index(0)]


# ──────────────────────────────────────────────────────────────────────────
# Letter assignment
# ──────────────────────────────────────────────────────────────────────────
def assign_letters(items, seed=20262027, max_run=2, tol=1):
    """Return a list of (ordered_option_texts, correct_letter) per item."""
    n = len(items)
    fixed = {}
    ordered = [None] * n
    for i, it in enumerate(items):
        if it.numeric:
            texts, letter = ordered_numeric(it)
            ordered[i] = texts
            fixed[i] = letter

    base = n // 4
    quota = {L: base for L in LETTERS}
    for L in LETTERS[: n - base * 4]:
        quota[L] += 1
    hi = {L: quota[L] + tol for L in LETTERS}
    lo = {L: max(0, quota[L] - tol) for L in LETTERS}

    rng = random.Random(seed)
    free = [i for i in range(n) if i not in fixed]

    for attempt in range(4000):
        used = dict((L, 0) for L in LETTERS)
        for L in fixed.values():
            used[L] += 1
        if any(used[L] > hi[L] for L in LETTERS):
            raise RuntimeError("numeric items alone exceed letter quota: %r" % used)
        seq = [fixed.get(i) for i in range(n)]
        order = free[:]
        rng.shuffle(order)
        ok = True
        for i in order:
            cands = [L for L in LETTERS if used[L] < hi[L]]
            rng.shuffle(cands)
            # prefer the least-used letter, and never create a long run
            cands.sort(key=lambda L: used[L])
            placed = None
            for L in cands:
                seq[i] = L
                if _run_ok(seq, i, max_run):
                    placed = L
                    break
                seq[i] = None
            if placed is None:
                ok = False
                break
            used[placed] += 1
        if not ok or any(v is None for v in seq):
            continue
        if any(used[L] < lo[L] for L in LETTERS):
            continue
        if _longest_run(seq) > max_run:
            continue
        # materialise option order for non-numeric items
        out = []
        for i, it in enumerate(items):
            if it.numeric:
                out.append((ordered[i], seq[i]))
            else:
                texts = it.option_texts()
                slot = LETTERS.index(seq[i])
                others = texts[1:]
                rng.shuffle(others)
                arranged = others[:slot] + [texts[0]] + others[slot:]
                out.append((arranged, seq[i]))
        return out
    raise RuntimeError("could not balance answer letters after 4000 attempts")


def _run_ok(seq, i, max_run):
    """Check the run of identical letters ending at or spanning index i."""
    L = seq[i]
    if L is None:
        return True
    back = 0
    j = i - 1
    while j >= 0 and seq[j] == L:
        back += 1
        j -= 1
    fwd = 0
    j = i + 1
    while j < len(seq) and seq[j] == L:
        fwd += 1
        j += 1
    return back + fwd + 1 <= max_run


def _longest_run(seq):
    best = cur = 1
    for i in range(1, len(seq)):
        cur = cur + 1 if seq[i] == seq[i - 1] else 1
        best = max(best, cur)
    return best


# ──────────────────────────────────────────────────────────────────────────
# Rendering to the page-facing question objects
# ──────────────────────────────────────────────────────────────────────────
def build(items=None, seed=20262027):
    items = ITEMS if items is None else items
    ced.assert_blueprint()

    # blueprint check: items per unit must match the declared counts, in order
    want = [(u[0], u[3]) for u in ced.UNITS]
    got = {}
    for it in items:
        got[it.unit_num] = got.get(it.unit_num, 0) + 1
    for num, count in want:
        assert got.get(num, 0) == count, \
            "Unit %d has %d items, blueprint wants %d" % (num, got.get(num, 0), count)
    order = [it.unit_num for it in items]
    assert order == sorted(order), "items must be registered in unit order"

    layouts = assign_letters(items, seed=seed)
    out = []
    for idx, (it, (texts, correct)) in enumerate(zip(items, layouts)):
        options = dict(zip(LETTERS, texts))
        # map each distractor's why-wrong onto the letter it landed on
        why = {}
        for letter, text in options.items():
            if letter == correct:
                continue
            for dtext, dwhy in it.distractors:
                if dtext == text:
                    why[letter] = dwhy
                    break
            else:
                raise RuntimeError("Q%d: option text not traceable to a distractor" % (idx + 1))
        bi = it.big_idea
        lines = ["Big Idea: %s — %s" % (bi, ced.BIG_IDEAS[bi]), "", it.why_right, "",
                 "Why the other options fail:"]
        for L in LETTERS:
            if L in why:
                lines.append("%s — %s" % (L, why[L]))
        lines += ["", "Diagnostic focus: %s" % it.focus]
        out.append({
            "id": idx + 1,
            "unit": ced.unit_label(it.unit_num),
            "topic": it.topic,
            "category": "Unit %d: %s — Topic %s: %s"
                        % (it.unit_num, it.unit_name, it.topic, it.topic_title),
            "big_idea": bi,
            "sp": "Skill %s" % it.skill,
            "skills": "Skill %s: %s" % (it.skill, ced.SKILLS[it.skill]),
            "difficulty": ced.DIFFICULTY[it.diff],
            "stem": it.stem,
            "visual": it.visual,
            "options": options,
            "correct": correct,
            "explanation": "\n".join(lines),
        })
    return out


def metadata(questions):
    units = []
    n = 1
    for num, name, weight, count in ced.UNITS:
        qs = list(range(n, n + count))
        units.append({"code": ced.unit_label(num), "number": num, "name": name,
                      "weight": weight, "questions": qs})
        n += count
    skills_used = sorted(set(q["sp"].replace("Skill ", "") for q in questions))
    return {
        "course": ced.COURSE,
        "title": "%s — Complete Diagnostic Assessment (%s CED)" % (ced.COURSE, ced.CED_YEAR),
        "cedYear": ced.CED_YEAR,
        "cedSource": ced.CED_SOURCE,
        "totalQuestions": len(questions),
        "examMinutes": ced.EXAM_MINUTES,
        "calculatorNote": ced.CALCULATOR_NOTE,
        "units": units,
        "bigIdeas": ced.BIG_IDEAS,
        "bigIdeaDesc": ced.BIG_IDEA_DESC,
        "practices": [{"code": c, "name": nm, "description": d} for c, nm, d in ced.PRACTICES],
        "skills": dict((k, v) for k, v in ced.SKILLS.items() if k in skills_used),
        "allSkills": ced.SKILLS,
        "topics": dict((k, {"bigIdea": v[0], "title": v[1]}) for k, v in ced.TOPICS.items()),
    }
