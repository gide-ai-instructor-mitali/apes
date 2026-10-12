# -*- coding: utf-8 -*-
"""Items 1-21: Unit 1 (6), Unit 2 (6), Unit 3 (9).

Every quantitative value in a stem, option or explanation is computed here in
Python from the scenario data, so the key cannot drift from the arithmetic.
"""

import viz
from qbank import Q

DEG = "°"
SQ = "²"
MU = "→"


# ══════════════════════════════════════════════════════════════════════════
# UNIT 1 - The Living World: Ecosystems (6 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q1  Topic 1.10, Skill 6.B, numeric -------------------------------
NPP = 24000.0
L2 = NPP * 0.10          # primary consumers
L3 = L2 * 0.10           # secondary consumers
L4 = L3 * 0.10           # tertiary consumers
KEPT90 = NPP * 0.90      # "lost 10%" misconception

_q1_fig = viz.flow_diagram(
    boxes=[
        {"id": "p", "x": 12, "y": 60, "w": 100, "h": 60,
         "label": "Producers %s kcal" % format(int(NPP), ","), "fill": "#DFF0DC"},
        {"id": "c1", "x": 185, "y": 60, "w": 100, "h": 60, "label": "Primary consumers ?"},
        {"id": "c2", "x": 358, "y": 60, "w": 100, "h": 60, "label": "Secondary consumers ?"},
    ],
    arrows=[{"frm": "p", "to": "c1", "label": "10% transfer"},
            {"frm": "c1", "to": "c2", "label": "10% transfer"}],
    w=470, h=150,
    caption="Energy available per square metre per year in a temperate grassland.")

Q(topic="1.10", skill="6.B", diff=2, numeric=True, visual=_q1_fig,
  stem=("A temperate grassland fixes %s kcal/m%s per year as net primary productivity. "
        "Using the 10%% rule for energy transfer between trophic levels, how much energy "
        "per square metre per year is available to secondary consumers?"
        % (format(int(NPP), ","), SQ)),
  answer="%s kcal/m%s per year" % (format(int(L3), ","), SQ),
  distractors=[
      ("%s kcal/m%s per year" % (format(int(L4), ","), SQ),
       "This applies the 10%% rule three times (%s %s %s %s %s), which lands on tertiary "
       "consumers — one trophic level above what the question asks for."
       % (format(int(L2), ","), MU, format(int(L3), ","), MU, format(int(L4), ","))),
      ("%s kcal/m%s per year" % (format(int(L2), ","), SQ),
       "This is a single 10%% transfer, which gives the energy reaching primary consumers "
       "(herbivores), not the secondary consumers that eat them."),
      ("%s kcal/m%s per year" % (format(int(KEPT90), ","), SQ),
       "This retains 90%% of the energy at each step. The 10%% rule means roughly 10%% is "
       "passed on and about 90%% is lost, not the reverse."),
  ],
  why_right=("Secondary consumers sit two transfers above the producers, so the 10%% rule is "
             "applied twice: %s kcal × 0.10 = %s kcal reaching primary consumers, then "
             "%s kcal × 0.10 = %s kcal/m%s per year reaching secondary consumers. The "
             "roughly 90%% lost at each step leaves as metabolic heat from cellular respiration "
             "and as unconsumed or undigested biomass, which is why food chains rarely support "
             "more than four or five levels."
             % (format(int(NPP), ","), format(int(L2), ","), format(int(L2), ","),
                format(int(L3), ","), SQ)),
  focus=("Count the number of trophic transfers correctly and multiply by 0.10 per transfer "
         "rather than subtracting 10%."))


# ---- Q2  Topic 1.5, Skill 2.B -----------------------------------------
_q2_fig = viz.flow_diagram(
    boxes=[
        {"id": "atm", "x": 150, "y": 14, "w": 130, "h": 46,
         "label": "Atmospheric N₂", "fill": "#DCE9F7"},
        {"id": "amm", "x": 22, "y": 118, "w": 118, "h": 50, "label": "Soil ammonium (NH₄⁺)"},
        {"id": "nit", "x": 290, "y": 118, "w": 118, "h": 50, "label": "Soil nitrate (NO₃⁻)"},
        {"id": "pl", "x": 156, "y": 210, "w": 118, "h": 46,
         "label": "Plant tissue", "fill": "#DFF0DC"},
    ],
    arrows=[
        {"frm": "atm", "to": "amm", "label": "nitrogen fixation", "side": "v"},
        {"frm": "amm", "to": "nit", "label": "nitrification", "side": "h"},
        {"frm": "nit", "to": "atm", "label": "Process X", "side": "v"},
        {"frm": "nit", "to": "pl", "label": "assimilation", "side": "v"},
    ],
    w=430, h=272,
    caption="Partial nitrogen cycle. Process X is carried out by soil bacteria.")

Q(topic="1.5", skill="2.B", diff=2, visual=_q2_fig,
  stem=("In the nitrogen cycle shown, Process X moves nitrogen from the soil nitrate pool back "
        "to atmospheric N₂. Which identification of Process X, and which consequence for "
        "the soil, is best supported by the diagram?"),
  answer=("Denitrification, carried out by bacteria in low-oxygen soil; it removes "
          "plant-available nitrate and lowers soil nitrogen fertility."),
  distractors=[
      ("Nitrogen fixation, carried out by bacteria in root nodules; it removes plant-available "
       "nitrate from the soil and lowers soil nitrogen fertility.",
       "Fixation is already labelled on the diagram and runs the opposite direction, converting "
       "atmospheric N₂ into soil ammonium. It adds nitrogen to soil rather than removing it."),
      ("Ammonification, carried out by decomposers acting on dead tissue; it releases nitrate "
       "as a gas and raises soil nitrogen fertility.",
       "Ammonification converts organic nitrogen in dead tissue into ammonium within the soil. "
       "It neither produces atmospheric N₂ nor raises nitrate availability."),
      ("Nitrification, carried out by bacteria under oxygen-rich conditions; it removes nitrate "
       "from the soil and raises soil nitrogen fertility.",
       "Nitrification is the labelled ammonium-to-nitrate step inside the soil, so it cannot "
       "also be the arrow leaving the soil for the atmosphere."),
  ],
  why_right=("Only one process in the nitrogen cycle returns fixed nitrogen to the atmosphere as "
             "N₂: denitrification, in which anaerobic bacteria use nitrate as an electron "
             "acceptor and release N₂ (and some N₂O). Because the diagram shows nitrate "
             "as the pool plants draw on through assimilation, any flux out of that pool to the "
             "atmosphere competes directly with plant uptake — so waterlogged, oxygen-poor "
             "soils, where denitrification is fastest, tend to be nitrogen-limited."),
  focus=("Read the direction of an unlabelled arrow against the labelled fluxes and match it to "
         "the one process that produces atmospheric N2."))


