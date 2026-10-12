# -*- coding: utf-8 -*-
"""Items 22-50: Unit 4 (9), Unit 5 (10), Unit 6 (10)."""

import viz
from qbank import Q

DEG = "°"
SQ = "²"
CU = "³"


# ══════════════════════════════════════════════════════════════════════════
# UNIT 4 - Earth Systems and Resources (9 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q22  Topic 4.2, Skill 4.B ----------------------------------------
_q22_fig = viz.table(
    ["Plot", "Slope", "Ground cover", "Soil collected after 50 mm rain (g)"],
    [["1", "10%", "bare soil", "412"],
     ["2", "10%", "grass cover", "38"],
     ["3", "10%", "straw mulch", "61"],
     ["4", "10%", "bare soil", "405"]],
    w=470, col_w=[0.6, 0.7, 1.1, 1.6],
    caption="Sediment caught in collection troughs at the base of four identical field plots.")

Q(topic="4.2", skill="4.B", diff=2, visual=_q22_fig,
  stem=("Which description correctly identifies the design of this investigation and the role "
        "that Plots 1 and 4 play in it?"),
  answer=("It is a controlled experiment in which ground cover is the independent variable and "
          "slope is held constant; Plots 1 and 4 are replicate controls fixing the baseline "
          "erosion rate."),
  distractors=[
      ("It is a controlled experiment in which slope is the independent variable and ground cover "
       "is held constant; Plots 1 and 4 are replicate controls that establish the baseline "
       "erosion rate.",
       "The table shows slope identical at 10% on every plot and ground cover differing, so the "
       "roles of the two variables are reversed here."),
      ("It is an observational study with no manipulated variable, because rainfall occurred "
       "naturally; Plots 1 and 4 are additional observations that increase the total sample size.",
       "Ground cover was deliberately assigned to plots, which makes this an experiment. "
       "Rainfall being natural affects the setting, not whether a variable was manipulated."),
      ("It is a controlled experiment in which sediment mass is the independent variable; Plots 1 "
       "and 4 are the treatment plots against which the covered plots are judged.",
       "Sediment mass is what the investigators measure, which makes it the dependent variable, "
       "and bare soil is the control condition rather than a treatment."),
  ],
  why_right=("Reading the columns identifies the design. Slope is 10% on all four plots, so it is "
             "a controlled variable. Ground cover takes three values — bare, grass, mulch "
             "— so it is the manipulated independent variable. Sediment mass is measured, so "
             "it is the dependent variable. Plots 1 and 4 share the bare-soil condition, making "
             "them replicates of the control; their close agreement (412 g and 405 g) is evidence "
             "that the measurement is repeatable, so the much smaller values on the covered plots "
             "can be attributed to the cover."),
  focus=("Identify independent, dependent, and controlled variables from a data table and "
         "recognize the function of replicate controls."))


# ---- Q23  Topic 4.3, Skill 5.B ----------------------------------------
_q23_fig = viz.table(
    ["Soil", "Particle size", "Infiltration rate (cm/hr)", "Water held after drainage (%)"],
    [["Sand", "largest", "21.0", "9"],
     ["Silt", "intermediate", "1.8", "26"],
     ["Clay", "smallest", "0.2", "41"],
     ["Loam", "mixed", "2.6", "31"]],
    w=470, col_w=[0.7, 0.95, 1.3, 1.4],
    caption="Measured properties of four soil textures.")

Q(topic="4.3", skill="5.B", diff=2, visual=_q23_fig,
  stem=("Which statement correctly describes the relationship between particle size and the two "
        "measured water properties, and identifies the soil best suited to most crops?"),
  answer=("Infiltration rate increases and water retention decreases as particle size increases; "
          "loam is best suited to crops because it combines moderate infiltration with high "
          "retention."),
  distractors=[
      ("Both infiltration rate and water retention increase as particle size increases; sand is "
       "best suited to crops because its high infiltration rate delivers water to roots fastest.",
       "The two properties move in opposite directions in the table — sand holds the least "
       "water at 9% despite the fastest infiltration — so sandy soil drains before roots can "
       "use the water."),
      ("Infiltration rate decreases and water retention increases as particle size increases; "
       "clay is best suited to crops because it retains the most water of the four soils.",
       "The direction of the infiltration relationship is reversed: the largest particles (sand) "
       "have the fastest infiltration at 21.0 cm/hr. Clay also waterlogs and resists root "
       "penetration."),
      ("Infiltration rate increases and water retention decreases as particle size increases; "
       "silt is best suited to crops because its intermediate particle size gives it the highest "
       "water retention of any soil.",
       "The relationship is described correctly, but silt does not have the highest retention "
       "— clay holds 41% and loam 31%, both above silt's 26%."),
  ],
  why_right=("Large particles leave large pores between them, so water moves through quickly and "
             "little is held against gravity: sand infiltrates at 21.0 cm/hr but retains only 9%. "
             "Small particles create small pores with far more surface area, so water moves slowly "
             "and is held tightly: clay infiltrates at 0.2 cm/hr and retains 41%. The two "
             "properties therefore vary inversely with each other. Loam, a mixture of all three "
             "sizes, infiltrates at a moderate 2.6 cm/hr while retaining 31%, which is why it "
             "supports most crops: water enters fast enough to avoid runoff and waterlogging but "
             "is retained long enough for roots to take it up."),
  focus=("Read two inversely related variables against a third and apply the pattern to select an "
         "optimum rather than an extreme."))


# ---- Q24  Topic 4.4, Skill 2.A ----------------------------------------
_q24_fig = viz.layer_diagram(
    [{"label": "Thermosphere", "thick": 2.2, "fill": "#2F3E66",
      "note": "above ~80 km; temperature rises"},
     {"label": "Mesosphere", "thick": 1.5, "fill": "#4D6AA8",
      "note": "50-80 km; coldest layer"},
     {"label": "Stratosphere", "thick": 1.9, "fill": "#7FA3D6",
      "note": "18-50 km; contains the ozone layer"},
     {"label": "Troposphere", "thick": 1.0, "fill": "#C9DCF2",
      "note": "0-18 km; nearly all weather and water vapor"}],
    w=470, h=290, left_label="increasing altitude",
    caption="Layers of Earth's atmosphere, drawn from the surface upward.")

Q(topic="4.4", skill="2.A", diff=1, visual=_q24_fig,
  stem=("Which layer shown contains the ozone layer, and what does ozone in that layer do to "
        "incoming solar radiation?"),
  answer=("The stratosphere, where ozone absorbs most incoming ultraviolet radiation and converts "
          "it to heat, which is why temperature rises with altitude in the layer."),
  distractors=[
      ("The troposphere, where ozone absorbs most incoming ultraviolet radiation and converts "
       "that energy to heat, which is why temperature rises with altitude through the layer.",
       "The diagram labels the stratosphere as the ozone-containing layer. Ozone in the "
       "troposphere is a ground-level pollutant, and tropospheric temperature falls with "
       "altitude."),
      ("The stratosphere, where ozone reflects most incoming ultraviolet radiation back to space "
       "without absorbing energy, so the layer's temperature is unaffected by the process.",
       "The layer is identified correctly, but ozone absorbs ultraviolet radiation in a chemical "
       "cycle rather than reflecting it, and that absorption is what warms the layer."),
      ("The mesosphere, where ozone absorbs most incoming ultraviolet radiation, which explains "
       "why the mesosphere is the coldest layer of the atmosphere.",
       "The diagram places ozone in the stratosphere, and the reasoning is self-contradictory: "
       "absorbing radiation would warm a layer, not make it the coldest."),
  ],
  why_right=("The figure labels the stratosphere, spanning roughly 18 to 50 km, as the layer "
             "containing the ozone layer. Ozone absorbs ultraviolet radiation as it is repeatedly "
             "split and re-formed, and that absorbed energy is released as heat. This is the "
             "direct cause of the stratosphere's defining temperature profile: unlike the "
             "troposphere below it, the stratosphere gets warmer with increasing altitude, "
             "because the heating source is the ozone above rather than the surface below. The "
             "resulting temperature inversion makes the stratosphere very stable, which is why "
             "pollutants that reach it persist for decades."),
  focus="Locate a named feature on an atmospheric diagram and state the radiation process there.")


# ---- Q25  Topic 4.5, Skill 1.B ----------------------------------------
_q25_el = [viz.ARROW_DEFS]
# ground line and equator marker
_q25_el.append(viz.line_el(40, 236, 430, 236, stroke="#8B6B3F", sw=2.2))
_q25_el.append(viz.text_el(235, 252, "Equator (0%s)" % DEG, size=11, anchor="middle"))
_q25_el.append(viz.text_el(100, 252, "30%s N" % DEG, size=11, anchor="middle"))
_q25_el.append(viz.text_el(370, 252, "30%s S" % DEG, size=11, anchor="middle"))
# rising air at equator
_q25_el.append(viz.line_el(235, 230, 235, 66, stroke="#C41230", sw=2.4, arrow=True))
_q25_el.append(viz.text_el(243, 150, "warm moist air rises", size=10.5, fill="#C41230"))
# poleward flow aloft
_q25_el.append(viz.line_el(228, 60, 110, 60, stroke="#555", sw=2, arrow=True))
_q25_el.append(viz.line_el(242, 60, 360, 60, stroke="#555", sw=2, arrow=True))
_q25_el.append(viz.text_el(235, 48, "air diverges aloft, cooling and drying", size=10.5,
                           anchor="middle"))
