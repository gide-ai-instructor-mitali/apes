# -*- coding: utf-8 -*-
"""Items 51-80: Unit 7 (7), Unit 8 (7), Unit 9 (16)."""

import viz
from qbank import Q

DEG = "°"
SQ = "²"


# ══════════════════════════════════════════════════════════════════════════
# UNIT 7 - Atmospheric Pollution (7 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q51  Topic 7.2, Skill 5.C ----------------------------------------
_q51_no = [(5, 12), (7, 58), (9, 34), (11, 16), (13, 9), (15, 8), (17, 14), (19, 20)]
_q51_no2 = [(5, 8), (7, 26), (9, 52), (11, 38), (13, 24), (15, 18), (17, 22), (19, 24)]
_q51_o3 = [(5, 4), (7, 8), (9, 24), (11, 56), (13, 86), (15, 92), (17, 62), (19, 22)]
_q51_fig = viz.line_chart(
    [{"name": "NO", "points": _q51_no, "color": "#1565C0"},
     {"name": "NO₂", "points": _q51_no2, "color": "#6A1B9A"},
     {"name": "O₃", "points": _q51_o3, "color": "#C41230"}],
    "Hour of day", "Concentration (ppb)", (5, 19), (0, 100), w=470, h=300,
    x_ticks=[5, 7, 9, 11, 13, 15, 17, 19], y_ticks=[0, 20, 40, 60, 80, 100], legend_pos="tl",
    caption="Hourly concentrations of three pollutants on a sunny summer day in a city.")

Q(topic="7.2", skill="5.C", diff=3, visual=_q51_fig,
  stem=("Which conclusion about the origin of the ozone in this city is best supported by the "
        "timing of the three concentration peaks?"),
  answer=("Ozone is a secondary pollutant formed from the nitrogen oxides emitted earlier, since "
          "its peak at hour 15 follows the NO peak at hour 7 and the NO₂ peak at hour 9."),
  distractors=[
      ("Ozone is a primary pollutant emitted directly by vehicles, and its later peak simply "
          "reflects the fact that the heaviest traffic in this city occurs in the afternoon "
          "rather than during the morning commute.",
       "The NO peak at hour 7 marks the morning traffic surge, so traffic is heaviest in the "
       "morning. Ozone also peaks when sunlight is strongest rather than when traffic is."),
      ("Ozone must come from a source unrelated to the nitrogen oxides, because a pollutant "
          "formed from NO and NO₂ would have to peak at the same hour as they do rather "
          "than six hours later.",
       "A lag is the signature of a secondary pollutant: the reactions that form ozone take time "
       "and require sunlight, so a delayed peak is expected rather than disqualifying."),
      ("Ozone is destroying the nitrogen oxides, since NO and NO₂ both fall through the "
          "middle of the day while ozone climbs, which shows ozone consuming them as a "
          "reactant in the atmosphere.",
       "The nitrogen oxides are consumed in forming ozone, so the direction of the reaction is "
       "reversed here; ozone is the product rather than the reactant."),
  ],
  why_right=("The sequence of peaks is the evidence. NO peaks at hour 7, during the morning "
             "commute, because vehicle engines emit it directly — that makes NO a primary "
             "pollutant. NO is then oxidized to NO₂, which peaks two hours later at hour 9. "
             "Sunlight splits NO₂, freeing oxygen atoms that combine with O₂ to make "
             "ozone, which peaks at hour 15 when cumulative sunlight has been greatest. Ozone is "
             "therefore a secondary pollutant: it is not emitted but formed in the atmosphere "
             "from precursors. The lag between the emission peak and the ozone peak is why smog "
             "advisories are issued for sunny afternoons, and why controlling ozone means "
             "controlling the nitrogen oxides and volatile organic compounds that form it."),
  focus=("Use the time lag between pollutant peaks to distinguish a primary pollutant from a "
         "secondary one formed in the atmosphere."))


# ---- Q52  Topic 7.3, Skill 2.B ----------------------------------------
_q52_el = [viz.ARROW_DEFS]
_q52_el.append(viz.rect_el(40, 196, 400, 36, "#9A8468", stroke="#6E5B44"))
_q52_el.append(viz.text_el(240, 219, "city surface", size=11, anchor="middle"))
# cool surface layer
_q52_el.append(viz.rect_el(40, 150, 400, 46, "#CFE2F3", stroke="#8FB3D9"))
_q52_el.append(viz.text_el(48, 170, "cool, polluted air trapped at surface", size=10.5))
# warm inversion lid
_q52_el.append(viz.rect_el(40, 110, 400, 40, "#F6D6AE", stroke="#CDA368"))
_q52_el.append(viz.text_el(48, 135, "warm air layer (inversion lid)", size=10.5))
# cooler air above
_q52_el.append(viz.rect_el(40, 56, 400, 54, "#E8F1FA", stroke="#B9CFE6"))
_q52_el.append(viz.text_el(48, 86, "cooler air aloft", size=10.5))
# blocked rising arrows
for x in (270, 330, 390):
    _q52_el.append(viz.line_el(x, 192, x, 154, stroke="#C41230", sw=2, arrow=True))
    _q52_el.append(viz.line_el(x - 9, 151, x + 9, 151, stroke="#C41230", sw=2.4))
_q52_el.append(viz.text_el(240, 46, "altitude increases upward", size=10.5, anchor="middle"))
_q52_fig = viz.sketch(470, 244, _q52_el,
                      caption="Temperature structure over a city during a thermal inversion. "
                              "Red arrows show attempted vertical mixing.")

Q(topic="7.3", skill="2.B", diff=2, visual=_q52_fig,
  stem=("Which explanation of the relationship between the temperature layers shown and pollutant "
        "concentrations at street level is correct?"),
  answer=("Warm air sitting above cool surface air is less dense than the air below cannot rise "
          "through, so vertical mixing stops and pollutants accumulate near the ground."),
  distractors=[
      ("The warm layer aloft heats the cool surface air until it rises rapidly through the "
          "inversion, and this vigorous mixing carries pollutants upward so quickly that "
          "street-level concentrations fall below normal.",
       "The figure shows mixing blocked at the boundary, and conduction from a layer above does "
       "not drive surface air upward through warmer, less dense air."),
      ("Cool surface air is denser than the warm layer above it, so it sinks into the ground and "
          "carries dissolved pollutants into the soil, which lowers concentrations in the air "
          "that people breathe.",
       "Air does not sink into the ground. Dense surface air simply remains in place, which is "
       "precisely why pollutants are not dispersed."),
      ("The inversion raises concentrations because the warm layer chemically converts nitrogen "
          "oxides into ozone far faster than normal, so the increase reflects new pollutant "
          "formation rather than a change in mixing.",
       "An inversion is a physical barrier to dispersion. Secondary pollutants can build up "
       "under one, but the cause is trapped air rather than faster chemistry in the warm layer."),
  ],
  why_right=("Normally air cools with altitude, so warm surface air is less dense than the air "
             "above it and rises, carrying pollutants upward and diluting them — the "
             "atmosphere is unstable and mixes. A thermal inversion reverses that profile: a warm "
             "layer sits above cool surface air. Since the surface air is denser than the air "
             "immediately above it, it has no buoyancy and cannot rise, so the warm layer acts as "
             "a lid. Emissions keep entering a shallow, non-mixing volume and concentrations "
             "climb. This is why inversions in valleys and basins, such as Los Angeles, Mexico "
             "City, and Salt Lake City, produce the worst smog episodes, and why they break only "
             "when the surface warms enough or a front displaces the air mass."),
  focus=("Relate an inverted temperature profile to air density and buoyancy to explain blocked "
         "vertical mixing."))


# ---- Q53  Topic 7.7, Skill 6.C, numeric -------------------------------
PH_NORM = 5.6
PH_ACID = 3.6
DIFF53 = PH_NORM - PH_ACID          # 2.0
ANS53 = 10.0 ** DIFF53              # 100
CUBE53 = 10.0 ** 3                  # 1000
INV53 = 10.0 ** (-DIFF53)           # 0.01
assert abs(ANS53 - 100) < 1e-9

Q(topic="7.7", skill="6.C", diff=2, numeric=True,
  stem=("Unpolluted rain has a pH of about %.1f. A rain sample downwind of a coal-fired power "
        "plant has a pH of %.1f. How many times greater is the hydrogen ion concentration in the "
        "sample than in unpolluted rain? (pH = −log₁₀[H⁺])"
        % (PH_NORM, PH_ACID)),
  answer="%.0f times greater" % ANS53,
  distractors=[
      ("%.2f times greater" % INV53,
       "This is 10 raised to the negative difference, which gives the factor by which [H⁺] "
       "would fall if pH rose. A lower pH means more hydrogen ions, not fewer."),
      ("%.1f times greater" % DIFF53,
       "This is the difference between the two pH values. Because the scale is logarithmic, a "
       "pH difference must be used as an exponent of 10, not as the factor itself."),
      ("%.0f times greater" % CUBE53,
       "This is 10³, which would be correct for a pH difference of 3 units. The difference "
       "here is %.1f − %.1f = %.0f units." % (PH_NORM, PH_ACID, DIFF53)),
  ],
  why_right=("The pH scale is logarithmic, so each whole unit of pH corresponds to a tenfold "
             "change in hydrogen ion concentration. The difference here is %.1f − %.1f = "
             "%.0f pH units, so the concentration ratio is 10%s = %.0f. Checking directly: "
             "[H⁺] = 10⁻%.1f versus 10⁻%.1f, and their ratio is 10%s. The "
             "logarithmic scale is why a rain pH that sounds only slightly lower represents a "
             "hundredfold increase in acidity, enough to mobilize aluminium in soils and push "
             "lake water below the tolerance of fish eggs."
             % (PH_NORM, PH_ACID, DIFF53, "²", ANS53, PH_ACID, PH_NORM, "²")),
  focus="Convert a pH difference into a hydrogen-ion concentration ratio using powers of ten.")