# ---- Q3  Topic 1.8, Skill 6.C, numeric --------------------------------
GPP = 14500.0
RESP = 5800.0
NPP3 = GPP - RESP
SUM3 = GPP + RESP

Q(topic="1.8", skill="6.C", diff=1, numeric=True,
  stem=("Over one growing season a salt marsh fixes %s kcal/m%s of energy as gross primary "
        "productivity, and the marsh plants expend %s kcal/m%s on cellular respiration. What is "
        "the net primary productivity of the marsh for that season?"
        % (format(int(GPP), ","), SQ, format(int(RESP), ","), SQ)),
  answer="%s kcal/m%s" % (format(int(NPP3), ","), SQ),
  distractors=[
      ("%s kcal/m%s" % (format(int(RESP), ","), SQ),
       "This is the respiration value given in the stem, which is the energy the plants consume "
       "for their own metabolism, not the energy left over as new biomass."),
      ("%s kcal/m%s" % (format(int(GPP), ","), SQ),
       "This is gross primary productivity. Gross productivity counts all the energy fixed, "
       "before any of it is spent on respiration."),
      ("%s kcal/m%s" % (format(int(SUM3), ","), SQ),
       "This adds respiration to gross productivity. Respiration is a cost subtracted from "
       "gross productivity, so adding it overstates the energy stored."),
  ],
  why_right=("Net primary productivity is the energy that remains as new plant biomass after the "
             "producers pay their own respiratory costs: NPP = GPP − respiration = %s − "
             "%s = %s kcal/m%s. NPP matters ecologically because it, not GPP, sets the energy "
             "actually available to the consumers in the next trophic level."
             % (format(int(GPP), ","), format(int(RESP), ","), format(int(NPP3), ","), SQ)),
  focus="Separate gross from net productivity and subtract respiration in the correct direction.")


# ---- Q4  Topic 1.2, Skill 5.B -----------------------------------------
_q4_sites = [
    ["Site W", "26", "2,400"],
    ["Site X", "27", "180"],
    ["Site Y", "9", "820"],
    ["Site Z", "-8", "240"],
]
_q4_fig = viz.table(
    ["Site", "Mean annual temperature (%sC)" % DEG, "Mean annual precipitation (mm)"],
    _q4_sites, w=470, col_w=[1.0, 1.5, 1.6],
    caption="Thirty-year climate averages for four terrestrial field sites.")

Q(topic="1.2", skill="5.B", diff=2, visual=_q4_fig,
  stem=("At which site does the climate data indicate that water availability, rather than "
        "temperature, is the primary factor limiting plant growth, and what reasoning supports "
        "that conclusion?"),
  answer=("Site X, because its temperatures permit year-round growth while its precipitation "
          "of 180 mm is the lowest of the four sites, leaving water as the binding "
          "constraint."),
  distractors=[
      ("Site Z, because its precipitation is low; the near-freezing mean temperature is not "
       "relevant to plant growth as long as some precipitation falls.",
       "Site Z does receive little precipitation, but a mean annual temperature of −8 "
       "%sC also restricts the growing season and locks water up as ice, so temperature cannot "
       "be dismissed as a limiting factor there." % DEG),
      ("Site W, because its high temperature increases evaporation enough to make water the "
       "limiting factor despite the precipitation total.",
       "Site W receives 2,400 mm of precipitation, by far the most of the four. That ample "
       "supply makes water the least likely constraint at this site."),
      ("Site Y, because its intermediate precipitation combined with cool temperatures makes "
       "water the single strongest constraint on growth.",
       "Site Y has moderate precipitation and mild temperatures, so neither variable stands out "
       "as a limiting extreme compared with the other sites."),
  ],
  why_right=("Isolating a limiting factor requires holding the other variable in a non-limiting "
             "range. Site X pairs the warmest mean temperature (27 %sC) with the lowest "
             "precipitation (180 mm) — the signature of a hot desert, where temperature "
             "permits growth year-round but moisture does not. Site Z also has low "
             "precipitation, but its mean of −8 %sC means temperature is limiting as well, "
             "so the attribution there is not clean." % (DEG, DEG)),
  focus=("Compare two climate variables across sites to isolate which one is limiting, instead "
         "of reading only the lower precipitation value."))


# ---- Q5  Topic 1.4, Skill 1.B -----------------------------------------
Q(topic="1.4", skill="1.B", diff=2,
  stem=("A mature temperate forest that had been a net carbon sink is cleared and converted to "
        "annually tilled cropland. Which explanation best accounts for the site changing from a "
        "net carbon sink to a net carbon source in the years immediately afterward?"),
  answer=("Removing the trees eliminates the standing biomass that had been accumulating "
          "carbon, while tillage aerates the soil and speeds decomposition of soil organic "
          "carbon, so release exceeds uptake."),
  distractors=[
      ("Crop plants do not perform photosynthesis at a rate high enough to fix any atmospheric "
       "carbon, so the site releases carbon through respiration while fixing essentially none "
       "of it, making net release unavoidable.",
       "Crops photosynthesize actively and can have high seasonal productivity. The site becomes "
       "a source because of biomass loss and soil decomposition, not an absence of "
       "photosynthesis."),
      ("Clearing the forest removes the soil microorganisms that had been decomposing litter, so "
       "undecomposed carbon accumulates at the surface and is released directly to the "
       "atmosphere without being respired.",
       "Carbon cannot move to the atmosphere without being respired or burned, and tillage "
       "stimulates soil microbial activity rather than removing it."),
      ("Cropland has a higher albedo than forest, and the additional reflected sunlight heats "
       "the atmosphere, which drives the carbon stored in the soil out of the ground as "
       "carbon dioxide.",
       "Albedo affects the site energy balance, not the carbon balance directly; reflected "
       "sunlight does not drive soil carbon out of the ground."),
  ],
  why_right=("Whether a site is a sink or a source depends on the balance between carbon fixed by "
             "photosynthesis and carbon released by respiration and decomposition. Conversion "
             "removes decades of accumulated woody biomass at once and, by breaking soil "
             "aggregates and raising oxygen levels, lets decomposers mineralize soil organic "
             "carbon much faster. Both terms push the balance toward release, so the site is a "
             "net source until a new, much smaller equilibrium stock is reached."),
  focus=("Explain a sink-to-source switch as a change in the balance of two fluxes, not as the "
         "loss of a single process."))