# descending limbs
_q25_el.append(viz.line_el(100, 66, 100, 230, stroke="#1565C0", sw=2.4, arrow=True))
_q25_el.append(viz.line_el(370, 66, 370, 230, stroke="#1565C0", sw=2.4, arrow=True))
_q25_el.append(viz.text_el(94, 150, "dry air sinks", size=10.5, fill="#1565C0", anchor="end"))
_q25_el.append(viz.text_el(376, 150, "dry air sinks", size=10.5, fill="#1565C0"))
# surface return flow
_q25_el.append(viz.line_el(106, 228, 226, 228, stroke="#555", sw=2, arrow=True))
_q25_el.append(viz.line_el(364, 228, 244, 228, stroke="#555", sw=2, arrow=True))
_q25_el.append(viz.text_el(100, 28, "Zone X", size=12, weight="bold", anchor="middle"))
_q25_el.append(viz.text_el(370, 28, "Zone X", size=12, weight="bold", anchor="middle"))
_q25_fig = viz.sketch(470, 262, _q25_el,
                      caption="Cross-section of the Hadley circulation. Zone X marks the "
                              "latitudes where air descends.")

Q(topic="4.5", skill="1.B", diff=2, visual=_q25_fig,
  stem=("Which explanation accounts for the band of major deserts found worldwide near the "
        "latitudes labelled Zone X?"),
  answer=("Air that rose at the equator already lost its moisture as rain; as it descends at "
          "these latitudes it warms by compression, so it draws moisture from the surface "
          "rather than delivering rain."),
  distractors=[
      ("These latitudes receive the most intense solar radiation on Earth, and the resulting high "
       "surface temperatures evaporate most precipitation before it can accumulate in the soil.",
       "The most intense solar radiation falls near the equator, which is wet rather than arid. "
       "The controlling factor at 30 degrees is the descending limb of the circulation, not peak "
       "insolation."),
      ("Descending air at these latitudes is cold and therefore holds very little water vapor, so "
       "there is almost no moisture available in the air to fall as precipitation.",
       "Air warms as it descends and is compressed; the descending air at these latitudes is warm "
       "and dry. Cold air aloft is part of the pattern, but not the condition at the surface."),
      ("Prevailing surface winds at these latitudes blow from the continental interiors toward "
       "the oceans, which keeps moist marine air from reaching the land where deserts form.",
       "Surface winds in this cell flow back toward the equator rather than outward from "
       "continents, and the global pattern of these deserts appears on every continent "
       "regardless of wind direction relative to the coast."),
  ],
  why_right=("The Hadley cell links equatorial rainfall to subtropical aridity. Intense equatorial "
             "heating drives air upward; as it rises it expands, cools, reaches saturation, and "
             "releases its moisture, which produces the tropical rainforest belt. The now-dry air "
             "moves poleward aloft and descends near 30 degrees north and south. Descending air is "
             "compressed and warms adiabatically, and warmer air can hold more water vapor — "
             "so its relative humidity falls and it draws moisture from the surface rather than "
             "releasing it. This is why the Sahara, Arabian, Kalahari, Atacama, and Australian "
             "deserts all sit at roughly the same latitudes."),
  focus=("Explain subtropical desert formation through the rising and descending limbs of "
         "atmospheric circulation and adiabatic temperature change."))


# ---- Q26  Topic 4.6, Skill 6.C, numeric -------------------------------
RAIN26_MM = 45.0
AREA26_HA = 1200.0
RUNOFF26 = 0.30
AREA26_M2 = AREA26_HA * 10000.0          # 12,000,000 m2
RAIN26_M = RAIN26_MM / 1000.0            # 0.045 m
TOTAL26 = AREA26_M2 * RAIN26_M           # 540,000 m3
ANS26 = TOTAL26 * RUNOFF26               # 162,000 m3
INFIL26 = TOTAL26 * (1 - RUNOFF26)       # 378,000 m3
DEC26 = ANS26 / 10.0                     # 16,200 m3  (hectare-to-m2 slip)
assert abs(TOTAL26 - 540000) < 1e-6 and abs(ANS26 - 162000) < 1e-6

Q(topic="4.6", skill="6.C", diff=2, numeric=True,
  stem=("A storm drops %.0f mm of rain evenly across a %s-hectare watershed, and 30%% of that "
        "rainfall leaves the watershed as surface runoff. What volume of water leaves as runoff? "
        "(1 hectare = 10,000 m%s)"
        % (RAIN26_MM, format(int(AREA26_HA), ","), SQ)),
  answer="%s m%s" % (format(int(ANS26), ","), CU),
  distractors=[
      ("%s m%s" % (format(int(DEC26), ","), CU),
       "This is the correct answer divided by ten, the result of a unit-conversion slip. One "
       "hectare is 10,000 m%s, so %s hectares is %s m%s."
       % (SQ, format(int(AREA26_HA), ","), format(int(AREA26_M2), ","), SQ)),
      ("%s m%s" % (format(int(INFIL26), ","), CU),
       "This is the 70%% that does not run off, which is the volume infiltrating or being "
       "retained rather than the runoff the question asks for."),
      ("%s m%s" % (format(int(TOTAL26), ","), CU),
       "This is the total rainfall delivered to the watershed. The 30%% runoff fraction still "
       "has to be applied to it."),
  ],
  why_right=("Work in consistent SI units. Area: %s ha × 10,000 m%s/ha = %s m%s. Rainfall "
             "depth: %.0f mm ÷ 1,000 = %.3f m. Total rainfall volume: %s m%s × %.3f m = "
             "%s m%s. Runoff is 30%% of that: %s × 0.30 = %s m%s. The remaining %s m%s "
             "infiltrates, recharges groundwater, or is intercepted by vegetation — which is "
             "why paving a watershed raises the runoff fraction and worsens downstream flooding."
             % (format(int(AREA26_HA), ","), SQ, format(int(AREA26_M2), ","), SQ,
                RAIN26_MM, RAIN26_M, format(int(AREA26_M2), ","), SQ, RAIN26_M,
                format(int(TOTAL26), ","), CU, format(int(TOTAL26), ","),
                format(int(ANS26), ","), CU, format(int(INFIL26), ","), CU)),
  focus="Convert hectares and millimetres to SI units before applying a runoff fraction.")


# ---- Q27  Topic 4.7, Skill 1.B ----------------------------------------
Q(topic="4.7", skill="1.B", diff=2,
  stem=("Which explanation correctly accounts for why the Northern Hemisphere experiences summer "
        "in June and July?"),
  answer=("Earth's axis is tilted about 23.5 degrees, so in June the Northern Hemisphere tilts "
          "toward the Sun and receives sunlight at a higher angle and for more hours each day, "
          "concentrating more energy per unit area."),
  distractors=[
      ("Earth's elliptical orbit brings the planet closest to the Sun in June, so the reduced "
       "distance delivers more solar energy to the Northern Hemisphere during those months.",
       "Earth is actually nearest the Sun in early January, and the small orbital distance "
       "variation cannot explain hemispheres having opposite seasons at the same time."),
      ("Earth's axial tilt increases to about 23.5 degrees during June and returns toward zero in "
       "December, and the greater tilt is what concentrates solar energy in the north.",
       "The tilt is essentially constant through the year; what changes is the orientation of "
       "that fixed tilt relative to the Sun as Earth moves along its orbit."),
      ("Prevailing winds carry warm equatorial air northward in June and southward in December, "
       "and this seasonal redistribution of heat rather than solar input produces the seasons.",
       "Atmospheric and oceanic heat transport moderates regional climate but is a consequence of "
       "the uneven solar heating, not the cause of the seasonal cycle itself."),
  ],
  why_right=("Seasons are produced by Earth's fixed axial tilt of about 23.5 degrees combined with "
             "its orbit. In June the Northern Hemisphere is tilted toward the Sun, which has two "
             "reinforcing effects: sunlight strikes the surface at a steeper angle, so a given "
             "beam of light is spread over less ground area and delivers more energy per square "
             "metre, and the days are longer, so that higher-intensity radiation is received for "
             "more hours. The Southern Hemisphere is tilted away at the same time and has winter, "
             "which is the decisive evidence that distance from the Sun cannot be the cause."),
  focus=("Attribute seasonality to axial tilt changing the angle and duration of insolation, not "
         "to orbital distance."))