# ---- Q54  Topic 7.4, Skill 5.A ----------------------------------------
_q54_pm = [(1, 42), (2, 40), (3, 34), (4, 28), (5, 22), (6, 20),
           (7, 19), (8, 21), (9, 27), (10, 33), (11, 39), (12, 44)]
_q54_fig = viz.line_chart(
    [{"name": "PM2.5 monthly mean", "points": _q54_pm, "color": "#6A1B9A"}],
    "Month", "PM2.5 (micrograms per cubic metre)", (1, 12), (0, 60), w=470, h=300,
    x_ticks=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y_ticks=[0, 10, 20, 30, 40, 50, 60],
    hlines=[(15, "WHO annual guideline 15")],
    caption="Monthly mean fine particulate concentration in a northern city where coal and wood "
            "are used for home heating.")

Q(topic="7.4", skill="5.A", diff=1, visual=_q54_fig,
  stem=("Which statement correctly describes the pattern in this data set?"),
  answer=("Concentrations follow a seasonal cycle peaking in winter and lowest in midsummer, and "
          "every monthly mean shown lies above the WHO annual guideline of 15."),
  distractors=[
      ("Concentrations follow a seasonal cycle peaking in winter and lowest in midsummer, and the "
          "summer months fall below the WHO annual guideline before rising above it again in "
          "the colder part of the year.",
       "The seasonal pattern is read correctly, but the lowest monthly mean is 19 in month 7, "
       "which is still above the guideline line at 15."),
      ("Concentrations rise steadily through the year from a January minimum to a December "
          "maximum, consistent with a pollution source that grows continuously over the "
          "twelve-month period.",
       "January is near the maximum at 42, not a minimum, and values fall through spring before "
       "rising again, so the pattern is cyclic rather than steadily increasing."),
      ("Concentrations show no consistent pattern across the year, and the month-to-month "
          "variation is best explained as random measurement scatter around a constant mean "
          "near 30.",
       "The data vary smoothly from 44 down to 19 and back, a systematic seasonal cycle far too "
       "regular to be scatter about a constant value."),
  ],
  why_right=("Two features describe the data. First, the shape: values are highest in the winter "
             "months at both ends of the year, reaching 44 in month 12 and 42 in month 1, fall "
             "steadily to a minimum of 19 in month 7, then climb again — a clear annual "
             "cycle, consistent with home heating emissions and with the frequent winter "
             "inversions that trap them. Second, the level: the lowest monthly value, 19, still "
             "exceeds the 15 reference line, so the city is above the guideline in every month "
             "shown. Describing a trend accurately means reporting both the shape and the "
             "position relative to any reference line on the figure."),
  focus=("Describe both the seasonal shape of a time series and its position relative to a "
         "reference line, checking the extreme values."))


# ---- Q55  Topic 7.5, Skill 1.A ----------------------------------------
Q(topic="7.5", skill="1.A", diff=1,
  stem=("Which description correctly identifies radon as an indoor air pollutant, including its "
        "origin, how it enters buildings, and its principal health effect?"),
  answer=("Radon is a radioactive gas produced by uranium decay in rock and soil that seeps into "
          "buildings through foundation cracks, and prolonged exposure raises lung cancer risk."),
  distractors=[
      ("Radon is a radioactive gas released by the combustion of natural gas in stoves and "
          "furnaces, which accumulates in poorly ventilated rooms and raises the risk of lung "
          "cancer after prolonged exposure.",
       "Radon is not a combustion product; it originates in rock and soil beneath a building. "
       "Gas appliances emit carbon monoxide and nitrogen dioxide instead."),
      ("Radon is a volatile organic compound released from particleboard, carpets, and adhesives "
          "in new construction, and prolonged exposure to it causes headaches and respiratory "
          "irritation in occupants.",
       "This describes formaldehyde and other volatile organic compounds. Radon is a chemically "
       "inert radioactive noble gas, not an organic compound."),
      ("Radon is a fibrous mineral once used in pipe insulation that becomes airborne when the "
          "insulation is disturbed, and inhaling the fibres causes lung scarring and "
          "mesothelioma.",
       "This describes asbestos, a solid mineral fibre. Radon is a gas and causes harm through "
       "radiation rather than physical fibres."),
  ],
  why_right=("Radon-222 is produced by the radioactive decay chain of uranium, which occurs "
             "naturally in many rocks and soils, especially granite and shale. As a gas it "
             "migrates upward through soil pores and enters buildings through foundation cracks, "
             "sump openings, and gaps around pipes, where it can accumulate in basements and "
             "lower floors with limited ventilation. Because radon itself decays, inhaling it "
             "deposits radioactive decay products in lung tissue, and the resulting radiation "
             "damage makes radon the second leading cause of lung cancer after smoking. Testing "
             "is the only way to detect it, since it is colourless and odourless, and mitigation "
             "uses sub-slab depressurization to vent soil gas above the roofline."),
  focus=("Describe radon's geological source, entry route, and health effect, distinguishing it "
         "from combustion, organic, and fibrous indoor pollutants."))


# ---- Q56  Topic 7.6, Skill 7.F ----------------------------------------
Q(topic="7.6", skill="7.F", diff=2,
  stem=("A region requires coal-fired plants to install flue-gas desulfurization scrubbers. Which "
        "justification for this requirement, in terms of what the technology does, is strongest?"),
  answer=("Scrubbers react sulfur dioxide with a calcium slurry before it leaves the stack, so "
          "they cut the emissions that form acid deposition downwind of the plants."),
  distractors=[
      ("Scrubbers remove carbon dioxide from the flue gas along with the sulfur dioxide, so they "
          "address both acid deposition and the plants' contribution to climate change in a "
          "single piece of equipment at the stack.",
       "Standard flue-gas desulfurization targets sulfur dioxide and does not capture carbon "
       "dioxide, so this claims a benefit the technology does not deliver."),
      ("Scrubbers raise the overall thermal efficiency of the plant, so less coal is burned per "
          "unit of electricity and every pollutant in the exhaust stream falls in proportion to "
          "the fuel saved.",
       "Scrubbers consume energy to operate and slightly reduce net plant efficiency; they clean "
       "the exhaust rather than improving combustion."),
      ("Scrubbers disperse sulfur dioxide through taller stacks so that it is diluted over a "
          "wider area, which lowers the ground-level concentrations communities near the plant "
          "are exposed to.",
       "Tall stacks dilute and export pollution rather than removing it, which is what made acid "
       "deposition a long-range problem. Scrubbers actually capture the sulfur."),
  ],
  why_right=("The strongest justification states accurately what the control technology removes "
             "and which problem that addresses. In flue-gas desulfurization, exhaust is passed "
             "through a slurry of limestone or lime, and the sulfur dioxide reacts with calcium "
             "to form solid calcium sulfite or sulfate that is collected rather than emitted. "
             "Since sulfur dioxide oxidizes in the atmosphere to sulfuric acid and is the main "
             "driver of acid deposition, capturing it at the stack addresses the cause rather "
             "than relocating it. The honest limits are worth noting too: scrubbers do not "
             "capture carbon dioxide, they consume energy, and they generate a solid waste "
             "stream requiring disposal or reuse in wallboard."),
  focus=("Justify a pollution-control technology by what it physically removes, without "
         "attributing benefits it does not provide."))


# ---- Q57  Topic 7.1, Skill 4.A ----------------------------------------
Q(topic="7.1", skill="4.A", diff=2,
  stem=("Researchers notice that asthma emergency visits in a city appear more frequent in "
        "neighbourhoods near major highways. Which of the following is the best testable "
        "hypothesis for an investigation of this observation?"),
  answer=("Children living within 300 m of a major highway have a higher rate of asthma emergency "
          "visits than children living more than 2 km away, after adjusting for household "
          "income."),
  distractors=[
      ("Air pollution from vehicles is a serious environmental justice problem that "
          "disproportionately affects low-income urban neighbourhoods and demands an immediate "
          "policy response from the city.",
       "This is a value judgment and a call to action. It states no measurable relationship "
       "between variables, so no observation could confirm or disconfirm it."),
      ("Does living near a major highway have any effect on the respiratory health of children, "
          "and if so what is the full set of mechanisms by which traffic emissions damage the "
          "developing lung?",
       "This is a research question rather than a hypothesis, and its second half is far too "
       "broad to be addressed by a single testable prediction."),
      ("Traffic emissions contain nitrogen dioxide and fine particulate matter, both of which are "
          "known to cause airway inflammation in laboratory studies of human respiratory "
          "tissue.",
       "This is a statement of established background fact. A hypothesis must predict a "
       "relationship in the system being studied, not restate what is already known."),
  ],
  why_right=("A testable hypothesis states a specific, measurable relationship between defined "
             "variables that an investigation could support or refute. The correct option names "
             "the independent variable (distance from a highway, with explicit thresholds), the "
             "dependent variable (rate of asthma emergency visits), the population (children), "
             "and the direction of the predicted difference. It also controls for household "
             "income, a confounding variable that otherwise travels with highway proximity and "
             "could produce the same pattern. The alternatives fail on distinct grounds: one is "
             "an unfalsifiable value claim, one is an unbounded question, and one is background "
             "information rather than a prediction."),
  focus=("Distinguish a testable hypothesis, with defined variables and a predicted direction, "
         "from a research question, a value claim, or background fact."))


# ══════════════════════════════════════════════════════════════════════════
# UNIT 8 - Aquatic and Terrestrial Pollution (7 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q58  Topic 8.5, Skill 5.C ----------------------------------------
_q58_np = [(0, 0.3), (1, 0.4), (2, 2.6), (3, 3.1), (4, 2.9), (5, 2.4), (6, 1.9)]
_q58_do = [(0, 9.1), (1, 8.8), (2, 7.4), (3, 4.2), (4, 2.1), (5, 1.6), (6, 2.2)]
_q58_fig = viz.line_chart(
    [{"name": "Nitrate (mg/L)", "points": _q58_np, "color": "#2E7D32"},
     {"name": "Dissolved oxygen (mg/L)", "points": _q58_do, "color": "#1565C0"}],
    "Years since fertilizer use expanded upstream", "Concentration (mg/L)",
    (0, 6), (0, 10), w=470, h=300,
    x_ticks=[0, 1, 2, 3, 4, 5, 6], y_ticks=[0, 2, 4, 6, 8, 10],
    hlines=[(2.0, "hypoxia threshold 2 mg/L", "left")],
    caption="Nitrate and dissolved oxygen in a lake downstream of expanded agriculture.")