# ---- Q6  Topic 1.11, Skill 1.C ----------------------------------------
_q6_fig = viz.flow_diagram(
    boxes=[
        {"id": "kelp", "x": 162, "y": 220, "w": 108, "h": 44,
         "label": "Kelp", "fill": "#DFF0DC"},
        {"id": "urch", "x": 162, "y": 134, "w": 108, "h": 44, "label": "Sea urchins"},
        {"id": "ott", "x": 162, "y": 48, "w": 108, "h": 44, "label": "Sea otters"},
        {"id": "fish", "x": 316, "y": 134, "w": 106, "h": 44, "label": "Small fish"},
        {"id": "crab", "x": 14, "y": 134, "w": 106, "h": 44, "label": "Grazing snails"},
    ],
    arrows=[
        {"frm": "kelp", "to": "urch", "side": "v"},
        {"frm": "urch", "to": "ott", "side": "v"},
        {"frm": "kelp", "to": "crab", "side": "auto"},
        {"frm": "kelp", "to": "fish", "side": "auto"},
    ],
    w=436, h=280,
    caption="Arrows point from each organism to the organism that consumes it.")

Q(topic="1.11", skill="1.C", diff=3, visual=_q6_fig,
  stem=("Sea otters are removed from the kelp-forest food web shown by intensive hunting. Which "
        "prediction about the kelp and the two other kelp grazers is best supported, and why?"),
  answer=("Urchin numbers rise because their only predator here is gone, their grazing reduces "
          "the kelp, and snails and small fish decline as their shared food shrinks."),
  distractors=[
      ("Urchin numbers rise and kelp declines, but snails and small fish increase because the "
       "loss of a top predator releases every lower level in the web from predation pressure.",
       "The diagram shows otters eating only urchins, so snails and fish were never under otter "
       "predation to be released from; they are affected through the loss of kelp instead."),
      ("Kelp increases because removing a predator shortens the food chain, so more of the energy "
       "fixed by the kelp stays in the kelp rather than passing to higher trophic levels.",
       "Energy retained in a producer does not add to its biomass when grazing rises; kelp "
       "biomass is set by how much is eaten, and urchin grazing increases here."),
      ("Urchin numbers stay roughly constant because kelp, not predation, sets their abundance, "
       "so losing otters changes neither the kelp nor the other two grazers.",
       "This assumes urchins are purely food-limited. The web shows predation by otters as a "
       "control on urchins, so removing it changes urchin abundance."),
  ],
  why_right=("Tracing the arrows: otters eat only urchins, and urchins, snails, and small fish all "
             "eat kelp. Removing the single urchin predator allows urchins to increase, and "
             "because urchins graze kelp heavily the kelp stand is reduced — a trophic "
             "cascade. The snails and small fish are not otter prey, so they are affected "
             "indirectly, through the loss of the kelp they share with urchins, and decline. "
             "This is the mechanism behind documented kelp-forest collapse following otter loss."),
  focus=("Follow indirect effects through a food web, distinguishing species released from "
         "predation from species affected through a shared food resource."))


# ══════════════════════════════════════════════════════════════════════════
# UNIT 2 - The Living World: Biodiversity (6 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q7  Topic 2.3, Skill 5.C -----------------------------------------
_q7_rows = [
    ["Island A", "10", "50", "28"],
    ["Island B", "100", "50", "52"],
    ["Island C", "10", "500", "15"],
    ["Island D", "100", "500", "34"],
]
_q7_fig = viz.table(
    ["Island", "Area (km%s)" % SQ, "Distance to mainland (km)", "Bird species"],
    _q7_rows, w=470, col_w=[1.0, 0.95, 1.5, 1.0],
    caption="Breeding land-bird species recorded on four oceanic islands.")

Q(topic="2.3", skill="5.C", diff=3, visual=_q7_fig,
  stem=("The four islands form two area pairs and two distance pairs. Which conclusion about the "
        "controls on island species richness is best supported by this data set?"),
  answer=("Area and isolation each affect richness independently: at fixed distance the larger "
          "island holds more species, and at fixed area the more distant island holds "
          "fewer."),
  distractors=[
      ("Area is the only factor that affects richness, because the two 100 km%s islands both "
       "hold more species than either 10 km%s island." % (SQ, SQ),
       "The comparison of equal-area islands disproves this: richness falls from 52 to 34 and "
       "from 28 to 15 when only distance increases, so distance has an effect of its own."),
      ("Isolation is the only factor that affects richness, because the two islands 500 km from "
       "the mainland both hold fewer species than either island 50 km away.",
       "Comparing islands at equal distance shows area matters too: 28 rises to 52 at 50 km, and "
       "15 rises to 34 at 500 km, with distance held constant."),
      ("Neither variable has a consistent effect, because Island D holds more species than Island "
       "A even though Island D is ten times farther from the mainland.",
       "Islands A and D differ in both area and distance at once, so that single comparison "
       "cannot isolate either effect; the controlled pairs in the table can."),
  ],
  why_right=("The table is built as a two-by-two design, so each variable can be isolated. Holding "
             "distance at 50 km, richness rises 28 → 52 as area goes from 10 to 100 km%s; "
             "holding distance at 500 km it rises 15 → 34. Holding area at 10 km%s, richness "
             "falls 28 → 15 as distance rises; holding area at 100 km%s it falls 52 → "
             "34. Island biogeography theory explains both: larger islands support larger "
             "populations and so have lower extinction rates, while more distant islands receive "
             "fewer colonists and so have lower immigration rates."
             % (SQ, SQ, SQ)),
  focus=("Use controlled pairs within a data table to separate two variables rather than "
         "comparing cases that differ in both."))


# ---- Q8  Topic 2.1, Skill 5.E -----------------------------------------
_q8_p1 = [92, 3, 2, 2, 1]
_q8_p2 = [24, 22, 20, 18, 16]
assert sum(_q8_p1) == 100 and sum(_q8_p2) == 100
_q8_fig = viz.table(
    ["Species", "Plot 1 (individuals)", "Plot 2 (individuals)"],
    [["Species 1", str(_q8_p1[0]), str(_q8_p2[0])],
     ["Species 2", str(_q8_p1[1]), str(_q8_p2[1])],
     ["Species 3", str(_q8_p1[2]), str(_q8_p2[2])],
     ["Species 4", str(_q8_p1[3]), str(_q8_p2[3])],
     ["Species 5", str(_q8_p1[4]), str(_q8_p2[4])],
     ["Total", str(sum(_q8_p1)), str(sum(_q8_p2))]],
    w=440, col_w=[1.2, 1.0, 1.0],
    caption="Tree counts in two 100-individual survey plots in the same forest type.")