# ---- Q28  Topic 4.9, Skill 1.C ----------------------------------------
Q(topic="4.9", skill="1.C", diff=3,
  stem=("During a strong El Nino year, the normally strong easterly trade winds across the "
        "tropical Pacific weaken. Which prediction about the Peruvian coast, with its mechanism, "
        "is best supported?"),
  answer=("Upwelling of cold nutrient-rich water weakens because the winds pushing surface water "
          "offshore have slackened, so primary productivity falls and the anchovy fishery "
          "declines with it."),
  distractors=[
      ("Upwelling intensifies because warm surface water moving eastward displaces the deeper cold "
       "water upward, so nutrient supply and fishery yields both rise sharply.",
       "Warm surface water accumulating along the coast deepens the thermocline and suppresses "
       "upwelling rather than forcing deep water up; the fishery collapses in El Nino years."),
      ("Upwelling is unaffected because it is driven by the density difference between cold deep "
       "water and warm surface water, which does not depend on surface wind strength.",
       "Coastal upwelling is wind-driven: offshore-moving surface water is replaced from below. "
       "Removing the wind removes the mechanism, whatever the density structure."),
      ("Upwelling weakens, and primary productivity rises because the warmer surface water "
       "accelerates phytoplankton growth rates enough to offset the reduced nutrient supply.",
       "The upwelling conclusion is right, but nutrient supply rather than temperature limits "
       "productivity in this system, so warmer water cannot compensate for the loss of "
       "nutrients."),
  ],
  why_right=("Normal conditions have strong easterly trade winds pushing warm surface water "
             "westward across the Pacific; along the South American coast that departing surface "
             "water is replaced by cold, nutrient-rich water rising from depth. That upwelling "
             "supplies the nitrogen and phosphorus supporting one of the world's most productive "
             "fisheries. When the trades weaken during El Nino, warm water sloshes back eastward "
             "and piles up along the coast, deepening the thermocline and shutting down the "
             "upwelling. Without the nutrient supply, phytoplankton productivity collapses, and "
             "that loss propagates up the food chain to the anchovy fishery and the seabirds and "
             "marine mammals that depend on it."),
  focus=("Trace a wind-driven upwelling mechanism from a change in wind strength through nutrient "
         "supply to fishery productivity."))


# ---- Q29  Topic 4.1, Skill 1.A ----------------------------------------
Q(topic="4.1", skill="1.A", diff=1,
  stem=("Which description correctly characterizes a convergent plate boundary where oceanic "
        "lithosphere meets continental lithosphere, and the landforms it produces?"),
  answer=("The denser oceanic plate subducts beneath the continental plate, producing a deep "
          "offshore trench and, inland of that trench, a chain of volcanic mountains."),
  distractors=[
      ("The denser continental plate subducts beneath the oceanic plate, producing a deep offshore "
       "trench and a chain of volcanic mountains on the ocean floor.",
       "Continental lithosphere is less dense than oceanic lithosphere, so it resists subduction; "
       "the oceanic plate is the one that descends."),
      ("The two plates move apart as new material rises between them, producing a mid-ocean ridge "
       "and a rift valley along the continental margin.",
       "This describes a divergent boundary. At a convergent boundary the plates move toward each "
       "other rather than apart."),
      ("The two plates slide horizontally past each other without either descending, producing "
       "frequent earthquakes but no volcanoes and no trench.",
       "This describes a transform boundary, such as the San Andreas Fault, rather than a "
       "convergent one."),
  ],
  why_right=("At an oceanic-continental convergent boundary, the density contrast decides the "
             "outcome: oceanic lithosphere, made of denser basaltic rock, descends beneath the "
             "less dense continental lithosphere. The bend where the plate begins to descend forms "
             "a deep trench offshore. As the subducting slab sinks it heats and releases water "
             "into the overlying mantle, lowering the melting point and generating magma that "
             "rises to build a volcanic mountain arc inland of the trench. The Andes above the "
             "Peru-Chile Trench and the Cascades of the Pacific Northwest are both examples."),
  focus=("Use the density difference between oceanic and continental lithosphere to describe which "
         "plate subducts and what landforms result."))


# ---- Q30  Topic 4.8, Skill 2.B ----------------------------------------
_q30_el = [viz.ARROW_DEFS]
_q30_el.append(viz.path_el("M 30 250 L 170 250 L 235 84 L 300 250 L 440 250 Z",
                           fill="#C7B89A", stroke="#7A6A4F", sw=1.6))
_q30_el.append(viz.text_el(235, 72, "mountain range", size=11, anchor="middle"))
# moist air approaching
_q30_el.append(viz.line_el(34, 150, 150, 150, stroke="#1565C0", sw=2.4, arrow=True))
_q30_el.append(viz.text_el(36, 138, "moist ocean air", size=10.5, fill="#1565C0"))
_q30_el.append(viz.line_el(158, 142, 212, 100, stroke="#1565C0", sw=2.4, arrow=True))
# rain on windward
for i, x in enumerate((150, 168, 186, 204)):
    _q30_el.append(viz.line_el(x, 176 + i * 2, x - 6, 196 + i * 2, stroke="#1565C0", sw=1.6))
_q30_el.append(viz.text_el(120, 215, "Side P", size=12, weight="bold", anchor="middle"))
_q30_el.append(viz.text_el(120, 232, "2,150 mm/yr", size=10.5, anchor="middle"))
# descending air on lee
_q30_el.append(viz.line_el(258, 100, 318, 160, stroke="#C41230", sw=2.4, arrow=True))
_q30_el.append(viz.line_el(324, 165, 430, 180, stroke="#C41230", sw=2.4, arrow=True))
_q30_el.append(viz.text_el(350, 210, "Side Q", size=12, weight="bold", anchor="middle"))
_q30_el.append(viz.text_el(350, 227, "240 mm/yr", size=10.5, anchor="middle"))
_q30_fig = viz.sketch(470, 266, _q30_el,
                      caption="Prevailing winds cross a coastal mountain range from left to "
                              "right. Annual precipitation is shown for each side.")

Q(topic="4.8", skill="2.B", diff=2, visual=_q30_fig,
  stem=("Which explanation best accounts for the nearly ninefold difference in annual "
        "precipitation between Side P and Side Q of this mountain range?"),
  answer=("Air forced up the windward slope cools until its water vapor condenses and falls on "
          "Side P, then warms as it descends on Side Q, which leaves that side dry."),
  distractors=[
      ("Side Q is farther from the ocean, so the moisture in the air mass is simply used up by "
       "the distance travelled rather than by anything the mountain range does to the air.",
       "Distance alone does not create this sharp a boundary. The abrupt change occurs across the "
       "ridge itself, which identifies the mountain as the cause."),
      ("Air descending on Side Q cools as it loses altitude, and cool air holds very little water "
       "vapor, so almost no precipitation can form on that side of the range.",
       "Descending air is compressed and warms rather than cooling. Reversing that temperature "
       "change inverts the mechanism behind a rain shadow."),
      ("The mountain range physically blocks clouds from crossing the ridge, so the water in them "
       "remains on Side P and no air reaches Side Q to deliver precipitation.",
       "Air does cross the ridge, as the arrows show; it arrives on Side Q dry rather than being "
       "blocked. Clouds are not solid objects held back by terrain."),
  ],
  why_right=("This is the orographic rain-shadow effect, and it depends on how temperature changes "
             "with altitude. On the windward side, air is forced to rise, expands as pressure "
             "falls, and cools; cooler air holds less water vapor, so the air reaches saturation "
             "and releases moisture as the 2,150 mm falling on Side P. Having lost that water, the "
             "air crosses the ridge and descends on the leeward side, where it is compressed and "
             "warms. Warmer air can hold more water vapor, so its relative humidity drops further "
             "and it evaporates moisture from the land instead of delivering rain — leaving "
             "Side Q with 240 mm. The same mechanism explains the aridity east of the Sierra "
             "Nevada and the Cascades."),
  focus=("Explain a windward-leeward precipitation contrast through adiabatic cooling on ascent "
         "and warming on descent."))


# ══════════════════════════════════════════════════════════════════════════
# UNIT 5 - Land and Water Use (10 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q31  Topic 5.1, Skill 3.B ----------------------------------------
_q31_fig = viz.source_block(
    "Let the Fleet Decide",
    "Letter to a regional fisheries council (written for this exam)",
    ["Every boat in this harbor knows the stock better than any regulator. If the fish were truly "
     "running out, we would be the first to pull back, because our livelihoods depend on next "
     "year's catch as much as this one's.",
     "Quotas assume we cannot see what is in front of us. Remove them, let each captain judge "
     "what the water can give, and the fleet will land exactly as much as the stock can bear."],
    w=470)

Q(topic="5.1", skill="3.B", diff=3, visual=_q31_fig,
  stem=("Which description best identifies the key assumption the author's argument depends on?"),
  answer=("That each captain acting in self-interest will voluntarily cut their own catch, even "
          "though fish they leave can be taken by a competing boat."),
  distractors=[
      ("That captains have more accurate information about the stock than regulators do, which is "
       "the only claim the argument requires in order to hold.",
       "The author does assert this, but superior information is not sufficient: the argument "
       "still needs each captain to act on that information by cutting their own catch when "
       "others may not."),
      ("That the fish stock is already at a sustainable level, so no reduction in total catch by "
       "anyone in the fleet is necessary in the first place.",
       "The author explicitly allows that the stock could be running out and argues the fleet "
       "would respond, so the argument does not depend on the stock being healthy now."),
      ("That government quotas have historically been set too low, so removing them would allow "
       "the fleet to land a larger total catch without harming the stock.",
       "The letter makes no claim about past quota levels or about increasing total catch; it "
       "argues that the fleet would land the right amount on its own."),
  ],
  why_right=("The argument rests on a shared resource regulating itself through individual "
             "self-interest, which is exactly the assumption the tragedy of the commons "
             "identifies as unreliable. When a resource is open to all, the benefit of taking one "
             "more fish goes entirely to the boat that takes it, while the cost of a depleted "
             "stock is spread across the whole fleet. A captain who holds back therefore pays the "
             "full cost of restraint and sees the fish taken by someone else, so restraint is "
             "individually irrational even when every captain understands the stock perfectly. "
             "Identifying the assumption means naming that gap between private benefit and shared "
             "cost."),
  focus=("Identify the unstated assumption in an argument about a common-pool resource, "
         "distinguishing it from claims the author states outright."))