Q(topic="8.5", skill="5.C", diff=3, visual=_q58_fig,
  stem=("Which explanation of the relationship between the two curves, and of the consequence for "
        "lake organisms, is best supported?"),
  answer=("Added nitrate fuels algal blooms whose decomposition by bacteria consumes oxygen, so "
          "oxygen falls below the hypoxia threshold and fish kills become likely."),
  distractors=[
      ("Nitrate chemically binds dissolved oxygen in the water column, so each unit of nitrate "
          "entering the lake removes a proportional quantity of oxygen directly and leaves less "
          "available to fish and invertebrates.",
       "Nitrate does not react with dissolved oxygen in this way. The oxygen loss is biological, "
       "driven by bacterial decomposition of the algal biomass the nitrate supports."),
      ("The algal bloom itself consumes the oxygen through photosynthesis, so the more algae the "
          "nitrate supports, the less oxygen remains dissolved in the water for other "
          "organisms.",
       "Photosynthesis produces oxygen rather than consuming it. The depletion comes from "
       "respiration by the decomposers that break the algae down after they die."),
      ("Falling oxygen is causing the nitrate to accumulate, because low-oxygen water prevents "
          "the bacteria that would otherwise consume nitrate from functioning, so the nitrate "
          "curve is the consequence rather than the cause.",
       "The nitrate rise at year 2 precedes the sharp oxygen decline at years 3 and 4, so the "
       "timing identifies nitrate as the cause rather than the effect."),
  ],
  why_right=("The curves move in opposite directions with nitrate leading. Nitrate rises sharply "
             "from 0.4 to 3.1 mg/L over years 1 to 3, and dissolved oxygen then collapses from "
             "7.4 to 1.6 mg/L over years 2 to 5. The mechanism is cultural eutrophication: "
             "nitrate from fertilizer runoff relieves the nutrient limitation on algae, which "
             "bloom and then die; bacteria decomposing that large pulse of organic matter respire "
             "aerobically and draw oxygen out of the water faster than it is replaced. Oxygen "
             "falls below the 2 mg/L hypoxia threshold by year 5, which is lethal to fish and "
             "most benthic invertebrates. The order of the peaks matters: it is what establishes "
             "the direction of causation rather than mere correlation."),
  focus=("Use the lead-lag ordering of two curves to establish causation, and identify "
         "decomposer respiration rather than photosynthesis as the oxygen sink."))


# ---- Q59  Topic 8.8, Skill 6.B, numeric -------------------------------
WATER59 = 0.0025        # ppm in water
BMF59 = 800.0
ANS59 = WATER59 * BMF59          # 2.0 ppm
DIVIDED59 = WATER59 / BMF59      # 0.0000031
SUM59 = WATER59 + BMF59          # 800.0025
DEC59 = ANS59 / 10.0             # 0.2
assert abs(ANS59 - 2.0) < 1e-12

Q(topic="8.8", skill="6.B", diff=2, numeric=True,
  stem=("A pesticide is present in lake water at %.4f ppm. Biomagnification through the food chain "
        "concentrates it by a factor of %s in the fatty tissue of ospreys at the top of that "
        "chain. What pesticide concentration is expected in osprey tissue?"
        % (WATER59, format(int(BMF59), ","))),
  answer="%.1f ppm" % ANS59,
  distractors=[
      ("%.7f ppm" % DIVIDED59,
       "This divides by the biomagnification factor. Biomagnification raises concentration at "
       "each trophic step, so the tissue value must exceed the water value."),
      ("%.1f ppm" % DEC59,
       "This is the correct product with a misplaced decimal, as though the water concentration "
       "were %.5f ppm rather than %.4f ppm." % (WATER59 / 10, WATER59)),
      ("%.4f ppm" % SUM59,
       "This adds the factor to the concentration. A dimensionless multiplier must be multiplied "
       "by the concentration, not added to it."),
  ],
  why_right=("A biomagnification factor is a multiplier relating concentration at the top of a "
             "food chain to concentration in the surrounding environment: %.4f ppm × %s = "
             "%.1f ppm. The physical reason the factor is so large is that the pesticide is "
             "fat-soluble and slowly excreted, so each consumer retains most of what it ingests "
             "from a large mass of prey. Concentration therefore rises at every trophic level, "
             "which is why top predators such as ospreys, eagles, and orcas carry the highest "
             "burdens even where water concentrations seem negligible — the mechanism behind "
             "the eggshell thinning that DDT caused in raptors."
             % (WATER59, format(int(BMF59), ","), ANS59)),
  focus=("Apply a biomagnification factor as a multiplier in the correct direction and keep the "
         "decimal place."))


# ---- Q60  Topic 8.13, Skill 2.A ---------------------------------------
_q60_a = [(0, 0), (10, 4), (20, 14), (35, 38), (50, 50), (70, 72), (100, 90), (130, 98)]
_q60_b = [(0, 0), (10, 1), (20, 3), (35, 8), (50, 16), (70, 30), (100, 50), (130, 68)]
_q60_fig = viz.line_chart(
    [{"name": "Compound A", "points": _q60_a, "color": "#C41230"},
     {"name": "Compound B", "points": _q60_b, "color": "#1565C0"}],
    "Dose (mg per kg body mass)", "Percent of test animals responding",
    (0, 130), (0, 100), w=470, h=300,
    x_ticks=[0, 20, 40, 60, 80, 100, 120], y_ticks=[0, 20, 40, 60, 80, 100], legend_pos="tl",
    hlines=[(50, "50% response", "left")],
    caption="Dose-response curves for two compounds tested on the same animal species.")

Q(topic="8.13", skill="2.A", diff=2, visual=_q60_fig,
  stem=("Reading the LD50 of each compound from the graph, which comparison of the two compounds "
        "is correct?"),
  answer=("Compound A has an LD50 near 50 mg/kg and Compound B near 100 mg/kg, so Compound A is "
          "the more toxic of the two because a smaller dose affects half the animals."),
  distractors=[
      ("Compound A has an LD50 near 50 mg/kg and Compound B near 100 mg/kg, so Compound B is the "
          "more toxic of the two because its curve continues rising across a much wider range "
          "of doses than that of Compound A.",
       "The LD50 values are read correctly, but a higher LD50 means more of the substance is "
       "needed for the same effect, which makes Compound B less toxic, not more."),
      ("Compound A has an LD50 near 90 mg/kg and Compound B near 50 mg/kg, so Compound B is more "
          "toxic because it reaches its 50% response level at the lower of the two doses shown "
          "on the graph.",
       "These values are misread from the curves: at 100 mg/kg Compound A is already at 90% "
       "response, and it is Compound A that crosses 50% at the lower dose."),
      ("Both compounds have the same LD50 near 65 mg/kg, because that is the dose at which the "
          "vertical gap between the two curves is largest and the compounds are therefore most "
          "directly comparable.",
       "LD50 is the dose producing a 50% response in each compound separately, read where each "
       "curve crosses the 50% line; the gap between curves is not an LD50."),
  ],
  why_right=("LD50 is read where a dose-response curve crosses the 50% response line. Compound A "
             "reaches 50% at a dose of about 50 mg/kg; Compound B does not reach 50% until about "
             "100 mg/kg. The interpretation is inverse: a lower LD50 means a smaller dose is "
             "needed to affect half the test population, so the substance is more toxic. "
             "Compound A is therefore roughly twice as toxic as Compound B on a per-mass basis. "
             "It is worth noting what LD50 does not tell you — it measures acute toxicity at "
             "high doses in one species and says nothing about chronic low-dose effects, which is "
             "why endocrine disruptors can be harmful at doses far below their LD50."),
  focus="Read LD50 off a dose-response curve and apply the inverse relationship between LD50 and "
        "toxicity.")


# ---- Q61  Topic 8.12, Skill 6.C, numeric -------------------------------
LD50_61 = 45.0       # mg per kg
MASS61 = 70.0        # kg
ANS61 = LD50_61 * MASS61        # 3150 mg
DIV61 = LD50_61 / MASS61        # 0.642857
SUM61 = LD50_61 + MASS61        # 115
DEC61 = ANS61 / 100.0           # 31.5
assert abs(ANS61 - 3150) < 1e-9

Q(topic="8.12", skill="6.C", diff=2, numeric=True,
  stem=("A compound has an LD50 of %.0f mg per kilogram of body mass in mammals. Using that value, "
        "what total dose would be expected to be lethal to half of a group of adults with a body "
        "mass of %.0f kg?" % (LD50_61, MASS61)),
  answer="%s mg" % format(int(ANS61), ","),
  distractors=[
      ("%.2f mg" % DIV61,
       "This divides the LD50 by body mass. The LD50 is already expressed per kilogram, so it is "
       "multiplied by mass to give a total dose."),
      ("%.1f mg" % DEC61,
       "This is the correct product divided by 100, a decimal-place error that would correspond "
       "to a body mass of %.1f kg." % (MASS61 / 100)),
      ("%.0f mg" % SUM61,
       "This adds the two figures. They have different units, mg/kg and kg, so they must be "
       "multiplied; the kilograms then cancel to leave milligrams."),
  ],
  why_right=("LD50 is a dose per unit body mass, so the total dose scales with the mass of the "
             "organism: %.0f mg/kg × %.0f kg = %s mg. The units confirm the operation, since "
             "(mg/kg) × kg leaves mg. Expressing toxicity per kilogram is what allows a "
             "value measured in test animals to be scaled to organisms of different sizes, and it "
             "also explains why a dose harmless to an adult can be dangerous to a child or a "
             "small pet. Two important limits: LD50 measures acute lethality only, and "
             "extrapolating between species assumes similar physiology, which does not always "
             "hold." % (LD50_61, MASS61, format(int(ANS61), ","))),
  focus="Scale a per-kilogram toxicity value to a whole organism using unit cancellation.")