Q(topic="2.1", skill="5.E", diff=2, visual=_q8_fig,
  stem=("Both plots contain five species and 100 individuals. What do these data imply about the "
        "biodiversity of the two plots?"),
  answer=("The plots have equal species richness but Plot 2 has far greater evenness, so Plot 2 "
          "is more diverse; richness alone misses the difference."),
  distractors=[
      ("The plots have identical biodiversity, because biodiversity is measured by the number of "
       "species present and both plots contain exactly five species.",
       "Richness is only one component of diversity. Treating it as the whole measure ignores the "
       "very different abundance distributions the table shows."),
      ("Plot 1 is the more diverse plot, because one species reaching 92 individuals shows the "
       "plot supports a far larger population of a successful competitor.",
       "A single species holding 92 of 100 individuals is dominance, which lowers evenness and "
       "therefore diversity; a large population of one species is not high diversity."),
      ("Plot 2 has greater species richness than Plot 1, because its individuals are spread more "
       "evenly across the five species in the survey.",
       "Richness counts species and is five in both plots. Spreading individuals more evenly "
       "changes evenness, not the number of species present."),
  ],
  why_right=("Diversity has two components. Richness — the species count — is five in "
             "both plots. Evenness describes how individuals are distributed among those species, "
             "and the plots differ sharply: Plot 1 is dominated by one species holding 92 of 100 "
             "individuals, with four species represented by 1 to 3 individuals, while Plot 2 "
             "ranges only from 16 to 24. Plot 2 therefore has higher evenness and higher overall "
             "diversity. The ecological consequence is that Plot 1 depends heavily on a single "
             "species, so a pest or disease specific to it would alter that plot far more."),
  focus="Distinguish richness from evenness when drawing a diversity conclusion from count data.")


# ---- Q9  Topic 2.7, Skill 1.B -----------------------------------------
Q(topic="2.7", skill="1.B", diff=1,
  stem=("A retreating glacier exposes bare rock, and a nearby forest of the same age is cleared "
        "by a surface fire that leaves the soil intact. Which comparison of how the two sites "
        "recover is correct, and why?"),
  answer=("The burned site recovers faster because secondary succession starts with soil, a seed "
          "bank, and surviving roots in place, while bare rock must build soil from scratch."),
  distractors=[
      ("The glacial site recovers faster because bare rock is free of the competitors and plant "
       "pathogens that persist in burned soil, so colonizing species establish with less "
       "resistance.",
       "Reduced competition does not compensate for the absence of soil. Without soil there is no "
       "water-holding or nutrient-supplying medium, which is the rate-limiting step on bare "
       "rock."),
      ("Both sites recover at the same rate, because succession always proceeds through the same "
       "fixed sequence of pioneer, intermediate, and climax species over the same interval.",
       "Succession follows a broadly similar progression but not a fixed timetable; the starting "
       "substrate determines the rate, which is exactly what differs between these two sites."),
      ("The burned site recovers faster because fire converts plant tissue into nutrients that "
       "the glacial site lacks entirely, and nutrient supply rather than soil presence sets the "
       "recovery rate.",
       "Fire does release nutrients in ash, but this names the wrong primary reason: the decisive "
       "difference is that one site retains an intact soil profile, seed bank, and root systems."),
  ],
  why_right=("The distinction is whether soil survives the disturbance. On newly exposed rock, "
             "primary succession must begin with lichens and mosses that weather the rock "
             "chemically and physically; accumulating enough soil to support larger plants takes "
             "decades to centuries. A surface fire leaves the soil profile, its seed bank, and "
             "surviving root systems in place, so secondary succession can resume from an "
             "intermediate stage and reach a comparable community far faster."),
  focus="Use the presence or absence of soil to distinguish primary from secondary succession.")


# ---- Q10  Topic 2.4, Skill 2.B ----------------------------------------
_q10_p = [(10, 5), (14, 22), (18, 62), (22, 95), (26, 58), (30, 18), (34, 3)]
_q10_q = [(10, 30), (14, 44), (18, 58), (22, 66), (26, 62), (30, 50), (34, 34)]
_q10_fig = viz.line_chart(
    [{"name": "Species P", "points": _q10_p, "color": "#C41230"},
     {"name": "Species Q", "points": _q10_q, "color": "#1565C0"}],
    "Water temperature (%sC)" % DEG, "Growth rate (% of maximum)",
    (10, 34), (0, 100), w=470, h=300,
    x_ticks=[10, 14, 18, 22, 26, 30, 34], y_ticks=[0, 20, 40, 60, 80, 100],
    caption="Growth rate of two fish species across a range of water temperatures.")

Q(topic="2.4", skill="2.B", diff=2, visual=_q10_fig,
  stem=("A lake inhabited by both species is projected to warm so that summer temperatures shift "
        "from near 22 %sC toward 30 %sC. Which species is more vulnerable to that shift, and "
        "which feature of the curves justifies the answer?" % (DEG, DEG)),
  answer=("Species P, because its curve is narrow around a 22 %sC optimum and falls to near zero "
          "by 30 %sC, while the much broader curve of Species Q still supports moderate "
          "growth there." % (DEG, DEG)),
  distractors=[
      ("Species Q, because its maximum growth rate is well below that of Species P, so it has "
       "less reserve capacity to absorb the added thermal stress of a warmer lake.",
       "A lower peak is not the same as a narrow range. Species Q keeps moderate growth across "
       "the whole span shown, which is what matters under a temperature shift."),
      ("Species P, because its optimum temperature is lower than that of Species Q, and the "
       "species with the lower optimum is displaced first as water warms.",
       "The two optima are not ordered that way on the graph — both curves peak near 22 "
       "%sC — and the decisive feature is the width of the tolerance range, not the "
       "position of the optimum." % DEG),
      ("Neither species is at serious risk, because both curves still show measurable growth at "
       "30 %sC, so both populations can persist at the new summer temperature." % DEG,
       "Growth at 18%% of maximum, as shown for Species P, is a severe reduction; treating "
       "measurable growth as enough for persistence ignores how sharply performance has fallen."),
  ],
  why_right=("Ecological tolerance is read from the width of the performance curve, not its peak. "
             "Species P has a narrow range: growth peaks at 95%% of maximum at 22 %sC and "
             "collapses to 18%% by 30 %sC and 3%% by 34 %sC. Species Q is a thermal generalist, "
             "staying between 30%% and 66%% across the entire range and still at 50%% at 30 %sC. "
             "Under the projected shift, Species P moves to the edge of its tolerance range while "
             "Species Q remains well inside its own, so Species P is the more vulnerable."
             % (DEG, DEG, DEG, DEG)),
  focus=("Compare the width of two tolerance curves, rather than their peak heights, to predict "
         "vulnerability to an environmental shift."))


