# -*- coding: utf-8 -*-
"""AP Environmental Science CED reference data.

Every unit name, exam weight, topic number and Big Idea assignment below was
transcribed from the official College Board "AP Environmental Science Course
and Exam Description, Effective Fall 2020": science practices from the
Science Practices tables, units/topics from the Course-at-a-Glance tables.
Skills the CED marks "not assessed" (3.D, 3.E, 4.D) are excluded.
"""

COURSE = "AP Environmental Science"
CED_YEAR = "2026-2027"
CED_SOURCE = "College Board AP Environmental Science CED, effective Fall 2020"
TOTAL_QUESTIONS = 80
EXAM_MINUTES = 90          # Section I: 80 MCQ in 90 minutes
CALCULATOR_NOTE = (
    "A four-function (with square root), scientific, or graphing calculator is "
    "permitted on the entire AP Environmental Science exam. No formula or "
    "equation sheet is provided, so quantitative relationships must be recalled."
)

# -- Big Ideas ------------------------------------------------------------
BIG_IDEAS = {
    "ERT": "Interactions Between Earth Systems",
    "ENG": "Energy Transfer",
    "EIN": "Interactions Between Different Species and the Environment",
    "STB": "Sustainability",
}

BIG_IDEA_DESC = {
    "ENG": "Energy conversions underlie all ecological processes; as energy flows through a system, more of it becomes unusable at each step.",
    "ERT": "The Earth is one interconnected system whose natural subsystems change over time and space and vary in their ability to recover from disturbance.",
    "EIN": "Humans alter natural systems, and technology and population growth have increased both the rate and the scale of that impact.",
    "STB": "Human survival depends on developing practices that achieve sustainable systems.",
}

# -- Science practices (assessed skills only) -----------------------------
PRACTICES = [
    ("Practice 1", "Concept Explanation",
     "Explain environmental concepts, processes, and models presented in written format."),
    ("Practice 2", "Visual Representations",
     "Analyze visual representations of environmental concepts and processes."),
    ("Practice 3", "Text Analysis",
     "Analyze sources of information about environmental issues."),
    ("Practice 4", "Scientific Experiments",
     "Analyze research studies that test environmental principles."),
    ("Practice 5", "Data Analysis",
     "Analyze and interpret quantitative data represented in tables, charts, and graphs."),
    ("Practice 6", "Mathematical Routines",
     "Apply quantitative methods to address environmental concepts."),
    ("Practice 7", "Environmental Solutions",
     "Propose and justify solutions to environmental problems."),
]

SKILLS = {
    "1.A": "Describe environmental concepts and processes.",
    "1.B": "Explain environmental concepts and processes.",
    "1.C": "Explain environmental concepts, processes, or models in applied contexts.",
    "2.A": "Describe characteristics of an environmental concept, process, or model represented visually.",
    "2.B": "Explain relationships between different characteristics of environmental concepts, processes, or models represented visually.",
    "2.C": "Explain how environmental concepts and processes represented visually relate to broader environmental issues.",
    "3.A": "Identify the claim an author makes.",
    "3.B": "Describe the perspective and assumptions of an author.",
    "3.C": "Describe the reasoning of an author (use of evidence to support a claim).",
    "4.A": "Identify a testable hypothesis or scientific question for an investigation.",
    "4.B": "Identify a research method, design, and/or measure used.",
    "4.C": "Describe an aspect of a research method, design, and/or measure used.",
    "4.E": "Explain modifications to an experimental procedure that will alter results.",
    "5.A": "Describe patterns or trends in data.",
    "5.B": "Describe relationships among variables in data represented.",
    "5.C": "Explain patterns and trends in data to draw conclusions.",
    "5.D": "Interpret experimental data and results in relation to a given hypothesis.",
    "5.E": "Explain what the data implies or illustrates about environmental issues.",
    "6.A": "Determine an approach or method aligned with the problem to be solved.",
    "6.B": "Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "6.C": "Calculate an accurate numeric answer with appropriate units.",
    "7.A": "Describe environmental problems.",
    "7.B": "Describe potential responses or approaches to environmental problems.",
    "7.C": "Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "7.D": "Use data and evidence to support a potential solution.",
    "7.E": "Make a claim that proposes a solution to an environmental problem in an applied context.",
    "7.F": "Justify a proposed solution, by explaining potential advantages.",
}