# ---- Q62  Topic 8.11, Skill 1.A ---------------------------------------
_q62_fig = viz.flow_diagram(
    boxes=[
        {"id": "in", "x": 12, "y": 24, "w": 96, "h": 46, "label": "Raw sewage in"},
        {"id": "p1", "x": 136, "y": 24, "w": 104, "h": 46,
         "label": "Stage 1: screens and settling", "fill": "#E7E0D2"},
        {"id": "p2", "x": 268, "y": 24, "w": 104, "h": 46,
         "label": "Stage 2: aeration with bacteria", "fill": "#DCE9F7"},
        {"id": "p3", "x": 268, "y": 150, "w": 104, "h": 46,
         "label": "Stage 3: disinfection", "fill": "#DFF0DC"},
        {"id": "out", "x": 136, "y": 150, "w": 104, "h": 46, "label": "Discharge to river"},
        {"id": "sl", "x": 12, "y": 150, "w": 96, "h": 46, "label": "Sludge to treatment"},
    ],
    arrows=[
        {"frm": "in", "to": "p1", "side": "h"},
        {"frm": "p1", "to": "p2", "side": "h"},
        {"frm": "p2", "to": "p3", "side": "v"},
        {"frm": "p3", "to": "out", "side": "h"},
        {"frm": "p1", "to": "sl", "label": "solids", "side": "v"},
    ],
    w=400, h=212,
    caption="Stages of a municipal wastewater treatment plant.")

Q(topic="8.11", skill="1.A", diff=1, visual=_q62_fig,
  stem=("Which description of what Stage 2 accomplishes, and of why Stage 3 is still required "
        "afterward, is correct?"),
  answer=("Stage 2 uses bacteria in aerated tanks to digest dissolved organic matter and lower "
          "biological oxygen demand; Stage 3 is still needed because that step does not kill "
          "pathogens."),
  distractors=[
      ("Stage 2 physically filters out the suspended solids that Stage 1 did not capture, and "
          "Stage 3 is still needed because filtration leaves dissolved organic matter in the "
          "water that would deplete oxygen in the receiving river.",
       "Physical removal of solids is the work of Stage 1; Stage 2 is a biological step in which "
       "bacteria consume the dissolved organic matter."),
      ("Stage 2 disinfects the water by aerating it, since oxygen kills the bacteria and viruses "
          "present, and Stage 3 is still needed to remove the dissolved nitrogen and phosphorus "
          "that cause eutrophication downstream.",
       "Aeration supports bacterial digestion rather than disinfecting; the bacteria in Stage 2 "
       "are deliberately cultivated, and Stage 3 is the disinfection step."),
      ("Stage 2 chemically precipitates nitrogen and phosphorus out of the wastewater, and Stage "
          "3 is still needed because precipitation raises the pH of the effluent to a level that "
          "must be neutralized before discharge.",
       "Nutrient removal by chemical precipitation is an advanced tertiary process, not what "
       "secondary aeration does, and Stage 3 here is labelled disinfection."),
  ],
  why_right=("The stages are sequential and address different problems. Primary treatment (Stage "
             "1) is physical: screens remove debris and settling tanks let solids fall out as "
             "sludge, which the diagram shows diverted. Secondary treatment (Stage 2) is "
             "biological: wastewater is aerated so that cultivated aerobic bacteria consume the "
             "dissolved and suspended organic matter, which is what lowers biological oxygen "
             "demand and prevents the effluent from depleting oxygen in the receiving river. That "
             "step does not reliably eliminate pathogens, so Stage 3 disinfects, using chlorine, "
             "ozone, or ultraviolet light, before discharge. Nitrogen and phosphorus removal "
             "requires further tertiary treatment that many plants do not include."),
  focus=("Describe the distinct physical, biological, and disinfection functions of successive "
         "wastewater treatment stages."))


# ---- Q63  Topic 8.9, Skill 7.C ----------------------------------------
Q(topic="8.9", skill="7.C", diff=2,
  stem=("A county proposes replacing its open dump with a modern sanitary landfill that has a "
        "clay and synthetic liner, leachate collection, and daily soil cover. Which assessment of "
        "this change is most accurate?"),
  answer=("Groundwater contamination and vector problems fall sharply, but the landfill still "
          "consumes land, emits methane unless gas is captured, and the liner can eventually "
          "fail."),
  distractors=[
      ("The change eliminates all environmental risk from the county's waste, because the liner "
          "fully isolates the waste from the surrounding soil and groundwater for as long as the "
          "waste remains hazardous.",
       "Liners reduce but do not eliminate risk; they can crack or be punctured, and they must "
       "outlast waste that stays hazardous for far longer than the liner's service life."),
      ("The change reduces groundwater contamination but increases total greenhouse gas emissions "
          "relative to the open dump, because burying waste under daily soil cover creates the "
          "anaerobic conditions that generate methane.",
       "This correctly identifies anaerobic methane generation, but open dumps also generate "
       "methane while adding uncontrolled fires and odour, and modern landfills can capture gas "
       "for energy."),
      ("The change mainly improves appearance and odour control, since leachate collection "
          "systems treat only surface runoff and do nothing about the liquid that percolates "
          "down through the waste mass.",
       "Leachate collection is designed specifically to capture the liquid percolating through "
       "the waste above the liner, which is the principal groundwater threat."),
  ],
  why_right=("A sanitary landfill is a genuine improvement whose benefits should not be overstated. "
             "The liner and leachate collection system intercept the contaminated liquid that "
             "forms as water percolates through waste, which is the main pathway by which open "
             "dumps pollute groundwater, and daily soil cover suppresses odour, windblown litter, "
             "and the rats, gulls, and insects that dumps attract. The remaining costs are real: "
             "the facility permanently occupies land, decomposition under anaerobic conditions "
             "produces methane that becomes a potent greenhouse gas unless collected, and liners "
             "have finite lifetimes while some waste stays hazardous much longer, so long-term "
             "monitoring is required. Landfilling also does nothing to reduce waste generation, "
             "which sits above disposal in the waste hierarchy."),
  focus=("Assess a waste-management upgrade by naming both the risks it reduces and those that "
         "remain, without overclaiming."))


# ---- Q64  Topic 8.6, Skill 4.E ----------------------------------------
_q64_fig = viz.table(
    ["Tank", "Water temperature (%sC)" % DEG, "Dissolved oxygen (mg/L)", "Trout survival (%)"],
    [["1 (control)", "12", "10.8", "98"],
     ["2", "18", "9.4", "92"],
     ["3", "24", "8.3", "61"],
     ["4", "30", "7.5", "12"]],
    w=470, col_w=[1.0, 1.3, 1.35, 1.1],
    caption="Trout held for 14 days in four aerated tanks at different temperatures.")

Q(topic="8.6", skill="4.E", diff=3, visual=_q64_fig,
  stem=("A reviewer notes that temperature affects both oxygen solubility and trout metabolism, so "
        "this design cannot separate the two. Which modification would best allow the "
        "investigators to distinguish those effects?"),
  answer=("Add tanks held at each temperature in which dissolved oxygen is adjusted back to 10.8 "
          "mg/L, so temperature varies while oxygen is held constant across the set."),
  distractors=[
      ("Extend the experiment from 14 days to 60 days at the same four temperatures, so that any "
          "difference between the effect of temperature and the effect of oxygen has more time "
          "to become statistically detectable in the survival data.",
       "A longer run gives more precise estimates of the combined effect but still confounds the "
       "two variables, because oxygen continues to fall with temperature in every tank."),
      ("Add more trout to each of the four existing tanks, so that the larger sample size gives a "
          "more reliable survival percentage and reduces the uncertainty in the comparison "
          "between tanks.",
       "Larger samples reduce random error, not confounding. The two variables remain locked "
       "together no matter how many fish are measured."),
      ("Repeat the experiment using a fish species known to tolerate low dissolved oxygen, so "
          "that any mortality observed across the four tanks can be attributed to temperature "
          "alone rather than to oxygen.",
       "Changing species changes what is being studied and still leaves both variables varying "
       "together; tolerance is a matter of degree rather than immunity."),
  ],
  why_right=("The problem is confounding: because oxygen solubility falls as water warms, "
             "temperature and dissolved oxygen decrease together across tanks 1 to 4, so the "
             "survival pattern could be produced by either variable. The fix is to break that "
             "link by manipulating one variable while holding the other constant. Adding a "
             "parallel set of tanks in which oxygen is restored to the control level at each "
             "temperature means any remaining survival difference across that set must be due to "
             "temperature itself, and comparing the two sets at the same temperature isolates the "
             "oxygen effect. More time or more fish improves precision but cannot separate two "
             "variables that always move together."),
  focus=("Identify confounded variables in a design and propose the modification that holds one "
         "constant while the other varies."))