# ---- Q11  Topic 2.5, Skill 1.C ----------------------------------------
Q(topic="2.5", skill="1.C", diff=3,
  stem=("A pine forest adapted to frequent low-intensity ground fires is protected by a policy "
        "that extinguishes every fire for sixty years. Which outcome and mechanism best explain "
        "why the eventual fire burns far more severely than the fires the forest evolved with?"),
  answer=("Six decades of unburned litter, woody debris, and dense understory accumulate as fuel, "
          "so the eventual fire carries into the canopy instead of staying on the ground."),
  distractors=[
      ("The mature pines lose their fire-resistant thick bark as they age without fire exposure, "
       "so the trees themselves become flammable and the fire spreads through their trunks.",
       "Thick bark is a developmental trait that does not require fire to maintain and generally "
       "thickens with age; the change over the sixty years is in the accumulated fuel, not in "
       "the bark."),
      ("Suppression allows soil nutrients normally released by fire to build up to concentrations "
       "that make foliage unusually flammable, which raises the intensity of the eventual burn.",
       "Nutrients accumulate in unburned litter rather than making living foliage flammable; the "
       "mechanism driving severity is the physical quantity and vertical arrangement of fuel."),
      ("Suppression gradually dries the site because the canopy closes and reduces rainfall "
       "reaching the ground, and this drier soil is what makes the eventual fire more severe.",
       "A closed canopy tends to raise humidity and shade near the ground rather than drying the "
       "site, and fuel load rather than soil moisture is the dominant control here."),
  ],
  why_right=("In a fire-adapted ecosystem, frequent low-intensity fire is itself the process that "
             "keeps fuel loads low — it consumes litter and thins the shade-tolerant "
             "understory while mature pines survive behind thick bark. Removing that process for "
             "sixty years lets surface fuel and ladder fuels build continuously. The ladder fuels "
             "are decisive: they give flames a continuous vertical path from the ground into the "
             "crowns, converting what would have been a ground fire into a stand-replacing crown "
             "fire. This is the reasoning behind prescribed-burn programs."),
  focus=("Explain how removing a recurring natural disruption changes the system state, via fuel "
         "accumulation and vertical fuel structure."))


# ---- Q12  Topic 2.2, Skill 3.C ----------------------------------------
_q12_fig = viz.source_block(
    "Build the Basin, Keep the Benefits",
    "Opinion column submitted to a county planning board (written for this exam)",
    ["The 40-hectare marsh on the north parcel has been called irreplaceable, but that claim does "
     "not survive contact with engineering. Our proposed concrete detention basin is sized to "
     "hold the same peak stormwater volume the marsh now absorbs during a ten-year storm.",
     "Because the basin matches the marsh on that measure, the development will leave the county "
     "no worse off. The board should approve the permit and stop treating one wetland as beyond "
     "substitution."],
    w=470)

Q(topic="2.2", skill="3.C", diff=3, visual=_q12_fig,
  stem=("Which description most accurately characterizes how the author uses evidence to support "
        "the conclusion that the county will be left no worse off?"),
  answer=("The author offers evidence on one ecosystem service, peak stormwater storage, then "
          "generalizes from that single match to equivalence across all the marsh's services."),
  distractors=[
      ("The author supports the conclusion with evidence on several ecosystem services and shows "
       "that the engineered basin matches or exceeds the marsh on each one of them.",
       "Only one measure appears in the column — peak storm volume during a ten-year storm. "
       "No other service is quantified or even named."),
      ("The author offers no evidence at all and rests the conclusion entirely on the assertion "
       "that engineered structures are superior to natural systems.",
       "The column does offer a specific piece of evidence, the matched peak storage volume. The "
       "weakness is the scope of that evidence, not its absence."),
      ("The author supports the conclusion with evidence about long-term maintenance costs, "
       "treating the lower cost of the basin as proof that no net loss will occur.",
       "Costs are never mentioned in the column; the single quantitative comparison offered is "
       "storm-water holding volume."),
  ],
  why_right=("The column presents exactly one piece of evidence — that the basin is sized to "
             "hold the peak volume the marsh absorbs in a ten-year storm — and moves "
             "directly from that single match to the sweeping conclusion that the county is left "
             "no worse off. Describing the reasoning accurately means naming both the narrow "
             "evidence and the generalization built on it. A marsh also supplies water filtration, "
             "groundwater recharge, nutrient cycling, carbon storage, and wildlife habitat, none "
             "of which a concrete basin provides and none of which the evidence addresses."),
  focus=("Describe how an author's evidence connects to the claim, identifying when a single "
         "measure is generalized to a broad conclusion."))


# ══════════════════════════════════════════════════════════════════════════
# UNIT 3 - Populations (9 items)
# ══════════════════════════════════════════════════════════════════════════

# ---- Q13  Topic 3.5, Skill 6.C, numeric -------------------------------
RATE13 = 2.8
DOUBLE13 = 70.0 / RATE13                 # 25.0 years
HALFRULE13 = 70.0 / 2.0                  # ignored the decimal places
DEC13 = DOUBLE13 / 10.0                  # decimal slip
MULT13 = 70.0 * RATE13                   # multiplied instead of divided
assert abs(DOUBLE13 - 25.0) < 1e-9

Q(topic="3.5", skill="6.C", diff=1, numeric=True,
  stem=("A country's population is growing at a steady %.1f%% per year. Using the rule of 70, "
        "approximately how long will it take for the population to double?" % RATE13),
  answer="%.0f years" % DOUBLE13,
  distractors=[
      ("%.1f years" % DEC13,
       "This is the correct quotient divided by ten, a decimal-place slip. The rule of 70 uses the "
       "growth rate as a percentage, so 70 ÷ %.1f, not 70 ÷ %.0f." % (RATE13, RATE13 * 10)),
      ("%.0f years" % HALFRULE13,
       "This rounds the growth rate down to 2%% before dividing. The rule of 70 is sensitive to "
       "that rounding: 70 ÷ 2 = 35 years overstates the doubling time by ten years."),
      ("%.0f years" % MULT13,
       "This multiplies 70 by the growth rate. The rule of 70 divides 70 by the percentage growth "
       "rate, because a faster growth rate must give a shorter doubling time."),
  ],
  why_right=("The rule of 70 estimates doubling time as 70 divided by the percentage growth rate "
             "per year: 70 ÷ %.1f = %.0f years. The relationship is inverse, so a higher "
             "growth rate always produces a shorter doubling time — a useful check on the "
             "direction of the operation. The rule works because it approximates ln(2) × 100, "
             "which is about 69.3." % (RATE13, DOUBLE13)),
  focus="Apply the rule of 70 as a division by the percentage rate and keep the decimal place.")


# ---- Q14  Topic 3.3, Skill 2.A ----------------------------------------
_q14_I = [(0, 100), (20, 97), (40, 93), (60, 85), (80, 55), (100, 5)]
_q14_II = [(0, 100), (20, 63), (40, 40), (60, 25), (80, 16), (100, 5)]
_q14_III = [(0, 100), (10, 18), (20, 9), (40, 5), (60, 3.5), (80, 2.5), (100, 2)]
_q14_fig = viz.line_chart(
    [{"points": _q14_I, "color": "#1565C0"},
     {"points": _q14_II, "color": "#2E7D32"},
     {"points": _q14_III, "color": "#C41230"}],
    "Percent of maximum life span", "Survivors per 100 born",
    (0, 100), (0, 100), w=470, h=300,
    x_ticks=[0, 20, 40, 60, 80, 100], y_ticks=[0, 20, 40, 60, 80, 100], markers=False,
    # direct labels instead of a legend, placed in clear space beside each curve
    annotations=[(84, 62, "Curve I", "start"), (46, 46, "Curve II", "start"),
                 (13, 25, "Curve III", "start")],
    caption="Three survivorship curves, each starting from a cohort of 100 newborns.")

