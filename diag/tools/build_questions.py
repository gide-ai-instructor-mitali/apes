# -*- coding: utf-8 -*-
"""Generate js/questions.js from the authored item bank.

Usage:  python -I tools/build_questions.py      (run from the project root)
"""

import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import ced          # noqa: E402
import qbank        # noqa: E402

# Importing these registers every item, in exam order.
import q_units_1_3  # noqa: E402,F401
import q_units_4_6  # noqa: E402,F401
import q_units_7_9  # noqa: E402,F401

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "js", "questions.js")

HEADER = """// %s Diagnostic — Question Bank
// GENERATED FILE — do not edit by hand.
// Source: tools/build_questions.py + tools/q_units_*.py (run `python -I tools/build_questions.py`)
//
// %d questions across %d units, weighted to the %s CED exam blueprint.
// Every figure is generated programmatically by tools/viz.py and every numeric
// answer and distractor is computed in Python, not typed by hand.
"""


def main():
    questions = qbank.build()
    meta = qbank.metadata(questions)

    body = [HEADER % (ced.COURSE, len(questions), len(ced.UNITS), ced.CED_YEAR)]
    body.append("const APES_QUESTIONS = %s;\n"
                % json.dumps(questions, indent=2, ensure_ascii=False))
    body.append("const APES_META = %s;\n"
                % json.dumps(meta, indent=2, ensure_ascii=False))
    # Back-compatible aliases so page code can use either name.
    body.append("""
// Aliases kept so any page referencing the generic names keeps working.
const AP_ENV_QUESTIONS = APES_QUESTIONS;
const AP_ENV_META = APES_META;
if (typeof window !== 'undefined') {
  window.APES_QUESTIONS = APES_QUESTIONS;
  window.APES_META = APES_META;
}
""")

    out = os.path.abspath(OUT)
    io.open(out, "w", encoding="utf-8", newline="\n").write("\n".join(body))

    letters = {}
    for q in questions:
        letters[q["correct"]] = letters.get(q["correct"], 0) + 1
    print("wrote %s" % out)
    print("  %d questions, %d units" % (len(questions), len(meta["units"])))
    print("  answer letters: %s" % ", ".join("%s=%d" % (k, letters[k]) for k in "ABCD"))
    print("  skills used: %d of %d assessed" % (len(meta["skills"]), len(ced.SKILLS)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
