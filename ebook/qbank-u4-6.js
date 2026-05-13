// ═══════════════════════════════════════════════════════════════
// AP ENVIRONMENTAL SCIENCE — QUESTION BANK: UNITS 4, 5, 6
// ═══════════════════════════════════════════════════════════════
window.QBANK_U4_6 = [

// ─────────────────────────────────────────────────────────────────
// UNIT 4 — EARTH SYSTEMS & RESOURCES
// ─────────────────────────────────────────────────────────────────
{
  id: 401, unit: 4, topic: "4.2", topicName: "Soil Formation & Degradation",
  skill: "application", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A farm has been tilled conventionally (moldboard plow) for 50 years. Soil samples show the A horizon has thinned from 30 cm to 12 cm, organic matter content has declined from 4.2% to 1.8%, and infiltration rate has decreased from 120 mm/hr to 18 mm/hr.",
  stem: "Based on these data, which consequence for the farm's long-term productivity and surrounding watershed is most directly predicted?",
  options: {
    A: "Increased fertility, because deeper plowing exposes fresh mineral soil from the B horizon.",
    B: "Reduced crop yields and increased runoff/erosion, because topsoil loss and compaction decrease water retention and fertility.",
    C: "Improved drainage, because reduced organic matter decreases water-holding capacity, preventing waterlogging.",
    D: "Increased NPP, because conventional tillage aerates soil and promotes nitrogen-fixing bacterial activity."
  },
  correct: "B",
  rationale: "B. The data show three converging problems: topsoil loss (A horizon thinned from 30→12 cm), reduced organic matter (less nutrient and water retention), and decreased infiltration (18 vs. 120 mm/hr — a 6.7× reduction in water absorption). The infiltration decline means 85% more precipitation becomes surface runoff, increasing erosion and carrying sediment and nutrients to waterways. A is wrong — B horizon mineral soil is less fertile, not more. C is technically correct about drainage but ignores the catastrophic implications. D is an overgeneralization; conventional tillage disrupts soil structure long-term."
},
{
  id: 402, unit: 4, topic: "4.3", topicName: "Atmospheric Layers",
  skill: "analysis", difficulty: "medium", cedSkill: "Identifying & Describing Concepts",
  stimulus: "A graph shows temperature vs. altitude in Earth's atmosphere. Temperature decreases with altitude in Layer 1 (0–12 km), increases with altitude in Layer 2 (12–50 km), decreases again in Layer 3 (50–80 km), and increases sharply in Layer 4 (80+ km).",
  stem: "The temperature increase with altitude in Layer 2 is caused by which atmospheric process, and why does this layer play a critical role in protecting surface life?",
  options: {
    A: "Chemical exothermic reactions between N₂ and O₂, releasing heat; this layer creates the greenhouse effect that warms Earth's surface.",
    B: "Absorption of incoming UV-B and UV-C radiation by ozone (O₃), which both creates and maintains a warm temperature inversion; the ozone layer shields living organisms from DNA-damaging radiation.",
    C: "Concentration of greenhouse gases (CO₂, CH₄) at stratospheric altitudes, which trap outgoing infrared radiation and warm this layer.",
    D: "Direct solar heating of the dense air mass; this layer acts as a thermal blanket that moderates surface temperature extremes."
  },
  correct: "B",
  rationale: "B. Layer 2 is the stratosphere. Its temperature inversion (warming with altitude) is caused by ozone absorbing UV radiation from the sun — this absorption warms the layer. This same process shields Earth's surface from harmful UV-B (causes skin cancer, cataracts, crop damage) and UV-C radiation. A is incorrect — N₂ and O₂ reactions are not responsible for stratospheric warming. C misattributes the warming mechanism to GHGs, which primarily act in the troposphere (Layer 1). D incorrectly implies the stratosphere is denser than the troposphere."
},
{
  id: 403, unit: 4, topic: "4.4", topicName: "Wind Patterns & Coriolis Effect",
  skill: "application", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A map shows a low-pressure system centered over the Great Plains of North America (Northern Hemisphere). Weather data confirm counterclockwise wind rotation around the center.",
  stem: "The counterclockwise rotation of winds around this Northern Hemisphere low-pressure center is best explained by which combination of forces?",
  options: {
    A: "Air flows directly into the low-pressure center; the counterclockwise rotation is due to the solar radiation gradient between the poles and equator.",
    B: "Air flows toward the low-pressure center and is deflected to the right (Coriolis effect), resulting in counterclockwise cyclonic rotation in the Northern Hemisphere.",
    C: "The counterclockwise rotation is caused by Earth's westward rotation dragging air masses in that direction relative to the surface.",
    D: "Ferrel cell circulation patterns force all Northern Hemisphere weather systems to rotate counterclockwise."
  },
  correct: "B",
  rationale: "B. In the Northern Hemisphere, the Coriolis effect deflects moving air to the right. Air flowing toward a low-pressure center (inward) is deflected rightward, which — geometrically — produces counterclockwise (cyclonic) rotation around Northern Hemisphere low-pressure systems. In the Southern Hemisphere, the same logic produces clockwise rotation. A incorrectly cites solar gradients as the rotation mechanism. C incorrectly describes Earth's rotation as 'westward' (it rotates eastward). D overgeneralizes — Ferrel cell circulation explains large-scale mid-latitude winds, not individual storm rotation."
},
{
  id: 404, unit: 4, topic: "4.5", topicName: "Ocean Currents & Climate",
  skill: "evaluation", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "The Atlantic Meridional Overturning Circulation (AMOC) transports warm surface water northward and cold deep water southward, driven by salinity-density contrasts. Recent oceanographic data show AMOC has weakened ~15% since 1950. Climate models project continued weakening as Arctic ice melt adds freshwater to the North Atlantic, reducing salinity and density.",
  stem: "Based on this data and understanding of ocean-climate linkages, which consequence is most directly predicted from continued AMOC weakening?",
  options: {
    A: "Warming of Western Europe, because reduced cold-water transport from depth releases heat to the atmosphere.",
    B: "Cooling of Western Europe and altered precipitation patterns, because reduced warm surface water transport northward decreases the heat delivery that moderates European climate.",
    C: "Increased hurricane intensity in the Gulf of Mexico, because AMOC slowing concentrates warm water in tropical Atlantic regions.",
    D: "Accelerated polar ice sheet melting, because AMOC currently transports cold water toward ice sheets, and its weakening removes this cooling effect."
  },
  correct: "B",
  rationale: "B. AMOC transports a remarkable amount of heat northward — Western Europe's mild climate relative to equivalent latitudes (e.g., London vs. Calgary) is largely AMOC-mediated. Weakening this 'conveyor belt' would reduce northward heat transport, cooling Western Europe and disrupting precipitation patterns. This is a major concern in climate change research, with some models projecting AMOC collapse as a potential tipping point. A reverses the mechanism. C is a plausible indirect effect but not the most direct and well-supported consequence. D reverses AMOC's role with respect to polar ice."
},
{
  id: 405, unit: 4, topic: "4.6", topicName: "ENSO",
  skill: "analysis", difficulty: "medium", cedSkill: "Identifying & Analyzing Data",
  stimulus: "Historical data (1950–2020) show that: during El Niño years, Pacific Northwest salmon runs decrease 30–50% and Peru's anchovy catch drops 80%. During La Niña years, Atlantic hurricane activity increases 25–40% and drought frequency in East Africa declines.",
  stem: "Which mechanism most directly explains the decrease in Peru's anchovy catch during El Niño events?",
  options: {
    A: "Warmer ocean temperatures directly increase anchovy metabolism, causing them to move to colder Arctic waters.",
    B: "El Niño weakens trade winds and suppresses cold-water upwelling along the South American coast, reducing phytoplankton productivity that anchovies depend on.",
    C: "Increased storm frequency during El Niño prevents fishing vessels from reaching offshore anchovy stocks.",
    D: "El Niño increases ocean salinity near Peru, creating osmotic stress that reduces anchovy survival rates."
  },
  correct: "B",
  rationale: "B. Under normal conditions, trade winds push warm surface water westward, allowing cold, nutrient-rich water to upwell along Peru's coast. This upwelling sustains one of Earth's most productive fisheries. During El Niño, trade winds weaken, warm water moves east, and upwelling is suppressed — nutrient-poor warm surface water replaces the cold upwelling, phytoplankton decline, and the food web from phytoplankton to zooplankton to anchovies collapses. A describes behavioral responses not supported by the mechanism. C attributes catches to weather, not ecology. D incorrectly cites salinity changes as the primary driver."
},
{
  id: 406, unit: 4, topic: "4.2", topicName: "Soil & Erosion Prevention",
  skill: "application", difficulty: "easy", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "A wheat farmer on sloped terrain wants to reduce soil erosion while maintaining crop yields. Which combination of practices would most effectively address both goals simultaneously?",
  options: {
    A: "Increasing irrigation and applying more fertilizer to compensate for nutrient losses from erosion.",
    B: "Converting to no-till farming with contour plowing along slope lines and planting winter cover crops.",
    C: "Clear-cutting adjacent forests to reduce moisture competition with crops and improve air circulation.",
    D: "Deepening tillage to the C horizon to access fresh mineral soil and reduce dependence on topsoil fertility."
  },
  correct: "B",
  rationale: "B. No-till farming leaves residue on the surface, protecting against raindrop splash and surface flow erosion. Contour plowing follows the natural contours of the slope, creating barriers to downslope water flow. Cover crops protect bare soil between growing seasons — a critical window for erosion loss. This combination addresses erosion at multiple scales without sacrificing productivity. A treats symptoms (fertility loss) rather than cause (erosion). C Removing adjacent forest increases runoff velocity and erosion severity. D deepening tillage increases erosion risk and destroys soil horizons."
},
{
  id: 407, unit: 4, topic: "4.1", topicName: "Plate Tectonics & Resources",
  skill: "evaluation", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Copper, gold, and molybdenum ore deposits are disproportionately concentrated around ancient and modern convergent plate boundaries, particularly around subduction zones in the Pacific 'Ring of Fire.'",
  stem: "Which geological process best explains the association between subduction zones and economically valuable mineral deposits?",
  options: {
    A: "Divergent boundaries pull mineral-rich rock to the surface, and converging plates concentrate these deposits near subduction zones through compression.",
    B: "Subducting oceanic plates carry seawater into the mantle; hydrothermal fluids driven by magma activity leach and concentrate metals at the surface through porphyry copper and related deposit types.",
    C: "The friction between converging plates melts surface rocks, releasing volatile minerals that rise and precipitate as ore deposits.",
    D: "Transform faults associated with subduction zones channel deep mantle material to the surface, carrying metal-rich volcanic gases."
  },
  correct: "B",
  rationale: "B. Subducting oceanic crust carries water (in hydrated minerals) deep into the mantle. This water lowers the melting point of the overlying mantle wedge, generating magma. As this magma rises through the crust, it carries dissolved metals (copper, gold, molybdenum). Hydrothermal fluids associated with this magmatic activity concentrate these metals into porphyry-type ore deposits — the world's largest source of copper. This is well-established economic geology. A incorrectly attributes deposits to divergent boundaries. C misidentifies friction melting as the mechanism. D conflates transform faults with subduction processes."
},

// ─────────────────────────────────────────────────────────────────
// UNIT 5 — LAND & WATER USE
// ─────────────────────────────────────────────────────────────────
{
  id: 501, unit: 5, topic: "5.5", topicName: "CAFOs & Environmental Impact",
  skill: "analysis", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Life cycle assessment data for 1 kg of dietary protein: Beef: 60 kg CO₂e, 15,400 L water, 164 m² land; Chicken: 6.9 kg CO₂e, 4,300 L water, 51 m²; Tofu: 2.2 kg CO₂e, 2,100 L water, 22 m²; Lentils: 0.9 kg CO₂e, 1,250 L water, 8 m².",
  stem: "A country aims to reduce agriculture's contribution to climate change by 50% without decreasing total dietary protein availability. Which dietary shift is most supported by these data as most impactful per unit protein?",
  options: {
    A: "Replace beef with chicken — a moderate reduction in all metrics while maintaining familiar animal protein sources.",
    B: "Replace beef with lentils — reduces climate footprint per kg protein by ~98%, water use by 92%, and land use by 95%.",
    C: "Replace all animal protein with tofu — maximizes protein density per unit greenhouse gas emission.",
    D: "Replace chicken with tofu — the data show this single switch achieves the 50% GHG reduction target."
  },
  correct: "B",
  rationale: "B. The data show beef has by far the highest impact across all metrics. Replacing beef specifically with lentils: GHG reduction = (60−0.9)/60 = 98.5%; water reduction = 91.9%; land reduction = 95.1%. Lentils also provide the best ratio of protein to all three impact categories. A is suboptimal — chicken → lentils would still save 87% of GHG. C and D focus on tofu but the data show lentils outperform tofu on every metric. The question asks about per-unit-protein impact — lentils are optimal by every measured dimension."
},
{
  id: 502, unit: 5, topic: "5.2", topicName: "Green Revolution",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "The Green Revolution (1960–2000) is credited with averting famines by tripling grain yields in South Asia and Latin America. However, longitudinal studies in Punjab, India (the world's Green Revolution showcase) show: groundwater tables falling 0.5–1 m/yr from irrigation overdraft; soil organic matter depleted by 60% from continuous monoculture; 90% reduction in indigenous rice varieties; and 67% of small farmers indebted.",
  stem: "Which conclusion about the Green Revolution is most accurately supported by these long-term data?",
  options: {
    A: "The Green Revolution was an unqualified success — famine prevention justifies all environmental trade-offs.",
    B: "The Green Revolution achieved short-to-medium-term food security gains at the cost of long-term agricultural sustainability through aquifer depletion, soil degradation, and genetic erosion.",
    C: "The environmental impacts described are natural consequences of agricultural intensification and would have occurred under any farming system.",
    D: "The Green Revolution data refute the Malthusian hypothesis, demonstrating that food production can always expand to meet population growth through technology."
  },
  correct: "B",
  rationale: "B. The data present a classic sustainability dilemma: inputs (water, soil fertility, genetic diversity) were consumed faster than regenerated. A 0.5–1 m/yr groundwater decline is unsustainable (aquifer recharge is measured in centuries). 60% soil organic matter loss represents degraded long-term productivity. 90% loss of rice varieties is irreversible genetic erosion. The evidence supports the interpretation of a 'borrowed time' strategy — solving immediate hunger while depleting the capital needed for future production. A ignores the data. C is an unsupported overgeneralization. D overclaims — the data show limits, not unlimited expansion."
},
{
  id: 503, unit: 5, topic: "5.6", topicName: "Acid Mine Drainage",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A stream receiving drainage from an abandoned coal mine has the following measurements: pH 3.8, dissolved iron (Fe³⁺) = 45 mg/L, sulfate (SO₄²⁻) = 780 mg/L, macroinvertebrate species count = 2 (both tolerant species). A reference stream 5 km upstream has pH 7.2, Fe³⁺ = 0.3 mg/L, sulfate = 12 mg/L, macroinvertebrate species = 38.",
  stem: "Which chemical process is most directly responsible for the low pH and elevated iron and sulfate in the mine drainage stream?",
  options: {
    A: "Volatilization of sulfur dioxide from exposed coal seams, which dissolves in water to form sulfurous acid.",
    B: "Oxidation of iron pyrite (FeS₂) in mine waste by water and oxygen, producing sulfuric acid and dissolved iron.",
    C: "Runoff of acidic fertilizers from adjacent agricultural fields combines with natural iron deposits in the stream bed.",
    D: "Anaerobic decomposition of organic matter in the mine tailings produces hydrogen sulfide, which acidifies drainage water."
  },
  correct: "B",
  rationale: "B. Acid mine drainage (AMD) is driven by the oxidation of iron pyrite: 4FeS₂ + 15O₂ + 8H₂O → 4Fe²⁺ + 8SO₄²⁻ + 16H⁺. Iron-oxidizing bacteria (Acidithiobacillus ferrooxidans) accelerate this reaction. The products are sulfuric acid (lowering pH) and dissolved Fe²⁺ (oxidized further to orange Fe(OH)₃ 'yellow boy'). The elevated SO₄²⁻ and Fe³⁺ in the data are fingerprints of pyrite oxidation. A SO₂ volatilization is negligible compared to pyrite oxidation in mine settings. C introduces agricultural sources unsupported by the data. D anaerobic decomposition produces different acids (organic acids, not sulfuric)."
},
{
  id: 504, unit: 5, topic: "5.7", topicName: "Urban Heat Island",
  skill: "analysis", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: "Temperature data for a metropolitan area show the urban core is 4–7°C warmer than surrounding rural areas on calm, clear nights. The urban area is 60% impervious surface (asphalt, concrete); surrounding rural areas are 80% vegetated.",
  stem: "Which combination of urban design interventions would most directly reduce the urban heat island effect by targeting its primary physical mechanisms?",
  options: {
    A: "Install taller buildings to increase wind speed at ground level and improve convective cooling.",
    B: "Replace dark asphalt with high-albedo 'cool' pavements and increase urban tree canopy cover to maximize evapotranspiration and shading.",
    C: "Increase building density to reduce exposed asphalt area between buildings and concentrate heat in smaller zones.",
    D: "Mandate dark rooftops to absorb more solar energy during winter months, offsetting summer heat gain."
  },
  correct: "B",
  rationale: "B. Urban heat islands arise primarily from: (1) low albedo of dark surfaces absorbing solar radiation, and (2) lack of evapotranspiration from vegetation (a major cooling process). Cool pavements increase albedo, directly reducing heat absorption. Urban trees provide shade (blocking solar input) and evapotranspire water (latent heat cooling). Research (EPA, urban heat island studies) confirms green infrastructure reduces urban temperatures 2–8°C. A Taller buildings can reduce wind channels and worsen heat trapping. C increased density worsens heat retention. D dark rooftops increase, not decrease, heat absorption."
},
{
  id: 505, unit: 5, topic: "5.3", topicName: "Water Resources & Irrigation",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "The Ogallala Aquifer underlies 174,000 square miles of the Great Plains and supplies 30% of all US groundwater used for irrigation. Annual depletion rates (1–3 meters/yr in some areas) exceed recharge rates (0.5 cm/yr) by factors of 100–300. Models project 35–69% depletion of saturated thickness in major areas within 50 years.",
  stem: "This aquifer depletion scenario is an example of which environmental concept, and which policy response most directly addresses the root cause?",
  options: {
    A: "The tragedy of the commons; binding groundwater allocation caps with metered extraction and tradeable water rights.",
    B: "Ecological succession; converting irrigated fields to dryland farming will allow the aquifer to recover through primary succession.",
    C: "Density-dependent regulation; as water becomes scarcer, market prices will naturally limit extraction to sustainable levels.",
    D: "Competitive exclusion; larger agricultural operations will outcompete smaller farms for groundwater access until one 'species' of farm dominates."
  },
  correct: "A",
  rationale: "A. Aquifer depletion is a classic tragedy of the commons: each farmer benefits from maximizing extraction, sharing the cost of depletion with all other users. With no binding governance, rational self-interest drives unsustainable extraction. The solution requires institutional management — allocation caps, metered pumping, and water markets that make the true scarcity cost visible. B incorrectly applies succession to an abiotic resource with geological recharge timescales. C is optimistic about market signals — water prices often don't reflect scarcity costs due to subsidies and commons problems. D misapplies an ecological concept to an economic context."
},
{
  id: 506, unit: 5, topic: "5.4", topicName: "IPM & Pesticide Resistance",
  skill: "evaluation", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "A farmer has been applying the same broad-spectrum pesticide against rootworm beetles for 15 consecutive years and observes that the required application rate has tripled to achieve the same control. Which evolutionary mechanism explains this, and which IPM strategy would most effectively prevent further resistance development?",
  options: {
    A: "Phenotypic plasticity — individual beetles adapt to the pesticide within their lifetimes; rotating pesticide modes of action would be ineffective.",
    B: "Natural selection — pesticide application selects for individuals with resistance genotypes; crop rotation, biological controls, and rotation between pesticide modes of action interrupt resistance development.",
    C: "Genetic drift — small surviving pest populations after each application are genetically similar by chance; increasing application frequency reduces drift.",
    D: "Habitat fragmentation — pesticide residues fragment beetle habitat, causing population bottlenecks; larger buffer zones between fields would reduce resistance."
  },
  correct: "B",
  rationale: "B. Pesticide resistance is natural selection in action: each application kills susceptible individuals while resistant genotypes survive and reproduce, increasing resistance allele frequency. This is one of the fastest examples of observable evolution. IPM addresses this by: (1) crop rotation disrupts host-specific pest lifecycles; (2) biological controls reduce pest populations through mechanisms that don't cause resistance the same way; (3) rotating pesticide modes of action prevents any single resistance mechanism from sweeping the population. A Phenotypic plasticity involves individual acclimation, not heritable resistance. C Genetic drift is a random process, not directional selection. D Habitat fragmentation is unrelated to pesticide resistance."
},
{
  id: 507, unit: 5, topic: "5.1", topicName: "Common Pool Resources",
  skill: "application", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "Elinor Ostrom (Nobel Prize, 2009) studied communities that successfully managed common pool resources (fisheries, forests, groundwater) for generations without either government regulation or privatization. Which design principle did she identify as most critical for long-term common resource sustainability?",
  options: {
    A: "Privatization of all common resources to align individual and collective interests through the profit motive.",
    B: "Centralized government management with uniform rules applied nationally to all common resources.",
    C: "Community-defined rules with legitimate monitoring, graduated sanctions, and conflict resolution mechanisms — where resource users participate in governance.",
    D: "Free-market pricing signals that automatically adjust extraction rates to sustainable levels without formal institutions."
  },
  correct: "C",
  rationale: "C. Ostrom's field research directly challenged the binary choice between privatization (Hardin) and government control. She found successful commons management relied on communities developing their own rules with collective legitimacy, monitoring by users themselves, graduated sanctions for violations, and accessible conflict resolution. This 'polycentric governance' is more responsive to local conditions than uniform central rules. A is Hardin's solution, which Ostrom's evidence challenges. B is the other traditional solution Ostrom challenges. D relies on market mechanisms that historically fail for shared resources due to externalities and tragedy of the commons dynamics."
},

// ─────────────────────────────────────────────────────────────────
// UNIT 6 — ENERGY RESOURCES & CONSUMPTION
// ─────────────────────────────────────────────────────────────────
{
  id: 601, unit: 6, topic: "6.1", topicName: "Fossil Fuel Comparison",
  skill: "analysis", difficulty: "medium", cedSkill: "Identifying & Analyzing Data",
  stimulus: "CO₂ emissions per million BTU of energy produced: Anthracite coal: 228 kg; Bituminous coal: 205 kg; Diesel fuel: 161 kg; Gasoline: 157 kg; Natural gas: 117 kg.",
  stem: "A city currently generates electricity entirely from bituminous coal. It is considering switching to either natural gas or nuclear power. Which conclusion about the emissions impact is best supported by the data?",
  options: {
    A: "Switching to natural gas reduces CO₂ emissions from electricity generation by approximately 43%, while nuclear produces no operational CO₂ emissions.",
    B: "Natural gas produces 43% more CO₂ than coal, making it a worse climate option.",
    C: "Nuclear power produces CO₂ emissions comparable to natural gas because uranium processing requires fossil fuels.",
    D: "Diesel fuel is the optimal transition fuel because it produces fewer emissions than coal while remaining infrastructure-compatible."
  },
  correct: "A",
  rationale: "A. (205−117)/205 = 43% reduction switching from bituminous coal to natural gas. Nuclear power produces no CO₂ during operation (zero operational emissions), though the full lifecycle includes emissions from mining and construction. B reverses the comparison — natural gas (117) is LOWER than coal (205). C confuses lifecycle analysis with operational emissions; nuclear's operational emissions are effectively zero. D introduces diesel as irrelevant to electricity generation in this context."
},
{
  id: 602, unit: 6, topic: "6.3", topicName: "Renewable Energy Tradeoffs",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Energy comparison data per GWh produced over 20-year lifespan: Solar PV: 20 g CO₂e/kWh, 19,000 m² land/GWh, bird mortality: negligible, water use: minimal. Wind: 7 g CO₂e/kWh, 12 m² footprint/GWh (dual land use), bird/bat mortality: 0.27 birds/GWh. Hydroelectric (large dam): 24 g CO₂e/kWh, reservoir floods 2,000+ m²/GWh, fish passage: eliminated, methane from reservoirs in tropics: high.",
  stem: "A coastal country seeks the renewable energy source with the lowest total environmental footprint across climate, land, wildlife, and water impacts. Which source is best supported by the data, and what is the primary limitation that the data do not capture?",
  options: {
    A: "Hydroelectric — lowest per-kWh CO₂; its wildlife impacts are acceptable given the zero fuel costs.",
    B: "Wind power — lowest CO₂e/kWh, minimal direct land use (dual-use), manageable wildlife impacts; primary data limitation is intermittency and storage requirements not captured in per-GWh metrics.",
    C: "Solar PV — no wildlife mortality or water use; primary data limitation is manufacturing supply chain emissions.",
    D: "Hydroelectric — most reliable of the three; land flooding is temporary and reversible within decades."
  },
  correct: "B",
  rationale: "B. Wind has the lowest CO₂e (7 g/kWh), minimal land footprint (turbines allow grazing/farming in the same area), and manageable bird/bat mortality. The data do not capture the critical limitation of intermittency — wind doesn't blow constantly, requiring backup generation or grid-scale storage. Solar (C) has no wildlife mortality, but 19,000 m² land use per GWh is comparable to large solar farms. Hydroelectric (A, D) has the highest land use, eliminates fish migration, and reservoirs in tropical regions produce significant methane from flooded organic matter — making its GHG benefit questionable in some settings. D falsely claims flooding is temporary."
},
{
  id: 603, unit: 6, topic: "6.3", topicName: "Nuclear Power",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Lifecycle emissions (g CO₂e/kWh): Coal 820; Natural gas 490; Solar PV 41; Wind 12; Nuclear 12. Capacity factor (% of time at rated capacity): Coal 54%; Solar 15–25%; Wind 25–45%; Nuclear 92%. Levelized cost (2023): Coal $65–150/MWh; Solar $30–60/MWh; Wind $26–50/MWh; Nuclear $90–200/MWh.",
  stem: "A country with high energy demand, limited land area, and an aggressive 2050 net-zero target is evaluating nuclear power as a climate solution. Which analysis of the data best supports considering nuclear as part of a portfolio approach?",
  options: {
    A: "Nuclear should be excluded because its cost ($90–200/MWh) exceeds that of solar and wind, and cost is the only relevant metric for policy decisions.",
    B: "Nuclear's combination of near-zero lifecycle emissions (12 g CO₂e/kWh), extremely high capacity factor (92%), and high energy density per land area complements intermittent renewables — despite higher costs — for baseload reliability in high-demand, land-constrained systems.",
    C: "Nuclear is superior to all other options because it is the only source matching coal's capacity factor.",
    D: "The data show nuclear is obsolete because solar and wind already match its emissions profile at lower cost, making portfolio diversification unnecessary."
  },
  correct: "B",
  rationale: "B. The portfolio argument centers on nuclear's unique combination of attributes unavailable in wind and solar: near-zero emissions (matching wind), but with 92% capacity factor (vs. 15–45% for renewables). In land-constrained, high-demand systems, solar and wind require vast areas and storage infrastructure to replace baseload capacity. Nuclear's high energy density and reliability complement renewable intermittency. A incorrectly uses cost as the sole metric. C cherry-picks only the capacity factor comparison. D ignores intermittency — matching emissions per kWh produced is not the same as matching the ability to produce electricity on demand 92% of the time."
},
{
  id: 604, unit: 6, topic: "6.4", topicName: "Energy Efficiency",
  skill: "application", difficulty: "easy", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "A city's utility company can either build a new natural gas power plant to meet projected energy demand (costing $800 million, adding 2 million tonnes CO₂/yr) or invest in a comprehensive building efficiency retrofit program that reduces demand by the same amount (costing $400 million, no additional emissions). This comparison illustrates which energy concept?",
  options: {
    A: "The 10% rule — only 10% of energy investment returns economic value.",
    B: "Negawatts — avoided energy consumption through efficiency investments that are cheaper and cleaner than new generation capacity.",
    C: "Cogeneration — capturing waste heat from existing power plants to eliminate the need for new generation.",
    D: "Net metering — residential solar production credits reduce utility demand and defer infrastructure investment."
  },
  correct: "B",
  rationale: "B. 'Negawatts' (a term coined by Amory Lovins) represents the concept that a watt of electricity not needed due to efficiency measures is equivalent in value to a watt generated — and often cheaper and cleaner. The scenario shows efficiency costs $400M with zero emissions vs. $800M with 2M tonnes CO₂ for equivalent supply — the efficiency investment is twice as cost-effective and carbon-free. A incorrectly applies the ecological 10% rule to energy economics. C cogeneration captures waste heat from existing plants (a real technique), not demand reduction. D net metering is a billing mechanism, not the concept illustrated here."
},
{
  id: 605, unit: 6, topic: "6.2", topicName: "Global Energy Consumption",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Data: Per-capita CO₂ emissions (tonnes/person/yr): USA 14.7; EU average 6.4; China 8.0; India 1.9; Sub-Saharan Africa average 0.6. Global average 4.7.",
  stem: "A policy analyst argues that reducing global emissions requires focusing entirely on developing nations because their populations are growing fastest. Which critique of this argument is most strongly supported by the data?",
  options: {
    A: "The argument is correct — per-capita emissions in developing regions will inevitably rise toward US levels as they industrialize.",
    B: "The argument overlooks that high-income nations have disproportionately high per-capita emissions — the US emits 24× more per person than Sub-Saharan Africa — making consumption reductions in wealthy nations quantitatively essential for global targets.",
    C: "The argument is correct because cumulative historical emissions are less important than current emissions rates.",
    D: "China's emissions (8.0 tonnes) already exceed the US, making China the primary target regardless of per-capita analysis."
  },
  correct: "B",
  rationale: "B. The data directly refute the logic: the US at 14.7 tonnes/person emits 24.5× more than Sub-Saharan Africa at 0.6. If all Sub-Saharan Africans were eliminated (hypothetically), the emissions reduction would be far less than if the US reduced to EU average levels (0.6 to 6.4). Per-capita and total emissions in high-income nations represent enormous reduction potential. A makes an unjustified predictive assumption. C dismisses historical responsibility analysis without data support. D confuses total emissions with per-capita emissions — China's large population accounts for its total; per-capita China (8.0) is still below the US (14.7)."
},
{
  id: 606, unit: 6, topic: "6.1", topicName: "Natural Gas & Fracking",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Studies of natural gas production via hydraulic fracturing (fracking) find: methane (CH₄) leakage rates of 2–9% from wellheads and pipelines; CH₄ has ~80× the warming potential of CO₂ over 20 years (and 36× over 100 years); lifecycle emissions from natural gas power plants at 2% leak rate ≈ 53 gCO₂e/kWh; at 9% leak rate ≈ 250 gCO₂e/kWh.",
  stem: "Based on this data, under which condition is natural gas NOT a meaningful climate improvement over coal combustion for electricity generation?",
  options: {
    A: "When natural gas is used in combined-cycle plants instead of simple-cycle turbines.",
    B: "When methane leakage rates exceed approximately 4–6%, because high fugitive emissions eliminate the CO₂ combustion advantage of gas over coal over a 20-year timeframe.",
    C: "When natural gas is used for home heating instead of electricity generation, because residential applications are inherently more efficient.",
    D: "When renewable energy is unavailable as a backup source, requiring natural gas plants to operate at full capacity."
  },
  correct: "B",
  rationale: "B. The data show that at high leak rates (9%), natural gas lifecycle emissions (250 gCO₂e/kWh) approach coal lifecycle emissions (~820 gCO₂e/kWh). More critically, the 20-year GWP of methane (80×) means high-leak natural gas offers little or no near-term climate benefit over coal, because the 20-year window is most critical for near-term warming targets. Several studies (Howarth et al.) have shown that fracking-related methane leakage can exceed the break-even point. A and C introduce irrelevant considerations not related to the leakage data. D describes operational scenarios unrelated to the leakage analysis."
},

]; // End QBANK_U4_6