Q(topic="3.3", skill="2.A", diff=1, visual=_q14_fig,
  stem=("Which curve shows the pattern of very high mortality early in life, and which "
        "reproductive strategy is characteristic of species with that curve?"),
  answer=("Curve III, which drops from 100 to 18 survivors within the first 10% of the life span; "
          "such species produce very large numbers of offspring and give little or no "
          "parental care at all."),
  distractors=[
      ("Curve I, which stays near 100 survivors through most of the life span; such species "
       "typically produce very large numbers of offspring and provide little or no parental care.",
       "Curve I shows high survivorship until late life, the opposite pattern. That flat early "
       "section indicates few offspring with heavy parental investment."),
      ("Curve II, which falls at a roughly constant rate across the life span; such species face "
       "their heaviest mortality in the earliest life stages and compensate with many offspring.",
       "A constant rate of decline means mortality is roughly equal at every age, which is the "
       "definition of Type II, not concentrated early mortality."),
      ("Curve III, which drops from 100 to 18 survivors within the first 10% of the life span; "
       "such species typically produce few offspring and invest heavily in each one.",
       "The curve identification is right but the strategy is reversed. Heavy investment in few "
       "offspring produces high early survivorship, not a steep early drop."),
  ],
  why_right=("Reading the first segment of each curve identifies the pattern. Curve III falls from "
             "100 to 18 survivors in the first 10%% of the life span, so the overwhelming majority "
             "of mortality occurs in the earliest stages — the Type III pattern seen in many "
             "fish, insects, and plants. That curve shape goes with producing enormous numbers of "
             "small offspring and investing almost nothing in each, since only a small fraction "
             "need survive. Curve I is Type I, with high survival until late-life mortality, and "
             "Curve II is Type II, with a roughly constant mortality rate."),
  focus=("Read the slope of a survivorship curve's early segment and connect the shape to the "
         "matching reproductive strategy."))


# ---- Q15  Topic 3.6, Skill 5.C ----------------------------------------
_q15_bands = ["0-4", "5-14", "15-24", "25-34", "35-44", "45-54", "55-64", "65+"]
_q15_m = [8.4, 7.6, 6.5, 5.2, 3.9, 2.8, 1.7, 1.0]
_q15_f = [8.1, 7.4, 6.4, 5.1, 3.9, 2.9, 1.9, 1.3]
_q15_tot = sum(_q15_m) + sum(_q15_f)
_q15_young = (_q15_m[0] + _q15_m[1] + _q15_f[0] + _q15_f[1]) / _q15_tot * 100
_q15_old = (_q15_m[7] + _q15_f[7]) / _q15_tot * 100
_q15_fig = viz.age_pyramid(
    _q15_bands, _q15_m, _q15_f, w=450, h=310, max_pct=10,
    caption="Age structure of Country M, by percent of total population.")

Q(topic="3.6", skill="5.C", diff=2, visual=_q15_fig,
  stem=("Based on the shape of this age-structure diagram, what should be concluded about Country "
        "M's population over the next twenty-five years, and why?"),
  answer=("The population will continue to grow substantially, because each younger cohort is "
          "larger than the one above it and a large group has yet to reach reproductive age."),
  distractors=[
      ("The population will begin to decline within twenty-five years, because the smallest bars "
       "are the oldest cohorts, which shows that fewer people are surviving to older ages over "
       "time.",
       "Small upper bars in a growing population reflect the smaller cohorts born decades ago, "
       "not falling survival. The widening base points to growth, not decline."),
      ("The population will stay nearly constant, because the near-equality of male and female "
       "percentages in every age band indicates that births are balancing deaths.",
       "A balanced sex ratio says nothing about whether births exceed deaths. The relevant "
       "signal is the relative size of successive age cohorts."),
      ("The population will grow briefly and then fall sharply, because the large 0-4 and 5-14 "
       "cohorts will move into old age together and die within the twenty-five-year window.",
       "Children in the 0-14 bands will be roughly 25 to 39 years old in twenty-five years, "
       "entering their peak reproductive years rather than old age."),
  ],
  why_right=("The pyramid is broad-based and tapers steadily upward: the 0-4 and 5-14 bands "
             "together hold about %.0f%% of the population while the 65+ band holds only about "
             "%.0f%%. Each younger cohort being larger than the one above it means a large group "
             "has yet to enter its reproductive years, so the number of births will keep rising "
             "even if fertility per woman falls. This built-in growth — population momentum "
             "— is why broad-based pyramids reliably forecast continued expansion over a "
             "generation." % (_q15_young, _q15_old)),
  focus=("Read cohort-to-cohort size changes in an age-structure diagram to project growth, "
         "rather than reading the sex ratio or the top bars."))


# ---- Q16  Topic 3.7, Skill 1.B ----------------------------------------
Q(topic="3.7", skill="1.B", diff=3,
  stem=("A country's total fertility rate falls to 2.1 births per woman, the usual replacement "
        "level, yet its population keeps growing for several more decades. Which explanation "
        "accounts for the continued growth?"),
  answer=("A large share of the population has yet to reach childbearing age, so even at exactly "
          "replacement fertility the number of women having children keeps rising and births "
          "continue to exceed deaths."),
  distractors=[
      ("Replacement-level fertility means each woman replaces herself and one partner, which "
       "produces steady growth of one additional person per couple in every generation.",
       "Replacement level is defined so that each generation just replaces the previous one; the "
       "2.1 figure already accounts for both partners plus mortality before reproduction."),
      ("Total fertility rate counts only live births to women in their twenties, so births to "
       "older women are added on top of the 2.1 figure and drive the surplus growth.",
       "Total fertility rate sums age-specific birth rates across a woman's entire reproductive "
       "span, so births at older ages are already included in the 2.1."),
      ("A total fertility rate of 2.1 exceeds replacement in countries with low infant mortality, "
       "so such countries keep growing even once fertility has stabilized at that figure.",
       "The 0.1 above 2.0 exists precisely to offset mortality before reproductive age; where "
       "infant mortality is low, replacement sits near 2.1 rather than below it by enough to "
       "drive sustained growth."),
  ],
  why_right=("Population growth depends on the number of births, not the births per woman. If "
             "earlier high fertility produced a large cohort of children, those children spend "
             "the following decades moving into their childbearing years. Even with each of them "
             "averaging 2.1 births, the total number of births rises because the number of "
             "potential parents is rising, while deaths are still drawn from much smaller older "
             "cohorts. This lag is called population momentum, and it is why reaching replacement "
             "fertility stabilizes a population only after an age structure has evened out."),
  focus=("Explain population momentum by distinguishing births per woman from the number of women "
         "of reproductive age."))