# ---- Q32  Topic 5.5, Skill 7.D ----------------------------------------
_q32_fig = viz.table(
    ["Irrigation method", "Water delivered to root zone (%)", "Salinization risk",
     "Installation cost"],
    [["Flood / furrow", "40", "high", "low"],
     ["Spray (center pivot)", "70", "moderate", "moderate"],
     ["Drip", "92", "low", "high"]],
    w=470, col_w=[1.3, 1.5, 1.0, 1.0],
    caption="Performance of three irrigation methods on an arid-region farm.")

Q(topic="5.5", skill="7.D", diff=2, visual=_q32_fig,
  stem=("A farm in an arid region draws from a declining aquifer and has begun to see salt crusts "
        "on its fields. Which recommendation does the data in the table most strongly support?"),
  answer=("Convert to drip irrigation: delivering 92% of water to the root zone cuts aquifer "
          "withdrawals the most, and its low salinization risk addresses the salt already seen."),
  distractors=[
      ("Stay with flood irrigation, because its low installation cost leaves more capital "
       "available, and the 40% delivery figure means the other 60% recharges the aquifer the farm "
       "depends on.",
       "Most water lost under flood irrigation evaporates rather than recharging the aquifer, and "
       "this method carries the table's highest salinization risk on a farm already seeing salt "
       "crusts."),
      ("Convert to spray irrigation, because its moderate cost and moderate salinization risk "
       "represent the best balance, and 70% delivery is sufficient to halt aquifer decline.",
       "Spray is an improvement, but the data give no basis for claiming 70% halts the decline, "
       "and it leaves moderate salinization risk on fields where salt is already appearing."),
      ("Convert to drip irrigation, because its high installation cost will be recovered through "
       "the higher crop yields that drip systems produce in every soil type.",
       "The recommendation is right but the justification is not in the table, which reports no "
       "yield data at all; the supported case rests on water delivery and salinization risk."),
  ],
  why_right=("Two pieces of evidence in the table bear on the farm's two stated problems. For the "
             "declining aquifer, delivery efficiency determines how much must be withdrawn to "
             "wet the root zone: at 92%, drip requires far less pumping than spray at 70% or "
             "flood at 40%. For the salt crusts, drip carries the lowest salinization risk, "
             "because applying small volumes directly to roots avoids the repeated wet-and-"
             "evaporate cycling that concentrates dissolved salts at the surface. Drip is the only "
             "option the data support on both counts; its high installation cost is a real "
             "trade-off that the water savings must be weighed against."),
  focus=("Select a solution using the specific data columns that bear on each stated problem, "
         "rather than on information the table does not contain."))


# ---- Q33  Topic 5.11, Skill 6.C, numeric -------------------------------
POP33 = 250000.0
PC33 = 4.8
ANS33 = POP33 * PC33          # 1,200,000 gha
DIV33 = POP33 / PC33          # 52,083.33
DEC33 = ANS33 / 10.0          # 120,000
SUM33 = POP33 + PC33 * 1000   # 254,800 (added rather than multiplied)
assert abs(ANS33 - 1200000) < 1e-6

Q(topic="5.11", skill="6.C", diff=1, numeric=True,
  stem=("A city of %s residents has an average ecological footprint of %.1f global hectares (gha) "
        "per person. What is the total ecological footprint of the city?"
        % (format(int(POP33), ","), PC33)),
  answer="%s gha" % format(int(ANS33), ","),
  distractors=[
      ("%s gha" % format(int(DIV33), ","),
       "This divides the population by the per-capita footprint. A per-person quantity is "
       "multiplied by the number of people, not divided into it."),
      ("%s gha" % format(int(DEC33), ","),
       "This is the correct product with a misplaced decimal, as if the footprint were 0.48 gha "
       "per person rather than %.1f." % PC33),
      ("%s gha" % format(int(SUM33), ","),
       "This combines the two figures by addition. Population and per-capita footprint have "
       "different units and must be multiplied to give total area."),
  ],
  why_right=("An ecological footprint is an area per person, so the total is simply the per-capita "
             "value times the number of people: %s residents × %.1f gha/person = %s gha. The "
             "units confirm the operation — persons × (gha/person) leaves gha. "
             "Comparing that total against the biologically productive land actually available is "
             "what reveals whether a city is running an ecological deficit, and cities almost "
             "always depend on area far beyond their own boundaries."
             % (format(int(POP33), ","), PC33, format(int(ANS33), ","))),
  focus="Multiply a per-capita rate by population, using unit cancellation to check the operation.")


# ---- Q34  Topic 5.6, Skill 1.C ----------------------------------------
Q(topic="5.6", skill="1.C", diff=2,
  stem=("A grower applies the same insecticide to a cornfield every season. Control is excellent "
        "for three years, then declines sharply even though the application rate is unchanged. "
        "Which explanation accounts for the loss of effectiveness?"),
  answer=("A few insects already carried heritable resistance; the insecticide killed susceptible "
          "individuals each season, so resistant survivors came to dominate."),
  distractors=[
      ("Repeated exposure caused individual insects to develop resistance during their lifetimes, "
       "and they passed that acquired tolerance on to their offspring.",
       "Individuals do not acquire heritable resistance from exposure. Resistance alleles must "
       "already be present in the population for selection to act on them."),
      ("The insecticide degraded in storage over the three years, so later applications delivered "
       "a lower effective dose despite the unchanged application rate.",
       "This would explain reduced control, but it is contradicted by resistance appearing in "
       "generation after generation of the pest; a storage problem would not select for "
       "resistant insects."),
      ("The pest population grew so large over three years that the same quantity of insecticide "
       "was spread across more individuals, reducing the dose each insect received.",
       "Application rate is set per unit area, not per insect, so each insect receives a similar "
       "exposure regardless of population size."),
  ],
  why_right=("This is natural selection operating on a pest population, sometimes called the "
             "pesticide treadmill. Variation in resistance exists in the population before any "
             "spraying, usually at low frequency. The insecticide acts as a strong selective "
             "agent: susceptible individuals die and resistant ones survive to reproduce, passing "
             "the resistance alleles on. Each generation the resistant fraction grows, and with "
             "short generation times and large populations the shift can take only a few seasons. "
             "The population evolves; no individual insect changes. Growers then face escalating "
             "doses or new chemicals, which is a central argument for integrated pest management."),
  focus=("Explain pesticide resistance as selection on pre-existing heritable variation, not as "
         "traits acquired by individuals."))


# ---- Q35  Topic 5.14, Skill 7.F ---------------------------------------
Q(topic="5.14", skill="7.F", diff=2,
  stem=("An orchard facing repeated pesticide resistance adopts integrated pest management, "
        "combining pest monitoring, crop rotation, natural predators, and chemical sprays used "
        "only above a damage threshold. Which justification for IPM over spraying on a fixed "
        "schedule is strongest?"),
  answer=("Spraying only when monitoring shows pests above a damage threshold cuts pesticide use, "
          "slowing the selection that drives resistance, while the other controls act by "
          "independent means."),
  distractors=[
      ("Spraying at lower doses above the damage threshold keeps exposure too mild for insects "
       "to respond to, so the pests are not stimulated into developing resistance.",
       "Resistance is not induced in individuals by exposure; it arises by selection on heritable "
       "variation already present. Sub-lethal doses can actually let partly resistant insects "
       "survive and reproduce, which speeds resistance."),
      ("Monitoring lets the grower switch to a stronger insecticide as soon as pests pass the "
       "damage threshold, so resistant individuals are killed before they can reproduce.",
       "Escalating to stronger chemicals is the pesticide treadmill IPM is designed to escape; "
       "it intensifies selection and invites resistance to the new chemical as well."),
      ("Natural predators and crop rotation are inexpensive inputs, so the monitored program "
       "costs the orchard less than scheduled spraying from its first season onward.",
       "IPM requires monitoring labour and expertise and is often costlier at the outset; cost in "
       "the first season is a weak justification compared with the resistance argument."),
  ],
  why_right=("The strongest justification addresses the specific problem the orchard has. "
             "Resistance is driven by selection pressure, and selection pressure scales with how "
             "consistently and heavily a chemical is applied. Scheduled spraying applies it "
             "whether or not pests are present, which maximizes that pressure. Threshold-based "
             "spraying cuts the number of applications, so a larger share of the pest population "
             "escapes exposure and susceptible alleles are retained. Meanwhile rotation, "
             "predators, and monitoring suppress pests through mechanisms resistance to one "
             "chemical does not defeat. The combination addresses the cause rather than "
             "escalating the dose."),
  focus=("Justify an integrated solution by connecting it to the mechanism causing the problem, "
         "without overclaiming what the solution eliminates."))