# -- Units: (number, name, CED weight string, question count) -------------
# Counts sum to 80 and each sits inside the CED published weight range.
UNITS = [
    (1, "The Living World: Ecosystems",      "6-8%",   6),
    (2, "The Living World: Biodiversity",    "6-8%",   6),
    (3, "Populations",                       "10-15%", 9),
    (4, "Earth Systems and Resources",       "10-15%", 9),
    (5, "Land and Water Use",                "10-15%", 10),
    (6, "Energy Resources and Consumption",  "10-15%", 10),
    (7, "Atmospheric Pollution",             "7-10%",  7),
    (8, "Aquatic and Terrestrial Pollution", "7-10%",  7),
    (9, "Global Change",                     "15-20%", 16),
]

WEIGHT_RANGES = {
    "6-8%": (6, 8), "10-15%": (10, 15), "7-10%": (7, 10), "15-20%": (15, 20),
}

# -- Topics: "N.M" -> (Big Idea, title) -----------------------------------
TOPICS = {
    "1.1": ("ERT", "Introduction to Ecosystems"),
    "1.2": ("ERT", "Terrestrial Biomes"),
    "1.3": ("ERT", "Aquatic Biomes"),
    "1.4": ("ERT", "The Carbon Cycle"),
    "1.5": ("ERT", "The Nitrogen Cycle"),
    "1.6": ("ERT", "The Phosphorus Cycle"),
    "1.7": ("ERT", "The Hydrologic (Water) Cycle"),
    "1.8": ("ENG", "Primary Productivity"),
    "1.9": ("ENG", "Trophic Levels"),
    "1.10": ("ENG", "Energy Flow and the 10% Rule"),
    "1.11": ("ENG", "Food Chains and Food Webs"),

    "2.1": ("ERT", "Introduction to Biodiversity"),
    "2.2": ("ERT", "Ecosystem Services"),
    "2.3": ("ERT", "Island Biogeography"),
    "2.4": ("ERT", "Ecological Tolerance"),
    "2.5": ("ERT", "Natural Disruptions to Ecosystems"),
    "2.6": ("ERT", "Adaptations"),
    "2.7": ("ERT", "Ecological Succession"),

    "3.1": ("ERT", "Generalist and Specialist Species"),
    "3.2": ("ERT", "K-Selected r-Selected Species"),
    "3.3": ("ERT", "Survivorship Curves"),
    "3.4": ("ERT", "Carrying Capacity"),
    "3.5": ("ERT", "Population Growth and Resource Availability"),
    "3.6": ("EIN", "Age Structure Diagrams"),
    "3.7": ("EIN", "Total Fertility Rate"),
    "3.8": ("EIN", "Human Population Dynamics"),
    "3.9": ("EIN", "Demographic Transition"),

    "4.1": ("ERT", "Plate Tectonics"),
    "4.2": ("ERT", "Soil Formation and Erosion"),
    "4.3": ("ERT", "Soil Composition and Properties"),
    "4.4": ("ERT", "Earth's Atmosphere"),
    "4.5": ("ERT", "Global Wind Patterns"),
    "4.6": ("ERT", "Watersheds"),
    "4.7": ("ENG", "Solar Radiation and Earth's Seasons"),
    "4.8": ("ENG", "Earth's Geography and Climate"),
    "4.9": ("ENG", "El Nino and La Nina"),

    "5.1": ("EIN", "The Tragedy of the Commons"),
    "5.2": ("EIN", "Clearcutting"),
    "5.3": ("EIN", "The Green Revolution"),
    "5.4": ("EIN", "Impacts of Agricultural Practices"),
    "5.5": ("EIN", "Irrigation Methods"),
    "5.6": ("EIN", "Pest Control Methods"),
    "5.7": ("EIN", "Meat Production Methods"),
    "5.8": ("EIN", "Impacts of Overfishing"),
    "5.9": ("EIN", "Impacts of Mining"),
    "5.10": ("EIN", "Impacts of Urbanization"),
    "5.11": ("EIN", "Ecological Footprints"),
    "5.12": ("STB", "Introduction to Sustainability"),
    "5.13": ("STB", "Methods to Reduce Urban Runoff"),
    "5.14": ("STB", "Integrated Pest Management"),
    "5.15": ("STB", "Sustainable Agriculture"),
    "5.16": ("STB", "Aquaculture"),
    "5.17": ("STB", "Sustainable Forestry"),

    "6.1": ("ENG", "Renewable and Nonrenewable Resources"),
    "6.2": ("ENG", "Global Energy Consumption"),
    "6.3": ("ENG", "Fuel Types and Uses"),
    "6.4": ("ENG", "Distribution of Natural Energy Resources"),
    "6.5": ("ENG", "Fossil Fuels"),
    "6.6": ("ENG", "Nuclear Power"),
    "6.7": ("ENG", "Energy from Biomass"),
    "6.8": ("ENG", "Solar Energy"),
    "6.9": ("ENG", "Hydroelectric Power"),
    "6.10": ("ENG", "Geothermal Energy"),
    "6.11": ("ENG", "Hydrogen Fuel Cell"),
    "6.12": ("ENG", "Wind Energy"),
    "6.13": ("ENG", "Energy Conservation"),

    "7.1": ("STB", "Introduction to Air Pollution"),
    "7.2": ("STB", "Photochemical Smog"),
    "7.3": ("STB", "Thermal Inversion"),
    "7.4": ("STB", "Atmospheric CO2 and Particulates"),
    "7.5": ("STB", "Indoor Air Pollutants"),
    "7.6": ("STB", "Reduction of Air Pollutants"),
    "7.7": ("STB", "Acid Rain"),
    "7.8": ("STB", "Noise Pollution"),

    "8.1": ("STB", "Sources of Pollution"),
    "8.2": ("STB", "Human Impacts on Ecosystems"),
    "8.3": ("STB", "Endocrine Disruptors"),
    "8.4": ("STB", "Human Impacts on Wetlands and Mangroves"),
    "8.5": ("STB", "Eutrophication"),
    "8.6": ("STB", "Thermal Pollution"),
    "8.7": ("STB", "Persistent Organic Pollutants (POPs)"),
    "8.8": ("STB", "Bioaccumulation and Biomagnification"),
    "8.9": ("STB", "Solid Waste Disposal"),
    "8.10": ("STB", "Waste Reduction Methods"),
    "8.11": ("STB", "Sewage Treatment"),
    "8.12": ("EIN", "Lethal Dose 50% (LD50)"),
    "8.13": ("EIN", "Dose Response Curve"),
    "8.14": ("EIN", "Pollution and Human Health"),
    "8.15": ("EIN", "Pathogens and Infectious Diseases"),

    "9.1": ("STB", "Stratospheric Ozone Depletion"),
    "9.2": ("STB", "Reducing Ozone Depletion"),
    "9.3": ("STB", "The Greenhouse Effect"),
    "9.4": ("STB", "Increases in the Greenhouse Gases"),
    "9.5": ("STB", "Global Climate Change"),
    "9.6": ("STB", "Ocean Warming"),
    "9.7": ("STB", "Ocean Acidification"),
    "9.8": ("EIN", "Invasive Species"),
    "9.9": ("EIN", "Endangered Species"),
    "9.10": ("EIN", "Human Impacts on Biodiversity"),
}