# ---- Q17  Topic 3.4, Skill 2.B ----------------------------------------
_q17_K = 1200.0
_q17_pts = [(0, 40), (2, 96), (4, 220), (6, 450), (8, 720), (10, 950),
            (12, 1090), (14, 1160), (16, 1185), (18, 1195), (20, 1200)]
_q17_fig = viz.line_chart(
    [{"name": "Population size", "points": _q17_pts, "color": "#C41230"}],
    "Time (years)", "Population size (individuals)",
    (0, 20), (0, 1400), w=470, h=300,
    x_ticks=[0, 4, 8, 12, 16, 20], y_ticks=[0, 200, 400, 600, 800, 1000, 1200, 1400],
    hlines=[(_q17_K, "carrying capacity K = %d" % int(_q17_K))], legend_pos="tl",
    caption="Growth of a deer herd on an island over twenty years.")

Q(topic="3.4", skill="2.B", diff=2, visual=_q17_fig,
  stem=("At approximately which population size is the herd adding individuals most rapidly, and "
        "what explains that relationship between population size and growth rate?"),
  answer=("Near 600 individuals, about half of carrying capacity, where the population is large "
          "enough to produce many offspring but resource limits are not yet severe."),
  distractors=[
      ("Near 1,200 individuals, at carrying capacity, because the largest population contains the "
       "greatest number of reproducing individuals and therefore adds the most offspring.",
       "At carrying capacity the curve is flat, meaning the growth rate has fallen to about zero: "
       "births and deaths balance even though the population is largest."),
      ("Near 40 individuals, at the start, because a small population experiences essentially no "
       "competition for resources and so grows at its maximum possible rate.",
       "The per-individual rate is highest when crowding is least, but with only 40 animals "
       "present the total number added each year is small — the curve is nearly flat there."),
      ("Near 1,185 individuals, just below carrying capacity, because growth accelerates as a "
       "population approaches the maximum its habitat can support.",
       "Growth decelerates rather than accelerates near carrying capacity; the curve visibly "
       "flattens between years 16 and 20 as the population levels off."),
  ],
  why_right=("The growth rate is the steepness of the curve, not the height of the curve. The "
             "steepest section runs from roughly year 6 to year 10, as the herd passes through "
             "about 450 to 950 animals — that is, through roughly K/2 = %d. This is the "
             "defining feature of logistic growth: the absolute growth rate peaks at about half "
             "of carrying capacity, because the total is the product of how many individuals are "
             "reproducing and how much room remains. Near zero it fails for lack of individuals; "
             "near K it fails for lack of resources." % int(_q17_K / 2)),
  focus=("Read growth rate as the slope of a logistic curve and locate the maximum at about half "
         "of carrying capacity."))


# ---- Q18  Topic 3.2, Skill 5.B ----------------------------------------
_q18_rows = [
    ["Species J", "2-3 years", "1", "9 months", "extensive"],
    ["Species K", "6 weeks", "2,100", "none", "none"],
    ["Species L", "4 years", "2", "11 months", "extensive"],
    ["Species M", "3 weeks", "480", "none", "none"],
]
_q18_fig = viz.table(
    ["Species", "Age at first reproduction", "Offspring per reproductive event",
     "Gestation or incubation", "Parental care"],
    _q18_rows, w=470, col_w=[0.85, 1.15, 1.15, 1.0, 0.85],
    caption="Life-history traits of four animal species.")

Q(topic="3.2", skill="5.B", diff=2, visual=_q18_fig,
  stem=("Which statement correctly describes the relationship among the life-history variables in "
        "this table, and classifies the species accordingly?"),
  answer=("Offspring number varies inversely with age at first reproduction and parental "
          "investment, so Species K and M are r-selected while J and L are K-selected."),
  distractors=[
      ("Offspring number varies directly with age at first reproduction and with parental "
       "investment, so Species J and L are r-selected while Species K and M are K-selected.",
       "The table shows the opposite relationship: the species reproducing earliest produce the "
       "most offspring, and the classification is also reversed."),
      ("Offspring number varies inversely with age at first reproduction, but parental care is "
       "unrelated to either, so all four species are best classified as r-selected.",
       "Parental care tracks the other variables exactly — present in both low-offspring "
       "species, absent in both high-offspring ones — and the four species clearly fall "
       "into two contrasting groups."),
      ("Gestation length varies inversely with offspring number, which shows that all four "
       "species are K-selected and differ only in the length of their reproductive cycles.",
       "The gestation relationship is read correctly, but species producing 480 and 2,100 "
       "offspring with no parental care are the textbook r-selected pattern, not K-selected."),
  ],
  why_right=("Reading down the columns, three variables move together. Species K and M reproduce "
             "within weeks, produce 2,100 and 480 offspring per event, and provide no gestation "
             "period or parental care — the r-selected strategy of maximizing reproductive "
             "rate, typical of species in variable or disturbed habitats where most offspring "
             "die. Species J and L delay reproduction for years, produce one or two offspring, "
             "and invest heavily in each — the K-selected strategy favored in stable "
             "habitats near carrying capacity, where competitive ability matters more than "
             "output. Offspring number therefore varies inversely with both of the other traits."),
  focus=("Identify co-varying life-history traits across a table and map them onto the r-selected "
         "and K-selected categories in the correct direction."))


# ---- Q19  Topic 3.9, Skill 2.C ----------------------------------------
_q19_cbr = [(0, 42), (1, 44), (2, 40), (3, 30), (4, 20), (5, 13), (6, 11)]
_q19_cdr = [(0, 40), (1, 30), (2, 18), (3, 12), (4, 10), (5, 10), (6, 11)]
_q19_gap = [abs(b[1] - d[1]) for b, d in zip(_q19_cbr, _q19_cdr)]
_q19_max_i = _q19_gap.index(max(_q19_gap))
_q19_fig = viz.line_chart(
    [{"name": "Birth rate", "points": _q19_cbr, "color": "#C41230"},
     {"name": "Death rate", "points": _q19_cdr, "color": "#1565C0"}],
    "Stage of demographic transition", "Rate (per 1,000 people per year)",
    (0, 6), (0, 50), w=470, h=300,
    x_ticks=[0, 1, 2, 3, 4, 5, 6], y_ticks=[0, 10, 20, 30, 40, 50],
    caption="Crude birth and death rates across the demographic transition. "
            "Stage 1 spans 0-1, Stage 2 spans 1-3, Stage 3 spans 3-5, Stage 4 spans 5-6.")