# ---- Q36  Topic 5.8, Skill 5.C ----------------------------------------
_q36_catch = [(1980, 12), (1985, 28), (1990, 47), (1995, 58), (2000, 41),
              (2005, 26), (2010, 17), (2015, 14), (2020, 13)]
_q36_effort = [(1980, 20), (1985, 42), (1990, 70), (1995, 96), (2000, 112),
               (2005, 124), (2010, 131), (2015, 136), (2020, 138)]
_q36_fig = viz.line_chart(
    [{"name": "Total catch (thousand t)", "points": _q36_catch, "color": "#C41230"},
     {"name": "Fishing effort (index)", "points": _q36_effort, "color": "#1565C0"}],
    "Year", "Catch (thousand t) / effort index",
    (1980, 2020), (0, 150), w=470, h=300,
    x_ticks=[1980, 1990, 2000, 2010, 2020], y_ticks=[0, 30, 60, 90, 120, 150], legend_pos="tl",
    caption="Reported catch and fishing effort for a commercial cod fishery.")

Q(topic="5.8", skill="5.C", diff=3, visual=_q36_fig,
  stem=("Which conclusion about this fishery is best supported by the relationship between the "
        "two curves after 1995?"),
  answer=("The stock has been overfished: effort kept climbing while catch fell by about "
          "three-quarters, so each added unit of effort takes fish from a shrinking population."),
  distractors=[
      ("The fishery is approaching sustainable yield, because catch has levelled off near 13,000 "
       "tonnes since 2010 while effort has also stabilized, indicating a new equilibrium.",
       "Effort continued rising from 131 to 138 after 2010, and a catch that has fallen to "
       "one-quarter of its peak is a collapsed stock rather than a sustainable yield."),
      ("Catch declined because fishing effort declined after 1995, so reduced harvesting rather "
       "than stock depletion accounts for the falling catch.",
       "This misreads the graph: effort rises continuously from 96 in 1995 to 138 in 2020. The "
       "two curves diverge rather than falling together."),
      ("The data are inconclusive about stock size, because catch depends only on how much effort "
       "is applied and gives no information about the fish population itself.",
       "Catch per unit effort is precisely the standard index of stock abundance, and here it "
       "falls sharply, which is informative rather than inconclusive."),
  ],
  why_right=("The diagnostic quantity is catch per unit of effort. In 1995 the fishery landed "
             "58,000 t at an effort index of 96, roughly 0.60 units of catch per unit of effort. "
             "By 2020 it landed 13,000 t at an effort index of 138, roughly 0.09 — about "
             "one-seventh as productive per unit of effort. When effort rises and catch falls, the "
             "only consistent explanation is that the underlying population has declined. The "
             "rising effort masked the decline for a time, because better gear and more boats kept "
             "total landings up while the stock was already shrinking, which is why catch alone is "
             "a misleading indicator of fishery health."),
  focus=("Combine two diverging trends into catch per unit effort to diagnose stock depletion "
         "rather than reading either curve alone."))


# ---- Q37  Topic 5.3, Skill 7.C ----------------------------------------
Q(topic="5.3", skill="7.C", diff=2,
  stem=("A region adopts Green Revolution agriculture: high-yield grain varieties grown with "
        "synthetic fertilizer, pesticides, and expanded irrigation. Grain output per hectare "
        "triples. Which description of the unintended consequences is most accurate?"),
  answer=("Yields rise sharply, but fertilizer runoff drives eutrophication, irrigation depletes "
          "aquifers and salinizes soil, and relying on few varieties narrows genetic diversity."),
  distractors=[
      ("Yields rise sharply with no significant environmental cost, because higher output per "
       "hectare means less total land is cultivated and the land spared offsets every other "
       "impact.",
       "Land sparing is a real benefit, but it does not offset the water, nutrient, and "
       "biodiversity impacts that occur on the land still farmed."),
      ("Yields rise sharply, but the main unintended consequence is a loss of soil fertility "
       "because synthetic fertilizer cannot supply the nitrogen and phosphorus that crops remove "
       "from the soil.",
       "Synthetic fertilizer does supply nitrogen and phosphorus effectively; the problems arise "
       "from the excess that leaves the field, not from an inability to replace nutrients."),
      ("Yields rise sharply, and the chief unintended consequence is an increase in crop genetic "
       "diversity as new high-yield varieties are added to the varieties already grown.",
       "High-yield varieties displace local landraces rather than adding to them, so genetic "
       "diversity narrows; this reverses the actual direction of the effect."),
  ],
  why_right=("Green Revolution packages raised yields dramatically and are credited with averting "
             "widespread famine, but each input carries a downstream cost. Nitrogen and phosphorus "
             "applied in excess of crop uptake run off into surface water, where they drive algal "
             "blooms, decomposition, and oxygen depletion. Expanded irrigation draws down aquifers "
             "faster than they recharge, and in arid regions repeated wetting and evaporation "
             "concentrates salts in the root zone. Replacing many locally adapted landraces with a "
             "few high-yield varieties narrows the genetic base that breeders draw on and leaves "
             "the crop more exposed to a single pest or pathogen. Recognizing the trade-off, "
             "rather than denying either side of it, is the accurate assessment."),
  focus=("Describe the multiple unintended consequences of an intensification strategy without "
         "either dismissing its benefits or inverting its effects."))


# ---- Q38  Topic 5.9, Skill 1.B ----------------------------------------
Q(topic="5.9", skill="1.B", diff=2,
  stem=("Water draining from an abandoned coal mine has a pH of 3.1 and carries high dissolved "
        "iron. Which explanation accounts for the acidity of this drainage?"),
  answer=("Mining exposed sulfide minerals such as pyrite to air and water; their oxidation "
          "produces sulfuric acid, which lowers the pH and dissolves metals out of the "
          "surrounding rock."),
  distractors=[
      ("Coal itself is acidic, so water passing through the remaining coal seams dissolves that "
       "acidity directly and carries it out of the mine as low-pH drainage.",
       "Coal is largely carbon and is not acidic in the sense required; the acidity is generated "
       "by chemical oxidation of sulfide minerals associated with the coal."),
      ("Acid rain falling on the mine site collects in the workings, and the enclosed space "
       "concentrates it by evaporation until the drainage reaches a pH near 3.",
       "Acid rain is typically near pH 4 to 4.5 and evaporation inside a wet mine cannot "
       "concentrate it to pH 3.1 while also dissolving the iron load observed."),
      ("Bacteria in the mine decompose organic matter and release carbon dioxide, which forms "
       "carbonic acid strong enough to bring the drainage to a pH near 3.",
       "Carbonic acid is weak and cannot drive pH down to 3.1; water saturated with carbon dioxide "
       "reaches only about pH 5.6."),
  ],
  why_right=("Acid mine drainage is a chemical weathering process that mining accelerates by "
             "exposing fresh rock surfaces. Pyrite (FeS₂) and similar sulfide minerals are "
             "stable while buried and oxygen-free, but once broken rock and spoil are exposed to "
             "oxygen and water the sulfide oxidizes to sulfate, generating sulfuric acid and "
             "releasing dissolved iron. The resulting strongly acidic water then leaches "
             "additional metals such as aluminium, manganese, and lead from the rock it contacts. "
             "Because the reaction continues as long as sulfide and oxygen are available, "
             "drainage from abandoned mines can persist for many decades after closure."),
  focus=("Explain acid mine drainage as oxidation of exposed sulfide minerals, distinguishing it "
         "from weak-acid and atmospheric sources."))


# ---- Q39  Topic 5.13, Skill 7.E ---------------------------------------
Q(topic="5.13", skill="7.E", diff=2,
  stem=("A city neighbourhood of rooftops, roads, and parking lots floods during moderate storms, "
        "and the stream it drains into runs warm and turbid afterward. Which proposed solution "
        "best addresses the cause of both problems?"),
  answer=("Replace some impervious surfaces with permeable pavement, rain gardens, and street "
          "trees, so stormwater infiltrates near where it falls rather than running off hot and "
          "turbid."),
  distractors=[
      ("Enlarge the storm sewer pipes and add a concrete channel along the stream, so the greater "
       "volume of runoff is carried away from the neighbourhood more quickly.",
       "Moving runoff away faster addresses the local flooding but worsens the stream, delivering "
       "the same warm, turbid water in an even sharper surge."),
      ("Require residents to direct downspouts onto their lawns, which will eliminate the "
       "neighbourhood's runoff entirely because lawn soil absorbs all the rain that reaches it.",
       "Redirecting downspouts helps, but compacted lawn soil has limited infiltration capacity "
       "and roofs are only part of the impervious area, so runoff is reduced rather than "
       "eliminated."),
      ("Install a shade structure over the stream to lower its temperature, which treats the "
       "thermal problem at the point where the warming is actually measured.",
       "Shading treats a symptom at the stream and leaves the runoff volume, flooding, and "
       "sediment load unaddressed."),
  ],
  why_right=("Both problems share one cause: impervious cover prevents infiltration, so nearly all "
             "rainfall becomes surface runoff. That runoff arrives fast, which produces flooding "
             "and erosive flows that suspend sediment; it also absorbs heat from sun-baked asphalt "
             "and roofs, which produces the thermal pulse. Green-infrastructure measures work on "
             "that shared cause by restoring infiltration: permeable pavement and rain gardens "
             "capture water where it falls, reducing both the volume and the peak rate reaching "
             "the stream, filtering sediment, and keeping water out of contact with hot "
             "pavement. Street trees add interception and shade that lowers surface temperatures."),
  focus=("Propose a solution that addresses the shared cause of two linked symptoms rather than "
         "treating either symptom separately."))