DIFFICULTY = {
    1: "1 — Foundational",
    2: "2 — Application",
    3: "3 — Analysis",
}


def unit_label(n):
    return "Unit %d" % n


def assert_blueprint():
    total = sum(u[3] for u in UNITS)
    assert total == TOTAL_QUESTIONS, "unit counts sum to %d, not %d" % (total, TOTAL_QUESTIONS)
    for num, name, weight, count in UNITS:
        lo, hi = WEIGHT_RANGES[weight]
        pct = count / TOTAL_QUESTIONS * 100
        assert lo <= pct <= hi, "Unit %d: %d q = %.2f%% outside CED range %s" % (num, count, pct, weight)
    # Every topic key must belong to a declared unit.
    unit_nums = {u[0] for u in UNITS}
    for key in TOPICS:
        assert int(key.split(".")[0]) in unit_nums, "orphan topic %s" % key
    return True


if __name__ == "__main__":
    assert_blueprint()
    print("Blueprint OK: %d questions across %d units" % (TOTAL_QUESTIONS, len(UNITS)))
    for num, name, weight, count in UNITS:
        print("  Unit %d  %-40s %-7s %2d q  (%5.2f%%)"
              % (num, name, weight, count, count / TOTAL_QUESTIONS * 100))
    print("Topics: %d   Assessed skills: %d   Big Ideas: %d"
          % (len(TOPICS), len(SKILLS), len(BIG_IDEAS)))