# ══════════════════════════════════════════════════════════════════════════
# UNIT 9 - Global Change (16 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q65  Topic 9.3, Skill 1.B ----------------------------------------
Q(topic="9.3", skill="1.B", diff=2,
  stem=("Which explanation correctly describes the greenhouse effect, including why greenhouse "
        "gases interact differently with incoming sunlight than with radiation from Earth?"),
  answer=("Greenhouse gases are largely transparent to incoming shortwave sunlight but absorb the "
          "longwave infrared Earth emits, re-radiating part of it downward and warming the "
          "surface."),
  distractors=[
      ("Greenhouse gases form a physical layer in the upper atmosphere that reflects incoming "
          "sunlight back toward the surface a second time, so the surface receives the same "
          "radiation twice and warms accordingly.",
       "Greenhouse gases do not reflect sunlight; they absorb and re-emit infrared radiation. "
       "Reflecting incoming sunlight would cool rather than warm the surface."),
      ("Greenhouse gases absorb incoming shortwave sunlight directly and convert it to heat in "
          "the atmosphere, which then conducts downward to warm the surface beneath the "
          "absorbing layer.",
       "This reverses which wavelengths are absorbed. The atmosphere is mostly transparent to "
       "incoming shortwave radiation, which is why sunlight reaches the ground."),
      ("Greenhouse gases trap warm air near the surface by preventing it from rising and mixing "
          "upward, so heat that would otherwise escape through convection remains in the lower "
          "atmosphere.",
       "This describes a thermal inversion, a local phenomenon of air mixing. The greenhouse "
       "effect is radiative and operates globally."),
  ],
  why_right=("The greenhouse effect depends on a wavelength asymmetry. Incoming solar radiation is "
             "mostly shortwave, in visible and near-infrared wavelengths that carbon dioxide, "
             "methane, water vapor, and nitrous oxide do not absorb strongly, so most of it passes "
             "through the atmosphere and is absorbed at the surface. The warmed surface re-emits "
             "that energy as longwave infrared, at wavelengths these molecules absorb efficiently "
             "because the radiation matches their vibrational modes. The gases then re-emit in all "
             "directions, including downward, so part of the outgoing energy returns to the "
             "surface. The result is a surface about 33 degrees Celsius warmer than it would "
             "otherwise be — a natural effect essential to life. Adding greenhouse gases "
             "intensifies it."),
  focus=("Explain the greenhouse effect through differential absorption of shortwave versus "
         "longwave radiation, not reflection or convection."))


# ---- Q66  Topic 9.4, Skill 6.C, numeric -------------------------------
CH4_T = 1200.0       # tonnes methane per year
GWP = 28.0
ANS66 = CH4_T * GWP          # 33,600
DIV66 = CH4_T / GWP          # 42.857
SUM66 = CH4_T + GWP          # 1228
DEC66 = ANS66 / 10.0         # 3360
assert abs(ANS66 - 33600) < 1e-9

Q(topic="9.4", skill="6.C", diff=2, numeric=True,
  stem=("A landfill releases %s metric tons of methane per year. Methane has a 100-year global "
        "warming potential of %.0f, meaning one tonne of methane has the same warming effect as "
        "%.0f tonnes of carbon dioxide over that period. What is the landfill's annual emission "
        "in tonnes of carbon dioxide equivalent?"
        % (format(int(CH4_T), ","), GWP, GWP)),
  answer="%s tonnes CO₂e" % format(int(ANS66), ","),
  distractors=[
      ("%.1f tonnes CO₂e" % DIV66,
       "This divides by the global warming potential. Since methane is the more potent gas, its "
       "carbon dioxide equivalent must be larger than its own mass, not smaller."),
      ("%s tonnes CO₂e" % format(int(SUM66), ","),
       "This adds the global warming potential to the mass. Global warming potential is a "
       "dimensionless multiplier, so it cannot be added to a quantity in tonnes."),
      ("%s tonnes CO₂e" % format(int(DEC66), ","),
       "This is the correct product divided by ten, which would correspond to a global warming "
       "potential of %.1f rather than %.0f." % (GWP / 10, GWP)),
  ],
  why_right=("Carbon dioxide equivalent converts a quantity of any greenhouse gas into the mass of "
             "carbon dioxide that would cause the same warming over a chosen period, by "
             "multiplying by that gas's global warming potential: %s t × %.0f = %s t "
             "CO₂e. Methane's potency comes from absorbing infrared more effectively per "
             "molecule than carbon dioxide; its atmospheric lifetime is only about a decade, which "
             "is why its 20-year global warming potential is far higher than its 100-year value. "
             "That short lifetime also makes methane capture an unusually fast-acting mitigation "
             "option, and landfill gas can be burned for energy, converting it to the much weaker "
             "carbon dioxide."
             % (format(int(CH4_T), ","), GWP, format(int(ANS66), ","))),
  focus="Apply a global warming potential as a dimensionless multiplier to convert to CO2 "
        "equivalent.")


# ---- Q67  Topic 9.1, Skill 1.B ----------------------------------------
Q(topic="9.1", skill="1.B", diff=3,
  stem=("Which explanation accounts for why chlorofluorocarbons deplete stratospheric ozone so "
        "efficiently, given that their atmospheric concentrations are very small?"),
  answer=("Ultraviolet light frees chlorine atoms from CFCs, and each one destroys many thousands "
          "of ozone molecules in a chain reaction because it is regenerated at every cycle."),
  distractors=[
      ("Each chlorofluorocarbon molecule bonds directly and permanently to several ozone "
          "molecules at once, so even a small number of molecules can remove a large quantity of "
          "ozone from the stratosphere.",
       "CFC molecules do not bind ozone. They must first be broken apart by ultraviolet light to "
       "release chlorine, and the chlorine then acts catalytically rather than by bonding "
       "permanently."),
      ("Chlorofluorocarbons are far denser than air, so they settle into a concentrated layer "
          "exactly at the altitude of the ozone layer, where their local concentration is high "
          "enough to consume the ozone present.",
       "Atmospheric mixing distributes CFCs rather than letting them settle by density, and their "
       "stratospheric concentration remains very low; the catalytic cycle is what makes the "
       "small quantity effective."),
      ("Chlorofluorocarbons absorb the ultraviolet radiation that would otherwise drive the "
          "natural reactions forming ozone, so ozone is never produced rather than being "
          "destroyed after formation.",
       "CFCs are not present in sufficient quantity to shade the stratosphere from ultraviolet "
       "light, and the observed depletion involves active destruction of existing ozone."),
  ],
  why_right=("The key is catalysis. CFCs are chemically inert in the troposphere, which is why they "
             "survive long enough to be mixed up into the stratosphere — the same stability "
             "that made them attractive as refrigerants. There, high-energy ultraviolet light "
             "finally breaks a carbon-chlorine bond and releases a free chlorine atom. That atom "
             "reacts with ozone to form chlorine monoxide and O₂, and the chlorine monoxide "
             "then reacts with a free oxygen atom to release the chlorine atom again. Because the "
             "chlorine is regenerated rather than consumed, one atom can cycle through this "
             "sequence tens of thousands of times before being removed. That amplification is why "
             "trace concentrations cause large-scale depletion, and why the long atmospheric "
             "lifetime of CFCs means recovery after the Montreal Protocol takes decades."),
  focus=("Explain catalytic ozone destruction, emphasizing regeneration of the chlorine atom as "
         "the source of amplification."))


# ---- Q68  Topic 9.2, Skill 3.A ----------------------------------------
_q68_fig = viz.source_block(
    "Thirty Years On, the Hole Is Still There",
    "Editorial in a science magazine (written for this exam)",
    ["Nations signed the Montreal Protocol in 1987 and phased out the chlorofluorocarbons that "
     "thinned the ozone layer. Yet a hole still opens over Antarctica every spring, and critics "
     "point to it as proof that the treaty accomplished nothing.",
     "That reading mistakes a slow recovery for no recovery. Stratospheric chlorine peaked in the "
     "late 1990s and has been declining since, and the hole is now smaller than its worst years. "
     "The treaty worked; the chemistry is simply slower than politics."],
    w=470)

Q(topic="9.2", skill="3.A", diff=2, visual=_q68_fig,
  stem=("Which statement best identifies the central claim the author is making?"),
  answer=("The Montreal Protocol succeeded, and the continued appearance of an ozone hole reflects "
          "the slow pace of chemical recovery rather than any failure of the treaty."),
  distractors=[
      ("The Montreal Protocol failed to achieve its goals, because an ozone hole continues to "
          "open over Antarctica every spring more than thirty years after the agreement was "
          "signed by its member nations.",
       "This is the position the author attributes to critics and then argues against, so it is "
       "the opposite of the author's own claim."),
      ("Stratospheric chlorine concentrations peaked in the late 1990s and have been declining "
          "ever since, which is the measurement that scientists rely on to track the state of "
          "the ozone layer over time.",
       "This is a piece of evidence the author cites in support of the claim rather than the "
       "claim itself; identifying a claim means finding the conclusion the evidence serves."),
      ("International environmental treaties generally fail to deliver measurable results because "
          "chemical and ecological processes operate on timescales far longer than those of the "
          "political systems that negotiate them.",
       "The author makes the narrower point that this treaty worked despite slow chemistry, and "
       "does not generalize to treaties failing overall."),
  ],
  why_right=("A claim is the conclusion an author wants the reader to accept, as distinct from the "
             "evidence offered for it and from positions the author raises only to rebut. Here the "
             "first paragraph presents the critics' view, and the second rejects it: the phrase "
             "\"that reading mistakes a slow recovery for no recovery\" signals the turn, and "
             "\"the treaty worked\" states the conclusion directly. The declining chlorine "
             "concentrations and the shrinking hole are the evidence marshalled in support. "
             "Distinguishing these three elements — claim, supporting evidence, and opposing "
             "view — is the core skill, and the most common error is selecting an accurate "
             "fact from the passage that is not the conclusion."),
  focus=("Identify an author's claim, separating it from the supporting evidence and from the "
         "counterposition the author rejects."))


# ---- Q69  Topic 9.5, Skill 5.C ----------------------------------------
_q69_co2 = [(1960, 317), (1975, 331), (1990, 354), (2005, 379), (2020, 414)]
_q69_temp = [(1960, 0.03), (1975, 0.01), (1990, 0.45), (2005, 0.68), (2020, 1.02)]
_q69_fig = viz.line_chart(
    [{"name": "CO₂ (ppm)", "points": _q69_co2, "color": "#6A1B9A"}],
    "Year", "Atmospheric CO₂ (ppm)", (1960, 2020), (300, 430), w=470, h=290,
    x_ticks=[1960, 1975, 1990, 2005, 2020], y_ticks=[300, 330, 360, 390, 420], legend_pos="tl",
    caption="Atmospheric carbon dioxide concentration. Global mean surface temperature anomaly "
            "over the same years: 0.03, 0.01, 0.45, 0.68, and 1.02 %sC." % DEG)