# ---- Q40  Topic 5.4, Skill 1.B ----------------------------------------
Q(topic="5.4", skill="1.B", diff=2,
  stem=("After twenty years of irrigation with river water, a field in a hot, dry region develops "
        "white crusts at the surface and declining yields. Which explanation accounts for this "
        "outcome?"),
  answer=("Irrigation water carries dissolved salts; evaporation and root uptake remove water and "
          "leave salts behind, until soil water is too saline for crops to draw from."),
  distractors=[
      ("Irrigation leaches nitrogen and phosphorus downward out of the root zone, and the white "
       "crusts are the fertilizer residues left at the surface once those nutrients are gone.",
       "Leaching moves soluble nutrients down and away, so it would not deposit them as surface "
       "crusts; the crusts are salts concentrated by evaporation."),
      ("Repeated wetting compacts the soil into an impermeable layer at the surface, and the white "
       "colour is the exposed mineral subsoil brought up as the topsoil erodes away.",
       "Compaction and erosion can both follow poor irrigation practice, but neither produces "
       "white soluble crusts, and the yield loss here follows salt accumulation."),
      ("The irrigation water raises soil pH until calcium carbonate precipitates, and the "
       "resulting alkalinity directly poisons the root cells of the crop plants.",
       "Carbonate precipitation can occur, but the central mechanism is osmotic: accumulated salts "
       "reduce the water potential of soil water rather than poisoning roots chemically."),
  ],
  why_right=("Even fresh river water contains dissolved salts. Plants take up water and leave most "
             "of those salts behind, and in hot dry climates evaporation removes additional water "
             "directly from the surface, concentrating salts further. Without enough drainage to "
             "flush them below the root zone, salts build up year after year and appear as "
             "visible crusts. The damage is osmotic: a saline soil solution has a lower water "
             "potential, so roots must work against a steeper gradient and can even lose water to "
             "the soil, producing drought-like symptoms in a wet field. Salinization has taken "
             "substantial irrigated area out of production worldwide, and it is addressed by "
             "applying extra water to leach salts, improving drainage, or shifting to "
             "salt-tolerant crops."),
  focus=("Explain salinization as evaporative concentration of dissolved salts and identify its "
         "osmotic effect on crops."))


# ══════════════════════════════════════════════════════════════════════════
# UNIT 6 - Energy Resources and Consumption (10 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q41  Topic 6.2, Skill 5.A ----------------------------------------
_q41_cats = ["Oil", "Coal", "Natural gas", "Hydro", "Nuclear", "Wind + solar"]
_q41_2000 = [38, 24, 21, 7, 7, 1]
_q41_2023 = [31, 26, 23, 7, 4, 7]
assert sum(_q41_2000) == 98 and sum(_q41_2023) == 98
_q41_fig = viz.bar_chart(
    _q41_cats,
    [{"name": "2000", "values": _q41_2000, "color": "#9AA5B1"},
     {"name": "2023", "values": _q41_2023, "color": "#C41230"}],
    "Percent of global primary energy", 45, w=470, h=310,
    y_ticks=[0, 10, 20, 30, 40],
    caption="Share of global primary energy supply by source. Figures are illustrative "
            "and rounded; remaining percent is traditional biomass.")

Q(topic="6.2", skill="5.A", diff=1, visual=_q41_fig,
  stem=("Which statement accurately describes the patterns in global primary energy supply shown "
        "between 2000 and 2023?"),
  answer=("Wind and solar grew from 1% to 7% of supply, by far the largest proportional increase "
          "shown, yet oil, coal, and gas together still supplied the clear majority in 2023."),
  distractors=[
      ("Wind and solar grew from 1% to 7% of supply, and that growth was large enough that fossil "
       "fuels no longer supplied the majority of global primary energy in 2023.",
       "The growth figure is read correctly, but oil, coal, and gas together total 80% in 2023, "
       "which is still a large majority."),
      ("Coal and natural gas both declined as oil did, showing that every fossil fuel lost share "
       "over the period while renewable sources gained.",
       "Only oil declined, from 38% to 31%. Coal rose from 24% to 26% and natural gas from 21% to "
       "23%, so the fossil fuels did not move together."),
      ("Nuclear and hydroelectric power both grew over the period, which accounts for most of the "
       "share that oil lost between 2000 and 2023.",
       "Hydro held steady at 7% and nuclear fell from 7% to 4%, so neither gained share and "
       "neither absorbed oil's decline."),
  ],
  why_right=("Reading each pair of bars: oil fell 38% to 31%, coal rose 24% to 26%, natural gas "
             "rose 21% to 23%, hydro was flat at 7%, nuclear fell 7% to 4%, and wind plus solar "
             "rose 1% to 7%. Wind and solar therefore show the largest proportional change — "
             "a sevenfold increase in share — but it is important to read the absolute level "
             "too: oil, coal, and gas sum to 80% of supply in 2023 against 83% in 2000. Rapid "
             "growth from a small base is entirely compatible with fossil fuels remaining "
             "dominant, and conflating the two is the most common error with this kind of chart."),
  focus=("Distinguish proportional change from absolute share when describing trends in a grouped "
         "bar chart."))


# ---- Q42  Topic 6.5, Skill 6.C, numeric -------------------------------
COAL42 = 2400.0            # metric tons per day
EC42 = 24000.0             # MJ per metric ton
EFF42 = 0.35
IN42 = COAL42 * EC42                 # 57,600,000 MJ
ANS42 = IN42 * EFF42                 # 20,160,000 MJ
WASTE42 = IN42 * (1 - EFF42)         # 37,440,000 MJ
DIVIDED42 = IN42 / EFF42             # 164,571,428.6
assert abs(IN42 - 57600000) < 1e-6 and abs(ANS42 - 20160000) < 1e-6

Q(topic="6.5", skill="6.C", diff=3, numeric=True,
  stem=("A coal-fired power plant burns %s metric tons of coal per day. The coal has an energy "
        "content of %s MJ per metric ton, and the plant converts %d%% of that energy into "
        "electricity. How much electrical energy does the plant produce per day?"
        % (format(int(COAL42), ","), format(int(EC42), ","), int(EFF42 * 100))),
  answer="%s MJ" % format(int(ANS42), ","),
  distractors=[
      ("%s MJ" % format(int(WASTE42), ","),
       "This is 65%% of the energy input, which is the share rejected as waste heat rather than "
       "the electricity generated."),
      ("%s MJ" % format(int(IN42), ","),
       "This is the chemical energy contained in the coal burned. The 35%% conversion efficiency "
       "still has to be applied to it."),
      ("%s MJ" % format(int(round(DIVIDED42)), ","),
       "This divides by the efficiency instead of multiplying. Dividing by a fraction less than "
       "one increases the value, but useful output must be smaller than energy input."),
  ],
  why_right=("Two steps. Energy input: %s t/day × %s MJ/t = %s MJ/day. Electrical output: %s "
             "MJ × 0.35 = %s MJ/day. The remaining %s MJ leaves as waste heat through the "
             "cooling system and stack, which is why thermal power plants need large water bodies "
             "for cooling and why their efficiency is bounded well below 100%% by the "
             "thermodynamics of heat engines. A check on direction: output must always be less "
             "than input."
             % (format(int(COAL42), ","), format(int(EC42), ","), format(int(IN42), ","),
                format(int(IN42), ","), format(int(ANS42), ","), format(int(WASTE42), ","))),
  focus="Apply a conversion efficiency as multiplication by a fraction and distinguish useful "
        "output from rejected waste heat.")


