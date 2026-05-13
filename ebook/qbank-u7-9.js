// ═══════════════════════════════════════════════════════════════
// AP ENVIRONMENTAL SCIENCE — QUESTION BANK: UNITS 7, 8, 9
// ═══════════════════════════════════════════════════════════════
window.QBANK_U7_9 = [

// ─────────────────────────────────────────────────────────────────
// UNIT 7 — ATMOSPHERIC POLLUTION
// ─────────────────────────────────────────────────────────────────
{
  id: 701, unit: 7, topic: "7.2", topicName: "Photochemical Smog & Temperature Inversions",
  skill: "analysis", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Los Angeles reports its worst air quality episodes in summer, particularly in valleys. Weather data during smog events shows: surface temperatures 28°C; temperatures at 500 m altitude: 34°C; wind speed at surface: near calm. During winter or windy days, air quality is significantly better despite similar emission levels.",
  stem: "Which combination of factors specifically causes the worst smog episodes described, and why does the atmospheric temperature profile play a central role?",
  options: {
    A: "High temperatures increase evaporation of gasoline, and calm winds prevent dilution; the temperature profile is irrelevant because emissions are the primary control variable.",
    B: "A temperature inversion (warm air aloft over cooler surface air) prevents vertical mixing; combined with sunlight for photochemical reactions and calm winds that prevent horizontal dispersion, pollutants accumulate at the surface.",
    C: "Valley geography causes topographic uplift of air masses, concentrating pollutants at the ridges above the city.",
    D: "Summer heat accelerates catalytic converter reactions, producing more secondary pollutants; temperature inversions have no relationship to smog chemistry."
  },
  correct: "B",
  rationale: "B. Normal atmosphere cools with altitude — warm surface air rises, dispersing pollutants. The data show the opposite: surface = 28°C, 500m = 34°C — a temperature inversion. This warm layer acts as a lid, preventing pollutants from rising and dispersing. Combined with strong California sunlight (photochemical smog requires UV for NOx + VOC → O₃), and calm winds preventing horizontal dispersal, pollutants accumulate to dangerous levels. Valley geography amplifies the inversion effect. A dismisses the inversion as irrelevant — it is the defining mechanism. C describes topographic uplift (the opposite effect). D incorrectly attributes smog to catalytic converters."
},
{
  id: 702, unit: 7, topic: "7.5", topicName: "Acid Rain",
  skill: "evaluation", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: "The US Acid Rain Program (1990 Clean Air Act amendment) established a cap-and-trade system for SO₂ emissions from power plants. Between 1990–2010: SO₂ emissions fell 67%; acid rain pH increased from average 4.2 to 4.8 in affected regions; compliance costs were 25–75% lower than EPA's original estimates.",
  stem: "These results most directly support which conclusion about environmental policy mechanisms?",
  options: {
    A: "Command-and-control regulations are more effective than market-based mechanisms for reducing pollutants.",
    B: "Cap-and-trade market mechanisms can achieve significant pollution reductions at lower-than-predicted costs by allowing flexible compliance while creating financial incentives for innovation.",
    C: "Acid rain has been completely eliminated in the US, demonstrating that environmental problems can be fully reversed through policy.",
    D: "pH increases from 4.2 to 4.8 represent a 14% reduction in acid deposition, showing only modest environmental improvement."
  },
  correct: "B",
  rationale: "B. The SO₂ cap-and-trade program is widely cited as evidence that market-based mechanisms can achieve environmental goals cost-effectively. Companies could choose whether to reduce emissions or buy allowances from more efficient reducers — rewarding innovation and flexibility. 25–75% cost savings below regulatory projections is substantial. A claims command-and-control is more effective, but the data support the opposite for this case. C overstates the result — pH 4.8 is still acidic (acidic threshold ~5.6); the problem is reduced, not eliminated. D makes a mathematical error: pH is logarithmic, so 4.2→4.8 is a 4× reduction in H⁺ concentration (10^0.6 ≈ 4), not 14%."
},
{
  id: 703, unit: 7, topic: "7.3", topicName: "Indoor Air Pollution",
  skill: "application", difficulty: "easy", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "A family purchases an older home built in 1968. An environmental health inspector recommends testing for three specific indoor air quality hazards associated with pre-1970s construction. Which three hazards are most correctly identified?",
  options: {
    A: "Radon, carbon monoxide, and volatile organic compounds from new carpets",
    B: "Lead paint, asbestos insulation/pipe wrap, and radon gas from soil",
    C: "Secondhand smoke, industrial solvent vapors, and ozone from laser printers",
    D: "Formaldehyde from new furniture, nitrogen dioxide from gas stoves, and mold from recent water damage"
  },
  correct: "B",
  rationale: "B. The three hazards specifically associated with pre-1978 construction are: (1) Lead-based paint — banned in US residential use in 1978, present in 87% of homes built before 1940; (2) Asbestos — used in insulation, floor tiles, pipe wrap, and fireproofing until the late 1970s; (3) Radon — a geological hazard present in any older home depending on underlying rock type. The question emphasizes 1968 construction vintage. A, C, and D include hazards associated with modern homes or lifestyle factors, not specifically pre-1970s construction vintage."
},
{
  id: 704, unit: 7, topic: "7.4", topicName: "Clean Air Act & Emission Reduction",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Since 1970 (passage of Clean Air Act): US GDP increased 275%; vehicle miles traveled increased 190%; US population increased 60%. Over the same period: total emissions of six criteria pollutants fell 78%; ambient concentrations of PM₂.₅ fell 40% since 2000; lead concentrations in air fell 99%.",
  stem: "These data most strongly refute which argument commonly made against environmental regulation?",
  options: {
    A: "Environmental regulations cannot reduce pollution in rapidly growing economies because economic growth drives emissions proportionally.",
    B: "Air quality regulations have been ineffective at reducing actual ambient pollution concentrations.",
    C: "The Clean Air Act targets greenhouse gases rather than traditional pollutants.",
    D: "Emissions regulations require reducing GDP to achieve meaningful environmental improvements."
  },
  correct: "A",
  rationale: "A. The data show a 275% GDP increase and 190% VMT increase alongside a 78% reduction in criteria pollutant emissions — a clear 'decoupling' of economic growth and pollution. This directly refutes the argument that you cannot grow the economy while reducing pollution. The lead data (99% reduction, largely from phasing out leaded gasoline) is particularly dramatic. B is refuted by the PM₂.₅ and lead concentration data. C is factually incorrect — the CAA targets criteria pollutants (SO₂, NOx, CO, PM, O₃, Pb); CO₂ greenhouse gas regulation came much later. D is directly refuted by the simultaneous growth and emissions decline."
},
{
  id: 705, unit: 7, topic: "7.1", topicName: "Primary vs Secondary Pollutants",
  skill: "recall", difficulty: "easy", cedSkill: "Identifying & Describing Concepts",
  stimulus: null,
  stem: "Which of the following air pollutants is correctly classified as a secondary pollutant?",
  options: {
    A: "SO₂ from coal combustion in power plants",
    B: "Carbon monoxide (CO) from incomplete combustion in vehicle engines",
    C: "Ground-level ozone (O₃) formed when NOx and VOCs react in sunlight",
    D: "Particulate matter (PM) directly emitted from diesel engines"
  },
  correct: "C",
  rationale: "C. Ground-level ozone is not directly emitted — it forms in the atmosphere through photochemical reactions: NO₂ + sunlight → NO + O; O + O₂ → O₃. It is a secondary pollutant. SO₂ (A) is directly emitted from sulfur in coal and is a primary pollutant. CO (B) is directly emitted from incomplete combustion — primary. Diesel PM (D) is directly emitted from tailpipes — primary. Note: sulfuric acid (H₂SO₄) in acid rain is a secondary pollutant formed from SO₂, but SO₂ itself is primary."
},
{
  id: 706, unit: 7, topic: "7.6", topicName: "Noise Pollution",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Marine biologists have documented that North Atlantic right whale vocalization frequency and amplitude have shifted over the past 30 years in shipping corridors. Whales in high-shipping areas produce louder, lower-frequency calls compared to whales in quieter regions. Right whale populations are critically endangered (~340 individuals).",
  stem: "The documented vocalization changes in right whales most likely represent which biological response to shipping noise, and what conservation implication does this suggest?",
  options: {
    A: "Genetic adaptation — whales evolved new call types through natural selection over 30 years.",
    B: "Phenotypic plasticity or behavioral adjustment — whales modify call characteristics to compensate for masking by low-frequency shipping noise, but this may reduce communication effectiveness and mate-finding success.",
    C: "Competitive exclusion — shipping noise has eliminated other whale species, and right whales have shifted calls to fill the acoustic niche.",
    D: "Secondary succession — the whale population is recovering through succession stages driven by noise adaptation."
  },
  correct: "B",
  rationale: "B. Behavioral/phenotypic acoustic adjustment to anthropogenic noise is well-documented in cetaceans. Whales increase call amplitude ('Lombard effect,' also seen in humans in noisy environments) and shift frequency to reduce overlap with ship noise. However, these compensatory strategies carry costs: altered calls may be less effective for mate-finding, mother-calf communication, and social cohesion — critical for a species with only ~340 individuals. A Genetic adaptation over 30 years is possible but far too rapid for complex behavioral traits. C Competitive exclusion is irrelevant here. D misapplies succession to a population biology context."
},

// ─────────────────────────────────────────────────────────────────
// UNIT 8 — AQUATIC & TERRESTRIAL POLLUTION
// ─────────────────────────────────────────────────────────────────
{
  id: 801, unit: 8, topic: "8.2", topicName: "Eutrophication",
  skill: "application", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "The Gulf of Mexico hypoxic zone ('dead zone') measured 22,720 km² in 2019 — larger than the state of New Jersey. Nutrient monitoring of the Mississippi River shows: nitrate concentrations highest in March–June (spring runoff); the dead zone reaches maximum size in July–August; dissolved oxygen in the affected zone drops below 2 mg/L.",
  stem: "Using the eutrophication model, explain the 2–3 month lag between peak nitrate inputs (March–June) and maximum dead zone size (July–August).",
  options: {
    A: "Nitrate takes 2–3 months to diffuse from river water into the Gulf, delaying the nutrient delivery.",
    B: "Spring nitrate inputs stimulate algal growth; as algae die and sink, bacterial decomposition consumes oxygen over weeks to months; peak hypoxia follows after decomposition accumulates through summer stratification.",
    C: "The lag represents the time required for currents to transport the dead zone westward from the river mouth to its measured location.",
    D: "Summer winds in July–August directly oxidize nitrogen in surface water, triggering the rapid DO decline independent of algal dynamics."
  },
  correct: "B",
  rationale: "B. The eutrophication timeline has inherent delays: (1) spring nutrients stimulate algal growth over weeks; (2) algae die and sink through the water column; (3) decomposer bacteria break down organic matter, consuming dissolved oxygen in bottom waters; (4) summer thermal stratification prevents oxygen re-aeration from the surface. The dead zone is largest in summer precisely because stratification traps the depleted bottom water and peak decomposition lag follows peak algal production. A is incorrect — dissolved nutrients transport quickly, not over months. C conflates transport with biological timing. D introduces wind oxidation as an unsupported mechanism."
},
{
  id: 802, unit: 8, topic: "8.2", topicName: "Biomagnification",
  skill: "application", difficulty: "medium", cedSkill: "Quantitative Analysis",
  stimulus: "Mercury concentration data in a food chain:\nWater: 0.0001 ppm\nPhytoplankton: 0.01 ppm\nZooplankton: 0.1 ppm\nSmall fish (herring): 1.2 ppm\nLarge fish (tuna): 14 ppm\nPolaristic tern: 72 ppm",
  stem: "Based on the data, by approximately what factor does mercury concentration increase from water to the highest trophic level shown, and what property of mercury explains this pattern?",
  options: {
    A: "720,000× increase; mercury is water-soluble and therefore easily excreted, but accumulates due to high water intake.",
    B: "720,000× increase; mercury (as methylmercury) is lipid-soluble and not efficiently metabolized or excreted, accumulating in fatty tissues and concentrating at each trophic transfer.",
    C: "72,000× increase; mercury accumulates only in marine ecosystems because freshwater fish detoxify mercury through specialized enzymes.",
    D: "720× increase (from water to tuna); terns fall outside the food chain and their mercury represents a separate accumulation pathway."
  },
  correct: "B",
  rationale: "B. From 0.0001 ppm (water) to 72 ppm (tern) = 720,000× increase. Methylmercury's lipophilicity (fat solubility) is the key property: it crosses biological membranes easily, accumulates in fatty tissues, and is metabolized and excreted slowly — each organism retains most mercury consumed, so concentration increases with each trophic transfer. The 10× approximate increase per trophic level is consistent with both the 10% energy transfer rule and biomagnification models. A incorrectly states mercury is water-soluble; methylmercury is lipid-soluble. C overgeneralizes — biomagnification occurs in all aquatic systems. D miscounts the calculation."
},
{
  id: 803, unit: 8, topic: "8.5", topicName: "Dose-Response & Toxicology",
  skill: "analysis", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A dose-response study of a pesticide on test rats shows: at 0.1 mg/kg, 0% mortality; at 1 mg/kg, 5% mortality; at 10 mg/kg, 50% mortality (LD50); at 100 mg/kg, 95% mortality; at 1,000 mg/kg, 100% mortality. A second study adds a common synergist chemical at 0.1 mg/kg with the pesticide and finds 50% mortality at only 1 mg/kg pesticide dose.",
  stem: "Based on the combined data, which conclusion about the synergist is most strongly supported?",
  options: {
    A: "The synergist has no independent toxicity, so its addition is inconsequential at environmental concentrations.",
    B: "The synergist reduces the effective LD50 by 90% — a 10× potency increase — suggesting the combination poses greater risk than either chemical alone, even at individually sub-lethal concentrations.",
    C: "The synergist demonstrates additive toxicity by adding its own 5% mortality to produce the 50% observed.",
    D: "The synergist data are invalid because real-world exposures never involve simultaneous pesticide and synergist contact."
  },
  correct: "B",
  rationale: "B. Standard LD50 = 10 mg/kg; with synergist, LD50 = 1 mg/kg — a 10× potency increase. This is synergistic (greater than additive) toxicity. The synergist itself at 0.1 mg/kg has 0% mortality when alone (below the dose-response curve threshold), but in combination shifts the pesticide dose-response dramatically. This has profound implications for environmental risk assessment, which traditionally evaluates chemicals individually. Real-world pesticide mixtures frequently produce synergistic effects not captured by single-compound testing. A dismisses a significant measured effect. C describes additive (not synergistic) toxicity incorrectly. D dismisses the relevance of mixture toxicology data."
},
{
  id: 804, unit: 8, topic: "8.1", topicName: "Nonpoint Source Pollution",
  skill: "evaluation", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "A watershed management team is trying to reduce nutrient (nitrogen and phosphorus) loading to a degraded lake. They identify that 80% of nutrient inputs come from agricultural fields spread across 50 square kilometers of farmland, with no single discharge pipe. Which regulatory approach is most appropriate, and what makes this source category challenging to regulate?",
  options: {
    A: "Point source regulation under the Clean Water Act NPDES permit system, because farms are readily identifiable landholdings with specific boundaries.",
    B: "Nonpoint source management programs, voluntary best management practices (BMPs), cost-share incentive programs, and watershed-scale nutrient budgets — because diffuse runoff from many parcels lacks a single discharge point that can be permitted.",
    C: "Zoning regulations that ban all agriculture within 5 km of the lake, because land use conversion is the only effective nonpoint source control.",
    D: "International treaty mechanisms, because agricultural pollution crosses state lines and requires federal preemption of state water law."
  },
  correct: "B",
  rationale: "B. Diffuse runoff from many farm parcels across a landscape is the definition of nonpoint source (NPS) pollution — no single discharge pipe to permit. The Clean Water Act's NPDES permit system regulates point sources but is structurally ill-suited to NPS. Section 319 of the Clean Water Act specifically addresses NPS through state management programs using BMPs, cost-share funding, and technical assistance. The key challenge is that enforcement requires monitoring thousands of individual parcels rather than a single outfall. A correctly identifies the CWA but misidentifies the source type. C is an overly extreme and economically impractical response. D is irrelevant — state water law is typically sufficient."
},
{
  id: 805, unit: 8, topic: "8.4", topicName: "Solid Waste Management",
  skill: "analysis", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: "A municipality generates 500 tonnes of municipal solid waste per day. Composition: food waste 28%, paper/cardboard 25%, plastics 18%, metals 9%, glass 5%, yard waste 12%, other 3%. Current disposal: 85% landfill, 8% incineration, 7% recycling.",
  stem: "A consultant proposes increasing diversion from landfill to 70% by implementing composting and expanded recycling. Which composition data most strongly support the feasibility of reaching this target?",
  options: {
    A: "The 18% plastics fraction provides the highest recycling market value, making it the primary target for diversion.",
    B: "Food waste (28%) and yard waste (12%) combined represent 40% of the waste stream and are compostable; paper/cardboard (25%), metals (9%), and glass (5%) are recyclable — together representing 79% of waste, making 70% diversion technically feasible.",
    C: "Incineration should be expanded rather than composting, because thermal treatment can process all fraction types including contaminated plastics.",
    D: "The 3% 'other' category contains the highest-hazard materials and should be the primary diversion focus."
  },
  correct: "B",
  rationale: "B. The arithmetic is direct: compostable fractions (food 28% + yard 12% = 40%) + recyclable fractions (paper/cardboard 25% + metals 9% + glass 5% = 39%) = 79% of the waste stream is technically divertable from landfill through composting and recycling. Achieving 70% diversion requires capturing most of these categories. B correctly aggregates the relevant fractions. A focuses only on plastics (18%) which, while recyclable, is complicated by contamination and market volatility. C proposes incineration, which is not diversion from disposal — it's an alternative disposal method. D's 'other' category (3%) is too small to drive meaningful diversion."
},
{
  id: 806, unit: 8, topic: "8.6", topicName: "Infectious Disease & Environment",
  skill: "evaluation", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Climate data (1960–2020) show that the geographic range of Anopheles mosquitoes (malaria vectors) has expanded poleward by ~450 km and upward in elevation by ~200 m in highland regions of Africa and Central America. Malaria incidence has increased in highland communities in Kenya and Ethiopia where the disease was previously rare.",
  stem: "Which conclusion about the relationship between climate change and infectious disease distribution is most strongly supported by these data?",
  options: {
    A: "Climate change has no relationship to malaria distribution — the increases reflect population growth and reduced healthcare access.",
    B: "Rising temperatures are expanding mosquito vector habitats into previously unsuitable highland and poleward regions, increasing the geographic range of malaria transmission.",
    C: "The poleward expansion of mosquitoes proves that warmer temperatures universally increase all infectious disease burdens.",
    D: "Malaria spread to highland regions is primarily caused by deforestation rather than temperature changes."
  },
  correct: "B",
  rationale: "B. The data show a correlation between rising temperatures and geographic expansion of Anopheles mosquitoes into higher elevations and latitudes — directly linking climate change to expanded malaria risk zones. Highland communities have historically had low malaria immunity due to rare exposure, making them particularly vulnerable. This is one of the most empirically supported climate-health connections. A dismisses the ecological data without justification. C makes an unsupported universal generalization ('all infectious disease') from specific vector data. D introduces deforestation as an alternative hypothesis — while deforestation can affect malaria, the data specifically show elevational and latitudinal expansion consistent with temperature changes."
},

// ─────────────────────────────────────────────────────────────────
// UNIT 9 — GLOBAL CHANGE
// ─────────────────────────────────────────────────────────────────
{
  id: 901, unit: 9, topic: "9.1", topicName: "Ozone Depletion & Montreal Protocol",
  skill: "evaluation", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: "The Montreal Protocol (1987) phased out CFC production and has been universally ratified (197 countries — more than any other environmental treaty). Stratospheric ozone over Antarctica reached a minimum in the late 1990s–2000s and has since shown statistically significant recovery. The ozone hole is projected to return to 1980 levels by ~2065.",
  stem: "The Montreal Protocol is frequently cited as the most successful international environmental agreement. Which feature of the ozone problem most enabled this policy success, in contrast to the challenges of climate change agreements?",
  options: {
    A: "Ozone depletion required the same policy solution as climate change — both required immediate elimination of all fossil fuel combustion.",
    B: "CFCs were produced by a small number of companies in a few countries; affordable substitutes (HFCs) existed; and the harms (UV-related skin cancer) were directly measurable and personally relevant — enabling concentrated industrial transition without broad economic disruption.",
    C: "The Montreal Protocol succeeded because it included legally binding carbon emission targets that preceded the Kyoto Protocol.",
    D: "Ozone depletion was solved by natural atmospheric processes, not by the treaty; the protocol gets unwarranted credit for natural recovery."
  },
  correct: "B",
  rationale: "B. Political scientists and environmental economists identify several structural reasons ozone was 'easier' than climate: (1) CFCs were produced by only ~20 companies globally, enabling direct industrial negotiation; (2) drop-in substitutes (initially HCFCs, then HFCs) existed, reducing transition costs; (3) skin cancer and cataracts were personally frightening, concentrated health harms that mobilized public support. Climate change, by contrast, requires transforming the entire global energy system (not just a few industrial chemicals), has diffuse economic costs spread across entire economies, and involves benefits accruing decades hence. A incorrectly equates the two problems' solutions. C is factually incorrect. D is contradicted by atmospheric chemistry data."
},
{
  id: 902, unit: 9, topic: "9.2", topicName: "Climate Feedback Loops",
  skill: "evaluation", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Satellite data show Arctic sea ice extent has decreased ~13% per decade since 1979. Sea ice albedo: 0.6–0.8 (reflects 60–80% of sunlight). Open ocean albedo: 0.06 (reflects 6%). GRACE satellite data show Greenland ice sheet is losing ~280 billion tonnes of mass per year, contributing to ~0.8 mm/yr of global sea level rise.",
  stem: "The sea ice decline most directly represents which type of feedback mechanism, and what does it predict about future warming rates?",
  options: {
    A: "A negative feedback — less ice means less reflective surface, which will cool the ocean and restore ice cover.",
    B: "A positive feedback — reduced sea ice replaces high-albedo surfaces with low-albedo ocean, absorbing more solar energy, further warming the Arctic and accelerating ice loss.",
    C: "A neutral feedback — ice albedo changes are balanced by increased evaporation from open water, producing more clouds that reflect incoming radiation.",
    D: "A delayed negative feedback — warming oceans increase atmospheric moisture, which falls as snow and rebuilds sea ice within 10–20 year cycles."
  },
  correct: "B",
  rationale: "B. This is the ice-albedo positive feedback — one of the best-quantified climate feedback mechanisms. Ice (albedo 0.6–0.8) → open water (albedo 0.06) represents an enormous increase in solar energy absorption. As ice melts → more dark ocean exposed → more energy absorbed → more warming → more ice melts. This self-amplifying cycle is why the Arctic is warming 3–4× faster than the global average ('Arctic amplification'). A incorrectly identifies this as a negative feedback. C introduces cloud feedbacks (real but complex) as a complete offset — not supported by the data. D describes a separate process (snow accumulation) that is not sufficient to offset ice albedo feedback at observed rates."
},
{
  id: 903, unit: 9, topic: "9.2", topicName: "Climate Evidence",
  skill: "analysis", difficulty: "medium", cedSkill: "Identifying & Analyzing Data",
  stimulus: "Ice core data from Vostok, Antarctica (420,000 years): CO₂ ranges between 180–280 ppm across four glacial cycles. Temperature anomaly closely tracks CO₂, with a correlation of r = 0.93. Current atmospheric CO₂ = 422 ppm (June 2024) — 50% above any ice core value.",
  stem: "A student interprets the ice core data as showing temperature causes CO₂ changes (not the reverse), based on data showing temperature rises slightly before CO₂ in some glacial cycles. Which response most accurately addresses this interpretation?",
  options: {
    A: "The student is correct — temperature drives CO₂ changes, so current CO₂ increases are caused by natural warming and not cause for concern.",
    B: "The lag in some glacial cycles reflects an initial orbital forcing trigger, after which CO₂ amplifies warming as a positive feedback. Today's CO₂ increase is driven by human emissions at a rate inconsistent with any orbital change — both causal directions can be true in different contexts.",
    C: "The student is correct that CO₂ follows temperature, which means CO₂ increases never drive warming — the greenhouse effect has been disproven by the ice core record.",
    D: "The correlation of 0.93 proves CO₂ is the only driver of temperature change across all timescales."
  },
  correct: "B",
  rationale: "B. The temperature-leads-CO₂ observation in glacial cycles is real and well-explained: orbital changes (Milankovitch cycles) trigger initial warming, warming oceans release dissolved CO₂ (CO₂ solubility decreases with temperature), and this CO₂ amplifies warming — a positive feedback. The causal relationship is bidirectional: CO₂ can respond to temperature AND drive temperature. Crucially, modern CO₂ increases (3 ppm/yr) cannot be explained by temperature changes (the physics only produces ~8 ppm/°C of oceanic outgassing). Isotopic analysis of CO₂ (depleted ¹³C, lacking ¹⁴C) confirms it is from fossil combustion, not oceanic outgassing. A and C misread the ice core lag as disproving CO₂'s greenhouse effect. D overstates the correlation as proving single-factor causation."
},
{
  id: 904, unit: 9, topic: "9.3", topicName: "Ocean Acidification",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Ocean chemistry data (1990–2020): surface ocean pH has declined from 8.11 to 8.07 (a decrease of 0.04 pH units). Ocean pCO₂ has risen from ~350 μatm to ~400 μatm, tracking atmospheric CO₂. Pteropod (sea butterfly) shell thickness has decreased 25% in Southern Ocean specimens compared to pre-industrial shells preserved in sediment cores.",
  stem: "The 0.04 pH unit decline represents what change in hydrogen ion concentration, and what does the pteropod data directly indicate about the biological impact?",
  options: {
    A: "A 4% increase in H⁺ concentration; pteropods are adapting by producing thicker shells to compensate for dissolution.",
    B: "Approximately a 10% increase in H⁺ concentration (because pH is logarithmic: 10^0.04 ≈ 1.10); 25% shell thinning in pteropods indicates that calcification is already impaired, threatening the base of pelagic food webs.",
    C: "A 40% increase in H⁺ concentration; shell thinning is caused by temperature change, not pH.",
    D: "A linear 0.04% increase in H⁺; pteropod shell changes represent natural genetic variation, not acidification response."
  },
  correct: "B",
  rationale: "B. pH is logarithmic: ΔpH = 0.04 → change in [H⁺] = 10^0.04 ≈ 1.096, or ~10% increase. While 0.04 pH units sounds small, this represents a measurable increase in ocean acidity — and since pre-industrial times (~0.1 pH units total), a 26% increase in [H⁺]. The pteropod data show empirical biological harm: 25% shell thinning at existing acidity levels. Pteropods are important prey for salmon, herring, and whales — their decline would propagate through pelagic food webs. A calculates pH linearly (wrong for a logarithmic scale). C wildly overestimates the H⁺ change. D dismisses the logarithmic math and denies empirical evidence."
},
{
  id: 905, unit: 9, topic: "9.4", topicName: "Invasive Species",
  skill: "evaluation", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Burmese pythons (Python bivittatus) established in Everglades National Park from the pet trade. Long-term survey data: raccoon populations decreased 99.3%, opossum 98.9%, marsh rabbit 94.1%, bobcat 87.5%, white-tailed deer significantly declined. Python density increases linearly with distance into the park interior.",
  stem: "These mammal population declines most directly illustrate which ecological impact of invasive predators, and what does the spatial pattern suggest about management priorities?",
  options: {
    A: "Competitive exclusion — pythons are outcompeting native predators for prey resources, and management should focus on restoring native predator populations.",
    B: "Predation-driven trophic cascade — an apex predator with no natural controls is causing near-extirpation of multiple prey species simultaneously; interior park regions with highest python density are highest management priority.",
    C: "Resource partitioning breakdown — pythons are occupying niches of multiple species, and habitat modification to reduce niche availability would limit python expansion.",
    D: "Mutualistic disruption — pythons depend on native species for habitat modification, and removing native species will cause python populations to collapse."
  },
  correct: "B",
  rationale: "B. The data show simultaneous 87–99% declines across multiple taxonomic groups (different mammals with different behaviors, habitats, and life histories). This magnitude of impact from a single predator with no natural controls — a textbook invasive apex predator effect — represents a predation-driven trophic cascade. The spatial correlation with python density directly identifies high-density interior areas as management priorities for removal efforts. A misidentifies competitive exclusion — pythons are directly consuming prey, not competing with other predators. C describes habitat modification (irrelevant to a predatory python). D describes mutualism, which is not the relationship described."
},
{
  id: 906, unit: 9, topic: "9.5", topicName: "Biodiversity Loss & Conservation",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "The Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES, 2019) Global Assessment: approximately 1 million species face extinction in coming decades. Major drivers ranked by impact: land-use change 30%, direct exploitation 23%, climate change 14%, pollution 14%, invasive species 11%. Rate of species loss is 10–100× the background extinction rate.",
  stem: "A conservation biologist is advising a government on prioritizing limited funding. Based solely on the IPBES data, which allocation strategy targets the highest-impact drivers of biodiversity loss?",
  options: {
    A: "Allocate 50% to invasive species control (ranked #5) because invasive species are fully reversible through eradication programs.",
    B: "Allocate proportionally: ~30% to land protection and restoration, ~23% to anti-poaching and sustainable harvest regulation, ~14% each to climate mitigation and pollution reduction, ~11% to invasive species management.",
    C: "Concentrate 90% on climate change mitigation because it will become the dominant driver by 2050, even though it ranks third today.",
    D: "Allocate 80% to single large protected areas because habitat protection addresses only land-use change while ignoring all other drivers."
  },
  correct: "B",
  rationale: "B. Evidence-based conservation prioritization should align resource allocation with empirically measured driver contributions. The IPBES data show land-use change as the largest single driver (30%), followed by exploitation (23%), climate (14%), pollution (14%), and invasive species (11%). A proportional allocation targets the portfolio of threats simultaneously rather than over-investing in a single factor. A over-prioritizes the 5th-ranked driver. C anticipates a future ranking shift not in the current data — while defensible for long-term planning, it ignores the current dominant drivers. D correctly identifies land protection but misses the multi-driver reality (addresses only ~30% of the problem with 80% of funds)."
},
{
  id: 907, unit: 9, topic: "9.2", topicName: "Climate Tipping Points",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "A 2022 study in Science (Armstrong McKay et al.) identified 16 climate tipping elements — components of the Earth system that could undergo self-sustaining change beyond thresholds. Five tipping elements (West Antarctic Ice Sheet collapse, Greenland ice sheet loss, tropical coral reef die-off, boreal forest collapse, Atlantic thermohaline collapse) could be triggered at 1.5–2°C of warming — within the Paris Agreement's target range. Cascading interactions between tipping elements could amplify total warming beyond initial forcing.",
  stem: "These tipping point findings have what implication for interpreting climate targets in the Paris Agreement (1.5°C)?",
  options: {
    A: "The 1.5°C target is unnecessarily strict; tipping elements are hypothetical and should not influence policy.",
    B: "Even within the Paris Agreement's most ambitious target (1.5°C), some tipping elements may be triggered, meaning the true 'safe' operating space may be narrower than current policy frameworks acknowledge — and cascading interactions could produce non-linear outcomes.",
    C: "Climate tipping points prove that no policy response can prevent catastrophic warming, making adaptation the only viable strategy.",
    D: "The 16 tipping elements are all reversible within decades if emissions peak by 2030, making the Paris targets fully sufficient for avoiding cascading risks."
  },
  correct: "B",
  rationale: "B. The Armstrong McKay (2022) paper directly challenges the notion that 1.5–2°C is a fully 'safe' target. If tipping elements can be triggered at 1.5°C warming, and cascading interactions amplify total forcing, the safety margin in current policy targets may be narrower than assumed. This is a frontier area of climate science with high policy relevance, consistent with the 'evaluate current environmental research' objective. A dismisses peer-reviewed science. C commits the 'appeal to despair' fallacy — tipping risks increase urgency for mitigation, not futility. D makes an unsupported claim about full reversibility — tipping elements are specifically defined as potentially irreversible above thresholds."
},
{
  id: 908, unit: 9, topic: "9.3", topicName: "Coral Reef Decline",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "The Great Barrier Reef experienced mass bleaching events in 2016, 2017, 2020, 2022, and 2024 — the first five consecutive mass bleaching events in its recorded history. In 2016 alone, 50% of shallow-water corals died. Between events, surveys show declining recovery rates: the interval required for full coral recovery is 10–15 years, but bleaching events now occur every 2–4 years.",
  stem: "Which conclusion about the long-term viability of the Great Barrier Reef is most strongly supported by this data trend?",
  options: {
    A: "The reef is fully recovering between bleaching events because 50% coral survival in 2016 demonstrates reef resilience.",
    B: "Bleaching recurrence intervals are now shorter than coral recovery times, creating a chronic stress regime that prevents recovery and risks functional collapse of the reef ecosystem.",
    C: "The data indicate that the Great Barrier Reef will completely disappear within 10 years due to the five consecutive bleaching events.",
    D: "Bleaching events will self-regulate as warmer, bleaching-resistant coral genotypes replace susceptible ones through rapid natural selection."
  },
  correct: "B",
  rationale: "B. The critical comparison is between recovery time (10–15 years needed) and bleaching recurrence (every 2–4 years). When recurrence is faster than recovery, corals cannot rebuild between events — each bleaching further depletes the population without recovery. This 'chronic stress regime' is a key indicator of ecosystem collapse risk. This is supported by observed declining recovery rates in the data. A misreads 50% mortality as 50% survival/resilience. C overclaims the magnitude and timeline — 'complete disappearance in 10 years' is not directly supported by the data, though significant permanent damage is. D makes an optimistic assumption about evolutionary pace that would require hundreds to thousands of generations."
}

]; // End QBANK_U7_9