Q(topic="9.5", skill="5.C", diff=2, visual=_q69_fig,
  stem=("Which conclusion is best supported by the carbon dioxide record together with the "
        "temperature anomalies given?"),
  answer=("Both quantities rose substantially over the period, and the physical mechanism linking "
          "them makes rising carbon dioxide the best-supported explanation for the warming."),
  distractors=[
      ("Carbon dioxide and temperature both rose, but because these are only correlated and "
          "correlation never establishes causation, the data give no reason to prefer a causal "
          "explanation over coincidence.",
       "Correlation alone is weak evidence, but it is not the only evidence available here: the "
       "radiative mechanism by which carbon dioxide absorbs infrared is independently "
       "established physics."),
      ("The temperature increase caused the carbon dioxide increase, because warmer oceans hold "
          "less dissolved gas and so release carbon dioxide into the atmosphere as they warm.",
       "Ocean outgassing with warming is a real feedback, but the oceans have absorbed roughly a "
       "quarter of emitted carbon dioxide over this period rather than being a net source."),
      ("Carbon dioxide rose at a constant rate across the whole period while temperature rose "
          "only after 1975, which shows the two quantities are changing independently of one "
          "another.",
       "The carbon dioxide rate was not constant: it increased from about 0.9 ppm per year in the "
       "earlier interval to about 2.3 ppm per year in the latest one."),
  ],
  why_right=("The data show carbon dioxide rising from 317 to 414 ppm, an increase of 97 ppm, with "
             "the rate accelerating from roughly 0.9 ppm per year in 1960-1975 to about 2.3 ppm "
             "per year in 2005-2020, while the temperature anomaly rose from near zero to about "
             "1.0 degree Celsius. Drawing a causal conclusion from two correlated time series "
             "requires more than the correlation, and here that additional support exists: the "
             "infrared absorption properties of carbon dioxide are measured in the laboratory, "
             "the isotopic signature of the added carbon identifies fossil fuels as its source, "
             "and the pattern of warming matches what greenhouse forcing predicts. The answer "
             "neither overclaims from correlation alone nor dismisses the mechanism."),
  focus=("Combine correlated data with an independently established mechanism to justify a causal "
         "conclusion, avoiding both overclaiming and false scepticism."))


# ---- Q70  Topic 9.7, Skill 6.B, numeric -------------------------------
PH_PRE = 8.2
PH_NOW = 8.1
D70 = PH_PRE - PH_NOW                 # 0.1
ANS70 = 10.0 ** D70                   # 1.2589
INV70 = 10.0 ** (-D70)                # 0.7943
RATIO70 = PH_PRE / PH_NOW             # 1.0123
FULL70 = 10.0                         # treated as a full unit
assert abs(ANS70 - 1.2589254) < 1e-6

Q(topic="9.7", skill="6.B", diff=3, numeric=True,
  stem=("Mean surface ocean pH has fallen from about %.1f in pre-industrial times to about %.1f "
        "today. By what factor has the hydrogen ion concentration of surface seawater increased?"
        % (PH_PRE, PH_NOW)),
  answer="%.2f times" % ANS70,
  distractors=[
      ("%.2f times" % INV70,
       "This is 10 raised to the negative pH difference, giving a decrease. A falling pH means "
       "hydrogen ion concentration has risen, so the factor must exceed 1."),
      ("%.2f times" % RATIO70,
       "This divides one pH value by the other. Because pH is a logarithm, pH values cannot be "
       "compared as a ratio; their difference must be used as an exponent."),
      ("%.1f times" % FULL70,
       "This treats the change as a full pH unit. The change is %.1f units, so the factor is "
       "10%s rather than 10%s." % (D70, "⁰·¹", "¹")),
  ],
  why_right=("Because pH = −log₁₀[H⁺], a pH change of Δ corresponds to a "
             "concentration ratio of 10 raised to Δ. Here Δ = %.1f − %.1f = %.1f, "
             "so [H⁺] has risen by a factor of 10%s = %.3f, about a %.0f%% increase. The "
             "chemistry behind it is that the ocean absorbs roughly a quarter of emitted carbon "
             "dioxide, which reacts with water to form carbonic acid; that releases hydrogen ions "
             "and also consumes carbonate ions, making it harder for corals, molluscs, and "
             "pteropods to build calcium carbonate shells and skeletons. A change that sounds "
             "small on the pH scale is substantial on the concentration scale."
             % (PH_PRE, PH_NOW, D70, "⁰·¹", ANS70, (ANS70 - 1) * 100)),
  focus="Convert a small pH change into a concentration factor using powers of ten, in the "
        "correct direction.")


# ---- Q71  Topic 9.6, Skill 1.C ----------------------------------------
Q(topic="9.6", skill="1.C", diff=2,
  stem=("A reef that was healthy for decades turns white across most of its area during an unusual "
        "marine heat wave. Which explanation of what has happened, and of the reef's prospects, "
        "is most accurate?"),
  answer=("Heat stress caused the corals to expel their symbiotic algae, losing both colour and "
          "their main energy source; they can recover if the algae return soon enough, but die "
          "if stress persists."),
  distractors=[
      ("The white colour is the skeletons of corals that have already died from the heat, so the "
          "reef is permanently lost and recovery would require larvae from elsewhere to settle "
          "and build an entirely new structure.",
       "Bleached corals are usually still alive, their white carbonate skeleton visible through "
       "transparent tissue once the algae are gone, so recovery remains possible."),
      ("The warm water bleached the corals by chemically breaking down the coloured pigments in "
          "their own tissues, and the pigments will regenerate on their own once water "
          "temperature returns to its normal range.",
       "The colour comes from symbiotic zooxanthellae rather than coral pigments, and recovery "
       "depends on those algae recolonizing the coral, not on pigment regeneration."),
      ("The heat wave caused an algal bloom that coated the reef in a white film, and the corals "
          "beneath are unharmed and will be revealed again once the bloom is dispersed by "
          "currents.",
       "Bleaching is a loss of algae from coral tissue rather than a coating on the reef surface, "
       "and the corals are under severe physiological stress rather than unharmed."),
  ],
  why_right=("Reef-building corals live in symbiosis with photosynthetic zooxanthellae that supply "
             "much of the coral's energy and give it its colour. When water temperature exceeds "
             "the coral's tolerance for a sustained period, the symbiosis breaks down and the "
             "coral expels the algae. The coral tissue is nearly transparent, so the white "
             "carbonate skeleton shows through — the bleached appearance. The crucial point "
             "is that a bleached coral is typically alive but starving: if temperatures drop "
             "within a few weeks the algae can recolonize and the coral recovers, but prolonged "
             "stress leads to death, after which the structure erodes and the thousands of "
             "species depending on it lose their habitat. Shorter intervals between heat waves are "
             "what make recovery increasingly unlikely."),
  focus=("Explain coral bleaching as loss of algal symbionts, distinguishing a bleached living "
         "coral from a dead one."))


# ---- Q72  Topic 9.8, Skill 7.E ----------------------------------------
Q(topic="9.8", skill="7.E", diff=2,
  stem=("Zebra mussels, spread between lakes on boat hulls and in bilge water, are clogging intake "
        "pipes and displacing native mussels. Which proposed response best addresses the way the "
        "species spreads?"),
  answer=("Require boats to be inspected, cleaned, drained, and dried between launches at "
          "different lakes, targeting the transport pathway before new lakes are colonized."),
  distractors=[
      ("Apply molluscicide to each lake where zebra mussels have established, at a dose high "
          "enough to eliminate the population and prevent any survivors from being carried "
          "onward to other lakes.",
       "Lake-wide chemical treatment would kill native mussels and other invertebrates too, and "
       "it treats lakes already invaded rather than stopping transport between them."),
      ("Introduce a predatory fish species from the zebra mussel's native range to control the "
          "population biologically, so that the invader is suppressed without the need for "
          "chemical treatment.",
       "Introducing another non-native species to control an invader risks creating a second "
       "invasion, and it still does nothing to stop boats spreading mussels to new lakes."),
      ("Fund ongoing monitoring of native mussel populations in all affected lakes so that the "
          "ecological damage caused by the invasion is documented in detail as it unfolds over "
          "time.",
       "Monitoring produces valuable information but takes no action against either the "
       "established population or the pathway by which it spreads."),
  ],
  why_right=("For invasive species, prevention at the pathway is far more effective and cheaper "
             "than control after establishment, because an established population in a large lake "
             "is effectively impossible to remove. Zebra mussels spread between otherwise "
             "unconnected lakes almost entirely by human transport: microscopic veliger larvae "
             "survive in bilge water, live wells, and bait buckets, and adults attach to hulls and "
             "trailers. Clean-drain-dry inspection protocols interrupt exactly that step, which is "
             "why boat inspection stations are the standard management response. The proposal also "
             "avoids the serious unintended consequences of the alternatives, particularly "
             "introducing a further non-native species."),
  focus=("Propose an invasive-species response that targets the transport pathway rather than "
         "treating established populations."))