# ---- Q43  Topic 6.6, Skill 1.B ----------------------------------------
Q(topic="6.6", skill="1.B", diff=2,
  stem=("Which explanation correctly describes how a nuclear fission reactor generates electricity "
        "and identifies the role of the control rods?"),
  answer=("Fission of uranium nuclei releases heat that boils water to drive a steam turbine, and "
          "control rods absorb neutrons to regulate how many further fissions occur, holding "
          "the chain reaction steady."),
  distractors=[
      ("Fusion of uranium nuclei releases heat that boils water to drive a steam turbine, and "
       "control rods absorb neutrons to regulate how many further reactions occur.",
       "Commercial reactors use fission, the splitting of heavy nuclei, not fusion. Fusion "
       "combines light nuclei and is not yet used for commercial power."),
      ("Fission releases heat that boils water to drive a steam turbine, and control rods release "
       "additional neutrons to sustain the chain reaction, which would otherwise stop on its own.",
       "Control rods absorb neutrons rather than releasing them; raising them lets the reaction "
       "intensify and lowering them slows it."),
      ("Fission releases electrical energy directly as charged fragments are collected on "
       "electrodes, and control rods conduct that current out of the reactor core to the grid.",
       "Fission energy is harvested as heat and converted through a conventional steam cycle; no "
       "charge is collected directly, and control rods are neutron absorbers, not conductors."),
  ],
  why_right=("A nuclear plant is a thermal power plant whose heat source is nuclear rather than "
             "chemical. A neutron striking a uranium-235 nucleus splits it, releasing energy and "
             "additional neutrons that can split further nuclei — a chain reaction. The heat "
             "produces steam that spins a turbine and generator, exactly as in a coal plant. "
             "Control rods, made of neutron-absorbing materials such as boron or cadmium, set the "
             "reaction rate: inserting them further absorbs more neutrons and slows fission, while "
             "withdrawing them allows more neutrons to continue the chain. Keeping the reaction "
             "exactly self-sustaining, neither growing nor dying out, is what the rods are "
             "adjusted for."),
  focus=("Explain the fission-to-steam energy pathway and the neutron-absorbing function of "
         "control rods."))


# ---- Q44  Topic 6.8, Skill 6.B, numeric -------------------------------
NEED44 = 219000.0          # kWh per year
PANEL44 = 2.0              # kWh per panel per day
DAYS44 = 365.0
PER_YR44 = PANEL44 * DAYS44          # 730 kWh/panel/yr
ANS44 = NEED44 / PER_YR44            # 300 panels
NO_DAYS44 = NEED44 / PANEL44         # 109,500 (treated daily output as annual)
HALF44 = NEED44 / (1.0 * DAYS44)     # 600 (used 1.0 kWh/day)
MULT44 = NEED44 * PER_YR44           # 159,870,000 (multiplied instead of divided)
assert abs(ANS44 - 300) < 1e-9

Q(topic="6.8", skill="6.B", diff=2, numeric=True,
  stem=("A school uses %s kWh of electricity per year. Each solar panel it is considering produces "
        "an average of %.1f kWh per day across the year. How many panels are needed to meet the "
        "school's annual electricity use?" % (format(int(NEED44), ","), PANEL44)),
  answer="%s panels" % format(int(ANS44), ","),
  distractors=[
      ("%s panels" % format(int(HALF44), ","),
       "This assumes each panel averages 1.0 kWh per day rather than %.1f, and halving the "
       "per-panel output doubles the number of panels required." % PANEL44),
      ("%s panels" % format(int(NO_DAYS44), ","),
       "This divides the annual demand by the daily per-panel output, skipping the conversion to "
       "annual output. The units do not match: kWh/year divided by kWh/day leaves days, not "
       "panels."),
      ("%s panels" % format(int(MULT44), ","),
       "This multiplies the demand by the per-panel annual output instead of dividing. "
       "Multiplying two large quantities cannot yield a count of panels."),
  ],
  why_right=("Put both quantities on the same time basis before dividing. Each panel produces %.1f "
             "kWh/day × %d days = %s kWh per year. Panels needed = %s kWh/yr ÷ %s "
             "kWh/panel/yr = %s panels. The units confirm it: kWh/year ÷ (kWh/panel/year) "
             "leaves panels. Note that this sizing only balances annual totals — because "
             "solar output peaks at midday and in summer while school demand does not, meeting "
             "demand hour by hour would also require storage or a grid connection."
             % (PANEL44, int(DAYS44), format(int(PER_YR44), ","), format(int(NEED44), ","),
                format(int(PER_YR44), ","), format(int(ANS44), ","))),
  focus="Match time units before dividing a demand by a per-unit output rate.")


# ---- Q45  Topic 6.12, Skill 7.C ---------------------------------------
Q(topic="6.12", skill="7.C", diff=2,
  stem=("A utility proposes replacing a retiring coal plant with a large onshore wind farm. Which "
        "description of the trade-offs of that substitution is most accurate?"),
  answer=("Wind generates electricity with no fuel cost and almost no operating emissions, but "
          "output varies with wind speed, so the grid needs storage or backup, and turbines "
          "kill birds and bats."),
  distractors=[
      ("Wind generates electricity with no fuel cost and no emissions at any stage, and because "
       "wind blows somewhere at all times a large enough wind farm needs no backup capacity of any "
       "kind.",
       "Manufacturing and installing turbines does produce emissions, and a single wind farm "
       "experiences calm periods, so backup or storage remains necessary."),
      ("Wind produces more total emissions than coal once turbine manufacturing is counted, so the "
       "substitution increases the utility's lifetime emissions despite having no fuel costs.",
       "Life-cycle emissions from wind are a small fraction of those from coal combustion; "
       "manufacturing does not reverse the comparison."),
      ("Wind output is constant and fully predictable, so the main trade-off is that the turbines "
       "require far more land area per unit of electricity than a coal plant and its fuel supply "
       "chain combined.",
       "Wind output is variable rather than constant, and the land between turbines remains usable "
       "for farming or grazing, while coal's footprint includes the mine and waste disposal."),
  ],
  why_right=("An accurate trade-off assessment names real advantages and real costs. On the "
             "advantage side, wind has no fuel cost, no combustion emissions, no air pollutants "
             "such as sulfur dioxide or mercury, and no cooling-water demand. On the cost side, "
             "output is intermittent and tied to weather, which means the grid must pair it with "
             "storage, transmission to areas with complementary conditions, or dispatchable "
             "generation; turbines kill birds and bats, with raptors and migratory bats most "
             "affected; and there are noise, visual, and siting objections. Life-cycle emissions "
             "from manufacturing are real but far smaller than coal combustion emissions."),
  focus=("Weigh the specific advantages and unintended consequences of an energy substitution "
         "without overstating either side."))


# ---- Q46  Topic 6.13, Skill 6.C, numeric -------------------------------
VANS46 = 40.0
KM46 = 24000.0
OLD46 = 12.0               # L per 100 km
NEW46 = 8.0
OLD_TOT46 = VANS46 * KM46 * OLD46 / 100.0     # 115,200 L
NEW_TOT46 = VANS46 * KM46 * NEW46 / 100.0     # 76,800 L
ANS46 = OLD_TOT46 - NEW_TOT46                 # 38,400 L
PER_VAN46 = KM46 * (OLD46 - NEW46) / 100.0    # 960 L
assert abs(ANS46 - 38400) < 1e-6 and abs(PER_VAN46 - 960) < 1e-6

Q(topic="6.13", skill="6.C", diff=2, numeric=True,
  stem=("A delivery company runs %d vans, each driven %s km per year. It replaces vans that "
        "consume %.0f L of fuel per 100 km with models that consume %.0f L per 100 km. How much "
        "fuel does the whole fleet save per year?"
        % (int(VANS46), format(int(KM46), ","), OLD46, NEW46)),
  answer="%s L" % format(int(ANS46), ","),
  distractors=[
      ("%s L" % format(int(PER_VAN46), ","),
       "This is the saving for a single van. The question asks about the whole fleet, so this "
       "figure still has to be multiplied by the %d vans." % int(VANS46)),
      ("%s L" % format(int(NEW_TOT46), ","),
       "This is the fleet's fuel consumption after the replacement, not the amount saved by it."),
      ("%s L" % format(int(OLD_TOT46), ","),
       "This is the fleet's fuel consumption before the replacement. The new consumption must be "
       "subtracted from it to give the saving."),
  ],
  why_right=("Compute each fleet total, then take the difference. Before: %d vans × %s km "
             "× (%.0f L/100 km) = %s L. After: %d × %s × (%.0f L/100 km) = %s L. "
             "Saving = %s − %s = %s L per year. Equivalently, the 4 L/100 km improvement "
             "saves %s L per van, times %d vans. Efficiency gains like this are often the "
             "cheapest way to cut both fuel costs and emissions, since the energy saved requires "
             "no new generating or refining capacity at all."
             % (int(VANS46), format(int(KM46), ","), OLD46, format(int(OLD_TOT46), ","),
                int(VANS46), format(int(KM46), ","), NEW46, format(int(NEW_TOT46), ","),
                format(int(OLD_TOT46), ","), format(int(NEW_TOT46), ","),
                format(int(ANS46), ","), format(int(PER_VAN46), ","), int(VANS46))),
  focus="Scale a per-vehicle efficiency improvement to a fleet total and report the difference "
        "rather than either consumption level.")