Q(topic="3.9", skill="2.C", diff=3, visual=_q19_fig,
  stem=("During which stage is the population growing fastest, and what broader development "
        "pattern does the shape of these two curves illustrate?"),
  answer=("Stage 2, where death rates fell steeply while birth rates stayed high; improvements in "
          "sanitation, nutrition, and medicine cut mortality long before fertility begins to "
          "respond."),
  distractors=[
      ("Stage 1, where both rates are at their highest; the large absolute number of births at "
       "this stage means the population expands faster than at any later point.",
       "In Stage 1 the two curves nearly coincide near 40 per 1,000, so births and deaths cancel "
       "and growth is close to zero despite both rates being high."),
      ("Stage 3, where the birth rate is falling steeply; the rapid change in the birth rate is "
       "what drives the highest rate of population increase.",
       "Growth depends on the gap between the curves, not on how fast either is changing. By "
       "Stage 3 the gap is already narrowing, so growth is slowing."),
      ("Stage 4, where both rates are low and nearly equal; low death rates mean most people "
       "survive, which produces the fastest increase in population size.",
       "Where the curves converge near 11 per 1,000 the gap is almost zero, so the population is "
       "close to stable rather than growing fastest."),
  ],
  why_right=("The rate of natural increase is the vertical gap between the birth and death curves. "
             "That gap is widest in Stage 2 — about %d per 1,000 at its maximum — "
             "because the death rate drops from roughly 40 to 12 per 1,000 while the birth rate "
             "stays near 40. The curves illustrate the general development pattern that mortality "
             "responds quickly to clean water, sanitation, vaccination, and food supply, whereas "
             "fertility falls later, as education, child survival expectations, and women's "
             "economic opportunities change. The lag between the two declines is what produces "
             "rapid population growth." % max(_q19_gap)),
  focus=("Interpret the gap between two curves, not their absolute heights or slopes, and connect "
         "it to the development processes behind the transition."))


# ---- Q20  Topic 3.8, Skill 6.B, numeric -------------------------------
POP20 = 8000000.0
CBR20, CDR20 = 24.0, 9.0
IMM20, EMI20 = 40000.0, 15000.0
B20 = CBR20 / 1000.0 * POP20            # 192,000
D20 = CDR20 / 1000.0 * POP20            # 72,000
NAT20 = B20 - D20                       # 120,000
NETMIG20 = IMM20 - EMI20                # 25,000
TOTAL20 = NAT20 + NETMIG20              # 145,000
PCT20 = TOTAL20 / POP20 * 100           # 1.8125
PCT20_NAT = NAT20 / POP20 * 100         # 1.50
PCT20_NOEMI = (NAT20 + IMM20) / POP20 * 100   # 2.00
PCT20_MIGONLY = NETMIG20 / POP20 * 100        # 0.3125
assert abs(PCT20 - 1.8125) < 1e-9 and abs(PCT20_NAT - 1.5) < 1e-9

Q(topic="3.8", skill="6.B", diff=3, numeric=True,
  stem=("A country of %s people has a crude birth rate of %d per 1,000 per year and a crude death "
        "rate of %d per 1,000 per year. In the same year %s people immigrate and %s emigrate. "
        "What is the country's overall annual population growth rate?"
        % (format(int(POP20), ","), int(CBR20), int(CDR20),
           format(int(IMM20), ","), format(int(EMI20), ","))),
  answer="%.2f%% per year" % PCT20,
  distractors=[
      ("%.2f%% per year" % PCT20_MIGONLY,
       "This counts only net migration (%s − %s = %s people) and omits natural increase, "
       "which is by far the larger term here."
       % (format(int(IMM20), ","), format(int(EMI20), ","), format(int(NETMIG20), ","))),
      ("%.2f%% per year" % PCT20_NAT,
       "This is the rate of natural increase alone, from the birth and death rates. It ignores "
       "both migration figures, which add a further %s people."
       % format(int(NETMIG20), ",")),
      ("%.2f%% per year" % PCT20_NOEMI,
       "This adds all %s immigrants but never subtracts the %s emigrants, so it double-counts "
       "the migration contribution."
       % (format(int(IMM20), ","), format(int(EMI20), ","))),
  ],
  why_right=("Convert each rate to a count, then combine all four flows. Births = (%d/1,000) "
             "× %s = %s. Deaths = (%d/1,000) × %s = %s. Natural increase = %s. Net "
             "migration = %s − %s = %s. Total change = %s + %s = %s people. As a rate: %s "
             "÷ %s × 100 = %.2f%% per year."
             % (int(CBR20), format(int(POP20), ","), format(int(B20), ","),
                int(CDR20), format(int(POP20), ","), format(int(D20), ","),
                format(int(NAT20), ","), format(int(IMM20), ","), format(int(EMI20), ","),
                format(int(NETMIG20), ","), format(int(NAT20), ","), format(int(NETMIG20), ","),
                format(int(TOTAL20), ","), format(int(TOTAL20), ","),
                format(int(POP20), ","), PCT20)),
  focus=("Combine births, deaths, immigration, and emigration into a single growth rate, keeping "
         "the sign of each flow correct."))


# ---- Q21  Topic 3.1, Skill 1.C ----------------------------------------
Q(topic="3.1", skill="1.C", diff=2,
  stem=("A continuous forest is divided by new roads and housing into many small patches "
        "separated by lawns and pavement. Which prediction about the forest's generalist and "
        "specialist bird species is best supported, and why?"),
  answer=("Specialists will decline more sharply, because they depend on a narrow range of "
          "interior-forest conditions and food resources that small, edge-dominated patches can "
          "no longer provide anywhere within them."),
  distractors=[
      ("Generalists will decline more sharply, because they require large continuous territories "
       "to find the wide variety of foods their broad diets depend on.",
       "A broad diet reduces rather than increases dependence on any one habitat; generalists "
       "typically find acceptable resources within fragments and in the developed matrix."),
      ("Both groups will decline by a similar proportion, because fragmentation reduces the total "
       "area of forest available and total area is what determines the abundance of any bird "
       "species.",
       "Total area matters, but species differ in how well they tolerate the edge conditions and "
       "altered resources that fragmentation creates, so the declines are not proportional."),
      ("Specialists will increase while generalists decline, because the reduced competition "
       "inside each small patch frees specialists from pressure by broad-diet competitors.",
       "Fragmentation does not remove generalists from patches; edge-tolerant generalists usually "
       "become more common there, so competition on specialists does not ease."),
  ],
  why_right=("A specialist has a narrow niche: a restricted diet, a narrow range of tolerable "
             "conditions, or dependence on a particular habitat structure such as deep forest "
             "interior with closed canopy and high humidity. Fragmentation converts interior into "
             "edge, changing light, temperature, wind, and predator and nest-parasite exposure, "
             "and removes the specific resources specialists rely on. Generalists tolerate a "
             "broad range of conditions and can also use the surrounding lawns and gardens, so "
             "they persist or increase. The result is biotic homogenization: fragmented "
             "landscapes converge on a similar set of widespread generalists."),
  focus=("Apply niche breadth to predict which group is more vulnerable to habitat fragmentation "
         "and edge effects."))