# ---- Q73  Topic 9.9, Skill 7.F ----------------------------------------
Q(topic="9.9", skill="7.F", diff=3,
  stem=("A conservation agency can protect a single large reserve or several small reserves of the "
        "same total area for a wide-ranging endangered carnivore. Which justification for choosing "
        "the single large reserve is strongest for this species?"),
  answer=("A wide-ranging carnivore needs a territory larger than any one small reserve, and a "
          "single large area has proportionally less edge, supporting a population big enough to "
          "stay genetically viable."),
  distractors=[
      ("Several small reserves would be better for almost any species, so the single large reserve "
          "should be chosen only because it is cheaper to patrol and administer than several "
          "separate sites with their own staff and boundaries.",
       "This concedes the ecological argument and rests on administrative cost, which is a far "
       "weaker justification than the species' actual area requirements."),
      ("A single large reserve guarantees the species cannot go extinct, because a population "
          "confined to one continuous protected area is fully insulated from disease outbreaks, "
          "fire, and poaching pressure.",
       "A single reserve is in fact more vulnerable to a single catastrophe such as disease or "
       "fire, since there is no spatially separate population to serve as a refuge."),
      ("Small reserves are always too small to contain any complete ecosystem, so only a single "
          "large reserve can protect the full range of species present in the region regardless "
          "of what the target species requires.",
       "Small reserves can protect many species with modest area needs, and the decisive "
       "consideration here is this particular carnivore's requirements."),
  ],
  why_right=("The reserve-design choice depends on the biology of the target species, and three "
             "factors point the same way for a wide-ranging carnivore. First, minimum area: if an "
             "individual's home range exceeds the size of a small reserve, no small reserve can "
             "support even one territory, let alone a population. Second, edge effects: for a given "
             "total area, one large patch has a lower perimeter-to-area ratio than several small "
             "ones, so proportionally more interior habitat and less exposure to human contact, "
             "roads, and invasive species. Third, population viability: large carnivores occur at "
             "low densities, so only a large area holds enough individuals to avoid inbreeding and "
             "genetic drift. The honest counterpoint is that a single reserve concentrates risk "
             "from catastrophe, which is why corridors connecting reserves are often preferred to "
             "either extreme."),
  focus=("Justify a reserve-design decision from the target species' area, edge, and population "
         "viability requirements."))


# ---- Q74  Topic 9.10, Skill 5.E ---------------------------------------
_q74_fig = viz.table(
    ["Driver of biodiversity loss", "Share of assessed threatened species affected (%)"],
    [["Habitat loss and degradation", "72"],
     ["Overexploitation", "48"],
     ["Invasive species", "31"],
     ["Pollution", "24"],
     ["Climate change", "19"]],
    w=470, col_w=[1.5, 1.5],
    caption="Percentage of assessed threatened species affected by each driver. Species may be "
            "affected by more than one driver, so values exceed 100% in total.")

Q(topic="9.10", skill="5.E", diff=2, visual=_q74_fig,
  stem=("What do these data imply about conservation priorities, and what does the note beneath "
        "the table require readers to keep in mind?"),
  answer=("Habitat protection should be the leading priority since it affects the most species, "
          "and because species face multiple overlapping drivers, addressing one will not "
          "necessarily secure them."),
  distractors=[
      ("Climate change can be deprioritized because it affects the smallest share of threatened "
          "species at 19 percent, and the overlapping categories mean that figure likely "
          "overstates its true independent contribution to current losses.",
       "A driver affecting 19% of threatened species is not negligible, and climate change is "
       "projected to grow in importance; overlap does not imply its contribution is "
       "overstated."),
      ("The five drivers together affect 194 percent of threatened species, which shows the "
          "assessment has double-counted species and that the figures cannot support any "
          "conservation priority at all.",
       "The note explains that the total exceeds 100% because species face multiple drivers, "
       "which is a feature of the data rather than an error invalidating them."),
      ("Because habitat loss affects 72 percent of threatened species, protecting habitat alone "
          "would be sufficient to remove the threat to nearly three-quarters of the species "
          "assessed in the table.",
       "This is exactly what the overlap note rules out: a species affected by habitat loss may "
       "also face overexploitation or invasive species, so removing one threat may leave it "
       "threatened."),
  ],
  why_right=("Two conclusions follow. First, ranking: habitat loss and degradation affects 72% of "
             "assessed threatened species, far more than any other driver, so habitat protection "
             "and restoration reaches the greatest number of species per unit of effort — "
             "which is why protected areas and land-use planning dominate conservation practice. "
             "Second, the limit the note imposes: because the categories overlap and sum to 194%, "
             "the average threatened species faces about two drivers at once. That means the 72% "
             "figure is the share affected by habitat loss, not the share that habitat protection "
             "alone would save. Reading overlapping categories as if they were exclusive is the "
             "central error to avoid with this kind of table."),
  focus=("Draw a priority conclusion from ranked data while respecting the constraint that "
         "overlapping categories impose on it."))


# ---- Q75  Topic 9.5, Skill 2.C ----------------------------------------
_q75_sl = [(1900, 0), (1930, 25), (1960, 55), (1980, 85), (2000, 125), (2020, 195)]
_q75_fig = viz.line_chart(
    [{"name": "Global mean sea level", "points": _q75_sl, "color": "#1565C0"}],
    "Year", "Sea level rise since 1900 (mm)", (1900, 2020), (0, 220), w=470, h=290,
    x_ticks=[1900, 1930, 1960, 1990, 2020], y_ticks=[0, 50, 100, 150, 200], legend_pos="tl",
    markers=True,
    caption="Global mean sea level relative to 1900.")

Q(topic="9.5", skill="2.C", diff=2, visual=_q75_fig,
  stem=("Which statement correctly describes what this curve shows about the rate of sea level "
        "rise, and connects it to the physical processes responsible?"),
  answer=("The rate is accelerating, roughly tripling from the earliest interval to the most "
          "recent, driven by thermal expansion of warming seawater and added meltwater from "
          "glaciers and ice sheets."),
  distractors=[
      ("The rate is constant at about 1.6 mm per year across the whole record, which indicates a "
          "steady background process such as the slow adjustment of continents since the last "
          "glaciation rather than recent warming.",
       "The curve steepens visibly: about 0.83 mm per year in 1900-1930 versus about 3.5 mm per "
       "year in 2000-2020, so the rate is not constant."),
      ("The rate is accelerating, and the rise is caused almost entirely by the melting of sea "
          "ice floating on the Arctic Ocean, which adds its volume of water to the ocean as it "
          "melts each summer.",
       "The acceleration is read correctly, but floating sea ice already displaces its own weight "
       "of water, so melting it does not raise sea level appreciably."),
      ("The rate is accelerating, and the dominant cause is the increased volume of water "
          "delivered to the oceans by heavier rainfall over the ocean surface in a warmer "
          "atmosphere.",
       "Precipitation over the ocean is part of a closed cycle that returns water already in the "
       "system; it does not add net volume the way land ice melt does."),
  ],
  why_right=("Reading the slope across intervals shows acceleration: sea level rose 25 mm in the 30 "
             "years to 1930, about 0.83 mm per year, but 70 mm in the 20 years to 2020, about 3.5 "
             "mm per year — more than four times faster. Two processes dominate. Thermal "
             "expansion: water expands as it warms, and because the oceans have absorbed most of "
             "the excess heat trapped by greenhouse gases, that expansion alone raises sea level "
             "without adding any water. Land ice melt: mountain glaciers and the Greenland and "
             "Antarctic ice sheets transfer water that was stored on land into the ocean, adding "
             "volume. Floating sea ice is the important exception, since it already displaces its "
             "own weight and so contributes almost nothing on melting."),
  focus=("Read acceleration from a curve's changing slope and attribute it to thermal expansion "
         "and land ice melt rather than sea ice or precipitation."))


# ---- Q76  Topic 9.4, Skill 5.B ----------------------------------------
_q76_fig = viz.table(
    ["Gas", "Atmospheric lifetime", "100-year GWP", "Main anthropogenic source"],
    [["Carbon dioxide", "centuries", "1", "fossil fuel combustion"],
     ["Methane", "~12 years", "28", "livestock, landfills, gas leaks"],
     ["Nitrous oxide", "~115 years", "265", "fertilizer, manure"],
     ["CFC-12", "~100 years", "10,200", "legacy refrigerants"]],
    w=470, col_w=[1.0, 1.1, 0.85, 1.6],
    caption="Properties of four greenhouse gases.")

Q(topic="9.4", skill="5.B", diff=2, visual=_q76_fig,
  stem=("Which statement correctly describes the relationship between the variables in this table, "
        "and draws the right conclusion about carbon dioxide?"),
  answer=("Global warming potential is not determined by lifetime, and carbon dioxide drives the "
          "most warming overall despite the lowest potential because it is emitted in far greater "
          "quantities."),
  distractors=[
      ("Global warming potential rises consistently with atmospheric lifetime, and carbon dioxide "
          "therefore contributes least to warming of the four gases because it has both the "
          "lowest potential and a lifetime comparable to the others.",
       "The pattern fails in the table: nitrous oxide has a longer lifetime than CFC-12 but a far "
       "lower potential, and carbon dioxide's emission volume makes it the largest contributor."),
      ("CFC-12 is currently the single largest driver of warming because its global warming "
          "potential of 10,200 is by far the highest value in the table and potential alone "
          "determines total contribution.",
       "Total contribution is potential multiplied by the quantity emitted, and CFC-12 emissions "
       "are now very small because the Montreal Protocol phased the compound out."),
      ("Methane is the most urgent gas to control because it has the shortest lifetime of the "
          "four, which means its concentration responds fastest to emission cuts and its warming "
          "effect is therefore the largest.",
       "The short-lifetime point is a genuine reason methane cuts act quickly, but a short "
       "lifetime reduces rather than increases a gas's cumulative warming effect."),
  ],
  why_right=("The two numeric columns do not track each other: nitrous oxide persists for about 115 "
             "years with a potential of 265, while CFC-12 persists for about 100 years with a "
             "potential of 10,200. Potential depends on how strongly a molecule absorbs infrared "
             "as well as how long it lasts. The essential further step is that total warming "
             "contribution equals potential times quantity emitted. Carbon dioxide has a potential "
             "of 1 by definition, the lowest in the table, yet it is emitted in billions of tonnes "
             "annually, which makes it the dominant driver of current warming. The high-potential "
             "gases matter per tonne but are emitted in far smaller amounts, which is why "
             "mitigation policy concentrates on carbon dioxide while also targeting methane for "
             "its fast response."),
  focus=("Recognize that two tabulated variables need not co-vary, and combine potency with "
         "emission quantity to rank total contribution."))