# ---- Q47  Topic 6.1, Skill 1.A ----------------------------------------
Q(topic="6.1", skill="1.A", diff=1,
  stem=("Which description correctly distinguishes renewable from nonrenewable energy resources, "
        "and correctly classifies geothermal energy?"),
  answer=("Renewable resources are replenished on a human timescale while nonrenewable ones are "
          "not; geothermal is renewable because Earth's interior continuously produces heat, "
          "though one reservoir can be overdrawn."),
  distractors=[
      ("Renewable resources are replenished on a human timescale while nonrenewable ones are not; "
       "geothermal is nonrenewable because Earth contains a fixed quantity of internal heat that "
       "is permanently removed once extracted.",
       "The distinction is stated correctly, but Earth's interior heat is continuously generated "
       "by radioactive decay, so geothermal is classed as renewable."),
      ("Renewable resources produce no greenhouse gas emissions while nonrenewable ones do; "
       "geothermal is renewable because geothermal plants release no gases of any kind.",
       "The defining criterion is rate of replenishment, not emissions, and geothermal plants do "
       "release some dissolved gases such as hydrogen sulfide and carbon dioxide."),
      ("Renewable resources can be converted to electricity while nonrenewable ones can only be "
       "burned for heat; geothermal is renewable because it is used to generate electricity.",
       "Coal and gas are routinely used to generate electricity, and geothermal is also used "
       "directly for heating, so this criterion does not separate the categories."),
  ],
  why_right=("The classification rests on the rate at which a resource is replenished relative to "
             "the rate it is used. Solar, wind, hydro, biomass, and geothermal are replenished "
             "continuously or within human timescales; fossil fuels and uranium formed over "
             "millions of years and are drawn from a fixed stock. Geothermal qualifies as "
             "renewable because the heat comes from radioactive decay in Earth's interior plus "
             "residual formation heat, a supply that continues regardless of extraction. The "
             "important qualification is that renewable describes the resource, not the "
             "management: a specific geothermal reservoir can be depleted if steam is withdrawn "
             "faster than the rock and water recharge, so sustainable use requires reinjection and "
             "rate limits."),
  focus=("Apply the replenishment-rate criterion to classify a resource, and separate the resource "
         "category from how a particular site is managed."))


# ---- Q48  Topic 6.9, Skill 7.C ----------------------------------------
Q(topic="6.9", skill="7.C", diff=3,
  stem=("A government plans a large hydroelectric dam on a major river to replace fossil-fuel "
        "generation. Which assessment of the consequences of the dam is most accurate?"),
  answer=("The dam supplies dispatchable low-carbon power, but traps the sediment that built "
          "downstream deltas, blocks migratory fish, floods habitat, and alters downstream flow."),
  distractors=[
      ("The dam supplies low-carbon electricity with no significant ecological consequences, "
       "because the reservoir creates new aquatic habitat that replaces the river habitat it "
       "floods.",
       "Reservoir habitat is a still-water environment that does not substitute for flowing-river "
       "habitat, and it does not address sediment trapping or blocked fish migration."),
      ("The dam reduces downstream flooding and increases downstream soil fertility, because the "
       "regulated flow delivers sediment to the floodplain more evenly through the year.",
       "The sediment effect runs the other way: a reservoir traps sediment behind the dam, so "
       "downstream floodplains and deltas receive less, not more."),
      ("The dam's main drawback is that hydroelectric generation produces more greenhouse gas per "
       "unit of electricity than the fossil-fuel plants it replaces, because of methane from the "
       "reservoir.",
       "Reservoir methane is a genuine issue, especially in flooded tropical vegetation, but it "
       "does not generally exceed the emissions of the fossil generation displaced."),
  ],
  why_right=("Large dams concentrate benefits and costs in different places. The benefit is real: "
             "electricity with very low operating emissions that can be dispatched on demand and "
             "ramped to balance variable sources. The costs follow from changing a flowing river "
             "into a reservoir. Sediment settles in still water, so the dam starves downstream "
             "floodplains and deltas of the material that built them and replenished their "
             "fertility, while the reservoir itself gradually fills. Migratory species such as "
             "salmon lose access to spawning grounds unless passage is provided. Reservoir "
             "filling floods terrestrial habitat and often displaces communities. Water released "
             "from depth is colder and lower in oxygen than natural flow, which changes the "
             "downstream community."),
  focus=("Describe the full set of consequences of a large dam, with the direction of the sediment "
         "effect correct."))


# ---- Q49  Topic 6.3, Skill 5.B ----------------------------------------
_q49_fig = viz.table(
    ["Fuel", "Energy content (MJ/kg)", "CO₂ released (kg per MJ)", "Main use"],
    [["Coal (bituminous)", "27", "0.094", "electricity"],
     ["Crude oil", "42", "0.073", "transport fuels"],
     ["Natural gas", "54", "0.051", "electricity, heating"],
     ["Dry wood", "16", "0.100", "heating"]],
    w=470, col_w=[1.25, 1.2, 1.25, 1.1],
    caption="Energy content and carbon dioxide released per unit of energy for four fuels.")

Q(topic="6.3", skill="5.B", diff=2, visual=_q49_fig,
  stem=("Which statement correctly describes the relationship between energy content and carbon "
        "dioxide released per unit of energy across these four fuels?"),
  answer=("Fuels with higher energy content per kilogram tend to release less carbon dioxide per "
          "unit of energy, so natural gas delivers the most energy per kilogram and the least "
          "carbon dioxide per megajoule."),
  distractors=[
      ("Fuels with higher energy content per kilogram tend to release more carbon dioxide per unit "
       "of energy, so natural gas is the highest-emitting fuel per megajoule of the four.",
       "The table shows natural gas with both the highest energy content, 54 MJ/kg, and the "
       "lowest emissions per megajoule, 0.051 kg, so the direction is reversed."),
      ("Energy content and carbon dioxide per unit of energy are unrelated across these fuels, "
       "because dry wood has the lowest energy content but not the lowest emissions per megajoule.",
       "Dry wood has the lowest energy content and the highest emissions per megajoule, which "
       "fits the inverse pattern rather than contradicting it."),
      ("Fuels with higher energy content per kilogram release less carbon dioxide per unit of "
       "energy, so switching electricity generation from coal to crude oil would cut emissions "
       "the most of any change available.",
       "The relationship is read correctly, but natural gas at 0.051 kg/MJ beats crude oil at "
       "0.073, so oil is not the largest available reduction."),
  ],
  why_right=("Reading the two numeric columns together shows an inverse pattern: wood at 16 MJ/kg "
             "emits 0.100 kg CO₂/MJ, coal at 27 emits 0.094, crude oil at 42 emits 0.073, and "
             "natural gas at 54 emits 0.051. The chemistry behind it is the hydrogen-to-carbon "
             "ratio. Methane, the main component of natural gas, is CH₄, so much of its energy "
             "comes from oxidizing hydrogen to water rather than carbon to carbon dioxide. Coal is "
             "nearly pure carbon, so almost all of its energy release is accompanied by carbon "
             "dioxide. This is why switching electricity generation from coal to natural gas "
             "lowers emissions per unit of electricity, though it still relies on a fossil fuel."),
  focus=("Identify an inverse relationship between two columns and apply it to rank fuels, "
         "checking the specific values before concluding."))


# ---- Q50  Topic 6.11, Skill 1.C ---------------------------------------
Q(topic="6.11", skill="1.C", diff=3,
  stem=("A city advertises its new hydrogen fuel-cell buses as zero-emission vehicles. Which "
        "evaluation of that claim is most accurate?"),
  answer=("The buses emit only water vapor at the tailpipe, but whether the system is low-carbon "
          "depends on how the hydrogen is made: most comes from natural gas, which releases "
          "carbon dioxide at the plant."),
  distractors=[
      ("The claim is fully accurate, because a fuel cell combines hydrogen and oxygen to produce "
       "only water and electricity, and hydrogen is the most abundant element in the universe so "
       "its production carries no emissions.",
       "Abundance in the universe is irrelevant to how hydrogen is obtained on Earth. Free "
       "hydrogen gas is rare here and must be produced by processes that usually emit carbon "
       "dioxide."),
      ("The claim is inaccurate because fuel cells burn hydrogen, and burning any fuel in air "
       "produces carbon dioxide along with the nitrogen oxides formed at high temperature.",
       "A fuel cell converts chemical energy electrochemically rather than by combustion, and "
       "hydrogen contains no carbon, so no carbon dioxide can come from the fuel itself."),
      ("The claim is inaccurate because the water vapor emitted is itself a greenhouse gas, and "
       "the quantity released by a bus fleet makes this the dominant climate impact of the "
       "technology.",
       "Water vapor is a greenhouse gas, but it cycles out of the atmosphere in days and the "
       "quantity from vehicles is negligible; the real issue lies upstream in hydrogen "
       "production."),
  ],
  why_right=("Evaluating a zero-emission claim requires asking where the system boundary is drawn. "
             "At the vehicle, the claim holds: a fuel cell reacts hydrogen with oxygen "
             "electrochemically to generate electricity, with water as the only product, and there "
             "is no combustion and so no nitrogen oxides or particulates. The emissions move "
             "upstream to hydrogen production. Most hydrogen today comes from steam methane "
             "reforming, which strips hydrogen from natural gas and releases carbon dioxide. "
             "Hydrogen made by electrolysis is only as clean as the electricity driving it. So the "
             "technology eliminates tailpipe pollution, which matters a great deal for urban air "
             "quality, while its climate benefit depends entirely on the hydrogen supply."),
  focus=("Evaluate an energy claim across the full fuel cycle, separating tailpipe emissions from "
         "upstream production emissions."))