# ---- Q77  Topic 9.1, Skill 2.A ----------------------------------------
_q77_pts = [(1979, 225), (1985, 195), (1990, 160), (1995, 125), (2000, 110),
            (2006, 95), (2012, 125), (2018, 140), (2023, 150)]
_q77_fig = viz.line_chart(
    [{"name": "Minimum ozone column", "points": _q77_pts, "color": "#6A1B9A"}],
    "Year", "Minimum ozone column (Dobson units)", (1979, 2023), (80, 240), w=470, h=290,
    x_ticks=[1979, 1990, 2000, 2012, 2023], y_ticks=[80, 120, 160, 200, 240],
    hlines=[(220, "ozone hole threshold 220 DU")], legend_pos="br",
    caption="Annual minimum ozone column measured over Antarctica each spring. "
            "The Montreal Protocol entered force in 1989.")

Q(topic="9.1", skill="2.A", diff=1, visual=_q77_fig,
  stem=("Which description of the pattern shown by this record is accurate?"),
  answer=("Minimum ozone fell steeply from 1979 to a low near 2006, then partially recovered "
          "through 2023 while remaining below the 220 Dobson unit threshold throughout."),
  distractors=[
      ("Minimum ozone fell steeply from 1979 to a low near 2006, then recovered to above the 220 "
          "Dobson unit threshold by 2023, indicating that the Antarctic ozone hole has now "
          "closed completely.",
       "The 2023 value is about 150 Dobson units, well below the 220 threshold line, so the hole "
       "has not closed even though it has shrunk."),
      ("Minimum ozone declined continuously throughout the whole record from 1979 to 2023, which "
          "indicates that the Montreal Protocol produced no detectable change in Antarctic "
          "stratospheric ozone.",
       "The record reverses direction after about 2006, rising from 95 to 150 Dobson units, so "
       "the decline is not continuous."),
      ("Minimum ozone rose steadily from 1979 through 2023, and the values below the threshold "
          "line early in the record reflect measurement limitations of the instruments available "
          "at that time.",
       "The record falls sharply through the first half, from 225 to 95 Dobson units, before any "
       "recovery begins, so it does not rise steadily."),
  ],
  why_right=("The curve has two distinct phases. From 1979 to about 2006 the annual minimum falls "
             "from 225 to 95 Dobson units, crossing below the 220 threshold that defines an ozone "
             "hole in the early 1980s. From about 2006 onward it rises to roughly 150 Dobson "
             "units by 2023, a partial recovery consistent with declining stratospheric chlorine "
             "following the Montreal Protocol. Describing the pattern accurately requires both "
             "parts and the position relative to the reference line: there is genuine improvement, "
             "and the values are still far below the threshold. Full recovery is expected to take "
             "until roughly the second half of this century because of the long atmospheric "
             "lifetimes of the compounds already released."),
  focus=("Describe a two-phase trend and state its position relative to a reference line without "
         "overstating recovery."))


# ---- Q78  Topic 9.8, Skill 4.C ----------------------------------------
Q(topic="9.8", skill="4.C", diff=2,
  stem=("To test whether an invasive reed suppresses native marsh plants by shading them, "
        "researchers clip reed stems in half of 20 paired plots and measure native plant cover "
        "after one season. Which aspect of this design most needs strengthening, and why?"),
  answer=("Clipping removes both shading and root competition at once, so a shade-only treatment "
          "such as adding artificial shade to reed-free plots is needed to isolate the proposed "
          "mechanism."),
  distractors=[
      ("The sample of 20 paired plots is too small to detect any difference in native plant "
          "cover, so the study should be expanded to several hundred plots before any treatment "
          "is applied to them.",
       "Twenty pairs is a workable sample for a paired design, and increasing it would not "
       "address the fact that the treatment changes more than one thing at once."),
      ("Measuring after one season is too short an interval, so the study should run for at least "
          "a decade before native plant cover is recorded in either the clipped or the unclipped "
          "plots.",
       "A longer study would show more about recovery trajectories, but it would still confound "
       "shading with root competition in exactly the same way."),
      ("Native plant cover is the wrong response variable, and the researchers should instead "
          "measure the light reaching the marsh surface in clipped and unclipped plots to test "
          "their hypothesis.",
       "Light measurements would confirm that clipping changes light but would no longer test the "
       "biological effect on native plants, which is the outcome of interest."),
  ],
  why_right=("The hypothesis names a specific mechanism — suppression by shading — so the "
             "design must be able to attribute any effect to shading rather than to the invader's "
             "other influences. Clipping stems removes the canopy but also removes the "
             "above-ground tissue supporting root competition for water and nutrients, and leaves "
             "the root system in place to decompose and release nutrients. If native cover "
             "increases in clipped plots, shading, nutrient competition, and nutrient release are "
             "all candidate explanations. Adding a treatment that manipulates shade alone, such as "
             "shade cloth over reed-free plots matched to the light levels measured under intact "
             "reed, separates the mechanism from the correlated effects. The paired-plot structure "
             "and the one-season interval are reasonable features of the design."),
  focus=("Evaluate whether an experimental treatment isolates the hypothesized mechanism, rather "
         "than defaulting to sample size or duration critiques."))


# ---- Q79  Topic 9.4, Skill 6.C, numeric -------------------------------
CO2_1958 = 315.0
CO2_2024 = 424.0
RISE79 = CO2_2024 - CO2_1958                     # 109
ANS79 = RISE79 / CO2_1958 * 100                  # 34.60%
WRONG_BASE79 = RISE79 / CO2_2024 * 100           # 25.71%
RAW79 = RISE79                                   # 109 reported as a percent
RATIO79 = (CO2_2024 / CO2_1958 - 1) * 10         # 3.46 (decimal slip)
assert abs(ANS79 - 34.60317) < 1e-4

Q(topic="9.4", skill="6.C", diff=1, numeric=True,
  stem=("Atmospheric carbon dioxide measured at Mauna Loa rose from about %.0f ppm in 1958 to "
        "about %.0f ppm in 2024. By what percentage did the concentration increase over that "
        "period?" % (CO2_1958, CO2_2024)),
  answer="%.1f%%" % ANS79,
  distractors=[
      ("%.1f%%" % RATIO79,
       "This is the correct percentage divided by ten, a decimal slip from expressing the ratio "
       "%.4f as a percentage." % (CO2_2024 / CO2_1958)),
      ("%.1f%%" % WRONG_BASE79,
       "This divides the increase by the 2024 value instead of the 1958 value. A percentage "
       "increase is always measured against the starting value."),
      ("%.0f%%" % RAW79,
       "This is the increase in ppm, %.0f, reported as though it were a percentage. The "
       "difference must still be divided by the original concentration." % RISE79),
  ],
  why_right=("Percentage increase is the change divided by the original value: (%.0f − %.0f) "
             "÷ %.0f × 100 = %.0f ÷ %.0f × 100 = %.1f%%. Choosing the "
             "denominator correctly matters — using the final value instead gives %.1f%%, "
             "which answers a different question. For context, the pre-industrial concentration "
             "was about 280 ppm, so the rise since 1958 is only part of a larger increase, and the "
             "Mauna Loa record is valuable precisely because it is a continuous direct measurement "
             "begun before most of that change occurred."
             % (CO2_2024, CO2_1958, CO2_1958, RISE79, CO2_1958, ANS79, WRONG_BASE79)),
  focus="Compute a percentage increase against the original value, not the final value.")


# ---- Q80  Topic 9.10, Skill 7.C ---------------------------------------
Q(topic="9.10", skill="7.C", diff=3,
  stem=("A government proposes paying landowners to plant fast-growing non-native eucalyptus "
        "across degraded grassland to sequester carbon. Which assessment of the unintended "
        "consequences of this proposal is most accurate?"),
  answer=("Carbon is sequestered, but planting trees on native grassland can reduce habitat for "
          "grassland species, draw down water tables, raise fire risk, and allow the non-native "
          "trees to spread."),
  distractors=[
      ("The proposal carries essentially no ecological risk, because adding trees to any landscape "
          "increases biomass, soil carbon, and habitat complexity simultaneously, so grassland "
          "species benefit alongside the climate.",
       "Grassland specialists are adapted to open habitat and are displaced rather than helped by "
       "tree cover, so added complexity is not a universal benefit."),
      ("The main unintended consequence is that eucalyptus grows too slowly to sequester a "
          "meaningful quantity of carbon within the time frame that matters for climate "
          "mitigation.",
       "Eucalyptus is chosen precisely because it grows fast; the problems lie in its ecological "
       "effects rather than in the rate of carbon uptake."),
      ("The chief problem is that planted forests release more carbon than they absorb over their "
          "lifetime, because soil disturbance during planting oxidizes more soil carbon than the "
          "trees can ever accumulate.",
       "Planting disturbance does release some soil carbon, but a fast-growing plantation "
       "accumulates far more carbon in biomass than that initial loss."),
  ],
  why_right=("Afforestation delivers real carbon sequestration, and the fair assessment names that "
             "benefit alongside costs that follow from the choice of site and species. Native "
             "grasslands are not degraded forests; they support specialist birds, insects, and "
             "plants that disappear under a closed canopy, and much of their own carbon is stored "
             "below ground in deep root systems and soil. Fast-growing eucalyptus has high water "
             "demand and can lower local water tables and stream flows in dry regions. Its oils "
             "and shed litter make eucalyptus stands notably fire-prone, and a fire releases the "
             "stored carbon. As a vigorous non-native it can also spread beyond planting "
             "boundaries. None of this makes carbon sequestration a bad goal; it argues for "
             "species and sites chosen so that the climate benefit does not come at the cost of "
             "the ecosystem being replaced."),
  focus=("Identify the unintended consequences of a carbon-sequestration proposal arising from "
         "site and species choice, without denying its benefit."))
