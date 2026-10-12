// AP Environmental Science Diagnostic — Question Bank
// GENERATED FILE — do not edit by hand.
// Source: tools/build_questions.py + tools/q_units_*.py (run `python -I tools/build_questions.py`)
//
// 80 questions across 9 units, weighted to the 2026-2027 CED exam blueprint.
// Every figure is generated programmatically by tools/viz.py and every numeric
// answer and distractor is computed in Python, not typed by hand.

const APES_QUESTIONS = [
  {
    "id": 1,
    "unit": "Unit 1",
    "topic": "1.10",
    "category": "Unit 1: The Living World: Ecosystems — Topic 1.10: Energy Flow and the 10% Rule",
    "big_idea": "ENG",
    "sp": "Skill 6.B",
    "skills": "Skill 6.B: Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "difficulty": "2 — Application",
    "stem": "A temperate grassland fixes 24,000 kcal/m² per year as net primary productivity. Using the 10% rule for energy transfer between trophic levels, how much energy per square metre per year is available to secondary consumers?",
    "visual": "<svg viewBox='0 0 470 170' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='170' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><line x1='112.0' y1='90.0' x2='185.0' y2='90.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='148.5' y='84.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>10% transfer</text><line x1='285.0' y1='90.0' x2='358.0' y2='90.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='321.5' y='84.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>10% transfer</text><rect x='12.0' y='60.0' width='100.0' height='60.0' fill='#DFF0DC' stroke='#555' stroke-width='1.3' rx='4'/><text x='62.0' y='88.0' font-size='11.5' fill='#222222' text-anchor='middle'>Producers</text><text x='62.0' y='100.5' font-size='11.5' fill='#222222' text-anchor='middle'>24,000 kcal</text><rect x='185.0' y='60.0' width='100.0' height='60.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='235.0' y='88.0' font-size='11.5' fill='#222222' text-anchor='middle'>Primary</text><text x='235.0' y='100.5' font-size='11.5' fill='#222222' text-anchor='middle'>consumers ?</text><rect x='358.0' y='60.0' width='100.0' height='60.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='408.0' y='88.0' font-size='11.5' fill='#222222' text-anchor='middle'>Secondary</text><text x='408.0' y='100.5' font-size='11.5' fill='#222222' text-anchor='middle'>consumers ?</text><text x='235' y='164' font-size='11' fill='#555' text-anchor='middle'>Energy available per square metre per year in a temperate grassland.</text></svg>",
    "options": {
      "A": "24 kcal/m² per year",
      "B": "240 kcal/m² per year",
      "C": "2,400 kcal/m² per year",
      "D": "21,600 kcal/m² per year"
    },
    "correct": "B",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nSecondary consumers sit two transfers above the producers, so the 10% rule is applied twice: 24,000 kcal × 0.10 = 2,400 kcal reaching primary consumers, then 2,400 kcal × 0.10 = 240 kcal/m² per year reaching secondary consumers. The roughly 90% lost at each step leaves as metabolic heat from cellular respiration and as unconsumed or undigested biomass, which is why food chains rarely support more than four or five levels.\n\nWhy the other options fail:\nA — This applies the 10% rule three times (2,400 → 240 → 24), which lands on tertiary consumers — one trophic level above what the question asks for.\nC — This is a single 10%% transfer, which gives the energy reaching primary consumers (herbivores), not the secondary consumers that eat them.\nD — This retains 90%% of the energy at each step. The 10%% rule means roughly 10%% is passed on and about 90%% is lost, not the reverse.\n\nDiagnostic focus: Count the number of trophic transfers correctly and multiply by 0.10 per transfer rather than subtracting 10%."
  },
  {
    "id": 2,
    "unit": "Unit 1",
    "topic": "1.5",
    "category": "Unit 1: The Living World: Ecosystems — Topic 1.5: The Nitrogen Cycle",
    "big_idea": "ERT",
    "sp": "Skill 2.B",
    "skills": "Skill 2.B: Explain relationships between different characteristics of environmental concepts, processes, or models represented visually.",
    "difficulty": "2 — Application",
    "stem": "In the nitrogen cycle shown, Process X moves nitrogen from the soil nitrate pool back to atmospheric N₂. Which identification of Process X, and which consequence for the soil, is best supported by the diagram?",
    "visual": "<svg viewBox='0 0 430 292' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='430' height='292' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><line x1='215.0' y1='60.0' x2='81.0' y2='118.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='148.0' y='83.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>nitrogen fixation</text><line x1='140.0' y1='143.0' x2='290.0' y2='143.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='215.0' y='137.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>nitrification</text><line x1='349.0' y1='118.0' x2='215.0' y2='60.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='282.0' y='83.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>Process X</text><line x1='349.0' y1='168.0' x2='215.0' y2='210.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='282.0' y='183.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>assimilation</text><rect x='150.0' y='14.0' width='130.0' height='46.0' fill='#DCE9F7' stroke='#555' stroke-width='1.3' rx='4'/><text x='215.0' y='41.0' font-size='11.5' fill='#222222' text-anchor='middle'>Atmospheric N₂</text><rect x='22.0' y='118.0' width='118.0' height='50.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='81.0' y='141.0' font-size='11.5' fill='#222222' text-anchor='middle'>Soil ammonium</text><text x='81.0' y='153.5' font-size='11.5' fill='#222222' text-anchor='middle'>(NH₄⁺)</text><rect x='290.0' y='118.0' width='118.0' height='50.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='349.0' y='141.0' font-size='11.5' fill='#222222' text-anchor='middle'>Soil nitrate</text><text x='349.0' y='153.5' font-size='11.5' fill='#222222' text-anchor='middle'>(NO₃⁻)</text><rect x='156.0' y='210.0' width='118.0' height='46.0' fill='#DFF0DC' stroke='#555' stroke-width='1.3' rx='4'/><text x='215.0' y='237.0' font-size='11.5' fill='#222222' text-anchor='middle'>Plant tissue</text><text x='215' y='286' font-size='11' fill='#555' text-anchor='middle'>Partial nitrogen cycle. Process X is carried out by soil bacteria.</text></svg>",
    "options": {
      "A": "Denitrification, carried out by bacteria in low-oxygen soil; it removes plant-available nitrate and lowers soil nitrogen fertility.",
      "B": "Nitrification, carried out by bacteria under oxygen-rich conditions; it removes nitrate from the soil and raises soil nitrogen fertility.",
      "C": "Nitrogen fixation, carried out by bacteria in root nodules; it removes plant-available nitrate from the soil and lowers soil nitrogen fertility.",
      "D": "Ammonification, carried out by decomposers acting on dead tissue; it releases nitrate as a gas and raises soil nitrogen fertility."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nOnly one process in the nitrogen cycle returns fixed nitrogen to the atmosphere as N₂: denitrification, in which anaerobic bacteria use nitrate as an electron acceptor and release N₂ (and some N₂O). Because the diagram shows nitrate as the pool plants draw on through assimilation, any flux out of that pool to the atmosphere competes directly with plant uptake — so waterlogged, oxygen-poor soils, where denitrification is fastest, tend to be nitrogen-limited.\n\nWhy the other options fail:\nB — Nitrification is the labelled ammonium-to-nitrate step inside the soil, so it cannot also be the arrow leaving the soil for the atmosphere.\nC — Fixation is already labelled on the diagram and runs the opposite direction, converting atmospheric N₂ into soil ammonium. It adds nitrogen to soil rather than removing it.\nD — Ammonification converts organic nitrogen in dead tissue into ammonium within the soil. It neither produces atmospheric N₂ nor raises nitrate availability.\n\nDiagnostic focus: Read the direction of an unlabelled arrow against the labelled fluxes and match it to the one process that produces atmospheric N2."
  },
  {
    "id": 3,
    "unit": "Unit 1",
    "topic": "1.8",
    "category": "Unit 1: The Living World: Ecosystems — Topic 1.8: Primary Productivity",
    "big_idea": "ENG",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "1 — Foundational",
    "stem": "Over one growing season a salt marsh fixes 14,500 kcal/m² of energy as gross primary productivity, and the marsh plants expend 5,800 kcal/m² on cellular respiration. What is the net primary productivity of the marsh for that season?",
    "visual": "",
    "options": {
      "A": "5,800 kcal/m²",
      "B": "8,700 kcal/m²",
      "C": "14,500 kcal/m²",
      "D": "20,300 kcal/m²"
    },
    "correct": "B",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nNet primary productivity is the energy that remains as new plant biomass after the producers pay their own respiratory costs: NPP = GPP − respiration = 14,500 − 5,800 = 8,700 kcal/m². NPP matters ecologically because it, not GPP, sets the energy actually available to the consumers in the next trophic level.\n\nWhy the other options fail:\nA — This is the respiration value given in the stem, which is the energy the plants consume for their own metabolism, not the energy left over as new biomass.\nC — This is gross primary productivity. Gross productivity counts all the energy fixed, before any of it is spent on respiration.\nD — This adds respiration to gross productivity. Respiration is a cost subtracted from gross productivity, so adding it overstates the energy stored.\n\nDiagnostic focus: Separate gross from net productivity and subtract respiration in the correct direction."
  },
  {
    "id": 4,
    "unit": "Unit 1",
    "topic": "1.2",
    "category": "Unit 1: The Living World: Ecosystems — Topic 1.2: Terrestrial Biomes",
    "big_idea": "ERT",
    "sp": "Skill 5.B",
    "skills": "Skill 5.B: Describe relationships among variables in data represented.",
    "difficulty": "2 — Application",
    "stem": "At which site does the climate data indicate that water availability, rather than temperature, is the primary factor limiting plant growth, and what reasoning supports that conclusion?",
    "visual": "<svg viewBox='0 0 470 168' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='168' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='146.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='58.1' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Site</text><line x1='115.1' y1='1' x2='115.1' y2='147.0' stroke='#DDD'/><text x='200.8' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Mean annual temperature</text><text x='200.8' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(°C)</text><line x1='286.4' y1='1' x2='286.4' y2='147.0' stroke='#DDD'/><text x='377.7' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Mean annual precipitation</text><text x='377.7' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(mm)</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>Site W</text><text x='200.8' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>26</text><text x='377.7' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>2,400</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>Site X</text><text x='200.8' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>27</text><text x='377.7' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>180</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>Site Y</text><text x='200.8' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>9</text><text x='377.7' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>820</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>Site Z</text><text x='200.8' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>-8</text><text x='377.7' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>240</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='235' y='162' font-size='11' fill='#555' text-anchor='middle'>Thirty-year climate averages for four terrestrial field sites.</text></svg>",
    "options": {
      "A": "Site X, because its temperatures permit year-round growth while its precipitation of 180 mm is the lowest of the four sites, leaving water as the binding constraint.",
      "B": "Site W, because its high temperature increases evaporation enough to make water the limiting factor despite the precipitation total.",
      "C": "Site Z, because its precipitation is low; the near-freezing mean temperature is not relevant to plant growth as long as some precipitation falls.",
      "D": "Site Y, because its intermediate precipitation combined with cool temperatures makes water the single strongest constraint on growth."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nIsolating a limiting factor requires holding the other variable in a non-limiting range. Site X pairs the warmest mean temperature (27 °C) with the lowest precipitation (180 mm) — the signature of a hot desert, where temperature permits growth year-round but moisture does not. Site Z also has low precipitation, but its mean of −8 °C means temperature is limiting as well, so the attribution there is not clean.\n\nWhy the other options fail:\nB — Site W receives 2,400 mm of precipitation, by far the most of the four. That ample supply makes water the least likely constraint at this site.\nC — Site Z does receive little precipitation, but a mean annual temperature of −8 °C also restricts the growing season and locks water up as ice, so temperature cannot be dismissed as a limiting factor there.\nD — Site Y has moderate precipitation and mild temperatures, so neither variable stands out as a limiting extreme compared with the other sites.\n\nDiagnostic focus: Compare two climate variables across sites to isolate which one is limiting, instead of reading only the lower precipitation value."
  },
  {
    "id": 5,
    "unit": "Unit 1",
    "topic": "1.4",
    "category": "Unit 1: The Living World: Ecosystems — Topic 1.4: The Carbon Cycle",
    "big_idea": "ERT",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "A mature temperate forest that had been a net carbon sink is cleared and converted to annually tilled cropland. Which explanation best accounts for the site changing from a net carbon sink to a net carbon source in the years immediately afterward?",
    "visual": "",
    "options": {
      "A": "Removing the trees eliminates the standing biomass that had been accumulating carbon, while tillage aerates the soil and speeds decomposition of soil organic carbon, so release exceeds uptake.",
      "B": "Clearing the forest removes the soil microorganisms that had been decomposing litter, so undecomposed carbon accumulates at the surface and is released directly to the atmosphere without being respired.",
      "C": "Crop plants do not perform photosynthesis at a rate high enough to fix any atmospheric carbon, so the site releases carbon through respiration while fixing essentially none of it, making net release unavoidable.",
      "D": "Cropland has a higher albedo than forest, and the additional reflected sunlight heats the atmosphere, which drives the carbon stored in the soil out of the ground as carbon dioxide."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nWhether a site is a sink or a source depends on the balance between carbon fixed by photosynthesis and carbon released by respiration and decomposition. Conversion removes decades of accumulated woody biomass at once and, by breaking soil aggregates and raising oxygen levels, lets decomposers mineralize soil organic carbon much faster. Both terms push the balance toward release, so the site is a net source until a new, much smaller equilibrium stock is reached.\n\nWhy the other options fail:\nB — Carbon cannot move to the atmosphere without being respired or burned, and tillage stimulates soil microbial activity rather than removing it.\nC — Crops photosynthesize actively and can have high seasonal productivity. The site becomes a source because of biomass loss and soil decomposition, not an absence of photosynthesis.\nD — Albedo affects the site energy balance, not the carbon balance directly; reflected sunlight does not drive soil carbon out of the ground.\n\nDiagnostic focus: Explain a sink-to-source switch as a change in the balance of two fluxes, not as the loss of a single process."
  },
  {
    "id": 6,
    "unit": "Unit 1",
    "topic": "1.11",
    "category": "Unit 1: The Living World: Ecosystems — Topic 1.11: Food Chains and Food Webs",
    "big_idea": "ENG",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "3 — Analysis",
    "stem": "Sea otters are removed from the kelp-forest food web shown by intensive hunting. Which prediction about the kelp and the two other kelp grazers is best supported, and why?",
    "visual": "<svg viewBox='0 0 436 300' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='436' height='300' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><line x1='216.0' y1='220.0' x2='216.0' y2='178.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='216.0' y1='134.0' x2='216.0' y2='92.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='162.0' y1='242.0' x2='120.0' y2='156.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='270.0' y1='242.0' x2='316.0' y2='156.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><rect x='162.0' y='220.0' width='108.0' height='44.0' fill='#DFF0DC' stroke='#555' stroke-width='1.3' rx='4'/><text x='216.0' y='246.0' font-size='11.5' fill='#222222' text-anchor='middle'>Kelp</text><rect x='162.0' y='134.0' width='108.0' height='44.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='216.0' y='160.0' font-size='11.5' fill='#222222' text-anchor='middle'>Sea urchins</text><rect x='162.0' y='48.0' width='108.0' height='44.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='216.0' y='74.0' font-size='11.5' fill='#222222' text-anchor='middle'>Sea otters</text><rect x='316.0' y='134.0' width='106.0' height='44.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='369.0' y='160.0' font-size='11.5' fill='#222222' text-anchor='middle'>Small fish</text><rect x='14.0' y='134.0' width='106.0' height='44.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='67.0' y='160.0' font-size='11.5' fill='#222222' text-anchor='middle'>Grazing snails</text><text x='218' y='294' font-size='11' fill='#555' text-anchor='middle'>Arrows point from each organism to the organism that consumes it.</text></svg>",
    "options": {
      "A": "Urchin numbers rise and kelp declines, but snails and small fish increase because the loss of a top predator releases every lower level in the web from predation pressure.",
      "B": "Urchin numbers stay roughly constant because kelp, not predation, sets their abundance, so losing otters changes neither the kelp nor the other two grazers.",
      "C": "Kelp increases because removing a predator shortens the food chain, so more of the energy fixed by the kelp stays in the kelp rather than passing to higher trophic levels.",
      "D": "Urchin numbers rise because their only predator here is gone, their grazing reduces the kelp, and snails and small fish decline as their shared food shrinks."
    },
    "correct": "D",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nTracing the arrows: otters eat only urchins, and urchins, snails, and small fish all eat kelp. Removing the single urchin predator allows urchins to increase, and because urchins graze kelp heavily the kelp stand is reduced — a trophic cascade. The snails and small fish are not otter prey, so they are affected indirectly, through the loss of the kelp they share with urchins, and decline. This is the mechanism behind documented kelp-forest collapse following otter loss.\n\nWhy the other options fail:\nA — The diagram shows otters eating only urchins, so snails and fish were never under otter predation to be released from; they are affected through the loss of kelp instead.\nB — This assumes urchins are purely food-limited. The web shows predation by otters as a control on urchins, so removing it changes urchin abundance.\nC — Energy retained in a producer does not add to its biomass when grazing rises; kelp biomass is set by how much is eaten, and urchin grazing increases here.\n\nDiagnostic focus: Follow indirect effects through a food web, distinguishing species released from predation from species affected through a shared food resource."
  },
  {
    "id": 7,
    "unit": "Unit 2",
    "topic": "2.3",
    "category": "Unit 2: The Living World: Biodiversity — Topic 2.3: Island Biogeography",
    "big_idea": "ERT",
    "sp": "Skill 5.C",
    "skills": "Skill 5.C: Explain patterns and trends in data to draw conclusions.",
    "difficulty": "3 — Analysis",
    "stem": "The four islands form two area pairs and two distance pairs. Which conclusion about the controls on island species richness is best supported by this data set?",
    "visual": "<svg viewBox='0 0 470 156' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='156' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='134.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='30' fill='#F2EFE9'/><text x='53.6' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Island</text><line x1='106.2' y1='1' x2='106.2' y2='135.0' stroke='#DDD'/><text x='156.1' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Area (km²)</text><line x1='206.1' y1='1' x2='206.1' y2='135.0' stroke='#DDD'/><text x='285.0' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Distance to mainland (km)</text><line x1='363.8' y1='1' x2='363.8' y2='135.0' stroke='#DDD'/><text x='416.4' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Bird species</text><line x1='1' y1='30' x2='469.0' y2='30' stroke='#999' stroke-width='1.4'/><text x='10.0' y='47.0' font-size='11.5' fill='#333' text-anchor='start'>Island A</text><text x='156.1' y='47.0' font-size='11.5' fill='#333' text-anchor='middle'>10</text><text x='285.0' y='47.0' font-size='11.5' fill='#333' text-anchor='middle'>50</text><text x='416.4' y='47.0' font-size='11.5' fill='#333' text-anchor='middle'>28</text><rect x='1' y='56.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='73.0' font-size='11.5' fill='#333' text-anchor='start'>Island B</text><text x='156.1' y='73.0' font-size='11.5' fill='#333' text-anchor='middle'>100</text><text x='285.0' y='73.0' font-size='11.5' fill='#333' text-anchor='middle'>50</text><text x='416.4' y='73.0' font-size='11.5' fill='#333' text-anchor='middle'>52</text><line x1='1' y1='56.0' x2='469.0' y2='56.0' stroke='#ECECEC'/><text x='10.0' y='99.0' font-size='11.5' fill='#333' text-anchor='start'>Island C</text><text x='156.1' y='99.0' font-size='11.5' fill='#333' text-anchor='middle'>10</text><text x='285.0' y='99.0' font-size='11.5' fill='#333' text-anchor='middle'>500</text><text x='416.4' y='99.0' font-size='11.5' fill='#333' text-anchor='middle'>15</text><line x1='1' y1='82.0' x2='469.0' y2='82.0' stroke='#ECECEC'/><rect x='1' y='108.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='125.0' font-size='11.5' fill='#333' text-anchor='start'>Island D</text><text x='156.1' y='125.0' font-size='11.5' fill='#333' text-anchor='middle'>100</text><text x='285.0' y='125.0' font-size='11.5' fill='#333' text-anchor='middle'>500</text><text x='416.4' y='125.0' font-size='11.5' fill='#333' text-anchor='middle'>34</text><line x1='1' y1='108.0' x2='469.0' y2='108.0' stroke='#ECECEC'/><text x='235' y='150' font-size='11' fill='#555' text-anchor='middle'>Breeding land-bird species recorded on four oceanic islands.</text></svg>",
    "options": {
      "A": "Isolation is the only factor that affects richness, because the two islands 500 km from the mainland both hold fewer species than either island 50 km away.",
      "B": "Area and isolation each affect richness independently: at fixed distance the larger island holds more species, and at fixed area the more distant island holds fewer.",
      "C": "Area is the only factor that affects richness, because the two 100 km² islands both hold more species than either 10 km² island.",
      "D": "Neither variable has a consistent effect, because Island D holds more species than Island A even though Island D is ten times farther from the mainland."
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe table is built as a two-by-two design, so each variable can be isolated. Holding distance at 50 km, richness rises 28 → 52 as area goes from 10 to 100 km²; holding distance at 500 km it rises 15 → 34. Holding area at 10 km², richness falls 28 → 15 as distance rises; holding area at 100 km² it falls 52 → 34. Island biogeography theory explains both: larger islands support larger populations and so have lower extinction rates, while more distant islands receive fewer colonists and so have lower immigration rates.\n\nWhy the other options fail:\nA — Comparing islands at equal distance shows area matters too: 28 rises to 52 at 50 km, and 15 rises to 34 at 500 km, with distance held constant.\nC — The comparison of equal-area islands disproves this: richness falls from 52 to 34 and from 28 to 15 when only distance increases, so distance has an effect of its own.\nD — Islands A and D differ in both area and distance at once, so that single comparison cannot isolate either effect; the controlled pairs in the table can.\n\nDiagnostic focus: Use controlled pairs within a data table to separate two variables rather than comparing cases that differ in both."
  },
  {
    "id": 8,
    "unit": "Unit 2",
    "topic": "2.1",
    "category": "Unit 2: The Living World: Biodiversity — Topic 2.1: Introduction to Biodiversity",
    "big_idea": "ERT",
    "sp": "Skill 5.E",
    "skills": "Skill 5.E: Explain what the data implies or illustrates about environmental issues.",
    "difficulty": "2 — Application",
    "stem": "Both plots contain five species and 100 individuals. What do these data imply about the biodiversity of the two plots?",
    "visual": "<svg viewBox='0 0 440 208' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='440' height='208' fill='#FFFFFF'/><rect x='1' y='1' width='438.0' height='186.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='438.0' height='30' fill='#F2EFE9'/><text x='83.1' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Species</text><line x1='165.2' y1='1' x2='165.2' y2='187.0' stroke='#DDD'/><text x='233.7' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Plot 1 (individuals)</text><line x1='302.1' y1='1' x2='302.1' y2='187.0' stroke='#DDD'/><text x='370.6' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Plot 2 (individuals)</text><line x1='1' y1='30' x2='439.0' y2='30' stroke='#999' stroke-width='1.4'/><text x='10.0' y='47.0' font-size='11.5' fill='#333' text-anchor='start'>Species 1</text><text x='233.7' y='47.0' font-size='11.5' fill='#333' text-anchor='middle'>92</text><text x='370.6' y='47.0' font-size='11.5' fill='#333' text-anchor='middle'>24</text><rect x='1' y='56.0' width='438.0' height='26' fill='#FAFAF8'/><text x='10.0' y='73.0' font-size='11.5' fill='#333' text-anchor='start'>Species 2</text><text x='233.7' y='73.0' font-size='11.5' fill='#333' text-anchor='middle'>3</text><text x='370.6' y='73.0' font-size='11.5' fill='#333' text-anchor='middle'>22</text><line x1='1' y1='56.0' x2='439.0' y2='56.0' stroke='#ECECEC'/><text x='10.0' y='99.0' font-size='11.5' fill='#333' text-anchor='start'>Species 3</text><text x='233.7' y='99.0' font-size='11.5' fill='#333' text-anchor='middle'>2</text><text x='370.6' y='99.0' font-size='11.5' fill='#333' text-anchor='middle'>20</text><line x1='1' y1='82.0' x2='439.0' y2='82.0' stroke='#ECECEC'/><rect x='1' y='108.0' width='438.0' height='26' fill='#FAFAF8'/><text x='10.0' y='125.0' font-size='11.5' fill='#333' text-anchor='start'>Species 4</text><text x='233.7' y='125.0' font-size='11.5' fill='#333' text-anchor='middle'>2</text><text x='370.6' y='125.0' font-size='11.5' fill='#333' text-anchor='middle'>18</text><line x1='1' y1='108.0' x2='439.0' y2='108.0' stroke='#ECECEC'/><text x='10.0' y='151.0' font-size='11.5' fill='#333' text-anchor='start'>Species 5</text><text x='233.7' y='151.0' font-size='11.5' fill='#333' text-anchor='middle'>1</text><text x='370.6' y='151.0' font-size='11.5' fill='#333' text-anchor='middle'>16</text><line x1='1' y1='134.0' x2='439.0' y2='134.0' stroke='#ECECEC'/><rect x='1' y='160.0' width='438.0' height='26' fill='#FAFAF8'/><text x='10.0' y='177.0' font-size='11.5' fill='#333' text-anchor='start'>Total</text><text x='233.7' y='177.0' font-size='11.5' fill='#333' text-anchor='middle'>100</text><text x='370.6' y='177.0' font-size='11.5' fill='#333' text-anchor='middle'>100</text><line x1='1' y1='160.0' x2='439.0' y2='160.0' stroke='#ECECEC'/><text x='220' y='202' font-size='11' fill='#555' text-anchor='middle'>Tree counts in two 100-individual survey plots in the same forest type.</text></svg>",
    "options": {
      "A": "Plot 1 is the more diverse plot, because one species reaching 92 individuals shows the plot supports a far larger population of a successful competitor.",
      "B": "The plots have equal species richness but Plot 2 has far greater evenness, so Plot 2 is more diverse; richness alone misses the difference.",
      "C": "The plots have identical biodiversity, because biodiversity is measured by the number of species present and both plots contain exactly five species.",
      "D": "Plot 2 has greater species richness than Plot 1, because its individuals are spread more evenly across the five species in the survey."
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nDiversity has two components. Richness — the species count — is five in both plots. Evenness describes how individuals are distributed among those species, and the plots differ sharply: Plot 1 is dominated by one species holding 92 of 100 individuals, with four species represented by 1 to 3 individuals, while Plot 2 ranges only from 16 to 24. Plot 2 therefore has higher evenness and higher overall diversity. The ecological consequence is that Plot 1 depends heavily on a single species, so a pest or disease specific to it would alter that plot far more.\n\nWhy the other options fail:\nA — A single species holding 92 of 100 individuals is dominance, which lowers evenness and therefore diversity; a large population of one species is not high diversity.\nC — Richness is only one component of diversity. Treating it as the whole measure ignores the very different abundance distributions the table shows.\nD — Richness counts species and is five in both plots. Spreading individuals more evenly changes evenness, not the number of species present.\n\nDiagnostic focus: Distinguish richness from evenness when drawing a diversity conclusion from count data."
  },
  {
    "id": 9,
    "unit": "Unit 2",
    "topic": "2.7",
    "category": "Unit 2: The Living World: Biodiversity — Topic 2.7: Ecological Succession",
    "big_idea": "ERT",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "1 — Foundational",
    "stem": "A retreating glacier exposes bare rock, and a nearby forest of the same age is cleared by a surface fire that leaves the soil intact. Which comparison of how the two sites recover is correct, and why?",
    "visual": "",
    "options": {
      "A": "The burned site recovers faster because secondary succession starts with soil, a seed bank, and surviving roots in place, while bare rock must build soil from scratch.",
      "B": "Both sites recover at the same rate, because succession always proceeds through the same fixed sequence of pioneer, intermediate, and climax species over the same interval.",
      "C": "The glacial site recovers faster because bare rock is free of the competitors and plant pathogens that persist in burned soil, so colonizing species establish with less resistance.",
      "D": "The burned site recovers faster because fire converts plant tissue into nutrients that the glacial site lacks entirely, and nutrient supply rather than soil presence sets the recovery rate."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe distinction is whether soil survives the disturbance. On newly exposed rock, primary succession must begin with lichens and mosses that weather the rock chemically and physically; accumulating enough soil to support larger plants takes decades to centuries. A surface fire leaves the soil profile, its seed bank, and surviving root systems in place, so secondary succession can resume from an intermediate stage and reach a comparable community far faster.\n\nWhy the other options fail:\nB — Succession follows a broadly similar progression but not a fixed timetable; the starting substrate determines the rate, which is exactly what differs between these two sites.\nC — Reduced competition does not compensate for the absence of soil. Without soil there is no water-holding or nutrient-supplying medium, which is the rate-limiting step on bare rock.\nD — Fire does release nutrients in ash, but this names the wrong primary reason: the decisive difference is that one site retains an intact soil profile, seed bank, and root systems.\n\nDiagnostic focus: Use the presence or absence of soil to distinguish primary from secondary succession."
  },
  {
    "id": 10,
    "unit": "Unit 2",
    "topic": "2.4",
    "category": "Unit 2: The Living World: Biodiversity — Topic 2.4: Ecological Tolerance",
    "big_idea": "ERT",
    "sp": "Skill 2.B",
    "skills": "Skill 2.B: Explain relationships between different characteristics of environmental concepts, processes, or models represented visually.",
    "difficulty": "2 — Application",
    "stem": "A lake inhabited by both species is projected to warm so that summer temperatures shift from near 22 °C toward 30 °C. Which species is more vulnerable to that shift, and which feature of the curves justifies the answer?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>60</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>80</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>100</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>10</text><line x1='131.0' y1='248.0' x2='131.0' y2='253.0' stroke='#888'/><text x='131.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>14</text><line x1='194.0' y1='248.0' x2='194.0' y2='253.0' stroke='#888'/><text x='194.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>18</text><line x1='257.0' y1='248.0' x2='257.0' y2='253.0' stroke='#888'/><text x='257.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>22</text><line x1='320.0' y1='248.0' x2='320.0' y2='253.0' stroke='#888'/><text x='320.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>26</text><line x1='383.0' y1='248.0' x2='383.0' y2='253.0' stroke='#888'/><text x='383.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>30</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>34</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,236.6 131.0,197.8 194.0,106.6 257.0,31.4 320.0,115.8 383.0,207.0 446.0,241.2' fill='none' stroke='#C41230' stroke-width='2.4'/><circle cx='68.0' cy='236.6' r='3.1' fill='#C41230'/><circle cx='131.0' cy='197.8' r='3.1' fill='#C41230'/><circle cx='194.0' cy='106.6' r='3.1' fill='#C41230'/><circle cx='257.0' cy='31.4' r='3.1' fill='#C41230'/><circle cx='320.0' cy='115.8' r='3.1' fill='#C41230'/><circle cx='383.0' cy='207.0' r='3.1' fill='#C41230'/><circle cx='446.0' cy='241.2' r='3.1' fill='#C41230'/><polyline points='68.0,179.6 131.0,147.7 194.0,115.8 257.0,97.5 320.0,106.6 383.0,134.0 446.0,170.5' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='179.6' r='3.1' fill='#1565C0'/><circle cx='131.0' cy='147.7' r='3.1' fill='#1565C0'/><circle cx='194.0' cy='115.8' r='3.1' fill='#1565C0'/><circle cx='257.0' cy='97.5' r='3.1' fill='#1565C0'/><circle cx='320.0' cy='106.6' r='3.1' fill='#1565C0'/><circle cx='383.0' cy='134.0' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='170.5' r='3.1' fill='#1565C0'/><rect x='272.0' y='22.0' width='164' height='42' fill='#FFFFFF' fill-opacity='0.9' stroke='#E2E2E2' rx='3'/><rect x='278.0' y='29.0' width='18' height='4' fill='#C41230' rx='2'/><text x='302.0' y='34.0' font-size='11' fill='#333'>Species P</text><rect x='278.0' y='47.0' width='18' height='4' fill='#1565C0' rx='2'/><text x='302.0' y='52.0' font-size='11' fill='#333'>Species Q</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Water temperature (°C)</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Growth rate (% of maximum)</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Growth rate of two fish species across a range of water temperatures.</text></svg>",
    "options": {
      "A": "Species P, because its optimum temperature is lower than that of Species Q, and the species with the lower optimum is displaced first as water warms.",
      "B": "Neither species is at serious risk, because both curves still show measurable growth at 30 °C, so both populations can persist at the new summer temperature.",
      "C": "Species Q, because its maximum growth rate is well below that of Species P, so it has less reserve capacity to absorb the added thermal stress of a warmer lake.",
      "D": "Species P, because its curve is narrow around a 22 °C optimum and falls to near zero by 30 °C, while the much broader curve of Species Q still supports moderate growth there."
    },
    "correct": "D",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nEcological tolerance is read from the width of the performance curve, not its peak. Species P has a narrow range: growth peaks at 95% of maximum at 22 °C and collapses to 18% by 30 °C and 3% by 34 °C. Species Q is a thermal generalist, staying between 30% and 66% across the entire range and still at 50% at 30 °C. Under the projected shift, Species P moves to the edge of its tolerance range while Species Q remains well inside its own, so Species P is the more vulnerable.\n\nWhy the other options fail:\nA — The two optima are not ordered that way on the graph — both curves peak near 22 °C — and the decisive feature is the width of the tolerance range, not the position of the optimum.\nB — Growth at 18%% of maximum, as shown for Species P, is a severe reduction; treating measurable growth as enough for persistence ignores how sharply performance has fallen.\nC — A lower peak is not the same as a narrow range. Species Q keeps moderate growth across the whole span shown, which is what matters under a temperature shift.\n\nDiagnostic focus: Compare the width of two tolerance curves, rather than their peak heights, to predict vulnerability to an environmental shift."
  },
  {
    "id": 11,
    "unit": "Unit 2",
    "topic": "2.5",
    "category": "Unit 2: The Living World: Biodiversity — Topic 2.5: Natural Disruptions to Ecosystems",
    "big_idea": "ERT",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "3 — Analysis",
    "stem": "A pine forest adapted to frequent low-intensity ground fires is protected by a policy that extinguishes every fire for sixty years. Which outcome and mechanism best explain why the eventual fire burns far more severely than the fires the forest evolved with?",
    "visual": "",
    "options": {
      "A": "Suppression gradually dries the site because the canopy closes and reduces rainfall reaching the ground, and this drier soil is what makes the eventual fire more severe.",
      "B": "Six decades of unburned litter, woody debris, and dense understory accumulate as fuel, so the eventual fire carries into the canopy instead of staying on the ground.",
      "C": "Suppression allows soil nutrients normally released by fire to build up to concentrations that make foliage unusually flammable, which raises the intensity of the eventual burn.",
      "D": "The mature pines lose their fire-resistant thick bark as they age without fire exposure, so the trees themselves become flammable and the fire spreads through their trunks."
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nIn a fire-adapted ecosystem, frequent low-intensity fire is itself the process that keeps fuel loads low — it consumes litter and thins the shade-tolerant understory while mature pines survive behind thick bark. Removing that process for sixty years lets surface fuel and ladder fuels build continuously. The ladder fuels are decisive: they give flames a continuous vertical path from the ground into the crowns, converting what would have been a ground fire into a stand-replacing crown fire. This is the reasoning behind prescribed-burn programs.\n\nWhy the other options fail:\nA — A closed canopy tends to raise humidity and shade near the ground rather than drying the site, and fuel load rather than soil moisture is the dominant control here.\nC — Nutrients accumulate in unburned litter rather than making living foliage flammable; the mechanism driving severity is the physical quantity and vertical arrangement of fuel.\nD — Thick bark is a developmental trait that does not require fire to maintain and generally thickens with age; the change over the sixty years is in the accumulated fuel, not in the bark.\n\nDiagnostic focus: Explain how removing a recurring natural disruption changes the system state, via fuel accumulation and vertical fuel structure."
  },
  {
    "id": 12,
    "unit": "Unit 2",
    "topic": "2.2",
    "category": "Unit 2: The Living World: Biodiversity — Topic 2.2: Ecosystem Services",
    "big_idea": "ERT",
    "sp": "Skill 3.C",
    "skills": "Skill 3.C: Describe the reasoning of an author (use of evidence to support a claim).",
    "difficulty": "3 — Analysis",
    "stem": "Which description most accurately characterizes how the author uses evidence to support the conclusion that the county will be left no worse off?",
    "visual": "<svg viewBox='0 0 470 194' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='194' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='192.0' fill='#FAFAF8' stroke='#D8D3C8'/><rect x='1' y='1' width='5' height='192.0' fill='#C41230'/><text x='20' y='26' font-size='13' font-weight='bold' fill='#222222'>Build the Basin, Keep the Benefits</text><text x='20' y='43' font-size='10.5' fill='#777' font-style='italic'>Opinion column submitted to a county planning board (written for this exam)</text><text x='20' y='64.0' font-size='11.5' fill='#333'>The 40-hectare marsh on the north parcel has been called irreplaceable,</text><text x='20' y='80.0' font-size='11.5' fill='#333'>but that claim does not survive contact with engineering. Our proposed</text><text x='20' y='96.0' font-size='11.5' fill='#333'>concrete detention basin is sized to hold the same peak stormwater</text><text x='20' y='112.0' font-size='11.5' fill='#333'>volume the marsh now absorbs during a ten-year storm.</text><text x='20' y='142.0' font-size='11.5' fill='#333'>Because the basin matches the marsh on that measure, the development</text><text x='20' y='158.0' font-size='11.5' fill='#333'>will leave the county no worse off. The board should approve the permit</text><text x='20' y='174.0' font-size='11.5' fill='#333'>and stop treating one wetland as beyond substitution.</text></svg>",
    "options": {
      "A": "The author offers evidence on one ecosystem service, peak stormwater storage, then generalizes from that single match to equivalence across all the marsh's services.",
      "B": "The author supports the conclusion with evidence on several ecosystem services and shows that the engineered basin matches or exceeds the marsh on each one of them.",
      "C": "The author offers no evidence at all and rests the conclusion entirely on the assertion that engineered structures are superior to natural systems.",
      "D": "The author supports the conclusion with evidence about long-term maintenance costs, treating the lower cost of the basin as proof that no net loss will occur."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe column presents exactly one piece of evidence — that the basin is sized to hold the peak volume the marsh absorbs in a ten-year storm — and moves directly from that single match to the sweeping conclusion that the county is left no worse off. Describing the reasoning accurately means naming both the narrow evidence and the generalization built on it. A marsh also supplies water filtration, groundwater recharge, nutrient cycling, carbon storage, and wildlife habitat, none of which a concrete basin provides and none of which the evidence addresses.\n\nWhy the other options fail:\nB — Only one measure appears in the column — peak storm volume during a ten-year storm. No other service is quantified or even named.\nC — The column does offer a specific piece of evidence, the matched peak storage volume. The weakness is the scope of that evidence, not its absence.\nD — Costs are never mentioned in the column; the single quantitative comparison offered is storm-water holding volume.\n\nDiagnostic focus: Describe how an author's evidence connects to the claim, identifying when a single measure is generalized to a broad conclusion."
  },
  {
    "id": 13,
    "unit": "Unit 3",
    "topic": "3.5",
    "category": "Unit 3: Populations — Topic 3.5: Population Growth and Resource Availability",
    "big_idea": "ERT",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "1 — Foundational",
    "stem": "A country's population is growing at a steady 2.8% per year. Using the rule of 70, approximately how long will it take for the population to double?",
    "visual": "",
    "options": {
      "A": "2.5 years",
      "B": "25 years",
      "C": "35 years",
      "D": "196 years"
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe rule of 70 estimates doubling time as 70 divided by the percentage growth rate per year: 70 ÷ 2.8 = 25 years. The relationship is inverse, so a higher growth rate always produces a shorter doubling time — a useful check on the direction of the operation. The rule works because it approximates ln(2) × 100, which is about 69.3.\n\nWhy the other options fail:\nA — This is the correct quotient divided by ten, a decimal-place slip. The rule of 70 uses the growth rate as a percentage, so 70 ÷ 2.8, not 70 ÷ 28.\nC — This rounds the growth rate down to 2%% before dividing. The rule of 70 is sensitive to that rounding: 70 ÷ 2 = 35 years overstates the doubling time by ten years.\nD — This multiplies 70 by the growth rate. The rule of 70 divides 70 by the percentage growth rate, because a faster growth rate must give a shorter doubling time.\n\nDiagnostic focus: Apply the rule of 70 as a division by the percentage rate and keep the decimal place."
  },
  {
    "id": 14,
    "unit": "Unit 3",
    "topic": "3.3",
    "category": "Unit 3: Populations — Topic 3.3: Survivorship Curves",
    "big_idea": "ERT",
    "sp": "Skill 2.A",
    "skills": "Skill 2.A: Describe characteristics of an environmental concept, process, or model represented visually.",
    "difficulty": "1 — Foundational",
    "stem": "Which curve shows the pattern of very high mortality early in life, and which reproductive strategy is characteristic of species with that curve?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>60</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>80</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>100</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>0</text><line x1='143.6' y1='248.0' x2='143.6' y2='253.0' stroke='#888'/><text x='143.6' y='266.0' font-size='11' fill='#444' text-anchor='middle'>20</text><line x1='219.2' y1='248.0' x2='219.2' y2='253.0' stroke='#888'/><text x='219.2' y='266.0' font-size='11' fill='#444' text-anchor='middle'>40</text><line x1='294.8' y1='248.0' x2='294.8' y2='253.0' stroke='#888'/><text x='294.8' y='266.0' font-size='11' fill='#444' text-anchor='middle'>60</text><line x1='370.4' y1='248.0' x2='370.4' y2='253.0' stroke='#888'/><text x='370.4' y='266.0' font-size='11' fill='#444' text-anchor='middle'>80</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>100</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,20.0 143.6,26.8 219.2,36.0 294.8,54.2 370.4,122.6 446.0,236.6' fill='none' stroke='#1565C0' stroke-width='2.4'/><polyline points='68.0,20.0 143.6,104.4 219.2,156.8 294.8,191.0 370.4,211.5 446.0,236.6' fill='none' stroke='#2E7D32' stroke-width='2.4'/><polyline points='68.0,20.0 105.8,207.0 143.6,227.5 219.2,236.6 294.8,240.0 370.4,242.3 446.0,243.4' fill='none' stroke='#C41230' stroke-width='2.4'/><text x='385.5' y='106.6' font-size='11' fill='#333' text-anchor='start'>Curve I</text><text x='241.9' y='143.1' font-size='11' fill='#333' text-anchor='start'>Curve II</text><text x='117.1' y='191.0' font-size='11' fill='#333' text-anchor='start'>Curve III</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Percent of maximum life span</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Survivors per 100 born</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Three survivorship curves, each starting from a cohort of 100 newborns.</text></svg>",
    "options": {
      "A": "Curve III, which drops from 100 to 18 survivors within the first 10% of the life span; such species typically produce few offspring and invest heavily in each one.",
      "B": "Curve I, which stays near 100 survivors through most of the life span; such species typically produce very large numbers of offspring and provide little or no parental care.",
      "C": "Curve II, which falls at a roughly constant rate across the life span; such species face their heaviest mortality in the earliest life stages and compensate with many offspring.",
      "D": "Curve III, which drops from 100 to 18 survivors within the first 10% of the life span; such species produce very large numbers of offspring and give little or no parental care at all."
    },
    "correct": "D",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nReading the first segment of each curve identifies the pattern. Curve III falls from 100 to 18 survivors in the first 10%% of the life span, so the overwhelming majority of mortality occurs in the earliest stages — the Type III pattern seen in many fish, insects, and plants. That curve shape goes with producing enormous numbers of small offspring and investing almost nothing in each, since only a small fraction need survive. Curve I is Type I, with high survival until late-life mortality, and Curve II is Type II, with a roughly constant mortality rate.\n\nWhy the other options fail:\nA — The curve identification is right but the strategy is reversed. Heavy investment in few offspring produces high early survivorship, not a steep early drop.\nB — Curve I shows high survivorship until late life, the opposite pattern. That flat early section indicates few offspring with heavy parental investment.\nC — A constant rate of decline means mortality is roughly equal at every age, which is the definition of Type II, not concentrated early mortality.\n\nDiagnostic focus: Read the slope of a survivorship curve's early segment and connect the shape to the matching reproductive strategy."
  },
  {
    "id": 15,
    "unit": "Unit 3",
    "topic": "3.6",
    "category": "Unit 3: Populations — Topic 3.6: Age Structure Diagrams",
    "big_idea": "EIN",
    "sp": "Skill 5.C",
    "skills": "Skill 5.C: Explain patterns and trends in data to draw conclusions.",
    "difficulty": "2 — Application",
    "stem": "Based on the shape of this age-structure diagram, what should be concluded about Country M's population over the next twenty-five years, and why?",
    "visual": "<svg viewBox='0 0 450 330' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='450' height='330' fill='#FFFFFF'/><rect x='179.2' y='31.5' width='18.8' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='31.5' width='24.4' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='48.1' font-size='10.5' fill='#333' text-anchor='middle'>65+</text><rect x='166.0' y='60.8' width='32.0' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='60.8' width='35.7' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='77.4' font-size='10.5' fill='#333' text-anchor='middle'>55-64</text><rect x='145.4' y='90.0' width='52.6' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='90.0' width='54.5' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='106.6' font-size='10.5' fill='#333' text-anchor='middle'>45-54</text><rect x='124.7' y='119.2' width='73.3' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='119.2' width='73.3' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='135.9' font-size='10.5' fill='#333' text-anchor='middle'>35-44</text><rect x='100.2' y='148.5' width='97.8' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='148.5' width='95.9' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='165.1' font-size='10.5' fill='#333' text-anchor='middle'>25-34</text><rect x='75.8' y='177.8' width='122.2' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='177.8' width='120.3' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='194.4' font-size='10.5' fill='#333' text-anchor='middle'>15-24</text><rect x='55.1' y='207.0' width='142.9' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='207.0' width='139.1' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='223.6' font-size='10.5' fill='#333' text-anchor='middle'>5-14</text><rect x='40.1' y='236.2' width='157.9' height='26.2' fill='#1565C0' rx='1'/><rect x='252.0' y='236.2' width='152.3' height='26.2' fill='#C41230' rx='1'/><text x='225.0' y='252.9' font-size='10.5' fill='#333' text-anchor='middle'>0-4</text><line x1='10.0' y1='264.0' x2='198.0' y2='264.0' stroke='#222222'/><line x1='252.0' y1='264.0' x2='440.0' y2='264.0' stroke='#222222'/><text x='198.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>0</text><text x='252.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>0</text><text x='104.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>5</text><text x='346.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>5</text><text x='10.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>10</text><text x='440.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>10</text><text x='104.0' y='18' font-size='12' font-weight='bold' fill='#1565C0' text-anchor='middle'>Male</text><text x='346.0' y='18' font-size='12' font-weight='bold' fill='#C41230' text-anchor='middle'>Female</text><text x='225.0' y='296.0' font-size='11' fill='#333' text-anchor='middle'>percent of total population</text><text x='225.0' y='278.0' font-size='10' fill='#555' text-anchor='middle'>age</text><text x='225' y='324' font-size='11' fill='#555' text-anchor='middle'>Age structure of Country M, by percent of total population.</text></svg>",
    "options": {
      "A": "The population will stay nearly constant, because the near-equality of male and female percentages in every age band indicates that births are balancing deaths.",
      "B": "The population will grow briefly and then fall sharply, because the large 0-4 and 5-14 cohorts will move into old age together and die within the twenty-five-year window.",
      "C": "The population will begin to decline within twenty-five years, because the smallest bars are the oldest cohorts, which shows that fewer people are surviving to older ages over time.",
      "D": "The population will continue to grow substantially, because each younger cohort is larger than the one above it and a large group has yet to reach reproductive age."
    },
    "correct": "D",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThe pyramid is broad-based and tapers steadily upward: the 0-4 and 5-14 bands together hold about 43% of the population while the 65+ band holds only about 3%. Each younger cohort being larger than the one above it means a large group has yet to enter its reproductive years, so the number of births will keep rising even if fertility per woman falls. This built-in growth — population momentum — is why broad-based pyramids reliably forecast continued expansion over a generation.\n\nWhy the other options fail:\nA — A balanced sex ratio says nothing about whether births exceed deaths. The relevant signal is the relative size of successive age cohorts.\nB — Children in the 0-14 bands will be roughly 25 to 39 years old in twenty-five years, entering their peak reproductive years rather than old age.\nC — Small upper bars in a growing population reflect the smaller cohorts born decades ago, not falling survival. The widening base points to growth, not decline.\n\nDiagnostic focus: Read cohort-to-cohort size changes in an age-structure diagram to project growth, rather than reading the sex ratio or the top bars."
  },
  {
    "id": 16,
    "unit": "Unit 3",
    "topic": "3.7",
    "category": "Unit 3: Populations — Topic 3.7: Total Fertility Rate",
    "big_idea": "EIN",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "3 — Analysis",
    "stem": "A country's total fertility rate falls to 2.1 births per woman, the usual replacement level, yet its population keeps growing for several more decades. Which explanation accounts for the continued growth?",
    "visual": "",
    "options": {
      "A": "A total fertility rate of 2.1 exceeds replacement in countries with low infant mortality, so such countries keep growing even once fertility has stabilized at that figure.",
      "B": "A large share of the population has yet to reach childbearing age, so even at exactly replacement fertility the number of women having children keeps rising and births continue to exceed deaths.",
      "C": "Replacement-level fertility means each woman replaces herself and one partner, which produces steady growth of one additional person per couple in every generation.",
      "D": "Total fertility rate counts only live births to women in their twenties, so births to older women are added on top of the 2.1 figure and drive the surplus growth."
    },
    "correct": "B",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nPopulation growth depends on the number of births, not the births per woman. If earlier high fertility produced a large cohort of children, those children spend the following decades moving into their childbearing years. Even with each of them averaging 2.1 births, the total number of births rises because the number of potential parents is rising, while deaths are still drawn from much smaller older cohorts. This lag is called population momentum, and it is why reaching replacement fertility stabilizes a population only after an age structure has evened out.\n\nWhy the other options fail:\nA — The 0.1 above 2.0 exists precisely to offset mortality before reproductive age; where infant mortality is low, replacement sits near 2.1 rather than below it by enough to drive sustained growth.\nC — Replacement level is defined so that each generation just replaces the previous one; the 2.1 figure already accounts for both partners plus mortality before reproduction.\nD — Total fertility rate sums age-specific birth rates across a woman's entire reproductive span, so births at older ages are already included in the 2.1.\n\nDiagnostic focus: Explain population momentum by distinguishing births per woman from the number of women of reproductive age."
  },
  {
    "id": 17,
    "unit": "Unit 3",
    "topic": "3.4",
    "category": "Unit 3: Populations — Topic 3.4: Carrying Capacity",
    "big_idea": "ERT",
    "sp": "Skill 2.B",
    "skills": "Skill 2.B: Explain relationships between different characteristics of environmental concepts, processes, or models represented visually.",
    "difficulty": "2 — Application",
    "stem": "At approximately which population size is the herd adding individuals most rapidly, and what explains that relationship between population size and growth rate?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='215.4' x2='446.0' y2='215.4' stroke='#E2E2E2'/><text x='61.0' y='219.4' font-size='11' fill='#444' text-anchor='end'>200</text><line x1='68.0' y1='182.9' x2='446.0' y2='182.9' stroke='#E2E2E2'/><text x='61.0' y='186.9' font-size='11' fill='#444' text-anchor='end'>400</text><line x1='68.0' y1='150.3' x2='446.0' y2='150.3' stroke='#E2E2E2'/><text x='61.0' y='154.3' font-size='11' fill='#444' text-anchor='end'>600</text><line x1='68.0' y1='117.7' x2='446.0' y2='117.7' stroke='#E2E2E2'/><text x='61.0' y='121.7' font-size='11' fill='#444' text-anchor='end'>800</text><line x1='68.0' y1='85.1' x2='446.0' y2='85.1' stroke='#E2E2E2'/><text x='61.0' y='89.1' font-size='11' fill='#444' text-anchor='end'>1000</text><line x1='68.0' y1='52.6' x2='446.0' y2='52.6' stroke='#E2E2E2'/><text x='61.0' y='56.6' font-size='11' fill='#444' text-anchor='end'>1200</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>1400</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>0</text><line x1='143.6' y1='248.0' x2='143.6' y2='253.0' stroke='#888'/><text x='143.6' y='266.0' font-size='11' fill='#444' text-anchor='middle'>4</text><line x1='219.2' y1='248.0' x2='219.2' y2='253.0' stroke='#888'/><text x='219.2' y='266.0' font-size='11' fill='#444' text-anchor='middle'>8</text><line x1='294.8' y1='248.0' x2='294.8' y2='253.0' stroke='#888'/><text x='294.8' y='266.0' font-size='11' fill='#444' text-anchor='middle'>12</text><line x1='370.4' y1='248.0' x2='370.4' y2='253.0' stroke='#888'/><text x='370.4' y='266.0' font-size='11' fill='#444' text-anchor='middle'>16</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>20</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='52.6' x2='446.0' y2='52.6' stroke='#888' stroke-width='1.2' stroke-dasharray='5 4'/><text x='442.0' y='47.6' font-size='10' fill='#666' text-anchor='end' stroke='#FFFFFF' stroke-width='3' paint-order='stroke'>carrying capacity K = 1200</text><polyline points='68.0,241.5 105.8,232.4 143.6,212.2 181.4,174.7 219.2,130.7 257.0,93.3 294.8,70.5 332.6,59.1 370.4,55.0 408.2,53.4 446.0,52.6' fill='none' stroke='#C41230' stroke-width='2.4'/><circle cx='68.0' cy='241.5' r='3.1' fill='#C41230'/><circle cx='105.8' cy='232.4' r='3.1' fill='#C41230'/><circle cx='143.6' cy='212.2' r='3.1' fill='#C41230'/><circle cx='181.4' cy='174.7' r='3.1' fill='#C41230'/><circle cx='219.2' cy='130.7' r='3.1' fill='#C41230'/><circle cx='257.0' cy='93.3' r='3.1' fill='#C41230'/><circle cx='294.8' cy='70.5' r='3.1' fill='#C41230'/><circle cx='332.6' cy='59.1' r='3.1' fill='#C41230'/><circle cx='370.4' cy='55.0' r='3.1' fill='#C41230'/><circle cx='408.2' cy='53.4' r='3.1' fill='#C41230'/><circle cx='446.0' cy='52.6' r='3.1' fill='#C41230'/><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Time (years)</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Population size (individuals)</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Growth of a deer herd on an island over twenty years.</text></svg>",
    "options": {
      "A": "Near 40 individuals, at the start, because a small population experiences essentially no competition for resources and so grows at its maximum possible rate.",
      "B": "Near 1,200 individuals, at carrying capacity, because the largest population contains the greatest number of reproducing individuals and therefore adds the most offspring.",
      "C": "Near 1,185 individuals, just below carrying capacity, because growth accelerates as a population approaches the maximum its habitat can support.",
      "D": "Near 600 individuals, about half of carrying capacity, where the population is large enough to produce many offspring but resource limits are not yet severe."
    },
    "correct": "D",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe growth rate is the steepness of the curve, not the height of the curve. The steepest section runs from roughly year 6 to year 10, as the herd passes through about 450 to 950 animals — that is, through roughly K/2 = 600. This is the defining feature of logistic growth: the absolute growth rate peaks at about half of carrying capacity, because the total is the product of how many individuals are reproducing and how much room remains. Near zero it fails for lack of individuals; near K it fails for lack of resources.\n\nWhy the other options fail:\nA — The per-individual rate is highest when crowding is least, but with only 40 animals present the total number added each year is small — the curve is nearly flat there.\nB — At carrying capacity the curve is flat, meaning the growth rate has fallen to about zero: births and deaths balance even though the population is largest.\nC — Growth decelerates rather than accelerates near carrying capacity; the curve visibly flattens between years 16 and 20 as the population levels off.\n\nDiagnostic focus: Read growth rate as the slope of a logistic curve and locate the maximum at about half of carrying capacity."
  },
  {
    "id": 18,
    "unit": "Unit 3",
    "topic": "3.2",
    "category": "Unit 3: Populations — Topic 3.2: K-Selected r-Selected Species",
    "big_idea": "ERT",
    "sp": "Skill 5.B",
    "skills": "Skill 5.B: Describe relationships among variables in data represented.",
    "difficulty": "2 — Application",
    "stem": "Which statement correctly describes the relationship among the life-history variables in this table, and classifies the species accordingly?",
    "visual": "<svg viewBox='0 0 470 180' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='180' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='158.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='54' fill='#F2EFE9'/><text x='40.8' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Species</text><line x1='80.6' y1='1' x2='80.6' y2='159.0' stroke='#DDD'/><text x='134.4' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Age at first</text><text x='134.4' y='37.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>reproduction</text><line x1='188.2' y1='1' x2='188.2' y2='159.0' stroke='#DDD'/><text x='242.0' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Offspring per</text><text x='242.0' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>reproductive</text><text x='242.0' y='43.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>event</text><line x1='295.8' y1='1' x2='295.8' y2='159.0' stroke='#DDD'/><text x='342.6' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Gestation or</text><text x='342.6' y='37.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>incubation</text><line x1='389.4' y1='1' x2='389.4' y2='159.0' stroke='#DDD'/><text x='429.2' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Parental</text><text x='429.2' y='37.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>care</text><line x1='1' y1='54' x2='469.0' y2='54' stroke='#999' stroke-width='1.4'/><text x='10.0' y='71.0' font-size='11.5' fill='#333' text-anchor='start'>Species J</text><text x='134.4' y='71.0' font-size='11.5' fill='#333' text-anchor='middle'>2-3 years</text><text x='242.0' y='71.0' font-size='11.5' fill='#333' text-anchor='middle'>1</text><text x='342.6' y='71.0' font-size='11.5' fill='#333' text-anchor='middle'>9 months</text><text x='429.2' y='71.0' font-size='11.5' fill='#333' text-anchor='middle'>extensive</text><rect x='1' y='80.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='97.0' font-size='11.5' fill='#333' text-anchor='start'>Species K</text><text x='134.4' y='97.0' font-size='11.5' fill='#333' text-anchor='middle'>6 weeks</text><text x='242.0' y='97.0' font-size='11.5' fill='#333' text-anchor='middle'>2,100</text><text x='342.6' y='97.0' font-size='11.5' fill='#333' text-anchor='middle'>none</text><text x='429.2' y='97.0' font-size='11.5' fill='#333' text-anchor='middle'>none</text><line x1='1' y1='80.0' x2='469.0' y2='80.0' stroke='#ECECEC'/><text x='10.0' y='123.0' font-size='11.5' fill='#333' text-anchor='start'>Species L</text><text x='134.4' y='123.0' font-size='11.5' fill='#333' text-anchor='middle'>4 years</text><text x='242.0' y='123.0' font-size='11.5' fill='#333' text-anchor='middle'>2</text><text x='342.6' y='123.0' font-size='11.5' fill='#333' text-anchor='middle'>11 months</text><text x='429.2' y='123.0' font-size='11.5' fill='#333' text-anchor='middle'>extensive</text><line x1='1' y1='106.0' x2='469.0' y2='106.0' stroke='#ECECEC'/><rect x='1' y='132.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='149.0' font-size='11.5' fill='#333' text-anchor='start'>Species M</text><text x='134.4' y='149.0' font-size='11.5' fill='#333' text-anchor='middle'>3 weeks</text><text x='242.0' y='149.0' font-size='11.5' fill='#333' text-anchor='middle'>480</text><text x='342.6' y='149.0' font-size='11.5' fill='#333' text-anchor='middle'>none</text><text x='429.2' y='149.0' font-size='11.5' fill='#333' text-anchor='middle'>none</text><line x1='1' y1='132.0' x2='469.0' y2='132.0' stroke='#ECECEC'/><text x='235' y='174' font-size='11' fill='#555' text-anchor='middle'>Life-history traits of four animal species.</text></svg>",
    "options": {
      "A": "Offspring number varies inversely with age at first reproduction and parental investment, so Species K and M are r-selected while J and L are K-selected.",
      "B": "Offspring number varies directly with age at first reproduction and with parental investment, so Species J and L are r-selected while Species K and M are K-selected.",
      "C": "Gestation length varies inversely with offspring number, which shows that all four species are K-selected and differ only in the length of their reproductive cycles.",
      "D": "Offspring number varies inversely with age at first reproduction, but parental care is unrelated to either, so all four species are best classified as r-selected."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nReading down the columns, three variables move together. Species K and M reproduce within weeks, produce 2,100 and 480 offspring per event, and provide no gestation period or parental care — the r-selected strategy of maximizing reproductive rate, typical of species in variable or disturbed habitats where most offspring die. Species J and L delay reproduction for years, produce one or two offspring, and invest heavily in each — the K-selected strategy favored in stable habitats near carrying capacity, where competitive ability matters more than output. Offspring number therefore varies inversely with both of the other traits.\n\nWhy the other options fail:\nB — The table shows the opposite relationship: the species reproducing earliest produce the most offspring, and the classification is also reversed.\nC — The gestation relationship is read correctly, but species producing 480 and 2,100 offspring with no parental care are the textbook r-selected pattern, not K-selected.\nD — Parental care tracks the other variables exactly — present in both low-offspring species, absent in both high-offspring ones — and the four species clearly fall into two contrasting groups.\n\nDiagnostic focus: Identify co-varying life-history traits across a table and map them onto the r-selected and K-selected categories in the correct direction."
  },
  {
    "id": 19,
    "unit": "Unit 3",
    "topic": "3.9",
    "category": "Unit 3: Populations — Topic 3.9: Demographic Transition",
    "big_idea": "EIN",
    "sp": "Skill 2.C",
    "skills": "Skill 2.C: Explain how environmental concepts and processes represented visually relate to broader environmental issues.",
    "difficulty": "3 — Analysis",
    "stem": "During which stage is the population growing fastest, and what broader development pattern does the shape of these two curves illustrate?",
    "visual": "<svg viewBox='0 0 470 334' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='334' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>10</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>30</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>50</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>0</text><line x1='131.0' y1='248.0' x2='131.0' y2='253.0' stroke='#888'/><text x='131.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>1</text><line x1='194.0' y1='248.0' x2='194.0' y2='253.0' stroke='#888'/><text x='194.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>2</text><line x1='257.0' y1='248.0' x2='257.0' y2='253.0' stroke='#888'/><text x='257.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>3</text><line x1='320.0' y1='248.0' x2='320.0' y2='253.0' stroke='#888'/><text x='320.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>4</text><line x1='383.0' y1='248.0' x2='383.0' y2='253.0' stroke='#888'/><text x='383.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>5</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>6</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,56.5 131.0,47.4 194.0,65.6 257.0,111.2 320.0,156.8 383.0,188.7 446.0,197.8' fill='none' stroke='#C41230' stroke-width='2.4'/><circle cx='68.0' cy='56.5' r='3.1' fill='#C41230'/><circle cx='131.0' cy='47.4' r='3.1' fill='#C41230'/><circle cx='194.0' cy='65.6' r='3.1' fill='#C41230'/><circle cx='257.0' cy='111.2' r='3.1' fill='#C41230'/><circle cx='320.0' cy='156.8' r='3.1' fill='#C41230'/><circle cx='383.0' cy='188.7' r='3.1' fill='#C41230'/><circle cx='446.0' cy='197.8' r='3.1' fill='#C41230'/><polyline points='68.0,65.6 131.0,111.2 194.0,165.9 257.0,193.3 320.0,202.4 383.0,202.4 446.0,197.8' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='65.6' r='3.1' fill='#1565C0'/><circle cx='131.0' cy='111.2' r='3.1' fill='#1565C0'/><circle cx='194.0' cy='165.9' r='3.1' fill='#1565C0'/><circle cx='257.0' cy='193.3' r='3.1' fill='#1565C0'/><circle cx='320.0' cy='202.4' r='3.1' fill='#1565C0'/><circle cx='383.0' cy='202.4' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='197.8' r='3.1' fill='#1565C0'/><rect x='272.0' y='22.0' width='164' height='42' fill='#FFFFFF' fill-opacity='0.9' stroke='#E2E2E2' rx='3'/><rect x='278.0' y='29.0' width='18' height='4' fill='#C41230' rx='2'/><text x='302.0' y='34.0' font-size='11' fill='#333'>Birth rate</text><rect x='278.0' y='47.0' width='18' height='4' fill='#1565C0' rx='2'/><text x='302.0' y='52.0' font-size='11' fill='#333'>Death rate</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Stage of demographic transition</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Rate (per 1,000 people per year)</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Crude birth and death rates across the demographic transition. Stage 1 spans</text><text x='235' y='328' font-size='11' fill='#555' text-anchor='middle'>0-1, Stage 2 spans 1-3, Stage 3 spans 3-5, Stage 4 spans 5-6.</text></svg>",
    "options": {
      "A": "Stage 1, where both rates are at their highest; the large absolute number of births at this stage means the population expands faster than at any later point.",
      "B": "Stage 3, where the birth rate is falling steeply; the rapid change in the birth rate is what drives the highest rate of population increase.",
      "C": "Stage 2, where death rates fell steeply while birth rates stayed high; improvements in sanitation, nutrition, and medicine cut mortality long before fertility begins to respond.",
      "D": "Stage 4, where both rates are low and nearly equal; low death rates mean most people survive, which produces the fastest increase in population size."
    },
    "correct": "C",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThe rate of natural increase is the vertical gap between the birth and death curves. That gap is widest in Stage 2 — about 22 per 1,000 at its maximum — because the death rate drops from roughly 40 to 12 per 1,000 while the birth rate stays near 40. The curves illustrate the general development pattern that mortality responds quickly to clean water, sanitation, vaccination, and food supply, whereas fertility falls later, as education, child survival expectations, and women's economic opportunities change. The lag between the two declines is what produces rapid population growth.\n\nWhy the other options fail:\nA — In Stage 1 the two curves nearly coincide near 40 per 1,000, so births and deaths cancel and growth is close to zero despite both rates being high.\nB — Growth depends on the gap between the curves, not on how fast either is changing. By Stage 3 the gap is already narrowing, so growth is slowing.\nD — Where the curves converge near 11 per 1,000 the gap is almost zero, so the population is close to stable rather than growing fastest.\n\nDiagnostic focus: Interpret the gap between two curves, not their absolute heights or slopes, and connect it to the development processes behind the transition."
  },
  {
    "id": 20,
    "unit": "Unit 3",
    "topic": "3.8",
    "category": "Unit 3: Populations — Topic 3.8: Human Population Dynamics",
    "big_idea": "EIN",
    "sp": "Skill 6.B",
    "skills": "Skill 6.B: Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "difficulty": "3 — Analysis",
    "stem": "A country of 8,000,000 people has a crude birth rate of 24 per 1,000 per year and a crude death rate of 9 per 1,000 per year. In the same year 40,000 people immigrate and 15,000 emigrate. What is the country's overall annual population growth rate?",
    "visual": "",
    "options": {
      "A": "0.31% per year",
      "B": "1.50% per year",
      "C": "1.81% per year",
      "D": "2.00% per year"
    },
    "correct": "C",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nConvert each rate to a count, then combine all four flows. Births = (24/1,000) × 8,000,000 = 192,000. Deaths = (9/1,000) × 8,000,000 = 72,000. Natural increase = 120,000. Net migration = 40,000 − 15,000 = 25,000. Total change = 120,000 + 25,000 = 145,000 people. As a rate: 145,000 ÷ 8,000,000 × 100 = 1.81% per year.\n\nWhy the other options fail:\nA — This counts only net migration (40,000 − 15,000 = 25,000 people) and omits natural increase, which is by far the larger term here.\nB — This is the rate of natural increase alone, from the birth and death rates. It ignores both migration figures, which add a further 25,000 people.\nD — This adds all 40,000 immigrants but never subtracts the 15,000 emigrants, so it double-counts the migration contribution.\n\nDiagnostic focus: Combine births, deaths, immigration, and emigration into a single growth rate, keeping the sign of each flow correct."
  },
  {
    "id": 21,
    "unit": "Unit 3",
    "topic": "3.1",
    "category": "Unit 3: Populations — Topic 3.1: Generalist and Specialist Species",
    "big_idea": "ERT",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "2 — Application",
    "stem": "A continuous forest is divided by new roads and housing into many small patches separated by lawns and pavement. Which prediction about the forest's generalist and specialist bird species is best supported, and why?",
    "visual": "",
    "options": {
      "A": "Both groups will decline by a similar proportion, because fragmentation reduces the total area of forest available and total area is what determines the abundance of any bird species.",
      "B": "Specialists will decline more sharply, because they depend on a narrow range of interior-forest conditions and food resources that small, edge-dominated patches can no longer provide anywhere within them.",
      "C": "Generalists will decline more sharply, because they require large continuous territories to find the wide variety of foods their broad diets depend on.",
      "D": "Specialists will increase while generalists decline, because the reduced competition inside each small patch frees specialists from pressure by broad-diet competitors."
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nA specialist has a narrow niche: a restricted diet, a narrow range of tolerable conditions, or dependence on a particular habitat structure such as deep forest interior with closed canopy and high humidity. Fragmentation converts interior into edge, changing light, temperature, wind, and predator and nest-parasite exposure, and removes the specific resources specialists rely on. Generalists tolerate a broad range of conditions and can also use the surrounding lawns and gardens, so they persist or increase. The result is biotic homogenization: fragmented landscapes converge on a similar set of widespread generalists.\n\nWhy the other options fail:\nA — Total area matters, but species differ in how well they tolerate the edge conditions and altered resources that fragmentation creates, so the declines are not proportional.\nC — A broad diet reduces rather than increases dependence on any one habitat; generalists typically find acceptable resources within fragments and in the developed matrix.\nD — Fragmentation does not remove generalists from patches; edge-tolerant generalists usually become more common there, so competition on specialists does not ease.\n\nDiagnostic focus: Apply niche breadth to predict which group is more vulnerable to habitat fragmentation and edge effects."
  },
  {
    "id": 22,
    "unit": "Unit 4",
    "topic": "4.2",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.2: Soil Formation and Erosion",
    "big_idea": "ERT",
    "sp": "Skill 4.B",
    "skills": "Skill 4.B: Identify a research method, design, and/or measure used.",
    "difficulty": "2 — Application",
    "stem": "Which description correctly identifies the design of this investigation and the role that Plots 1 and 4 play in it?",
    "visual": "<svg viewBox='0 0 470 182' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='182' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='146.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='36.1' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Plot</text><line x1='71.2' y1='1' x2='71.2' y2='147.0' stroke='#DDD'/><text x='112.2' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Slope</text><line x1='153.1' y1='1' x2='153.1' y2='147.0' stroke='#DDD'/><text x='217.4' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Ground cover</text><line x1='281.8' y1='1' x2='281.8' y2='147.0' stroke='#DDD'/><text x='375.4' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Soil collected after 50 mm</text><text x='375.4' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>rain (g)</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>1</text><text x='112.2' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>10%</text><text x='217.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>bare soil</text><text x='375.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>412</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>2</text><text x='112.2' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>10%</text><text x='217.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>grass cover</text><text x='375.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>38</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>3</text><text x='112.2' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>10%</text><text x='217.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>straw mulch</text><text x='375.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>61</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>4</text><text x='112.2' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>10%</text><text x='217.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>bare soil</text><text x='375.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>405</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='235' y='162' font-size='11' fill='#555' text-anchor='middle'>Sediment caught in collection troughs at the base of four identical field</text><text x='235' y='176' font-size='11' fill='#555' text-anchor='middle'>plots.</text></svg>",
    "options": {
      "A": "It is an observational study with no manipulated variable, because rainfall occurred naturally; Plots 1 and 4 are additional observations that increase the total sample size.",
      "B": "It is a controlled experiment in which sediment mass is the independent variable; Plots 1 and 4 are the treatment plots against which the covered plots are judged.",
      "C": "It is a controlled experiment in which ground cover is the independent variable and slope is held constant; Plots 1 and 4 are replicate controls fixing the baseline erosion rate.",
      "D": "It is a controlled experiment in which slope is the independent variable and ground cover is held constant; Plots 1 and 4 are replicate controls that establish the baseline erosion rate."
    },
    "correct": "C",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nReading the columns identifies the design. Slope is 10% on all four plots, so it is a controlled variable. Ground cover takes three values — bare, grass, mulch — so it is the manipulated independent variable. Sediment mass is measured, so it is the dependent variable. Plots 1 and 4 share the bare-soil condition, making them replicates of the control; their close agreement (412 g and 405 g) is evidence that the measurement is repeatable, so the much smaller values on the covered plots can be attributed to the cover.\n\nWhy the other options fail:\nA — Ground cover was deliberately assigned to plots, which makes this an experiment. Rainfall being natural affects the setting, not whether a variable was manipulated.\nB — Sediment mass is what the investigators measure, which makes it the dependent variable, and bare soil is the control condition rather than a treatment.\nD — The table shows slope identical at 10% on every plot and ground cover differing, so the roles of the two variables are reversed here.\n\nDiagnostic focus: Identify independent, dependent, and controlled variables from a data table and recognize the function of replicate controls."
  },
  {
    "id": 23,
    "unit": "Unit 4",
    "topic": "4.3",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.3: Soil Composition and Properties",
    "big_idea": "ERT",
    "sp": "Skill 5.B",
    "skills": "Skill 5.B: Describe relationships among variables in data represented.",
    "difficulty": "2 — Application",
    "stem": "Which statement correctly describes the relationship between particle size and the two measured water properties, and identifies the soil best suited to most crops?",
    "visual": "<svg viewBox='0 0 470 168' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='168' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='146.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='38.7' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Soil</text><line x1='76.3' y1='1' x2='76.3' y2='147.0' stroke='#DDD'/><text x='127.4' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Particle size</text><line x1='178.5' y1='1' x2='178.5' y2='147.0' stroke='#DDD'/><text x='248.4' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Infiltration rate</text><text x='248.4' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(cm/hr)</text><line x1='318.4' y1='1' x2='318.4' y2='147.0' stroke='#DDD'/><text x='393.7' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Water held after</text><text x='393.7' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>drainage (%)</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>Sand</text><text x='127.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>largest</text><text x='248.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>21.0</text><text x='393.7' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>9</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>Silt</text><text x='127.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>intermediate</text><text x='248.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>1.8</text><text x='393.7' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>26</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>Clay</text><text x='127.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>smallest</text><text x='248.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>0.2</text><text x='393.7' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>41</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>Loam</text><text x='127.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>mixed</text><text x='248.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>2.6</text><text x='393.7' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>31</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='235' y='162' font-size='11' fill='#555' text-anchor='middle'>Measured properties of four soil textures.</text></svg>",
    "options": {
      "A": "Infiltration rate increases and water retention decreases as particle size increases; loam is best suited to crops because it combines moderate infiltration with high retention.",
      "B": "Infiltration rate increases and water retention decreases as particle size increases; silt is best suited to crops because its intermediate particle size gives it the highest water retention of any soil.",
      "C": "Both infiltration rate and water retention increase as particle size increases; sand is best suited to crops because its high infiltration rate delivers water to roots fastest.",
      "D": "Infiltration rate decreases and water retention increases as particle size increases; clay is best suited to crops because it retains the most water of the four soils."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nLarge particles leave large pores between them, so water moves through quickly and little is held against gravity: sand infiltrates at 21.0 cm/hr but retains only 9%. Small particles create small pores with far more surface area, so water moves slowly and is held tightly: clay infiltrates at 0.2 cm/hr and retains 41%. The two properties therefore vary inversely with each other. Loam, a mixture of all three sizes, infiltrates at a moderate 2.6 cm/hr while retaining 31%, which is why it supports most crops: water enters fast enough to avoid runoff and waterlogging but is retained long enough for roots to take it up.\n\nWhy the other options fail:\nB — The relationship is described correctly, but silt does not have the highest retention — clay holds 41% and loam 31%, both above silt's 26%.\nC — The two properties move in opposite directions in the table — sand holds the least water at 9% despite the fastest infiltration — so sandy soil drains before roots can use the water.\nD — The direction of the infiltration relationship is reversed: the largest particles (sand) have the fastest infiltration at 21.0 cm/hr. Clay also waterlogs and resists root penetration.\n\nDiagnostic focus: Read two inversely related variables against a third and apply the pattern to select an optimum rather than an extreme."
  },
  {
    "id": 24,
    "unit": "Unit 4",
    "topic": "4.4",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.4: Earth's Atmosphere",
    "big_idea": "ERT",
    "sp": "Skill 2.A",
    "skills": "Skill 2.A: Describe characteristics of an environmental concept, process, or model represented visually.",
    "difficulty": "1 — Foundational",
    "stem": "Which layer shown contains the ozone layer, and what does ozone in that layer do to incoming solar radiation?",
    "visual": "<svg viewBox='0 0 470 310' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='310' fill='#FFFFFF'/><rect x='96.0' y='16.0' width='224.0' height='86.0' fill='#2F3E66' stroke='#555' stroke-width='1'/><text x='87.0' y='63.0' font-size='11.5' font-weight='bold' fill='#222222' text-anchor='end'>Thermosphere</text><text x='329.0' y='57.0' font-size='10.5' fill='#444'>above ~80 km;</text><text x='329.0' y='69.0' font-size='10.5' fill='#444'>temperature rises</text><rect x='96.0' y='102.0' width='224.0' height='58.6' fill='#4D6AA8' stroke='#555' stroke-width='1'/><text x='87.0' y='135.3' font-size='11.5' font-weight='bold' fill='#222222' text-anchor='end'>Mesosphere</text><text x='329.0' y='135.3' font-size='10.5' fill='#444'>50-80 km; coldest layer</text><rect x='96.0' y='160.6' width='224.0' height='74.3' fill='#7FA3D6' stroke='#555' stroke-width='1'/><text x='87.0' y='201.8' font-size='11.5' font-weight='bold' fill='#222222' text-anchor='end'>Stratosphere</text><text x='329.0' y='195.8' font-size='10.5' fill='#444'>18-50 km; contains the</text><text x='329.0' y='207.8' font-size='10.5' fill='#444'>ozone layer</text><rect x='96.0' y='234.9' width='224.0' height='39.1' fill='#C9DCF2' stroke='#555' stroke-width='1'/><text x='87.0' y='258.5' font-size='11.5' font-weight='bold' fill='#222222' text-anchor='end'>Troposphere</text><text x='329.0' y='252.5' font-size='10.5' fill='#444'>0-18 km; nearly all</text><text x='329.0' y='264.5' font-size='10.5' fill='#444'>weather and water vapor</text><text x='14' y='145.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 14,145.0)'>increasing altitude</text><text x='235' y='304' font-size='11' fill='#555' text-anchor='middle'>Layers of Earth&#39;s atmosphere, drawn from the surface upward.</text></svg>",
    "options": {
      "A": "The troposphere, where ozone absorbs most incoming ultraviolet radiation and converts that energy to heat, which is why temperature rises with altitude through the layer.",
      "B": "The stratosphere, where ozone absorbs most incoming ultraviolet radiation and converts it to heat, which is why temperature rises with altitude in the layer.",
      "C": "The stratosphere, where ozone reflects most incoming ultraviolet radiation back to space without absorbing energy, so the layer's temperature is unaffected by the process.",
      "D": "The mesosphere, where ozone absorbs most incoming ultraviolet radiation, which explains why the mesosphere is the coldest layer of the atmosphere."
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe figure labels the stratosphere, spanning roughly 18 to 50 km, as the layer containing the ozone layer. Ozone absorbs ultraviolet radiation as it is repeatedly split and re-formed, and that absorbed energy is released as heat. This is the direct cause of the stratosphere's defining temperature profile: unlike the troposphere below it, the stratosphere gets warmer with increasing altitude, because the heating source is the ozone above rather than the surface below. The resulting temperature inversion makes the stratosphere very stable, which is why pollutants that reach it persist for decades.\n\nWhy the other options fail:\nA — The diagram labels the stratosphere as the ozone-containing layer. Ozone in the troposphere is a ground-level pollutant, and tropospheric temperature falls with altitude.\nC — The layer is identified correctly, but ozone absorbs ultraviolet radiation in a chemical cycle rather than reflecting it, and that absorption is what warms the layer.\nD — The diagram places ozone in the stratosphere, and the reasoning is self-contradictory: absorbing radiation would warm a layer, not make it the coldest.\n\nDiagnostic focus: Locate a named feature on an atmospheric diagram and state the radiation process there."
  },
  {
    "id": 25,
    "unit": "Unit 4",
    "topic": "4.5",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.5: Global Wind Patterns",
    "big_idea": "ERT",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "Which explanation accounts for the band of major deserts found worldwide near the latitudes labelled Zone X?",
    "visual": "<svg viewBox='0 0 470 296' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='296' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><line x1='40.0' y1='236.0' x2='430.0' y2='236.0' stroke='#8B6B3F' stroke-width='2.2'/><text x='235.0' y='252.0' font-size='11' fill='#333' text-anchor='middle' font-weight='normal'>Equator (0°)</text><text x='100.0' y='252.0' font-size='11' fill='#333' text-anchor='middle' font-weight='normal'>30° N</text><text x='370.0' y='252.0' font-size='11' fill='#333' text-anchor='middle' font-weight='normal'>30° S</text><line x1='235.0' y1='230.0' x2='235.0' y2='66.0' stroke='#C41230' stroke-width='2.4' marker-end='url(#ah)'/><text x='243.0' y='150.0' font-size='10.5' fill='#C41230' text-anchor='start' font-weight='normal'>warm moist air rises</text><line x1='228.0' y1='60.0' x2='110.0' y2='60.0' stroke='#555' stroke-width='2' marker-end='url(#ah)'/><line x1='242.0' y1='60.0' x2='360.0' y2='60.0' stroke='#555' stroke-width='2' marker-end='url(#ah)'/><text x='235.0' y='48.0' font-size='10.5' fill='#333' text-anchor='middle' font-weight='normal'>air diverges aloft, cooling and drying</text><line x1='100.0' y1='66.0' x2='100.0' y2='230.0' stroke='#1565C0' stroke-width='2.4' marker-end='url(#ah)'/><line x1='370.0' y1='66.0' x2='370.0' y2='230.0' stroke='#1565C0' stroke-width='2.4' marker-end='url(#ah)'/><text x='94.0' y='150.0' font-size='10.5' fill='#1565C0' text-anchor='end' font-weight='normal'>dry air sinks</text><text x='376.0' y='150.0' font-size='10.5' fill='#1565C0' text-anchor='start' font-weight='normal'>dry air sinks</text><line x1='106.0' y1='228.0' x2='226.0' y2='228.0' stroke='#555' stroke-width='2' marker-end='url(#ah)'/><line x1='364.0' y1='228.0' x2='244.0' y2='228.0' stroke='#555' stroke-width='2' marker-end='url(#ah)'/><text x='100.0' y='28.0' font-size='12' fill='#333' text-anchor='middle' font-weight='bold'>Zone X</text><text x='370.0' y='28.0' font-size='12' fill='#333' text-anchor='middle' font-weight='bold'>Zone X</text><text x='235' y='276' font-size='11' fill='#555' text-anchor='middle'>Cross-section of the Hadley circulation. Zone X marks the latitudes where air</text><text x='235' y='290' font-size='11' fill='#555' text-anchor='middle'>descends.</text></svg>",
    "options": {
      "A": "Air that rose at the equator already lost its moisture as rain; as it descends at these latitudes it warms by compression, so it draws moisture from the surface rather than delivering rain.",
      "B": "Descending air at these latitudes is cold and therefore holds very little water vapor, so there is almost no moisture available in the air to fall as precipitation.",
      "C": "These latitudes receive the most intense solar radiation on Earth, and the resulting high surface temperatures evaporate most precipitation before it can accumulate in the soil.",
      "D": "Prevailing surface winds at these latitudes blow from the continental interiors toward the oceans, which keeps moist marine air from reaching the land where deserts form."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nThe Hadley cell links equatorial rainfall to subtropical aridity. Intense equatorial heating drives air upward; as it rises it expands, cools, reaches saturation, and releases its moisture, which produces the tropical rainforest belt. The now-dry air moves poleward aloft and descends near 30 degrees north and south. Descending air is compressed and warms adiabatically, and warmer air can hold more water vapor — so its relative humidity falls and it draws moisture from the surface rather than releasing it. This is why the Sahara, Arabian, Kalahari, Atacama, and Australian deserts all sit at roughly the same latitudes.\n\nWhy the other options fail:\nB — Air warms as it descends and is compressed; the descending air at these latitudes is warm and dry. Cold air aloft is part of the pattern, but not the condition at the surface.\nC — The most intense solar radiation falls near the equator, which is wet rather than arid. The controlling factor at 30 degrees is the descending limb of the circulation, not peak insolation.\nD — Surface winds in this cell flow back toward the equator rather than outward from continents, and the global pattern of these deserts appears on every continent regardless of wind direction relative to the coast.\n\nDiagnostic focus: Explain subtropical desert formation through the rising and descending limbs of atmospheric circulation and adiabatic temperature change."
  },
  {
    "id": 26,
    "unit": "Unit 4",
    "topic": "4.6",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.6: Watersheds",
    "big_idea": "ERT",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "2 — Application",
    "stem": "A storm drops 45 mm of rain evenly across a 1,200-hectare watershed, and 30% of that rainfall leaves the watershed as surface runoff. What volume of water leaves as runoff? (1 hectare = 10,000 m²)",
    "visual": "",
    "options": {
      "A": "16,200 m³",
      "B": "162,000 m³",
      "C": "378,000 m³",
      "D": "540,000 m³"
    },
    "correct": "B",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nWork in consistent SI units. Area: 1,200 ha × 10,000 m²/ha = 12,000,000 m². Rainfall depth: 45 mm ÷ 1,000 = 0.045 m. Total rainfall volume: 12,000,000 m² × 0.045 m = 540,000 m³. Runoff is 30% of that: 540,000 × 0.30 = 162,000 m³. The remaining 378,000 m³ infiltrates, recharges groundwater, or is intercepted by vegetation — which is why paving a watershed raises the runoff fraction and worsens downstream flooding.\n\nWhy the other options fail:\nA — This is the correct answer divided by ten, the result of a unit-conversion slip. One hectare is 10,000 m², so 1,200 hectares is 12,000,000 m².\nC — This is the 70%% that does not run off, which is the volume infiltrating or being retained rather than the runoff the question asks for.\nD — This is the total rainfall delivered to the watershed. The 30%% runoff fraction still has to be applied to it.\n\nDiagnostic focus: Convert hectares and millimetres to SI units before applying a runoff fraction."
  },
  {
    "id": 27,
    "unit": "Unit 4",
    "topic": "4.7",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.7: Solar Radiation and Earth's Seasons",
    "big_idea": "ENG",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "Which explanation correctly accounts for why the Northern Hemisphere experiences summer in June and July?",
    "visual": "",
    "options": {
      "A": "Earth's axial tilt increases to about 23.5 degrees during June and returns toward zero in December, and the greater tilt is what concentrates solar energy in the north.",
      "B": "Prevailing winds carry warm equatorial air northward in June and southward in December, and this seasonal redistribution of heat rather than solar input produces the seasons.",
      "C": "Earth's axis is tilted about 23.5 degrees, so in June the Northern Hemisphere tilts toward the Sun and receives sunlight at a higher angle and for more hours each day, concentrating more energy per unit area.",
      "D": "Earth's elliptical orbit brings the planet closest to the Sun in June, so the reduced distance delivers more solar energy to the Northern Hemisphere during those months."
    },
    "correct": "C",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nSeasons are produced by Earth's fixed axial tilt of about 23.5 degrees combined with its orbit. In June the Northern Hemisphere is tilted toward the Sun, which has two reinforcing effects: sunlight strikes the surface at a steeper angle, so a given beam of light is spread over less ground area and delivers more energy per square metre, and the days are longer, so that higher-intensity radiation is received for more hours. The Southern Hemisphere is tilted away at the same time and has winter, which is the decisive evidence that distance from the Sun cannot be the cause.\n\nWhy the other options fail:\nA — The tilt is essentially constant through the year; what changes is the orientation of that fixed tilt relative to the Sun as Earth moves along its orbit.\nB — Atmospheric and oceanic heat transport moderates regional climate but is a consequence of the uneven solar heating, not the cause of the seasonal cycle itself.\nD — Earth is actually nearest the Sun in early January, and the small orbital distance variation cannot explain hemispheres having opposite seasons at the same time.\n\nDiagnostic focus: Attribute seasonality to axial tilt changing the angle and duration of insolation, not to orbital distance."
  },
  {
    "id": 28,
    "unit": "Unit 4",
    "topic": "4.9",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.9: El Nino and La Nina",
    "big_idea": "ENG",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "3 — Analysis",
    "stem": "During a strong El Nino year, the normally strong easterly trade winds across the tropical Pacific weaken. Which prediction about the Peruvian coast, with its mechanism, is best supported?",
    "visual": "",
    "options": {
      "A": "Upwelling is unaffected because it is driven by the density difference between cold deep water and warm surface water, which does not depend on surface wind strength.",
      "B": "Upwelling of cold nutrient-rich water weakens because the winds pushing surface water offshore have slackened, so primary productivity falls and the anchovy fishery declines with it.",
      "C": "Upwelling intensifies because warm surface water moving eastward displaces the deeper cold water upward, so nutrient supply and fishery yields both rise sharply.",
      "D": "Upwelling weakens, and primary productivity rises because the warmer surface water accelerates phytoplankton growth rates enough to offset the reduced nutrient supply."
    },
    "correct": "B",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nNormal conditions have strong easterly trade winds pushing warm surface water westward across the Pacific; along the South American coast that departing surface water is replaced by cold, nutrient-rich water rising from depth. That upwelling supplies the nitrogen and phosphorus supporting one of the world's most productive fisheries. When the trades weaken during El Nino, warm water sloshes back eastward and piles up along the coast, deepening the thermocline and shutting down the upwelling. Without the nutrient supply, phytoplankton productivity collapses, and that loss propagates up the food chain to the anchovy fishery and the seabirds and marine mammals that depend on it.\n\nWhy the other options fail:\nA — Coastal upwelling is wind-driven: offshore-moving surface water is replaced from below. Removing the wind removes the mechanism, whatever the density structure.\nC — Warm surface water accumulating along the coast deepens the thermocline and suppresses upwelling rather than forcing deep water up; the fishery collapses in El Nino years.\nD — The upwelling conclusion is right, but nutrient supply rather than temperature limits productivity in this system, so warmer water cannot compensate for the loss of nutrients.\n\nDiagnostic focus: Trace a wind-driven upwelling mechanism from a change in wind strength through nutrient supply to fishery productivity."
  },
  {
    "id": 29,
    "unit": "Unit 4",
    "topic": "4.1",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.1: Plate Tectonics",
    "big_idea": "ERT",
    "sp": "Skill 1.A",
    "skills": "Skill 1.A: Describe environmental concepts and processes.",
    "difficulty": "1 — Foundational",
    "stem": "Which description correctly characterizes a convergent plate boundary where oceanic lithosphere meets continental lithosphere, and the landforms it produces?",
    "visual": "",
    "options": {
      "A": "The denser oceanic plate subducts beneath the continental plate, producing a deep offshore trench and, inland of that trench, a chain of volcanic mountains.",
      "B": "The denser continental plate subducts beneath the oceanic plate, producing a deep offshore trench and a chain of volcanic mountains on the ocean floor.",
      "C": "The two plates slide horizontally past each other without either descending, producing frequent earthquakes but no volcanoes and no trench.",
      "D": "The two plates move apart as new material rises between them, producing a mid-ocean ridge and a rift valley along the continental margin."
    },
    "correct": "A",
    "explanation": "Big Idea: ERT — Interactions Between Earth Systems\n\nAt an oceanic-continental convergent boundary, the density contrast decides the outcome: oceanic lithosphere, made of denser basaltic rock, descends beneath the less dense continental lithosphere. The bend where the plate begins to descend forms a deep trench offshore. As the subducting slab sinks it heats and releases water into the overlying mantle, lowering the melting point and generating magma that rises to build a volcanic mountain arc inland of the trench. The Andes above the Peru-Chile Trench and the Cascades of the Pacific Northwest are both examples.\n\nWhy the other options fail:\nB — Continental lithosphere is less dense than oceanic lithosphere, so it resists subduction; the oceanic plate is the one that descends.\nC — This describes a transform boundary, such as the San Andreas Fault, rather than a convergent one.\nD — This describes a divergent boundary. At a convergent boundary the plates move toward each other rather than apart.\n\nDiagnostic focus: Use the density difference between oceanic and continental lithosphere to describe which plate subducts and what landforms result."
  },
  {
    "id": 30,
    "unit": "Unit 4",
    "topic": "4.8",
    "category": "Unit 4: Earth Systems and Resources — Topic 4.8: Earth's Geography and Climate",
    "big_idea": "ENG",
    "sp": "Skill 2.B",
    "skills": "Skill 2.B: Explain relationships between different characteristics of environmental concepts, processes, or models represented visually.",
    "difficulty": "2 — Application",
    "stem": "Which explanation best accounts for the nearly ninefold difference in annual precipitation between Side P and Side Q of this mountain range?",
    "visual": "<svg viewBox='0 0 470 300' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='300' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><path d='M 30 250 L 170 250 L 235 84 L 300 250 L 440 250 Z' fill='#C7B89A' stroke='#7A6A4F' stroke-width='1.6'/><text x='235.0' y='72.0' font-size='11' fill='#333' text-anchor='middle' font-weight='normal'>mountain range</text><line x1='34.0' y1='150.0' x2='150.0' y2='150.0' stroke='#1565C0' stroke-width='2.4' marker-end='url(#ah)'/><text x='36.0' y='138.0' font-size='10.5' fill='#1565C0' text-anchor='start' font-weight='normal'>moist ocean air</text><line x1='158.0' y1='142.0' x2='212.0' y2='100.0' stroke='#1565C0' stroke-width='2.4' marker-end='url(#ah)'/><line x1='150.0' y1='176.0' x2='144.0' y2='196.0' stroke='#1565C0' stroke-width='1.6'/><line x1='168.0' y1='178.0' x2='162.0' y2='198.0' stroke='#1565C0' stroke-width='1.6'/><line x1='186.0' y1='180.0' x2='180.0' y2='200.0' stroke='#1565C0' stroke-width='1.6'/><line x1='204.0' y1='182.0' x2='198.0' y2='202.0' stroke='#1565C0' stroke-width='1.6'/><text x='120.0' y='215.0' font-size='12' fill='#333' text-anchor='middle' font-weight='bold'>Side P</text><text x='120.0' y='232.0' font-size='10.5' fill='#333' text-anchor='middle' font-weight='normal'>2,150 mm/yr</text><line x1='258.0' y1='100.0' x2='318.0' y2='160.0' stroke='#C41230' stroke-width='2.4' marker-end='url(#ah)'/><line x1='324.0' y1='165.0' x2='430.0' y2='180.0' stroke='#C41230' stroke-width='2.4' marker-end='url(#ah)'/><text x='350.0' y='210.0' font-size='12' fill='#333' text-anchor='middle' font-weight='bold'>Side Q</text><text x='350.0' y='227.0' font-size='10.5' fill='#333' text-anchor='middle' font-weight='normal'>240 mm/yr</text><text x='235' y='280' font-size='11' fill='#555' text-anchor='middle'>Prevailing winds cross a coastal mountain range from left to right. Annual</text><text x='235' y='294' font-size='11' fill='#555' text-anchor='middle'>precipitation is shown for each side.</text></svg>",
    "options": {
      "A": "Air forced up the windward slope cools until its water vapor condenses and falls on Side P, then warms as it descends on Side Q, which leaves that side dry.",
      "B": "Side Q is farther from the ocean, so the moisture in the air mass is simply used up by the distance travelled rather than by anything the mountain range does to the air.",
      "C": "Air descending on Side Q cools as it loses altitude, and cool air holds very little water vapor, so almost no precipitation can form on that side of the range.",
      "D": "The mountain range physically blocks clouds from crossing the ridge, so the water in them remains on Side P and no air reaches Side Q to deliver precipitation."
    },
    "correct": "A",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nThis is the orographic rain-shadow effect, and it depends on how temperature changes with altitude. On the windward side, air is forced to rise, expands as pressure falls, and cools; cooler air holds less water vapor, so the air reaches saturation and releases moisture as the 2,150 mm falling on Side P. Having lost that water, the air crosses the ridge and descends on the leeward side, where it is compressed and warms. Warmer air can hold more water vapor, so its relative humidity drops further and it evaporates moisture from the land instead of delivering rain — leaving Side Q with 240 mm. The same mechanism explains the aridity east of the Sierra Nevada and the Cascades.\n\nWhy the other options fail:\nB — Distance alone does not create this sharp a boundary. The abrupt change occurs across the ridge itself, which identifies the mountain as the cause.\nC — Descending air is compressed and warms rather than cooling. Reversing that temperature change inverts the mechanism behind a rain shadow.\nD — Air does cross the ridge, as the arrows show; it arrives on Side Q dry rather than being blocked. Clouds are not solid objects held back by terrain.\n\nDiagnostic focus: Explain a windward-leeward precipitation contrast through adiabatic cooling on ascent and warming on descent."
  },
  {
    "id": 31,
    "unit": "Unit 5",
    "topic": "5.1",
    "category": "Unit 5: Land and Water Use — Topic 5.1: The Tragedy of the Commons",
    "big_idea": "EIN",
    "sp": "Skill 3.B",
    "skills": "Skill 3.B: Describe the perspective and assumptions of an author.",
    "difficulty": "3 — Analysis",
    "stem": "Which description best identifies the key assumption the author's argument depends on?",
    "visual": "<svg viewBox='0 0 470 194' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='194' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='192.0' fill='#FAFAF8' stroke='#D8D3C8'/><rect x='1' y='1' width='5' height='192.0' fill='#C41230'/><text x='20' y='26' font-size='13' font-weight='bold' fill='#222222'>Let the Fleet Decide</text><text x='20' y='43' font-size='10.5' fill='#777' font-style='italic'>Letter to a regional fisheries council (written for this exam)</text><text x='20' y='64.0' font-size='11.5' fill='#333'>Every boat in this harbor knows the stock better than any regulator. If</text><text x='20' y='80.0' font-size='11.5' fill='#333'>the fish were truly running out, we would be the first to pull back,</text><text x='20' y='96.0' font-size='11.5' fill='#333'>because our livelihoods depend on next year&#39;s catch as much as this</text><text x='20' y='112.0' font-size='11.5' fill='#333'>one&#39;s.</text><text x='20' y='142.0' font-size='11.5' fill='#333'>Quotas assume we cannot see what is in front of us. Remove them, let</text><text x='20' y='158.0' font-size='11.5' fill='#333'>each captain judge what the water can give, and the fleet will land</text><text x='20' y='174.0' font-size='11.5' fill='#333'>exactly as much as the stock can bear.</text></svg>",
    "options": {
      "A": "That government quotas have historically been set too low, so removing them would allow the fleet to land a larger total catch without harming the stock.",
      "B": "That captains have more accurate information about the stock than regulators do, which is the only claim the argument requires in order to hold.",
      "C": "That the fish stock is already at a sustainable level, so no reduction in total catch by anyone in the fleet is necessary in the first place.",
      "D": "That each captain acting in self-interest will voluntarily cut their own catch, even though fish they leave can be taken by a competing boat."
    },
    "correct": "D",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThe argument rests on a shared resource regulating itself through individual self-interest, which is exactly the assumption the tragedy of the commons identifies as unreliable. When a resource is open to all, the benefit of taking one more fish goes entirely to the boat that takes it, while the cost of a depleted stock is spread across the whole fleet. A captain who holds back therefore pays the full cost of restraint and sees the fish taken by someone else, so restraint is individually irrational even when every captain understands the stock perfectly. Identifying the assumption means naming that gap between private benefit and shared cost.\n\nWhy the other options fail:\nA — The letter makes no claim about past quota levels or about increasing total catch; it argues that the fleet would land the right amount on its own.\nB — The author does assert this, but superior information is not sufficient: the argument still needs each captain to act on that information by cutting their own catch when others may not.\nC — The author explicitly allows that the stock could be running out and argues the fleet would respond, so the argument does not depend on the stock being healthy now.\n\nDiagnostic focus: Identify the unstated assumption in an argument about a common-pool resource, distinguishing it from claims the author states outright."
  },
  {
    "id": 32,
    "unit": "Unit 5",
    "topic": "5.5",
    "category": "Unit 5: Land and Water Use — Topic 5.5: Irrigation Methods",
    "big_idea": "EIN",
    "sp": "Skill 7.D",
    "skills": "Skill 7.D: Use data and evidence to support a potential solution.",
    "difficulty": "2 — Application",
    "stem": "A farm in an arid region draws from a declining aquifer and has begun to see salt crusts on its fields. Which recommendation does the data in the table most strongly support?",
    "visual": "<svg viewBox='0 0 470 142' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='142' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='120.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='64.4' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Irrigation method</text><line x1='127.8' y1='1' x2='127.8' y2='121.0' stroke='#DDD'/><text x='200.9' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Water delivered to root</text><text x='200.9' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>zone (%)</text><line x1='274.0' y1='1' x2='274.0' y2='121.0' stroke='#DDD'/><text x='322.8' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Salinization</text><text x='322.8' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>risk</text><line x1='371.5' y1='1' x2='371.5' y2='121.0' stroke='#DDD'/><text x='420.2' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Installation</text><text x='420.2' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>cost</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>Flood / furrow</text><text x='200.9' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>40</text><text x='322.8' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>high</text><text x='420.2' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>low</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>Spray (center pivot)</text><text x='200.9' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>70</text><text x='322.8' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>moderate</text><text x='420.2' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>moderate</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>Drip</text><text x='200.9' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>92</text><text x='322.8' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>low</text><text x='420.2' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>high</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><text x='235' y='136' font-size='11' fill='#555' text-anchor='middle'>Performance of three irrigation methods on an arid-region farm.</text></svg>",
    "options": {
      "A": "Convert to drip irrigation: delivering 92% of water to the root zone cuts aquifer withdrawals the most, and its low salinization risk addresses the salt already seen.",
      "B": "Stay with flood irrigation, because its low installation cost leaves more capital available, and the 40% delivery figure means the other 60% recharges the aquifer the farm depends on.",
      "C": "Convert to drip irrigation, because its high installation cost will be recovered through the higher crop yields that drip systems produce in every soil type.",
      "D": "Convert to spray irrigation, because its moderate cost and moderate salinization risk represent the best balance, and 70% delivery is sufficient to halt aquifer decline."
    },
    "correct": "A",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nTwo pieces of evidence in the table bear on the farm's two stated problems. For the declining aquifer, delivery efficiency determines how much must be withdrawn to wet the root zone: at 92%, drip requires far less pumping than spray at 70% or flood at 40%. For the salt crusts, drip carries the lowest salinization risk, because applying small volumes directly to roots avoids the repeated wet-and-evaporate cycling that concentrates dissolved salts at the surface. Drip is the only option the data support on both counts; its high installation cost is a real trade-off that the water savings must be weighed against.\n\nWhy the other options fail:\nB — Most water lost under flood irrigation evaporates rather than recharging the aquifer, and this method carries the table's highest salinization risk on a farm already seeing salt crusts.\nC — The recommendation is right but the justification is not in the table, which reports no yield data at all; the supported case rests on water delivery and salinization risk.\nD — Spray is an improvement, but the data give no basis for claiming 70% halts the decline, and it leaves moderate salinization risk on fields where salt is already appearing.\n\nDiagnostic focus: Select a solution using the specific data columns that bear on each stated problem, rather than on information the table does not contain."
  },
  {
    "id": 33,
    "unit": "Unit 5",
    "topic": "5.11",
    "category": "Unit 5: Land and Water Use — Topic 5.11: Ecological Footprints",
    "big_idea": "EIN",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "1 — Foundational",
    "stem": "A city of 250,000 residents has an average ecological footprint of 4.8 global hectares (gha) per person. What is the total ecological footprint of the city?",
    "visual": "",
    "options": {
      "A": "52,083 gha",
      "B": "120,000 gha",
      "C": "254,800 gha",
      "D": "1,200,000 gha"
    },
    "correct": "D",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nAn ecological footprint is an area per person, so the total is simply the per-capita value times the number of people: 250,000 residents × 4.8 gha/person = 1,200,000 gha. The units confirm the operation — persons × (gha/person) leaves gha. Comparing that total against the biologically productive land actually available is what reveals whether a city is running an ecological deficit, and cities almost always depend on area far beyond their own boundaries.\n\nWhy the other options fail:\nA — This divides the population by the per-capita footprint. A per-person quantity is multiplied by the number of people, not divided into it.\nB — This is the correct product with a misplaced decimal, as if the footprint were 0.48 gha per person rather than 4.8.\nC — This combines the two figures by addition. Population and per-capita footprint have different units and must be multiplied to give total area.\n\nDiagnostic focus: Multiply a per-capita rate by population, using unit cancellation to check the operation."
  },
  {
    "id": 34,
    "unit": "Unit 5",
    "topic": "5.6",
    "category": "Unit 5: Land and Water Use — Topic 5.6: Pest Control Methods",
    "big_idea": "EIN",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "2 — Application",
    "stem": "A grower applies the same insecticide to a cornfield every season. Control is excellent for three years, then declines sharply even though the application rate is unchanged. Which explanation accounts for the loss of effectiveness?",
    "visual": "",
    "options": {
      "A": "Repeated exposure caused individual insects to develop resistance during their lifetimes, and they passed that acquired tolerance on to their offspring.",
      "B": "The pest population grew so large over three years that the same quantity of insecticide was spread across more individuals, reducing the dose each insect received.",
      "C": "A few insects already carried heritable resistance; the insecticide killed susceptible individuals each season, so resistant survivors came to dominate.",
      "D": "The insecticide degraded in storage over the three years, so later applications delivered a lower effective dose despite the unchanged application rate."
    },
    "correct": "C",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThis is natural selection operating on a pest population, sometimes called the pesticide treadmill. Variation in resistance exists in the population before any spraying, usually at low frequency. The insecticide acts as a strong selective agent: susceptible individuals die and resistant ones survive to reproduce, passing the resistance alleles on. Each generation the resistant fraction grows, and with short generation times and large populations the shift can take only a few seasons. The population evolves; no individual insect changes. Growers then face escalating doses or new chemicals, which is a central argument for integrated pest management.\n\nWhy the other options fail:\nA — Individuals do not acquire heritable resistance from exposure. Resistance alleles must already be present in the population for selection to act on them.\nB — Application rate is set per unit area, not per insect, so each insect receives a similar exposure regardless of population size.\nD — This would explain reduced control, but it is contradicted by resistance appearing in generation after generation of the pest; a storage problem would not select for resistant insects.\n\nDiagnostic focus: Explain pesticide resistance as selection on pre-existing heritable variation, not as traits acquired by individuals."
  },
  {
    "id": 35,
    "unit": "Unit 5",
    "topic": "5.14",
    "category": "Unit 5: Land and Water Use — Topic 5.14: Integrated Pest Management",
    "big_idea": "STB",
    "sp": "Skill 7.F",
    "skills": "Skill 7.F: Justify a proposed solution, by explaining potential advantages.",
    "difficulty": "2 — Application",
    "stem": "An orchard facing repeated pesticide resistance adopts integrated pest management, combining pest monitoring, crop rotation, natural predators, and chemical sprays used only above a damage threshold. Which justification for IPM over spraying on a fixed schedule is strongest?",
    "visual": "",
    "options": {
      "A": "Natural predators and crop rotation are inexpensive inputs, so the monitored program costs the orchard less than scheduled spraying from its first season onward.",
      "B": "Spraying at lower doses above the damage threshold keeps exposure too mild for insects to respond to, so the pests are not stimulated into developing resistance.",
      "C": "Monitoring lets the grower switch to a stronger insecticide as soon as pests pass the damage threshold, so resistant individuals are killed before they can reproduce.",
      "D": "Spraying only when monitoring shows pests above a damage threshold cuts pesticide use, slowing the selection that drives resistance, while the other controls act by independent means."
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nThe strongest justification addresses the specific problem the orchard has. Resistance is driven by selection pressure, and selection pressure scales with how consistently and heavily a chemical is applied. Scheduled spraying applies it whether or not pests are present, which maximizes that pressure. Threshold-based spraying cuts the number of applications, so a larger share of the pest population escapes exposure and susceptible alleles are retained. Meanwhile rotation, predators, and monitoring suppress pests through mechanisms resistance to one chemical does not defeat. The combination addresses the cause rather than escalating the dose.\n\nWhy the other options fail:\nA — IPM requires monitoring labour and expertise and is often costlier at the outset; cost in the first season is a weak justification compared with the resistance argument.\nB — Resistance is not induced in individuals by exposure; it arises by selection on heritable variation already present. Sub-lethal doses can actually let partly resistant insects survive and reproduce, which speeds resistance.\nC — Escalating to stronger chemicals is the pesticide treadmill IPM is designed to escape; it intensifies selection and invites resistance to the new chemical as well.\n\nDiagnostic focus: Justify an integrated solution by connecting it to the mechanism causing the problem, without overclaiming what the solution eliminates."
  },
  {
    "id": 36,
    "unit": "Unit 5",
    "topic": "5.8",
    "category": "Unit 5: Land and Water Use — Topic 5.8: Impacts of Overfishing",
    "big_idea": "EIN",
    "sp": "Skill 5.C",
    "skills": "Skill 5.C: Explain patterns and trends in data to draw conclusions.",
    "difficulty": "3 — Analysis",
    "stem": "Which conclusion about this fishery is best supported by the relationship between the two curves after 1995?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>30</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>60</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>90</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>120</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>150</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>1980</text><line x1='162.5' y1='248.0' x2='162.5' y2='253.0' stroke='#888'/><text x='162.5' y='266.0' font-size='11' fill='#444' text-anchor='middle'>1990</text><line x1='257.0' y1='248.0' x2='257.0' y2='253.0' stroke='#888'/><text x='257.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>2000</text><line x1='351.5' y1='248.0' x2='351.5' y2='253.0' stroke='#888'/><text x='351.5' y='266.0' font-size='11' fill='#444' text-anchor='middle'>2010</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>2020</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,229.8 115.2,205.4 162.5,176.6 209.8,159.8 257.0,185.7 304.2,208.5 351.5,222.2 398.8,226.7 446.0,228.2' fill='none' stroke='#C41230' stroke-width='2.4'/><circle cx='68.0' cy='229.8' r='3.1' fill='#C41230'/><circle cx='115.2' cy='205.4' r='3.1' fill='#C41230'/><circle cx='162.5' cy='176.6' r='3.1' fill='#C41230'/><circle cx='209.8' cy='159.8' r='3.1' fill='#C41230'/><circle cx='257.0' cy='185.7' r='3.1' fill='#C41230'/><circle cx='304.2' cy='208.5' r='3.1' fill='#C41230'/><circle cx='351.5' cy='222.2' r='3.1' fill='#C41230'/><circle cx='398.8' cy='226.7' r='3.1' fill='#C41230'/><circle cx='446.0' cy='228.2' r='3.1' fill='#C41230'/><polyline points='68.0,217.6 115.2,184.2 162.5,141.6 209.8,102.1 257.0,77.8 304.2,59.5 351.5,48.9 398.8,41.3 446.0,38.2' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='217.6' r='3.1' fill='#1565C0'/><circle cx='115.2' cy='184.2' r='3.1' fill='#1565C0'/><circle cx='162.5' cy='141.6' r='3.1' fill='#1565C0'/><circle cx='209.8' cy='102.1' r='3.1' fill='#1565C0'/><circle cx='257.0' cy='77.8' r='3.1' fill='#1565C0'/><circle cx='304.2' cy='59.5' r='3.1' fill='#1565C0'/><circle cx='351.5' cy='48.9' r='3.1' fill='#1565C0'/><circle cx='398.8' cy='41.3' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='38.2' r='3.1' fill='#1565C0'/><rect x='74.0' y='22.0' width='164' height='42' fill='#FFFFFF' fill-opacity='0.9' stroke='#E2E2E2' rx='3'/><rect x='80.0' y='29.0' width='18' height='4' fill='#C41230' rx='2'/><text x='104.0' y='34.0' font-size='11' fill='#333'>Total catch (thousand t)</text><rect x='80.0' y='47.0' width='18' height='4' fill='#1565C0' rx='2'/><text x='104.0' y='52.0' font-size='11' fill='#333'>Fishing effort (index)</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Year</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Catch (thousand t) / effort index</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Reported catch and fishing effort for a commercial cod fishery.</text></svg>",
    "options": {
      "A": "The stock has been overfished: effort kept climbing while catch fell by about three-quarters, so each added unit of effort takes fish from a shrinking population.",
      "B": "The fishery is approaching sustainable yield, because catch has levelled off near 13,000 tonnes since 2010 while effort has also stabilized, indicating a new equilibrium.",
      "C": "Catch declined because fishing effort declined after 1995, so reduced harvesting rather than stock depletion accounts for the falling catch.",
      "D": "The data are inconclusive about stock size, because catch depends only on how much effort is applied and gives no information about the fish population itself."
    },
    "correct": "A",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThe diagnostic quantity is catch per unit of effort. In 1995 the fishery landed 58,000 t at an effort index of 96, roughly 0.60 units of catch per unit of effort. By 2020 it landed 13,000 t at an effort index of 138, roughly 0.09 — about one-seventh as productive per unit of effort. When effort rises and catch falls, the only consistent explanation is that the underlying population has declined. The rising effort masked the decline for a time, because better gear and more boats kept total landings up while the stock was already shrinking, which is why catch alone is a misleading indicator of fishery health.\n\nWhy the other options fail:\nB — Effort continued rising from 131 to 138 after 2010, and a catch that has fallen to one-quarter of its peak is a collapsed stock rather than a sustainable yield.\nC — This misreads the graph: effort rises continuously from 96 in 1995 to 138 in 2020. The two curves diverge rather than falling together.\nD — Catch per unit effort is precisely the standard index of stock abundance, and here it falls sharply, which is informative rather than inconclusive.\n\nDiagnostic focus: Combine two diverging trends into catch per unit effort to diagnose stock depletion rather than reading either curve alone."
  },
  {
    "id": 37,
    "unit": "Unit 5",
    "topic": "5.3",
    "category": "Unit 5: Land and Water Use — Topic 5.3: The Green Revolution",
    "big_idea": "EIN",
    "sp": "Skill 7.C",
    "skills": "Skill 7.C: Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "difficulty": "2 — Application",
    "stem": "A region adopts Green Revolution agriculture: high-yield grain varieties grown with synthetic fertilizer, pesticides, and expanded irrigation. Grain output per hectare triples. Which description of the unintended consequences is most accurate?",
    "visual": "",
    "options": {
      "A": "Yields rise sharply with no significant environmental cost, because higher output per hectare means less total land is cultivated and the land spared offsets every other impact.",
      "B": "Yields rise sharply, but fertilizer runoff drives eutrophication, irrigation depletes aquifers and salinizes soil, and relying on few varieties narrows genetic diversity.",
      "C": "Yields rise sharply, but the main unintended consequence is a loss of soil fertility because synthetic fertilizer cannot supply the nitrogen and phosphorus that crops remove from the soil.",
      "D": "Yields rise sharply, and the chief unintended consequence is an increase in crop genetic diversity as new high-yield varieties are added to the varieties already grown."
    },
    "correct": "B",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nGreen Revolution packages raised yields dramatically and are credited with averting widespread famine, but each input carries a downstream cost. Nitrogen and phosphorus applied in excess of crop uptake run off into surface water, where they drive algal blooms, decomposition, and oxygen depletion. Expanded irrigation draws down aquifers faster than they recharge, and in arid regions repeated wetting and evaporation concentrates salts in the root zone. Replacing many locally adapted landraces with a few high-yield varieties narrows the genetic base that breeders draw on and leaves the crop more exposed to a single pest or pathogen. Recognizing the trade-off, rather than denying either side of it, is the accurate assessment.\n\nWhy the other options fail:\nA — Land sparing is a real benefit, but it does not offset the water, nutrient, and biodiversity impacts that occur on the land still farmed.\nC — Synthetic fertilizer does supply nitrogen and phosphorus effectively; the problems arise from the excess that leaves the field, not from an inability to replace nutrients.\nD — High-yield varieties displace local landraces rather than adding to them, so genetic diversity narrows; this reverses the actual direction of the effect.\n\nDiagnostic focus: Describe the multiple unintended consequences of an intensification strategy without either dismissing its benefits or inverting its effects."
  },
  {
    "id": 38,
    "unit": "Unit 5",
    "topic": "5.9",
    "category": "Unit 5: Land and Water Use — Topic 5.9: Impacts of Mining",
    "big_idea": "EIN",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "Water draining from an abandoned coal mine has a pH of 3.1 and carries high dissolved iron. Which explanation accounts for the acidity of this drainage?",
    "visual": "",
    "options": {
      "A": "Bacteria in the mine decompose organic matter and release carbon dioxide, which forms carbonic acid strong enough to bring the drainage to a pH near 3.",
      "B": "Mining exposed sulfide minerals such as pyrite to air and water; their oxidation produces sulfuric acid, which lowers the pH and dissolves metals out of the surrounding rock.",
      "C": "Acid rain falling on the mine site collects in the workings, and the enclosed space concentrates it by evaporation until the drainage reaches a pH near 3.",
      "D": "Coal itself is acidic, so water passing through the remaining coal seams dissolves that acidity directly and carries it out of the mine as low-pH drainage."
    },
    "correct": "B",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nAcid mine drainage is a chemical weathering process that mining accelerates by exposing fresh rock surfaces. Pyrite (FeS₂) and similar sulfide minerals are stable while buried and oxygen-free, but once broken rock and spoil are exposed to oxygen and water the sulfide oxidizes to sulfate, generating sulfuric acid and releasing dissolved iron. The resulting strongly acidic water then leaches additional metals such as aluminium, manganese, and lead from the rock it contacts. Because the reaction continues as long as sulfide and oxygen are available, drainage from abandoned mines can persist for many decades after closure.\n\nWhy the other options fail:\nA — Carbonic acid is weak and cannot drive pH down to 3.1; water saturated with carbon dioxide reaches only about pH 5.6.\nC — Acid rain is typically near pH 4 to 4.5 and evaporation inside a wet mine cannot concentrate it to pH 3.1 while also dissolving the iron load observed.\nD — Coal is largely carbon and is not acidic in the sense required; the acidity is generated by chemical oxidation of sulfide minerals associated with the coal.\n\nDiagnostic focus: Explain acid mine drainage as oxidation of exposed sulfide minerals, distinguishing it from weak-acid and atmospheric sources."
  },
  {
    "id": 39,
    "unit": "Unit 5",
    "topic": "5.13",
    "category": "Unit 5: Land and Water Use — Topic 5.13: Methods to Reduce Urban Runoff",
    "big_idea": "STB",
    "sp": "Skill 7.E",
    "skills": "Skill 7.E: Make a claim that proposes a solution to an environmental problem in an applied context.",
    "difficulty": "2 — Application",
    "stem": "A city neighbourhood of rooftops, roads, and parking lots floods during moderate storms, and the stream it drains into runs warm and turbid afterward. Which proposed solution best addresses the cause of both problems?",
    "visual": "",
    "options": {
      "A": "Install a shade structure over the stream to lower its temperature, which treats the thermal problem at the point where the warming is actually measured.",
      "B": "Require residents to direct downspouts onto their lawns, which will eliminate the neighbourhood's runoff entirely because lawn soil absorbs all the rain that reaches it.",
      "C": "Enlarge the storm sewer pipes and add a concrete channel along the stream, so the greater volume of runoff is carried away from the neighbourhood more quickly.",
      "D": "Replace some impervious surfaces with permeable pavement, rain gardens, and street trees, so stormwater infiltrates near where it falls rather than running off hot and turbid."
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nBoth problems share one cause: impervious cover prevents infiltration, so nearly all rainfall becomes surface runoff. That runoff arrives fast, which produces flooding and erosive flows that suspend sediment; it also absorbs heat from sun-baked asphalt and roofs, which produces the thermal pulse. Green-infrastructure measures work on that shared cause by restoring infiltration: permeable pavement and rain gardens capture water where it falls, reducing both the volume and the peak rate reaching the stream, filtering sediment, and keeping water out of contact with hot pavement. Street trees add interception and shade that lowers surface temperatures.\n\nWhy the other options fail:\nA — Shading treats a symptom at the stream and leaves the runoff volume, flooding, and sediment load unaddressed.\nB — Redirecting downspouts helps, but compacted lawn soil has limited infiltration capacity and roofs are only part of the impervious area, so runoff is reduced rather than eliminated.\nC — Moving runoff away faster addresses the local flooding but worsens the stream, delivering the same warm, turbid water in an even sharper surge.\n\nDiagnostic focus: Propose a solution that addresses the shared cause of two linked symptoms rather than treating either symptom separately."
  },
  {
    "id": 40,
    "unit": "Unit 5",
    "topic": "5.4",
    "category": "Unit 5: Land and Water Use — Topic 5.4: Impacts of Agricultural Practices",
    "big_idea": "EIN",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "After twenty years of irrigation with river water, a field in a hot, dry region develops white crusts at the surface and declining yields. Which explanation accounts for this outcome?",
    "visual": "",
    "options": {
      "A": "Irrigation leaches nitrogen and phosphorus downward out of the root zone, and the white crusts are the fertilizer residues left at the surface once those nutrients are gone.",
      "B": "Repeated wetting compacts the soil into an impermeable layer at the surface, and the white colour is the exposed mineral subsoil brought up as the topsoil erodes away.",
      "C": "Irrigation water carries dissolved salts; evaporation and root uptake remove water and leave salts behind, until soil water is too saline for crops to draw from.",
      "D": "The irrigation water raises soil pH until calcium carbonate precipitates, and the resulting alkalinity directly poisons the root cells of the crop plants."
    },
    "correct": "C",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nEven fresh river water contains dissolved salts. Plants take up water and leave most of those salts behind, and in hot dry climates evaporation removes additional water directly from the surface, concentrating salts further. Without enough drainage to flush them below the root zone, salts build up year after year and appear as visible crusts. The damage is osmotic: a saline soil solution has a lower water potential, so roots must work against a steeper gradient and can even lose water to the soil, producing drought-like symptoms in a wet field. Salinization has taken substantial irrigated area out of production worldwide, and it is addressed by applying extra water to leach salts, improving drainage, or shifting to salt-tolerant crops.\n\nWhy the other options fail:\nA — Leaching moves soluble nutrients down and away, so it would not deposit them as surface crusts; the crusts are salts concentrated by evaporation.\nB — Compaction and erosion can both follow poor irrigation practice, but neither produces white soluble crusts, and the yield loss here follows salt accumulation.\nD — Carbonate precipitation can occur, but the central mechanism is osmotic: accumulated salts reduce the water potential of soil water rather than poisoning roots chemically.\n\nDiagnostic focus: Explain salinization as evaporative concentration of dissolved salts and identify its osmotic effect on crops."
  },
  {
    "id": 41,
    "unit": "Unit 6",
    "topic": "6.2",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.2: Global Energy Consumption",
    "big_idea": "ENG",
    "sp": "Skill 5.A",
    "skills": "Skill 5.A: Describe patterns or trends in data.",
    "difficulty": "1 — Foundational",
    "stem": "Which statement accurately describes the patterns in global primary energy supply shown between 2000 and 2023?",
    "visual": "<svg viewBox='0 0 470 344' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='344' fill='#FFFFFF'/><line x1='66.0' y1='248.0' x2='450.0' y2='248.0' stroke='#E2E2E2'/><text x='59.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='66.0' y1='198.7' x2='450.0' y2='198.7' stroke='#E2E2E2'/><text x='59.0' y='202.7' font-size='11' fill='#444' text-anchor='end'>10</text><line x1='66.0' y1='149.3' x2='450.0' y2='149.3' stroke='#E2E2E2'/><text x='59.0' y='153.3' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='66.0' y1='100.0' x2='450.0' y2='100.0' stroke='#E2E2E2'/><text x='59.0' y='104.0' font-size='11' fill='#444' text-anchor='end'>30</text><line x1='66.0' y1='50.7' x2='450.0' y2='50.7' stroke='#E2E2E2'/><text x='59.0' y='54.7' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='66.0' y1='26.0' x2='66.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='66.0' y1='248.0' x2='450.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><rect x='75.0' y='60.5' width='20.0' height='187.5' fill='#9AA5B1' rx='2'/><text x='85.0' y='56.5' font-size='10' fill='#333' text-anchor='middle'>38</text><rect x='98.0' y='95.1' width='20.0' height='152.9' fill='#C41230' rx='2'/><text x='108.0' y='91.1' font-size='10' fill='#333' text-anchor='middle'>31</text><text x='98.0' y='265.0' font-size='11' fill='#333' text-anchor='middle'>Oil</text><rect x='139.0' y='129.6' width='20.0' height='118.4' fill='#9AA5B1' rx='2'/><text x='149.0' y='125.6' font-size='10' fill='#333' text-anchor='middle'>24</text><rect x='162.0' y='119.7' width='20.0' height='128.3' fill='#C41230' rx='2'/><text x='172.0' y='115.7' font-size='10' fill='#333' text-anchor='middle'>26</text><text x='162.0' y='265.0' font-size='11' fill='#333' text-anchor='middle'>Coal</text><rect x='203.0' y='144.4' width='20.0' height='103.6' fill='#9AA5B1' rx='2'/><text x='213.0' y='140.4' font-size='10' fill='#333' text-anchor='middle'>21</text><rect x='226.0' y='134.5' width='20.0' height='113.5' fill='#C41230' rx='2'/><text x='236.0' y='130.5' font-size='10' fill='#333' text-anchor='middle'>23</text><text x='226.0' y='265.0' font-size='11' fill='#333' text-anchor='middle'>Natural gas</text><rect x='267.0' y='213.5' width='20.0' height='34.5' fill='#9AA5B1' rx='2'/><text x='277.0' y='209.5' font-size='10' fill='#333' text-anchor='middle'>7</text><rect x='290.0' y='213.5' width='20.0' height='34.5' fill='#C41230' rx='2'/><text x='300.0' y='209.5' font-size='10' fill='#333' text-anchor='middle'>7</text><text x='290.0' y='265.0' font-size='11' fill='#333' text-anchor='middle'>Hydro</text><rect x='331.0' y='213.5' width='20.0' height='34.5' fill='#9AA5B1' rx='2'/><text x='341.0' y='209.5' font-size='10' fill='#333' text-anchor='middle'>7</text><rect x='354.0' y='228.3' width='20.0' height='19.7' fill='#C41230' rx='2'/><text x='364.0' y='224.3' font-size='10' fill='#333' text-anchor='middle'>4</text><text x='354.0' y='265.0' font-size='11' fill='#333' text-anchor='middle'>Nuclear</text><rect x='395.0' y='243.1' width='20.0' height='4.9' fill='#9AA5B1' rx='2'/><text x='405.0' y='239.1' font-size='10' fill='#333' text-anchor='middle'>1</text><rect x='418.0' y='213.5' width='20.0' height='34.5' fill='#C41230' rx='2'/><text x='428.0' y='209.5' font-size='10' fill='#333' text-anchor='middle'>7</text><text x='418.0' y='265.0' font-size='11' fill='#333' text-anchor='middle'>Wind + solar</text><rect x='66.0' y='6' width='11' height='11' fill='#9AA5B1' rx='2'/><text x='81.0' y='15' font-size='11' fill='#333'>2000</text><rect x='114.0' y='6' width='11' height='11' fill='#C41230' rx='2'/><text x='129.0' y='15' font-size='11' fill='#333'>2023</text><text x='16' y='137.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,137.0)'>Percent of global primary energy</text><text x='235' y='324' font-size='11' fill='#555' text-anchor='middle'>Share of global primary energy supply by source. Figures are illustrative and</text><text x='235' y='338' font-size='11' fill='#555' text-anchor='middle'>rounded; remaining percent is traditional biomass.</text></svg>",
    "options": {
      "A": "Nuclear and hydroelectric power both grew over the period, which accounts for most of the share that oil lost between 2000 and 2023.",
      "B": "Wind and solar grew from 1% to 7% of supply, and that growth was large enough that fossil fuels no longer supplied the majority of global primary energy in 2023.",
      "C": "Coal and natural gas both declined as oil did, showing that every fossil fuel lost share over the period while renewable sources gained.",
      "D": "Wind and solar grew from 1% to 7% of supply, by far the largest proportional increase shown, yet oil, coal, and gas together still supplied the clear majority in 2023."
    },
    "correct": "D",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nReading each pair of bars: oil fell 38% to 31%, coal rose 24% to 26%, natural gas rose 21% to 23%, hydro was flat at 7%, nuclear fell 7% to 4%, and wind plus solar rose 1% to 7%. Wind and solar therefore show the largest proportional change — a sevenfold increase in share — but it is important to read the absolute level too: oil, coal, and gas sum to 80% of supply in 2023 against 83% in 2000. Rapid growth from a small base is entirely compatible with fossil fuels remaining dominant, and conflating the two is the most common error with this kind of chart.\n\nWhy the other options fail:\nA — Hydro held steady at 7% and nuclear fell from 7% to 4%, so neither gained share and neither absorbed oil's decline.\nB — The growth figure is read correctly, but oil, coal, and gas together total 80% in 2023, which is still a large majority.\nC — Only oil declined, from 38% to 31%. Coal rose from 24% to 26% and natural gas from 21% to 23%, so the fossil fuels did not move together.\n\nDiagnostic focus: Distinguish proportional change from absolute share when describing trends in a grouped bar chart."
  },
  {
    "id": 42,
    "unit": "Unit 6",
    "topic": "6.5",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.5: Fossil Fuels",
    "big_idea": "ENG",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "3 — Analysis",
    "stem": "A coal-fired power plant burns 2,400 metric tons of coal per day. The coal has an energy content of 24,000 MJ per metric ton, and the plant converts 35% of that energy into electricity. How much electrical energy does the plant produce per day?",
    "visual": "",
    "options": {
      "A": "20,160,000 MJ",
      "B": "37,440,000 MJ",
      "C": "57,600,000 MJ",
      "D": "164,571,429 MJ"
    },
    "correct": "A",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nTwo steps. Energy input: 2,400 t/day × 24,000 MJ/t = 57,600,000 MJ/day. Electrical output: 57,600,000 MJ × 0.35 = 20,160,000 MJ/day. The remaining 37,440,000 MJ leaves as waste heat through the cooling system and stack, which is why thermal power plants need large water bodies for cooling and why their efficiency is bounded well below 100% by the thermodynamics of heat engines. A check on direction: output must always be less than input.\n\nWhy the other options fail:\nB — This is 65%% of the energy input, which is the share rejected as waste heat rather than the electricity generated.\nC — This is the chemical energy contained in the coal burned. The 35%% conversion efficiency still has to be applied to it.\nD — This divides by the efficiency instead of multiplying. Dividing by a fraction less than one increases the value, but useful output must be smaller than energy input.\n\nDiagnostic focus: Apply a conversion efficiency as multiplication by a fraction and distinguish useful output from rejected waste heat."
  },
  {
    "id": 43,
    "unit": "Unit 6",
    "topic": "6.6",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.6: Nuclear Power",
    "big_idea": "ENG",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "Which explanation correctly describes how a nuclear fission reactor generates electricity and identifies the role of the control rods?",
    "visual": "",
    "options": {
      "A": "Fission releases electrical energy directly as charged fragments are collected on electrodes, and control rods conduct that current out of the reactor core to the grid.",
      "B": "Fission releases heat that boils water to drive a steam turbine, and control rods release additional neutrons to sustain the chain reaction, which would otherwise stop on its own.",
      "C": "Fusion of uranium nuclei releases heat that boils water to drive a steam turbine, and control rods absorb neutrons to regulate how many further reactions occur.",
      "D": "Fission of uranium nuclei releases heat that boils water to drive a steam turbine, and control rods absorb neutrons to regulate how many further fissions occur, holding the chain reaction steady."
    },
    "correct": "D",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nA nuclear plant is a thermal power plant whose heat source is nuclear rather than chemical. A neutron striking a uranium-235 nucleus splits it, releasing energy and additional neutrons that can split further nuclei — a chain reaction. The heat produces steam that spins a turbine and generator, exactly as in a coal plant. Control rods, made of neutron-absorbing materials such as boron or cadmium, set the reaction rate: inserting them further absorbs more neutrons and slows fission, while withdrawing them allows more neutrons to continue the chain. Keeping the reaction exactly self-sustaining, neither growing nor dying out, is what the rods are adjusted for.\n\nWhy the other options fail:\nA — Fission energy is harvested as heat and converted through a conventional steam cycle; no charge is collected directly, and control rods are neutron absorbers, not conductors.\nB — Control rods absorb neutrons rather than releasing them; raising them lets the reaction intensify and lowering them slows it.\nC — Commercial reactors use fission, the splitting of heavy nuclei, not fusion. Fusion combines light nuclei and is not yet used for commercial power.\n\nDiagnostic focus: Explain the fission-to-steam energy pathway and the neutron-absorbing function of control rods."
  },
  {
    "id": 44,
    "unit": "Unit 6",
    "topic": "6.8",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.8: Solar Energy",
    "big_idea": "ENG",
    "sp": "Skill 6.B",
    "skills": "Skill 6.B: Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "difficulty": "2 — Application",
    "stem": "A school uses 219,000 kWh of electricity per year. Each solar panel it is considering produces an average of 2.0 kWh per day across the year. How many panels are needed to meet the school's annual electricity use?",
    "visual": "",
    "options": {
      "A": "300 panels",
      "B": "600 panels",
      "C": "109,500 panels",
      "D": "159,870,000 panels"
    },
    "correct": "A",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nPut both quantities on the same time basis before dividing. Each panel produces 2.0 kWh/day × 365 days = 730 kWh per year. Panels needed = 219,000 kWh/yr ÷ 730 kWh/panel/yr = 300 panels. The units confirm it: kWh/year ÷ (kWh/panel/year) leaves panels. Note that this sizing only balances annual totals — because solar output peaks at midday and in summer while school demand does not, meeting demand hour by hour would also require storage or a grid connection.\n\nWhy the other options fail:\nB — This assumes each panel averages 1.0 kWh per day rather than 2.0, and halving the per-panel output doubles the number of panels required.\nC — This divides the annual demand by the daily per-panel output, skipping the conversion to annual output. The units do not match: kWh/year divided by kWh/day leaves days, not panels.\nD — This multiplies the demand by the per-panel annual output instead of dividing. Multiplying two large quantities cannot yield a count of panels.\n\nDiagnostic focus: Match time units before dividing a demand by a per-unit output rate."
  },
  {
    "id": 45,
    "unit": "Unit 6",
    "topic": "6.12",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.12: Wind Energy",
    "big_idea": "ENG",
    "sp": "Skill 7.C",
    "skills": "Skill 7.C: Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "difficulty": "2 — Application",
    "stem": "A utility proposes replacing a retiring coal plant with a large onshore wind farm. Which description of the trade-offs of that substitution is most accurate?",
    "visual": "",
    "options": {
      "A": "Wind output is constant and fully predictable, so the main trade-off is that the turbines require far more land area per unit of electricity than a coal plant and its fuel supply chain combined.",
      "B": "Wind generates electricity with no fuel cost and no emissions at any stage, and because wind blows somewhere at all times a large enough wind farm needs no backup capacity of any kind.",
      "C": "Wind produces more total emissions than coal once turbine manufacturing is counted, so the substitution increases the utility's lifetime emissions despite having no fuel costs.",
      "D": "Wind generates electricity with no fuel cost and almost no operating emissions, but output varies with wind speed, so the grid needs storage or backup, and turbines kill birds and bats."
    },
    "correct": "D",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nAn accurate trade-off assessment names real advantages and real costs. On the advantage side, wind has no fuel cost, no combustion emissions, no air pollutants such as sulfur dioxide or mercury, and no cooling-water demand. On the cost side, output is intermittent and tied to weather, which means the grid must pair it with storage, transmission to areas with complementary conditions, or dispatchable generation; turbines kill birds and bats, with raptors and migratory bats most affected; and there are noise, visual, and siting objections. Life-cycle emissions from manufacturing are real but far smaller than coal combustion emissions.\n\nWhy the other options fail:\nA — Wind output is variable rather than constant, and the land between turbines remains usable for farming or grazing, while coal's footprint includes the mine and waste disposal.\nB — Manufacturing and installing turbines does produce emissions, and a single wind farm experiences calm periods, so backup or storage remains necessary.\nC — Life-cycle emissions from wind are a small fraction of those from coal combustion; manufacturing does not reverse the comparison.\n\nDiagnostic focus: Weigh the specific advantages and unintended consequences of an energy substitution without overstating either side."
  },
  {
    "id": 46,
    "unit": "Unit 6",
    "topic": "6.13",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.13: Energy Conservation",
    "big_idea": "ENG",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "2 — Application",
    "stem": "A delivery company runs 40 vans, each driven 24,000 km per year. It replaces vans that consume 12 L of fuel per 100 km with models that consume 8 L per 100 km. How much fuel does the whole fleet save per year?",
    "visual": "",
    "options": {
      "A": "960 L",
      "B": "38,400 L",
      "C": "76,800 L",
      "D": "115,200 L"
    },
    "correct": "B",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nCompute each fleet total, then take the difference. Before: 40 vans × 24,000 km × (12 L/100 km) = 115,200 L. After: 40 × 24,000 × (8 L/100 km) = 76,800 L. Saving = 115,200 − 76,800 = 38,400 L per year. Equivalently, the 4 L/100 km improvement saves 960 L per van, times 40 vans. Efficiency gains like this are often the cheapest way to cut both fuel costs and emissions, since the energy saved requires no new generating or refining capacity at all.\n\nWhy the other options fail:\nA — This is the saving for a single van. The question asks about the whole fleet, so this figure still has to be multiplied by the 40 vans.\nC — This is the fleet's fuel consumption after the replacement, not the amount saved by it.\nD — This is the fleet's fuel consumption before the replacement. The new consumption must be subtracted from it to give the saving.\n\nDiagnostic focus: Scale a per-vehicle efficiency improvement to a fleet total and report the difference rather than either consumption level."
  },
  {
    "id": 47,
    "unit": "Unit 6",
    "topic": "6.1",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.1: Renewable and Nonrenewable Resources",
    "big_idea": "ENG",
    "sp": "Skill 1.A",
    "skills": "Skill 1.A: Describe environmental concepts and processes.",
    "difficulty": "1 — Foundational",
    "stem": "Which description correctly distinguishes renewable from nonrenewable energy resources, and correctly classifies geothermal energy?",
    "visual": "",
    "options": {
      "A": "Renewable resources can be converted to electricity while nonrenewable ones can only be burned for heat; geothermal is renewable because it is used to generate electricity.",
      "B": "Renewable resources are replenished on a human timescale while nonrenewable ones are not; geothermal is nonrenewable because Earth contains a fixed quantity of internal heat that is permanently removed once extracted.",
      "C": "Renewable resources are replenished on a human timescale while nonrenewable ones are not; geothermal is renewable because Earth's interior continuously produces heat, though one reservoir can be overdrawn.",
      "D": "Renewable resources produce no greenhouse gas emissions while nonrenewable ones do; geothermal is renewable because geothermal plants release no gases of any kind."
    },
    "correct": "C",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nThe classification rests on the rate at which a resource is replenished relative to the rate it is used. Solar, wind, hydro, biomass, and geothermal are replenished continuously or within human timescales; fossil fuels and uranium formed over millions of years and are drawn from a fixed stock. Geothermal qualifies as renewable because the heat comes from radioactive decay in Earth's interior plus residual formation heat, a supply that continues regardless of extraction. The important qualification is that renewable describes the resource, not the management: a specific geothermal reservoir can be depleted if steam is withdrawn faster than the rock and water recharge, so sustainable use requires reinjection and rate limits.\n\nWhy the other options fail:\nA — Coal and gas are routinely used to generate electricity, and geothermal is also used directly for heating, so this criterion does not separate the categories.\nB — The distinction is stated correctly, but Earth's interior heat is continuously generated by radioactive decay, so geothermal is classed as renewable.\nD — The defining criterion is rate of replenishment, not emissions, and geothermal plants do release some dissolved gases such as hydrogen sulfide and carbon dioxide.\n\nDiagnostic focus: Apply the replenishment-rate criterion to classify a resource, and separate the resource category from how a particular site is managed."
  },
  {
    "id": 48,
    "unit": "Unit 6",
    "topic": "6.9",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.9: Hydroelectric Power",
    "big_idea": "ENG",
    "sp": "Skill 7.C",
    "skills": "Skill 7.C: Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "difficulty": "3 — Analysis",
    "stem": "A government plans a large hydroelectric dam on a major river to replace fossil-fuel generation. Which assessment of the consequences of the dam is most accurate?",
    "visual": "",
    "options": {
      "A": "The dam reduces downstream flooding and increases downstream soil fertility, because the regulated flow delivers sediment to the floodplain more evenly through the year.",
      "B": "The dam's main drawback is that hydroelectric generation produces more greenhouse gas per unit of electricity than the fossil-fuel plants it replaces, because of methane from the reservoir.",
      "C": "The dam supplies low-carbon electricity with no significant ecological consequences, because the reservoir creates new aquatic habitat that replaces the river habitat it floods.",
      "D": "The dam supplies dispatchable low-carbon power, but traps the sediment that built downstream deltas, blocks migratory fish, floods habitat, and alters downstream flow."
    },
    "correct": "D",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nLarge dams concentrate benefits and costs in different places. The benefit is real: electricity with very low operating emissions that can be dispatched on demand and ramped to balance variable sources. The costs follow from changing a flowing river into a reservoir. Sediment settles in still water, so the dam starves downstream floodplains and deltas of the material that built them and replenished their fertility, while the reservoir itself gradually fills. Migratory species such as salmon lose access to spawning grounds unless passage is provided. Reservoir filling floods terrestrial habitat and often displaces communities. Water released from depth is colder and lower in oxygen than natural flow, which changes the downstream community.\n\nWhy the other options fail:\nA — The sediment effect runs the other way: a reservoir traps sediment behind the dam, so downstream floodplains and deltas receive less, not more.\nB — Reservoir methane is a genuine issue, especially in flooded tropical vegetation, but it does not generally exceed the emissions of the fossil generation displaced.\nC — Reservoir habitat is a still-water environment that does not substitute for flowing-river habitat, and it does not address sediment trapping or blocked fish migration.\n\nDiagnostic focus: Describe the full set of consequences of a large dam, with the direction of the sediment effect correct."
  },
  {
    "id": 49,
    "unit": "Unit 6",
    "topic": "6.3",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.3: Fuel Types and Uses",
    "big_idea": "ENG",
    "sp": "Skill 5.B",
    "skills": "Skill 5.B: Describe relationships among variables in data represented.",
    "difficulty": "2 — Application",
    "stem": "Which statement correctly describes the relationship between energy content and carbon dioxide released per unit of energy across these four fuels?",
    "visual": "<svg viewBox='0 0 470 168' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='168' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='146.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='61.9' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Fuel</text><line x1='122.9' y1='1' x2='122.9' y2='147.0' stroke='#DDD'/><text x='181.4' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Energy content</text><text x='181.4' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(MJ/kg)</text><line x1='239.9' y1='1' x2='239.9' y2='147.0' stroke='#DDD'/><text x='300.8' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>CO₂ released (kg</text><text x='300.8' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>per MJ)</text><line x1='361.7' y1='1' x2='361.7' y2='147.0' stroke='#DDD'/><text x='415.4' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Main use</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>Coal (bituminous)</text><text x='181.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>27</text><text x='300.8' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>0.094</text><text x='415.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>electricity</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>Crude oil</text><text x='181.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>42</text><text x='300.8' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>0.073</text><text x='415.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>transport fuels</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>Natural gas</text><text x='181.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>54</text><text x='300.8' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>0.051</text><text x='415.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>electricity, heating</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>Dry wood</text><text x='181.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>16</text><text x='300.8' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>0.100</text><text x='415.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>heating</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='235' y='162' font-size='11' fill='#555' text-anchor='middle'>Energy content and carbon dioxide released per unit of energy for four fuels.</text></svg>",
    "options": {
      "A": "Energy content and carbon dioxide per unit of energy are unrelated across these fuels, because dry wood has the lowest energy content but not the lowest emissions per megajoule.",
      "B": "Fuels with higher energy content per kilogram tend to release more carbon dioxide per unit of energy, so natural gas is the highest-emitting fuel per megajoule of the four.",
      "C": "Fuels with higher energy content per kilogram tend to release less carbon dioxide per unit of energy, so natural gas delivers the most energy per kilogram and the least carbon dioxide per megajoule.",
      "D": "Fuels with higher energy content per kilogram release less carbon dioxide per unit of energy, so switching electricity generation from coal to crude oil would cut emissions the most of any change available."
    },
    "correct": "C",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nReading the two numeric columns together shows an inverse pattern: wood at 16 MJ/kg emits 0.100 kg CO₂/MJ, coal at 27 emits 0.094, crude oil at 42 emits 0.073, and natural gas at 54 emits 0.051. The chemistry behind it is the hydrogen-to-carbon ratio. Methane, the main component of natural gas, is CH₄, so much of its energy comes from oxidizing hydrogen to water rather than carbon to carbon dioxide. Coal is nearly pure carbon, so almost all of its energy release is accompanied by carbon dioxide. This is why switching electricity generation from coal to natural gas lowers emissions per unit of electricity, though it still relies on a fossil fuel.\n\nWhy the other options fail:\nA — Dry wood has the lowest energy content and the highest emissions per megajoule, which fits the inverse pattern rather than contradicting it.\nB — The table shows natural gas with both the highest energy content, 54 MJ/kg, and the lowest emissions per megajoule, 0.051 kg, so the direction is reversed.\nD — The relationship is read correctly, but natural gas at 0.051 kg/MJ beats crude oil at 0.073, so oil is not the largest available reduction.\n\nDiagnostic focus: Identify an inverse relationship between two columns and apply it to rank fuels, checking the specific values before concluding."
  },
  {
    "id": 50,
    "unit": "Unit 6",
    "topic": "6.11",
    "category": "Unit 6: Energy Resources and Consumption — Topic 6.11: Hydrogen Fuel Cell",
    "big_idea": "ENG",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "3 — Analysis",
    "stem": "A city advertises its new hydrogen fuel-cell buses as zero-emission vehicles. Which evaluation of that claim is most accurate?",
    "visual": "",
    "options": {
      "A": "The claim is fully accurate, because a fuel cell combines hydrogen and oxygen to produce only water and electricity, and hydrogen is the most abundant element in the universe so its production carries no emissions.",
      "B": "The claim is inaccurate because fuel cells burn hydrogen, and burning any fuel in air produces carbon dioxide along with the nitrogen oxides formed at high temperature.",
      "C": "The buses emit only water vapor at the tailpipe, but whether the system is low-carbon depends on how the hydrogen is made: most comes from natural gas, which releases carbon dioxide at the plant.",
      "D": "The claim is inaccurate because the water vapor emitted is itself a greenhouse gas, and the quantity released by a bus fleet makes this the dominant climate impact of the technology."
    },
    "correct": "C",
    "explanation": "Big Idea: ENG — Energy Transfer\n\nEvaluating a zero-emission claim requires asking where the system boundary is drawn. At the vehicle, the claim holds: a fuel cell reacts hydrogen with oxygen electrochemically to generate electricity, with water as the only product, and there is no combustion and so no nitrogen oxides or particulates. The emissions move upstream to hydrogen production. Most hydrogen today comes from steam methane reforming, which strips hydrogen from natural gas and releases carbon dioxide. Hydrogen made by electrolysis is only as clean as the electricity driving it. So the technology eliminates tailpipe pollution, which matters a great deal for urban air quality, while its climate benefit depends entirely on the hydrogen supply.\n\nWhy the other options fail:\nA — Abundance in the universe is irrelevant to how hydrogen is obtained on Earth. Free hydrogen gas is rare here and must be produced by processes that usually emit carbon dioxide.\nB — A fuel cell converts chemical energy electrochemically rather than by combustion, and hydrogen contains no carbon, so no carbon dioxide can come from the fuel itself.\nD — Water vapor is a greenhouse gas, but it cycles out of the atmosphere in days and the quantity from vehicles is negligible; the real issue lies upstream in hydrogen production.\n\nDiagnostic focus: Evaluate an energy claim across the full fuel cycle, separating tailpipe emissions from upstream production emissions."
  },
  {
    "id": 51,
    "unit": "Unit 7",
    "topic": "7.2",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.2: Photochemical Smog",
    "big_idea": "STB",
    "sp": "Skill 5.C",
    "skills": "Skill 5.C: Explain patterns and trends in data to draw conclusions.",
    "difficulty": "3 — Analysis",
    "stem": "Which conclusion about the origin of the ozone in this city is best supported by the timing of the three concentration peaks?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>60</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>80</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>100</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>5</text><line x1='122.0' y1='248.0' x2='122.0' y2='253.0' stroke='#888'/><text x='122.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>7</text><line x1='176.0' y1='248.0' x2='176.0' y2='253.0' stroke='#888'/><text x='176.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>9</text><line x1='230.0' y1='248.0' x2='230.0' y2='253.0' stroke='#888'/><text x='230.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>11</text><line x1='284.0' y1='248.0' x2='284.0' y2='253.0' stroke='#888'/><text x='284.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>13</text><line x1='338.0' y1='248.0' x2='338.0' y2='253.0' stroke='#888'/><text x='338.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>15</text><line x1='392.0' y1='248.0' x2='392.0' y2='253.0' stroke='#888'/><text x='392.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>17</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>19</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,220.6 122.0,115.8 176.0,170.5 230.0,211.5 284.0,227.5 338.0,229.8 392.0,216.1 446.0,202.4' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='220.6' r='3.1' fill='#1565C0'/><circle cx='122.0' cy='115.8' r='3.1' fill='#1565C0'/><circle cx='176.0' cy='170.5' r='3.1' fill='#1565C0'/><circle cx='230.0' cy='211.5' r='3.1' fill='#1565C0'/><circle cx='284.0' cy='227.5' r='3.1' fill='#1565C0'/><circle cx='338.0' cy='229.8' r='3.1' fill='#1565C0'/><circle cx='392.0' cy='216.1' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='202.4' r='3.1' fill='#1565C0'/><polyline points='68.0,229.8 122.0,188.7 176.0,129.4 230.0,161.4 284.0,193.3 338.0,207.0 392.0,197.8 446.0,193.3' fill='none' stroke='#6A1B9A' stroke-width='2.4'/><circle cx='68.0' cy='229.8' r='3.1' fill='#6A1B9A'/><circle cx='122.0' cy='188.7' r='3.1' fill='#6A1B9A'/><circle cx='176.0' cy='129.4' r='3.1' fill='#6A1B9A'/><circle cx='230.0' cy='161.4' r='3.1' fill='#6A1B9A'/><circle cx='284.0' cy='193.3' r='3.1' fill='#6A1B9A'/><circle cx='338.0' cy='207.0' r='3.1' fill='#6A1B9A'/><circle cx='392.0' cy='197.8' r='3.1' fill='#6A1B9A'/><circle cx='446.0' cy='193.3' r='3.1' fill='#6A1B9A'/><polyline points='68.0,238.9 122.0,229.8 176.0,193.3 230.0,120.3 284.0,51.9 338.0,38.2 392.0,106.6 446.0,197.8' fill='none' stroke='#C41230' stroke-width='2.4'/><circle cx='68.0' cy='238.9' r='3.1' fill='#C41230'/><circle cx='122.0' cy='229.8' r='3.1' fill='#C41230'/><circle cx='176.0' cy='193.3' r='3.1' fill='#C41230'/><circle cx='230.0' cy='120.3' r='3.1' fill='#C41230'/><circle cx='284.0' cy='51.9' r='3.1' fill='#C41230'/><circle cx='338.0' cy='38.2' r='3.1' fill='#C41230'/><circle cx='392.0' cy='106.6' r='3.1' fill='#C41230'/><circle cx='446.0' cy='197.8' r='3.1' fill='#C41230'/><rect x='74.0' y='22.0' width='164' height='60' fill='#FFFFFF' fill-opacity='0.9' stroke='#E2E2E2' rx='3'/><rect x='80.0' y='29.0' width='18' height='4' fill='#1565C0' rx='2'/><text x='104.0' y='34.0' font-size='11' fill='#333'>NO</text><rect x='80.0' y='47.0' width='18' height='4' fill='#6A1B9A' rx='2'/><text x='104.0' y='52.0' font-size='11' fill='#333'>NO₂</text><rect x='80.0' y='65.0' width='18' height='4' fill='#C41230' rx='2'/><text x='104.0' y='70.0' font-size='11' fill='#333'>O₃</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Hour of day</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Concentration (ppb)</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Hourly concentrations of three pollutants on a sunny summer day in a city.</text></svg>",
    "options": {
      "A": "Ozone must come from a source unrelated to the nitrogen oxides, because a pollutant formed from NO and NO₂ would have to peak at the same hour as they do rather than six hours later.",
      "B": "Ozone is a primary pollutant emitted directly by vehicles, and its later peak simply reflects the fact that the heaviest traffic in this city occurs in the afternoon rather than during the morning commute.",
      "C": "Ozone is destroying the nitrogen oxides, since NO and NO₂ both fall through the middle of the day while ozone climbs, which shows ozone consuming them as a reactant in the atmosphere.",
      "D": "Ozone is a secondary pollutant formed from the nitrogen oxides emitted earlier, since its peak at hour 15 follows the NO peak at hour 7 and the NO₂ peak at hour 9."
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nThe sequence of peaks is the evidence. NO peaks at hour 7, during the morning commute, because vehicle engines emit it directly — that makes NO a primary pollutant. NO is then oxidized to NO₂, which peaks two hours later at hour 9. Sunlight splits NO₂, freeing oxygen atoms that combine with O₂ to make ozone, which peaks at hour 15 when cumulative sunlight has been greatest. Ozone is therefore a secondary pollutant: it is not emitted but formed in the atmosphere from precursors. The lag between the emission peak and the ozone peak is why smog advisories are issued for sunny afternoons, and why controlling ozone means controlling the nitrogen oxides and volatile organic compounds that form it.\n\nWhy the other options fail:\nA — A lag is the signature of a secondary pollutant: the reactions that form ozone take time and require sunlight, so a delayed peak is expected rather than disqualifying.\nB — The NO peak at hour 7 marks the morning traffic surge, so traffic is heaviest in the morning. Ozone also peaks when sunlight is strongest rather than when traffic is.\nC — The nitrogen oxides are consumed in forming ozone, so the direction of the reaction is reversed here; ozone is the product rather than the reactant.\n\nDiagnostic focus: Use the time lag between pollutant peaks to distinguish a primary pollutant from a secondary one formed in the atmosphere."
  },
  {
    "id": 52,
    "unit": "Unit 7",
    "topic": "7.3",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.3: Thermal Inversion",
    "big_idea": "STB",
    "sp": "Skill 2.B",
    "skills": "Skill 2.B: Explain relationships between different characteristics of environmental concepts, processes, or models represented visually.",
    "difficulty": "2 — Application",
    "stem": "Which explanation of the relationship between the temperature layers shown and pollutant concentrations at street level is correct?",
    "visual": "<svg viewBox='0 0 470 278' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='278' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><rect x='40.0' y='196.0' width='400.0' height='36.0' fill='#9A8468' stroke='#6E5B44' stroke-width='1.1' rx='2'/><text x='240.0' y='219.0' font-size='11' fill='#333' text-anchor='middle' font-weight='normal'>city surface</text><rect x='40.0' y='150.0' width='400.0' height='46.0' fill='#CFE2F3' stroke='#8FB3D9' stroke-width='1.1' rx='2'/><text x='48.0' y='170.0' font-size='10.5' fill='#333' text-anchor='start' font-weight='normal'>cool, polluted air trapped at surface</text><rect x='40.0' y='110.0' width='400.0' height='40.0' fill='#F6D6AE' stroke='#CDA368' stroke-width='1.1' rx='2'/><text x='48.0' y='135.0' font-size='10.5' fill='#333' text-anchor='start' font-weight='normal'>warm air layer (inversion lid)</text><rect x='40.0' y='56.0' width='400.0' height='54.0' fill='#E8F1FA' stroke='#B9CFE6' stroke-width='1.1' rx='2'/><text x='48.0' y='86.0' font-size='10.5' fill='#333' text-anchor='start' font-weight='normal'>cooler air aloft</text><line x1='270.0' y1='192.0' x2='270.0' y2='154.0' stroke='#C41230' stroke-width='2' marker-end='url(#ah)'/><line x1='261.0' y1='151.0' x2='279.0' y2='151.0' stroke='#C41230' stroke-width='2.4'/><line x1='330.0' y1='192.0' x2='330.0' y2='154.0' stroke='#C41230' stroke-width='2' marker-end='url(#ah)'/><line x1='321.0' y1='151.0' x2='339.0' y2='151.0' stroke='#C41230' stroke-width='2.4'/><line x1='390.0' y1='192.0' x2='390.0' y2='154.0' stroke='#C41230' stroke-width='2' marker-end='url(#ah)'/><line x1='381.0' y1='151.0' x2='399.0' y2='151.0' stroke='#C41230' stroke-width='2.4'/><text x='240.0' y='46.0' font-size='10.5' fill='#333' text-anchor='middle' font-weight='normal'>altitude increases upward</text><text x='235' y='258' font-size='11' fill='#555' text-anchor='middle'>Temperature structure over a city during a thermal inversion. Red arrows show</text><text x='235' y='272' font-size='11' fill='#555' text-anchor='middle'>attempted vertical mixing.</text></svg>",
    "options": {
      "A": "Cool surface air is denser than the warm layer above it, so it sinks into the ground and carries dissolved pollutants into the soil, which lowers concentrations in the air that people breathe.",
      "B": "The warm layer aloft heats the cool surface air until it rises rapidly through the inversion, and this vigorous mixing carries pollutants upward so quickly that street-level concentrations fall below normal.",
      "C": "The inversion raises concentrations because the warm layer chemically converts nitrogen oxides into ozone far faster than normal, so the increase reflects new pollutant formation rather than a change in mixing.",
      "D": "Warm air sitting above cool surface air is less dense than the air below cannot rise through, so vertical mixing stops and pollutants accumulate near the ground."
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nNormally air cools with altitude, so warm surface air is less dense than the air above it and rises, carrying pollutants upward and diluting them — the atmosphere is unstable and mixes. A thermal inversion reverses that profile: a warm layer sits above cool surface air. Since the surface air is denser than the air immediately above it, it has no buoyancy and cannot rise, so the warm layer acts as a lid. Emissions keep entering a shallow, non-mixing volume and concentrations climb. This is why inversions in valleys and basins, such as Los Angeles, Mexico City, and Salt Lake City, produce the worst smog episodes, and why they break only when the surface warms enough or a front displaces the air mass.\n\nWhy the other options fail:\nA — Air does not sink into the ground. Dense surface air simply remains in place, which is precisely why pollutants are not dispersed.\nB — The figure shows mixing blocked at the boundary, and conduction from a layer above does not drive surface air upward through warmer, less dense air.\nC — An inversion is a physical barrier to dispersion. Secondary pollutants can build up under one, but the cause is trapped air rather than faster chemistry in the warm layer.\n\nDiagnostic focus: Relate an inverted temperature profile to air density and buoyancy to explain blocked vertical mixing."
  },
  {
    "id": 53,
    "unit": "Unit 7",
    "topic": "7.7",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.7: Acid Rain",
    "big_idea": "STB",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "2 — Application",
    "stem": "Unpolluted rain has a pH of about 5.6. A rain sample downwind of a coal-fired power plant has a pH of 3.6. How many times greater is the hydrogen ion concentration in the sample than in unpolluted rain? (pH = −log₁₀[H⁺])",
    "visual": "",
    "options": {
      "A": "0.01 times greater",
      "B": "2.0 times greater",
      "C": "100 times greater",
      "D": "1000 times greater"
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nThe pH scale is logarithmic, so each whole unit of pH corresponds to a tenfold change in hydrogen ion concentration. The difference here is 5.6 − 3.6 = 2 pH units, so the concentration ratio is 10² = 100. Checking directly: [H⁺] = 10⁻3.6 versus 10⁻5.6, and their ratio is 10². The logarithmic scale is why a rain pH that sounds only slightly lower represents a hundredfold increase in acidity, enough to mobilize aluminium in soils and push lake water below the tolerance of fish eggs.\n\nWhy the other options fail:\nA — This is 10 raised to the negative difference, which gives the factor by which [H⁺] would fall if pH rose. A lower pH means more hydrogen ions, not fewer.\nB — This is the difference between the two pH values. Because the scale is logarithmic, a pH difference must be used as an exponent of 10, not as the factor itself.\nD — This is 10³, which would be correct for a pH difference of 3 units. The difference here is 5.6 − 3.6 = 2 units.\n\nDiagnostic focus: Convert a pH difference into a hydrogen-ion concentration ratio using powers of ten."
  },
  {
    "id": 54,
    "unit": "Unit 7",
    "topic": "7.4",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.4: Atmospheric CO2 and Particulates",
    "big_idea": "STB",
    "sp": "Skill 5.A",
    "skills": "Skill 5.A: Describe patterns or trends in data.",
    "difficulty": "1 — Foundational",
    "stem": "Which statement correctly describes the pattern in this data set?",
    "visual": "<svg viewBox='0 0 470 334' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='334' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='210.0' x2='446.0' y2='210.0' stroke='#E2E2E2'/><text x='61.0' y='214.0' font-size='11' fill='#444' text-anchor='end'>10</text><line x1='68.0' y1='172.0' x2='446.0' y2='172.0' stroke='#E2E2E2'/><text x='61.0' y='176.0' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='68.0' y1='134.0' x2='446.0' y2='134.0' stroke='#E2E2E2'/><text x='61.0' y='138.0' font-size='11' fill='#444' text-anchor='end'>30</text><line x1='68.0' y1='96.0' x2='446.0' y2='96.0' stroke='#E2E2E2'/><text x='61.0' y='100.0' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='68.0' y1='58.0' x2='446.0' y2='58.0' stroke='#E2E2E2'/><text x='61.0' y='62.0' font-size='11' fill='#444' text-anchor='end'>50</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>60</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>1</text><line x1='102.4' y1='248.0' x2='102.4' y2='253.0' stroke='#888'/><text x='102.4' y='266.0' font-size='11' fill='#444' text-anchor='middle'>2</text><line x1='136.7' y1='248.0' x2='136.7' y2='253.0' stroke='#888'/><text x='136.7' y='266.0' font-size='11' fill='#444' text-anchor='middle'>3</text><line x1='171.1' y1='248.0' x2='171.1' y2='253.0' stroke='#888'/><text x='171.1' y='266.0' font-size='11' fill='#444' text-anchor='middle'>4</text><line x1='205.5' y1='248.0' x2='205.5' y2='253.0' stroke='#888'/><text x='205.5' y='266.0' font-size='11' fill='#444' text-anchor='middle'>5</text><line x1='239.8' y1='248.0' x2='239.8' y2='253.0' stroke='#888'/><text x='239.8' y='266.0' font-size='11' fill='#444' text-anchor='middle'>6</text><line x1='274.2' y1='248.0' x2='274.2' y2='253.0' stroke='#888'/><text x='274.2' y='266.0' font-size='11' fill='#444' text-anchor='middle'>7</text><line x1='308.5' y1='248.0' x2='308.5' y2='253.0' stroke='#888'/><text x='308.5' y='266.0' font-size='11' fill='#444' text-anchor='middle'>8</text><line x1='342.9' y1='248.0' x2='342.9' y2='253.0' stroke='#888'/><text x='342.9' y='266.0' font-size='11' fill='#444' text-anchor='middle'>9</text><line x1='377.3' y1='248.0' x2='377.3' y2='253.0' stroke='#888'/><text x='377.3' y='266.0' font-size='11' fill='#444' text-anchor='middle'>10</text><line x1='411.6' y1='248.0' x2='411.6' y2='253.0' stroke='#888'/><text x='411.6' y='266.0' font-size='11' fill='#444' text-anchor='middle'>11</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>12</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='191.0' x2='446.0' y2='191.0' stroke='#888' stroke-width='1.2' stroke-dasharray='5 4'/><text x='442.0' y='186.0' font-size='10' fill='#666' text-anchor='end' stroke='#FFFFFF' stroke-width='3' paint-order='stroke'>WHO annual guideline 15</text><polyline points='68.0,88.4 102.4,96.0 136.7,118.8 171.1,141.6 205.5,164.4 239.8,172.0 274.2,175.8 308.5,168.2 342.9,145.4 377.3,122.6 411.6,99.8 446.0,80.8' fill='none' stroke='#6A1B9A' stroke-width='2.4'/><circle cx='68.0' cy='88.4' r='3.1' fill='#6A1B9A'/><circle cx='102.4' cy='96.0' r='3.1' fill='#6A1B9A'/><circle cx='136.7' cy='118.8' r='3.1' fill='#6A1B9A'/><circle cx='171.1' cy='141.6' r='3.1' fill='#6A1B9A'/><circle cx='205.5' cy='164.4' r='3.1' fill='#6A1B9A'/><circle cx='239.8' cy='172.0' r='3.1' fill='#6A1B9A'/><circle cx='274.2' cy='175.8' r='3.1' fill='#6A1B9A'/><circle cx='308.5' cy='168.2' r='3.1' fill='#6A1B9A'/><circle cx='342.9' cy='145.4' r='3.1' fill='#6A1B9A'/><circle cx='377.3' cy='122.6' r='3.1' fill='#6A1B9A'/><circle cx='411.6' cy='99.8' r='3.1' fill='#6A1B9A'/><circle cx='446.0' cy='80.8' r='3.1' fill='#6A1B9A'/><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Month</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>PM2.5 (micrograms per cubic metre)</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Monthly mean fine particulate concentration in a northern city where coal and</text><text x='235' y='328' font-size='11' fill='#555' text-anchor='middle'>wood are used for home heating.</text></svg>",
    "options": {
      "A": "Concentrations show no consistent pattern across the year, and the month-to-month variation is best explained as random measurement scatter around a constant mean near 30.",
      "B": "Concentrations follow a seasonal cycle peaking in winter and lowest in midsummer, and every monthly mean shown lies above the WHO annual guideline of 15.",
      "C": "Concentrations rise steadily through the year from a January minimum to a December maximum, consistent with a pollution source that grows continuously over the twelve-month period.",
      "D": "Concentrations follow a seasonal cycle peaking in winter and lowest in midsummer, and the summer months fall below the WHO annual guideline before rising above it again in the colder part of the year."
    },
    "correct": "B",
    "explanation": "Big Idea: STB — Sustainability\n\nTwo features describe the data. First, the shape: values are highest in the winter months at both ends of the year, reaching 44 in month 12 and 42 in month 1, fall steadily to a minimum of 19 in month 7, then climb again — a clear annual cycle, consistent with home heating emissions and with the frequent winter inversions that trap them. Second, the level: the lowest monthly value, 19, still exceeds the 15 reference line, so the city is above the guideline in every month shown. Describing a trend accurately means reporting both the shape and the position relative to any reference line on the figure.\n\nWhy the other options fail:\nA — The data vary smoothly from 44 down to 19 and back, a systematic seasonal cycle far too regular to be scatter about a constant value.\nC — January is near the maximum at 42, not a minimum, and values fall through spring before rising again, so the pattern is cyclic rather than steadily increasing.\nD — The seasonal pattern is read correctly, but the lowest monthly mean is 19 in month 7, which is still above the guideline line at 15.\n\nDiagnostic focus: Describe both the seasonal shape of a time series and its position relative to a reference line, checking the extreme values."
  },
  {
    "id": 55,
    "unit": "Unit 7",
    "topic": "7.5",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.5: Indoor Air Pollutants",
    "big_idea": "STB",
    "sp": "Skill 1.A",
    "skills": "Skill 1.A: Describe environmental concepts and processes.",
    "difficulty": "1 — Foundational",
    "stem": "Which description correctly identifies radon as an indoor air pollutant, including its origin, how it enters buildings, and its principal health effect?",
    "visual": "",
    "options": {
      "A": "Radon is a volatile organic compound released from particleboard, carpets, and adhesives in new construction, and prolonged exposure to it causes headaches and respiratory irritation in occupants.",
      "B": "Radon is a radioactive gas released by the combustion of natural gas in stoves and furnaces, which accumulates in poorly ventilated rooms and raises the risk of lung cancer after prolonged exposure.",
      "C": "Radon is a fibrous mineral once used in pipe insulation that becomes airborne when the insulation is disturbed, and inhaling the fibres causes lung scarring and mesothelioma.",
      "D": "Radon is a radioactive gas produced by uranium decay in rock and soil that seeps into buildings through foundation cracks, and prolonged exposure raises lung cancer risk."
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nRadon-222 is produced by the radioactive decay chain of uranium, which occurs naturally in many rocks and soils, especially granite and shale. As a gas it migrates upward through soil pores and enters buildings through foundation cracks, sump openings, and gaps around pipes, where it can accumulate in basements and lower floors with limited ventilation. Because radon itself decays, inhaling it deposits radioactive decay products in lung tissue, and the resulting radiation damage makes radon the second leading cause of lung cancer after smoking. Testing is the only way to detect it, since it is colourless and odourless, and mitigation uses sub-slab depressurization to vent soil gas above the roofline.\n\nWhy the other options fail:\nA — This describes formaldehyde and other volatile organic compounds. Radon is a chemically inert radioactive noble gas, not an organic compound.\nB — Radon is not a combustion product; it originates in rock and soil beneath a building. Gas appliances emit carbon monoxide and nitrogen dioxide instead.\nC — This describes asbestos, a solid mineral fibre. Radon is a gas and causes harm through radiation rather than physical fibres.\n\nDiagnostic focus: Describe radon's geological source, entry route, and health effect, distinguishing it from combustion, organic, and fibrous indoor pollutants."
  },
  {
    "id": 56,
    "unit": "Unit 7",
    "topic": "7.6",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.6: Reduction of Air Pollutants",
    "big_idea": "STB",
    "sp": "Skill 7.F",
    "skills": "Skill 7.F: Justify a proposed solution, by explaining potential advantages.",
    "difficulty": "2 — Application",
    "stem": "A region requires coal-fired plants to install flue-gas desulfurization scrubbers. Which justification for this requirement, in terms of what the technology does, is strongest?",
    "visual": "",
    "options": {
      "A": "Scrubbers disperse sulfur dioxide through taller stacks so that it is diluted over a wider area, which lowers the ground-level concentrations communities near the plant are exposed to.",
      "B": "Scrubbers remove carbon dioxide from the flue gas along with the sulfur dioxide, so they address both acid deposition and the plants' contribution to climate change in a single piece of equipment at the stack.",
      "C": "Scrubbers react sulfur dioxide with a calcium slurry before it leaves the stack, so they cut the emissions that form acid deposition downwind of the plants.",
      "D": "Scrubbers raise the overall thermal efficiency of the plant, so less coal is burned per unit of electricity and every pollutant in the exhaust stream falls in proportion to the fuel saved."
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nThe strongest justification states accurately what the control technology removes and which problem that addresses. In flue-gas desulfurization, exhaust is passed through a slurry of limestone or lime, and the sulfur dioxide reacts with calcium to form solid calcium sulfite or sulfate that is collected rather than emitted. Since sulfur dioxide oxidizes in the atmosphere to sulfuric acid and is the main driver of acid deposition, capturing it at the stack addresses the cause rather than relocating it. The honest limits are worth noting too: scrubbers do not capture carbon dioxide, they consume energy, and they generate a solid waste stream requiring disposal or reuse in wallboard.\n\nWhy the other options fail:\nA — Tall stacks dilute and export pollution rather than removing it, which is what made acid deposition a long-range problem. Scrubbers actually capture the sulfur.\nB — Standard flue-gas desulfurization targets sulfur dioxide and does not capture carbon dioxide, so this claims a benefit the technology does not deliver.\nD — Scrubbers consume energy to operate and slightly reduce net plant efficiency; they clean the exhaust rather than improving combustion.\n\nDiagnostic focus: Justify a pollution-control technology by what it physically removes, without attributing benefits it does not provide."
  },
  {
    "id": 57,
    "unit": "Unit 7",
    "topic": "7.1",
    "category": "Unit 7: Atmospheric Pollution — Topic 7.1: Introduction to Air Pollution",
    "big_idea": "STB",
    "sp": "Skill 4.A",
    "skills": "Skill 4.A: Identify a testable hypothesis or scientific question for an investigation.",
    "difficulty": "2 — Application",
    "stem": "Researchers notice that asthma emergency visits in a city appear more frequent in neighbourhoods near major highways. Which of the following is the best testable hypothesis for an investigation of this observation?",
    "visual": "",
    "options": {
      "A": "Children living within 300 m of a major highway have a higher rate of asthma emergency visits than children living more than 2 km away, after adjusting for household income.",
      "B": "Does living near a major highway have any effect on the respiratory health of children, and if so what is the full set of mechanisms by which traffic emissions damage the developing lung?",
      "C": "Air pollution from vehicles is a serious environmental justice problem that disproportionately affects low-income urban neighbourhoods and demands an immediate policy response from the city.",
      "D": "Traffic emissions contain nitrogen dioxide and fine particulate matter, both of which are known to cause airway inflammation in laboratory studies of human respiratory tissue."
    },
    "correct": "A",
    "explanation": "Big Idea: STB — Sustainability\n\nA testable hypothesis states a specific, measurable relationship between defined variables that an investigation could support or refute. The correct option names the independent variable (distance from a highway, with explicit thresholds), the dependent variable (rate of asthma emergency visits), the population (children), and the direction of the predicted difference. It also controls for household income, a confounding variable that otherwise travels with highway proximity and could produce the same pattern. The alternatives fail on distinct grounds: one is an unfalsifiable value claim, one is an unbounded question, and one is background information rather than a prediction.\n\nWhy the other options fail:\nB — This is a research question rather than a hypothesis, and its second half is far too broad to be addressed by a single testable prediction.\nC — This is a value judgment and a call to action. It states no measurable relationship between variables, so no observation could confirm or disconfirm it.\nD — This is a statement of established background fact. A hypothesis must predict a relationship in the system being studied, not restate what is already known.\n\nDiagnostic focus: Distinguish a testable hypothesis, with defined variables and a predicted direction, from a research question, a value claim, or background fact."
  },
  {
    "id": 58,
    "unit": "Unit 8",
    "topic": "8.5",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.5: Eutrophication",
    "big_idea": "STB",
    "sp": "Skill 5.C",
    "skills": "Skill 5.C: Explain patterns and trends in data to draw conclusions.",
    "difficulty": "3 — Analysis",
    "stem": "Which explanation of the relationship between the two curves, and of the consequence for lake organisms, is best supported?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>2</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>4</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>6</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>8</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>10</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>0</text><line x1='131.0' y1='248.0' x2='131.0' y2='253.0' stroke='#888'/><text x='131.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>1</text><line x1='194.0' y1='248.0' x2='194.0' y2='253.0' stroke='#888'/><text x='194.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>2</text><line x1='257.0' y1='248.0' x2='257.0' y2='253.0' stroke='#888'/><text x='257.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>3</text><line x1='320.0' y1='248.0' x2='320.0' y2='253.0' stroke='#888'/><text x='320.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>4</text><line x1='383.0' y1='248.0' x2='383.0' y2='253.0' stroke='#888'/><text x='383.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>5</text><line x1='446.0' y1='248.0' x2='446.0' y2='253.0' stroke='#888'/><text x='446.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>6</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#888' stroke-width='1.2' stroke-dasharray='5 4'/><text x='74.0' y='197.4' font-size='10' fill='#666' text-anchor='start' stroke='#FFFFFF' stroke-width='3' paint-order='stroke'>hypoxia threshold 2 mg/L</text><polyline points='68.0,241.2 131.0,238.9 194.0,188.7 257.0,177.3 320.0,181.9 383.0,193.3 446.0,204.7' fill='none' stroke='#2E7D32' stroke-width='2.4'/><circle cx='68.0' cy='241.2' r='3.1' fill='#2E7D32'/><circle cx='131.0' cy='238.9' r='3.1' fill='#2E7D32'/><circle cx='194.0' cy='188.7' r='3.1' fill='#2E7D32'/><circle cx='257.0' cy='177.3' r='3.1' fill='#2E7D32'/><circle cx='320.0' cy='181.9' r='3.1' fill='#2E7D32'/><circle cx='383.0' cy='193.3' r='3.1' fill='#2E7D32'/><circle cx='446.0' cy='204.7' r='3.1' fill='#2E7D32'/><polyline points='68.0,40.5 131.0,47.4 194.0,79.3 257.0,152.2 320.0,200.1 383.0,211.5 446.0,197.8' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='40.5' r='3.1' fill='#1565C0'/><circle cx='131.0' cy='47.4' r='3.1' fill='#1565C0'/><circle cx='194.0' cy='79.3' r='3.1' fill='#1565C0'/><circle cx='257.0' cy='152.2' r='3.1' fill='#1565C0'/><circle cx='320.0' cy='200.1' r='3.1' fill='#1565C0'/><circle cx='383.0' cy='211.5' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='197.8' r='3.1' fill='#1565C0'/><rect x='272.0' y='22.0' width='164' height='42' fill='#FFFFFF' fill-opacity='0.9' stroke='#E2E2E2' rx='3'/><rect x='278.0' y='29.0' width='18' height='4' fill='#2E7D32' rx='2'/><text x='302.0' y='34.0' font-size='11' fill='#333'>Nitrate (mg/L)</text><rect x='278.0' y='47.0' width='18' height='4' fill='#1565C0' rx='2'/><text x='302.0' y='52.0' font-size='11' fill='#333'>Dissolved oxygen (mg/L)</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Years since fertilizer use expanded upstream</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Concentration (mg/L)</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Nitrate and dissolved oxygen in a lake downstream of expanded agriculture.</text></svg>",
    "options": {
      "A": "Falling oxygen is causing the nitrate to accumulate, because low-oxygen water prevents the bacteria that would otherwise consume nitrate from functioning, so the nitrate curve is the consequence rather than the cause.",
      "B": "The algal bloom itself consumes the oxygen through photosynthesis, so the more algae the nitrate supports, the less oxygen remains dissolved in the water for other organisms.",
      "C": "Added nitrate fuels algal blooms whose decomposition by bacteria consumes oxygen, so oxygen falls below the hypoxia threshold and fish kills become likely.",
      "D": "Nitrate chemically binds dissolved oxygen in the water column, so each unit of nitrate entering the lake removes a proportional quantity of oxygen directly and leaves less available to fish and invertebrates."
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nThe curves move in opposite directions with nitrate leading. Nitrate rises sharply from 0.4 to 3.1 mg/L over years 1 to 3, and dissolved oxygen then collapses from 7.4 to 1.6 mg/L over years 2 to 5. The mechanism is cultural eutrophication: nitrate from fertilizer runoff relieves the nutrient limitation on algae, which bloom and then die; bacteria decomposing that large pulse of organic matter respire aerobically and draw oxygen out of the water faster than it is replaced. Oxygen falls below the 2 mg/L hypoxia threshold by year 5, which is lethal to fish and most benthic invertebrates. The order of the peaks matters: it is what establishes the direction of causation rather than mere correlation.\n\nWhy the other options fail:\nA — The nitrate rise at year 2 precedes the sharp oxygen decline at years 3 and 4, so the timing identifies nitrate as the cause rather than the effect.\nB — Photosynthesis produces oxygen rather than consuming it. The depletion comes from respiration by the decomposers that break the algae down after they die.\nD — Nitrate does not react with dissolved oxygen in this way. The oxygen loss is biological, driven by bacterial decomposition of the algal biomass the nitrate supports.\n\nDiagnostic focus: Use the lead-lag ordering of two curves to establish causation, and identify decomposer respiration rather than photosynthesis as the oxygen sink."
  },
  {
    "id": 59,
    "unit": "Unit 8",
    "topic": "8.8",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.8: Bioaccumulation and Biomagnification",
    "big_idea": "STB",
    "sp": "Skill 6.B",
    "skills": "Skill 6.B: Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "difficulty": "2 — Application",
    "stem": "A pesticide is present in lake water at 0.0025 ppm. Biomagnification through the food chain concentrates it by a factor of 800 in the fatty tissue of ospreys at the top of that chain. What pesticide concentration is expected in osprey tissue?",
    "visual": "",
    "options": {
      "A": "0.0000031 ppm",
      "B": "0.2 ppm",
      "C": "2.0 ppm",
      "D": "800.0025 ppm"
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nA biomagnification factor is a multiplier relating concentration at the top of a food chain to concentration in the surrounding environment: 0.0025 ppm × 800 = 2.0 ppm. The physical reason the factor is so large is that the pesticide is fat-soluble and slowly excreted, so each consumer retains most of what it ingests from a large mass of prey. Concentration therefore rises at every trophic level, which is why top predators such as ospreys, eagles, and orcas carry the highest burdens even where water concentrations seem negligible — the mechanism behind the eggshell thinning that DDT caused in raptors.\n\nWhy the other options fail:\nA — This divides by the biomagnification factor. Biomagnification raises concentration at each trophic step, so the tissue value must exceed the water value.\nB — This is the correct product with a misplaced decimal, as though the water concentration were 0.00025 ppm rather than 0.0025 ppm.\nD — This adds the factor to the concentration. A dimensionless multiplier must be multiplied by the concentration, not added to it.\n\nDiagnostic focus: Apply a biomagnification factor as a multiplier in the correct direction and keep the decimal place."
  },
  {
    "id": 60,
    "unit": "Unit 8",
    "topic": "8.13",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.13: Dose Response Curve",
    "big_idea": "EIN",
    "sp": "Skill 2.A",
    "skills": "Skill 2.A: Describe characteristics of an environmental concept, process, or model represented visually.",
    "difficulty": "2 — Application",
    "stem": "Reading the LD50 of each compound from the graph, which comparison of the two compounds is correct?",
    "visual": "<svg viewBox='0 0 470 320' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='320' fill='#FFFFFF'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#E2E2E2'/><text x='61.0' y='252.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='202.4' x2='446.0' y2='202.4' stroke='#E2E2E2'/><text x='61.0' y='206.4' font-size='11' fill='#444' text-anchor='end'>20</text><line x1='68.0' y1='156.8' x2='446.0' y2='156.8' stroke='#E2E2E2'/><text x='61.0' y='160.8' font-size='11' fill='#444' text-anchor='end'>40</text><line x1='68.0' y1='111.2' x2='446.0' y2='111.2' stroke='#E2E2E2'/><text x='61.0' y='115.2' font-size='11' fill='#444' text-anchor='end'>60</text><line x1='68.0' y1='65.6' x2='446.0' y2='65.6' stroke='#E2E2E2'/><text x='61.0' y='69.6' font-size='11' fill='#444' text-anchor='end'>80</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>100</text><line x1='68.0' y1='248.0' x2='68.0' y2='253.0' stroke='#888'/><text x='68.0' y='266.0' font-size='11' fill='#444' text-anchor='middle'>0</text><line x1='126.2' y1='248.0' x2='126.2' y2='253.0' stroke='#888'/><text x='126.2' y='266.0' font-size='11' fill='#444' text-anchor='middle'>20</text><line x1='184.3' y1='248.0' x2='184.3' y2='253.0' stroke='#888'/><text x='184.3' y='266.0' font-size='11' fill='#444' text-anchor='middle'>40</text><line x1='242.5' y1='248.0' x2='242.5' y2='253.0' stroke='#888'/><text x='242.5' y='266.0' font-size='11' fill='#444' text-anchor='middle'>60</text><line x1='300.6' y1='248.0' x2='300.6' y2='253.0' stroke='#888'/><text x='300.6' y='266.0' font-size='11' fill='#444' text-anchor='middle'>80</text><line x1='358.8' y1='248.0' x2='358.8' y2='253.0' stroke='#888'/><text x='358.8' y='266.0' font-size='11' fill='#444' text-anchor='middle'>100</text><line x1='416.9' y1='248.0' x2='416.9' y2='253.0' stroke='#888'/><text x='416.9' y='266.0' font-size='11' fill='#444' text-anchor='middle'>120</text><line x1='68.0' y1='20.0' x2='68.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='248.0' x2='446.0' y2='248.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='134.0' x2='446.0' y2='134.0' stroke='#888' stroke-width='1.2' stroke-dasharray='5 4'/><text x='74.0' y='129.0' font-size='10' fill='#666' text-anchor='start' stroke='#FFFFFF' stroke-width='3' paint-order='stroke'>50% response</text><polyline points='68.0,248.0 97.1,238.9 126.2,216.1 169.8,161.4 213.4,134.0 271.5,83.8 358.8,42.8 446.0,24.6' fill='none' stroke='#C41230' stroke-width='2.4'/><circle cx='68.0' cy='248.0' r='3.1' fill='#C41230'/><circle cx='97.1' cy='238.9' r='3.1' fill='#C41230'/><circle cx='126.2' cy='216.1' r='3.1' fill='#C41230'/><circle cx='169.8' cy='161.4' r='3.1' fill='#C41230'/><circle cx='213.4' cy='134.0' r='3.1' fill='#C41230'/><circle cx='271.5' cy='83.8' r='3.1' fill='#C41230'/><circle cx='358.8' cy='42.8' r='3.1' fill='#C41230'/><circle cx='446.0' cy='24.6' r='3.1' fill='#C41230'/><polyline points='68.0,248.0 97.1,245.7 126.2,241.2 169.8,229.8 213.4,211.5 271.5,179.6 358.8,134.0 446.0,93.0' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='248.0' r='3.1' fill='#1565C0'/><circle cx='97.1' cy='245.7' r='3.1' fill='#1565C0'/><circle cx='126.2' cy='241.2' r='3.1' fill='#1565C0'/><circle cx='169.8' cy='229.8' r='3.1' fill='#1565C0'/><circle cx='213.4' cy='211.5' r='3.1' fill='#1565C0'/><circle cx='271.5' cy='179.6' r='3.1' fill='#1565C0'/><circle cx='358.8' cy='134.0' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='93.0' r='3.1' fill='#1565C0'/><rect x='74.0' y='22.0' width='164' height='42' fill='#FFFFFF' fill-opacity='0.9' stroke='#E2E2E2' rx='3'/><rect x='80.0' y='29.0' width='18' height='4' fill='#C41230' rx='2'/><text x='104.0' y='34.0' font-size='11' fill='#333'>Compound A</text><rect x='80.0' y='47.0' width='18' height='4' fill='#1565C0' rx='2'/><text x='104.0' y='52.0' font-size='11' fill='#333'>Compound B</text><text x='257.0' y='292' font-size='12' fill='#222222' text-anchor='middle'>Dose (mg per kg body mass)</text><text x='16' y='134.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,134.0)'>Percent of test animals responding</text><text x='235' y='314' font-size='11' fill='#555' text-anchor='middle'>Dose-response curves for two compounds tested on the same animal species.</text></svg>",
    "options": {
      "A": "Compound A has an LD50 near 50 mg/kg and Compound B near 100 mg/kg, so Compound A is the more toxic of the two because a smaller dose affects half the animals.",
      "B": "Both compounds have the same LD50 near 65 mg/kg, because that is the dose at which the vertical gap between the two curves is largest and the compounds are therefore most directly comparable.",
      "C": "Compound A has an LD50 near 90 mg/kg and Compound B near 50 mg/kg, so Compound B is more toxic because it reaches its 50% response level at the lower of the two doses shown on the graph.",
      "D": "Compound A has an LD50 near 50 mg/kg and Compound B near 100 mg/kg, so Compound B is the more toxic of the two because its curve continues rising across a much wider range of doses than that of Compound A."
    },
    "correct": "A",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nLD50 is read where a dose-response curve crosses the 50% response line. Compound A reaches 50% at a dose of about 50 mg/kg; Compound B does not reach 50% until about 100 mg/kg. The interpretation is inverse: a lower LD50 means a smaller dose is needed to affect half the test population, so the substance is more toxic. Compound A is therefore roughly twice as toxic as Compound B on a per-mass basis. It is worth noting what LD50 does not tell you — it measures acute toxicity at high doses in one species and says nothing about chronic low-dose effects, which is why endocrine disruptors can be harmful at doses far below their LD50.\n\nWhy the other options fail:\nB — LD50 is the dose producing a 50% response in each compound separately, read where each curve crosses the 50% line; the gap between curves is not an LD50.\nC — These values are misread from the curves: at 100 mg/kg Compound A is already at 90% response, and it is Compound A that crosses 50% at the lower dose.\nD — The LD50 values are read correctly, but a higher LD50 means more of the substance is needed for the same effect, which makes Compound B less toxic, not more.\n\nDiagnostic focus: Read LD50 off a dose-response curve and apply the inverse relationship between LD50 and toxicity."
  },
  {
    "id": 61,
    "unit": "Unit 8",
    "topic": "8.12",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.12: Lethal Dose 50% (LD50)",
    "big_idea": "EIN",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "2 — Application",
    "stem": "A compound has an LD50 of 45 mg per kilogram of body mass in mammals. Using that value, what total dose would be expected to be lethal to half of a group of adults with a body mass of 70 kg?",
    "visual": "",
    "options": {
      "A": "0.64 mg",
      "B": "31.5 mg",
      "C": "115 mg",
      "D": "3,150 mg"
    },
    "correct": "D",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nLD50 is a dose per unit body mass, so the total dose scales with the mass of the organism: 45 mg/kg × 70 kg = 3,150 mg. The units confirm the operation, since (mg/kg) × kg leaves mg. Expressing toxicity per kilogram is what allows a value measured in test animals to be scaled to organisms of different sizes, and it also explains why a dose harmless to an adult can be dangerous to a child or a small pet. Two important limits: LD50 measures acute lethality only, and extrapolating between species assumes similar physiology, which does not always hold.\n\nWhy the other options fail:\nA — This divides the LD50 by body mass. The LD50 is already expressed per kilogram, so it is multiplied by mass to give a total dose.\nB — This is the correct product divided by 100, a decimal-place error that would correspond to a body mass of 0.7 kg.\nC — This adds the two figures. They have different units, mg/kg and kg, so they must be multiplied; the kilograms then cancel to leave milligrams.\n\nDiagnostic focus: Scale a per-kilogram toxicity value to a whole organism using unit cancellation."
  },
  {
    "id": 62,
    "unit": "Unit 8",
    "topic": "8.11",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.11: Sewage Treatment",
    "big_idea": "STB",
    "sp": "Skill 1.A",
    "skills": "Skill 1.A: Describe environmental concepts and processes.",
    "difficulty": "1 — Foundational",
    "stem": "Which description of what Stage 2 accomplishes, and of why Stage 3 is still required afterward, is correct?",
    "visual": "<svg viewBox='0 0 400 232' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='400' height='232' fill='#FFFFFF'/><defs><marker id='ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#555'/></marker></defs><line x1='108.0' y1='47.0' x2='136.0' y2='47.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='240.0' y1='47.0' x2='268.0' y2='47.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='320.0' y1='70.0' x2='320.0' y2='150.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='268.0' y1='173.0' x2='240.0' y2='173.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><line x1='188.0' y1='70.0' x2='60.0' y2='150.0' stroke='#555' stroke-width='1.8' marker-end='url(#ah)'/><text x='124.0' y='104.0' font-size='10.5' fill='#C41230' text-anchor='middle' stroke='#FFFFFF' stroke-width='4' paint-order='stroke' stroke-linejoin='round'>solids</text><rect x='12.0' y='24.0' width='96.0' height='46.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='60.0' y='51.0' font-size='11.5' fill='#222222' text-anchor='middle'>Raw sewage in</text><rect x='136.0' y='24.0' width='104.0' height='46.0' fill='#E7E0D2' stroke='#555' stroke-width='1.3' rx='4'/><text x='188.0' y='45.0' font-size='11.5' fill='#222222' text-anchor='middle'>Stage 1: screens</text><text x='188.0' y='57.5' font-size='11.5' fill='#222222' text-anchor='middle'>and settling</text><rect x='268.0' y='24.0' width='104.0' height='46.0' fill='#DCE9F7' stroke='#555' stroke-width='1.3' rx='4'/><text x='320.0' y='39.0' font-size='11.5' fill='#222222' text-anchor='middle'>Stage 2:</text><text x='320.0' y='51.5' font-size='11.5' fill='#222222' text-anchor='middle'>aeration with</text><text x='320.0' y='64.0' font-size='11.5' fill='#222222' text-anchor='middle'>bacteria</text><rect x='268.0' y='150.0' width='104.0' height='46.0' fill='#DFF0DC' stroke='#555' stroke-width='1.3' rx='4'/><text x='320.0' y='171.0' font-size='11.5' fill='#222222' text-anchor='middle'>Stage 3:</text><text x='320.0' y='183.5' font-size='11.5' fill='#222222' text-anchor='middle'>disinfection</text><rect x='136.0' y='150.0' width='104.0' height='46.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='188.0' y='171.0' font-size='11.5' fill='#222222' text-anchor='middle'>Discharge to</text><text x='188.0' y='183.5' font-size='11.5' fill='#222222' text-anchor='middle'>river</text><rect x='12.0' y='150.0' width='96.0' height='46.0' fill='#F2EFE9' stroke='#555' stroke-width='1.3' rx='4'/><text x='60.0' y='171.0' font-size='11.5' fill='#222222' text-anchor='middle'>Sludge to</text><text x='60.0' y='183.5' font-size='11.5' fill='#222222' text-anchor='middle'>treatment</text><text x='200' y='226' font-size='11' fill='#555' text-anchor='middle'>Stages of a municipal wastewater treatment plant.</text></svg>",
    "options": {
      "A": "Stage 2 uses bacteria in aerated tanks to digest dissolved organic matter and lower biological oxygen demand; Stage 3 is still needed because that step does not kill pathogens.",
      "B": "Stage 2 chemically precipitates nitrogen and phosphorus out of the wastewater, and Stage 3 is still needed because precipitation raises the pH of the effluent to a level that must be neutralized before discharge.",
      "C": "Stage 2 physically filters out the suspended solids that Stage 1 did not capture, and Stage 3 is still needed because filtration leaves dissolved organic matter in the water that would deplete oxygen in the receiving river.",
      "D": "Stage 2 disinfects the water by aerating it, since oxygen kills the bacteria and viruses present, and Stage 3 is still needed to remove the dissolved nitrogen and phosphorus that cause eutrophication downstream."
    },
    "correct": "A",
    "explanation": "Big Idea: STB — Sustainability\n\nThe stages are sequential and address different problems. Primary treatment (Stage 1) is physical: screens remove debris and settling tanks let solids fall out as sludge, which the diagram shows diverted. Secondary treatment (Stage 2) is biological: wastewater is aerated so that cultivated aerobic bacteria consume the dissolved and suspended organic matter, which is what lowers biological oxygen demand and prevents the effluent from depleting oxygen in the receiving river. That step does not reliably eliminate pathogens, so Stage 3 disinfects, using chlorine, ozone, or ultraviolet light, before discharge. Nitrogen and phosphorus removal requires further tertiary treatment that many plants do not include.\n\nWhy the other options fail:\nB — Nutrient removal by chemical precipitation is an advanced tertiary process, not what secondary aeration does, and Stage 3 here is labelled disinfection.\nC — Physical removal of solids is the work of Stage 1; Stage 2 is a biological step in which bacteria consume the dissolved organic matter.\nD — Aeration supports bacterial digestion rather than disinfecting; the bacteria in Stage 2 are deliberately cultivated, and Stage 3 is the disinfection step.\n\nDiagnostic focus: Describe the distinct physical, biological, and disinfection functions of successive wastewater treatment stages."
  },
  {
    "id": 63,
    "unit": "Unit 8",
    "topic": "8.9",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.9: Solid Waste Disposal",
    "big_idea": "STB",
    "sp": "Skill 7.C",
    "skills": "Skill 7.C: Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "difficulty": "2 — Application",
    "stem": "A county proposes replacing its open dump with a modern sanitary landfill that has a clay and synthetic liner, leachate collection, and daily soil cover. Which assessment of this change is most accurate?",
    "visual": "",
    "options": {
      "A": "The change reduces groundwater contamination but increases total greenhouse gas emissions relative to the open dump, because burying waste under daily soil cover creates the anaerobic conditions that generate methane.",
      "B": "The change mainly improves appearance and odour control, since leachate collection systems treat only surface runoff and do nothing about the liquid that percolates down through the waste mass.",
      "C": "Groundwater contamination and vector problems fall sharply, but the landfill still consumes land, emits methane unless gas is captured, and the liner can eventually fail.",
      "D": "The change eliminates all environmental risk from the county's waste, because the liner fully isolates the waste from the surrounding soil and groundwater for as long as the waste remains hazardous."
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nA sanitary landfill is a genuine improvement whose benefits should not be overstated. The liner and leachate collection system intercept the contaminated liquid that forms as water percolates through waste, which is the main pathway by which open dumps pollute groundwater, and daily soil cover suppresses odour, windblown litter, and the rats, gulls, and insects that dumps attract. The remaining costs are real: the facility permanently occupies land, decomposition under anaerobic conditions produces methane that becomes a potent greenhouse gas unless collected, and liners have finite lifetimes while some waste stays hazardous much longer, so long-term monitoring is required. Landfilling also does nothing to reduce waste generation, which sits above disposal in the waste hierarchy.\n\nWhy the other options fail:\nA — This correctly identifies anaerobic methane generation, but open dumps also generate methane while adding uncontrolled fires and odour, and modern landfills can capture gas for energy.\nB — Leachate collection is designed specifically to capture the liquid percolating through the waste above the liner, which is the principal groundwater threat.\nD — Liners reduce but do not eliminate risk; they can crack or be punctured, and they must outlast waste that stays hazardous for far longer than the liner's service life.\n\nDiagnostic focus: Assess a waste-management upgrade by naming both the risks it reduces and those that remain, without overclaiming."
  },
  {
    "id": 64,
    "unit": "Unit 8",
    "topic": "8.6",
    "category": "Unit 8: Aquatic and Terrestrial Pollution — Topic 8.6: Thermal Pollution",
    "big_idea": "STB",
    "sp": "Skill 4.E",
    "skills": "Skill 4.E: Explain modifications to an experimental procedure that will alter results.",
    "difficulty": "3 — Analysis",
    "stem": "A reviewer notes that temperature affects both oxygen solubility and trout metabolism, so this design cannot separate the two. Which modification would best allow the investigators to distinguish those effects?",
    "visual": "<svg viewBox='0 0 470 168' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='168' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='146.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='50.3' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Tank</text><line x1='99.5' y1='1' x2='99.5' y2='147.0' stroke='#DDD'/><text x='163.6' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Water temperature</text><text x='163.6' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(°C)</text><line x1='227.6' y1='1' x2='227.6' y2='147.0' stroke='#DDD'/><text x='294.1' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Dissolved oxygen</text><text x='294.1' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(mg/L)</text><line x1='360.6' y1='1' x2='360.6' y2='147.0' stroke='#DDD'/><text x='414.8' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Trout survival</text><text x='414.8' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>(%)</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>1 (control)</text><text x='163.6' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>12</text><text x='294.1' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>10.8</text><text x='414.8' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>98</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>2</text><text x='163.6' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>18</text><text x='294.1' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>9.4</text><text x='414.8' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>92</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>3</text><text x='163.6' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>24</text><text x='294.1' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>8.3</text><text x='414.8' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>61</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>4</text><text x='163.6' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>30</text><text x='294.1' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>7.5</text><text x='414.8' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>12</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='235' y='162' font-size='11' fill='#555' text-anchor='middle'>Trout held for 14 days in four aerated tanks at different temperatures.</text></svg>",
    "options": {
      "A": "Repeat the experiment using a fish species known to tolerate low dissolved oxygen, so that any mortality observed across the four tanks can be attributed to temperature alone rather than to oxygen.",
      "B": "Add tanks held at each temperature in which dissolved oxygen is adjusted back to 10.8 mg/L, so temperature varies while oxygen is held constant across the set.",
      "C": "Add more trout to each of the four existing tanks, so that the larger sample size gives a more reliable survival percentage and reduces the uncertainty in the comparison between tanks.",
      "D": "Extend the experiment from 14 days to 60 days at the same four temperatures, so that any difference between the effect of temperature and the effect of oxygen has more time to become statistically detectable in the survival data."
    },
    "correct": "B",
    "explanation": "Big Idea: STB — Sustainability\n\nThe problem is confounding: because oxygen solubility falls as water warms, temperature and dissolved oxygen decrease together across tanks 1 to 4, so the survival pattern could be produced by either variable. The fix is to break that link by manipulating one variable while holding the other constant. Adding a parallel set of tanks in which oxygen is restored to the control level at each temperature means any remaining survival difference across that set must be due to temperature itself, and comparing the two sets at the same temperature isolates the oxygen effect. More time or more fish improves precision but cannot separate two variables that always move together.\n\nWhy the other options fail:\nA — Changing species changes what is being studied and still leaves both variables varying together; tolerance is a matter of degree rather than immunity.\nC — Larger samples reduce random error, not confounding. The two variables remain locked together no matter how many fish are measured.\nD — A longer run gives more precise estimates of the combined effect but still confounds the two variables, because oxygen continues to fall with temperature in every tank.\n\nDiagnostic focus: Identify confounded variables in a design and propose the modification that holds one constant while the other varies."
  },
  {
    "id": 65,
    "unit": "Unit 9",
    "topic": "9.3",
    "category": "Unit 9: Global Change — Topic 9.3: The Greenhouse Effect",
    "big_idea": "STB",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "2 — Application",
    "stem": "Which explanation correctly describes the greenhouse effect, including why greenhouse gases interact differently with incoming sunlight than with radiation from Earth?",
    "visual": "",
    "options": {
      "A": "Greenhouse gases are largely transparent to incoming shortwave sunlight but absorb the longwave infrared Earth emits, re-radiating part of it downward and warming the surface.",
      "B": "Greenhouse gases absorb incoming shortwave sunlight directly and convert it to heat in the atmosphere, which then conducts downward to warm the surface beneath the absorbing layer.",
      "C": "Greenhouse gases trap warm air near the surface by preventing it from rising and mixing upward, so heat that would otherwise escape through convection remains in the lower atmosphere.",
      "D": "Greenhouse gases form a physical layer in the upper atmosphere that reflects incoming sunlight back toward the surface a second time, so the surface receives the same radiation twice and warms accordingly."
    },
    "correct": "A",
    "explanation": "Big Idea: STB — Sustainability\n\nThe greenhouse effect depends on a wavelength asymmetry. Incoming solar radiation is mostly shortwave, in visible and near-infrared wavelengths that carbon dioxide, methane, water vapor, and nitrous oxide do not absorb strongly, so most of it passes through the atmosphere and is absorbed at the surface. The warmed surface re-emits that energy as longwave infrared, at wavelengths these molecules absorb efficiently because the radiation matches their vibrational modes. The gases then re-emit in all directions, including downward, so part of the outgoing energy returns to the surface. The result is a surface about 33 degrees Celsius warmer than it would otherwise be — a natural effect essential to life. Adding greenhouse gases intensifies it.\n\nWhy the other options fail:\nB — This reverses which wavelengths are absorbed. The atmosphere is mostly transparent to incoming shortwave radiation, which is why sunlight reaches the ground.\nC — This describes a thermal inversion, a local phenomenon of air mixing. The greenhouse effect is radiative and operates globally.\nD — Greenhouse gases do not reflect sunlight; they absorb and re-emit infrared radiation. Reflecting incoming sunlight would cool rather than warm the surface.\n\nDiagnostic focus: Explain the greenhouse effect through differential absorption of shortwave versus longwave radiation, not reflection or convection."
  },
  {
    "id": 66,
    "unit": "Unit 9",
    "topic": "9.4",
    "category": "Unit 9: Global Change — Topic 9.4: Increases in the Greenhouse Gases",
    "big_idea": "STB",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "2 — Application",
    "stem": "A landfill releases 1,200 metric tons of methane per year. Methane has a 100-year global warming potential of 28, meaning one tonne of methane has the same warming effect as 28 tonnes of carbon dioxide over that period. What is the landfill's annual emission in tonnes of carbon dioxide equivalent?",
    "visual": "",
    "options": {
      "A": "42.9 tonnes CO₂e",
      "B": "1,228 tonnes CO₂e",
      "C": "3,360 tonnes CO₂e",
      "D": "33,600 tonnes CO₂e"
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nCarbon dioxide equivalent converts a quantity of any greenhouse gas into the mass of carbon dioxide that would cause the same warming over a chosen period, by multiplying by that gas's global warming potential: 1,200 t × 28 = 33,600 t CO₂e. Methane's potency comes from absorbing infrared more effectively per molecule than carbon dioxide; its atmospheric lifetime is only about a decade, which is why its 20-year global warming potential is far higher than its 100-year value. That short lifetime also makes methane capture an unusually fast-acting mitigation option, and landfill gas can be burned for energy, converting it to the much weaker carbon dioxide.\n\nWhy the other options fail:\nA — This divides by the global warming potential. Since methane is the more potent gas, its carbon dioxide equivalent must be larger than its own mass, not smaller.\nB — This adds the global warming potential to the mass. Global warming potential is a dimensionless multiplier, so it cannot be added to a quantity in tonnes.\nC — This is the correct product divided by ten, which would correspond to a global warming potential of 2.8 rather than 28.\n\nDiagnostic focus: Apply a global warming potential as a dimensionless multiplier to convert to CO2 equivalent."
  },
  {
    "id": 67,
    "unit": "Unit 9",
    "topic": "9.1",
    "category": "Unit 9: Global Change — Topic 9.1: Stratospheric Ozone Depletion",
    "big_idea": "STB",
    "sp": "Skill 1.B",
    "skills": "Skill 1.B: Explain environmental concepts and processes.",
    "difficulty": "3 — Analysis",
    "stem": "Which explanation accounts for why chlorofluorocarbons deplete stratospheric ozone so efficiently, given that their atmospheric concentrations are very small?",
    "visual": "",
    "options": {
      "A": "Chlorofluorocarbons absorb the ultraviolet radiation that would otherwise drive the natural reactions forming ozone, so ozone is never produced rather than being destroyed after formation.",
      "B": "Ultraviolet light frees chlorine atoms from CFCs, and each one destroys many thousands of ozone molecules in a chain reaction because it is regenerated at every cycle.",
      "C": "Chlorofluorocarbons are far denser than air, so they settle into a concentrated layer exactly at the altitude of the ozone layer, where their local concentration is high enough to consume the ozone present.",
      "D": "Each chlorofluorocarbon molecule bonds directly and permanently to several ozone molecules at once, so even a small number of molecules can remove a large quantity of ozone from the stratosphere."
    },
    "correct": "B",
    "explanation": "Big Idea: STB — Sustainability\n\nThe key is catalysis. CFCs are chemically inert in the troposphere, which is why they survive long enough to be mixed up into the stratosphere — the same stability that made them attractive as refrigerants. There, high-energy ultraviolet light finally breaks a carbon-chlorine bond and releases a free chlorine atom. That atom reacts with ozone to form chlorine monoxide and O₂, and the chlorine monoxide then reacts with a free oxygen atom to release the chlorine atom again. Because the chlorine is regenerated rather than consumed, one atom can cycle through this sequence tens of thousands of times before being removed. That amplification is why trace concentrations cause large-scale depletion, and why the long atmospheric lifetime of CFCs means recovery after the Montreal Protocol takes decades.\n\nWhy the other options fail:\nA — CFCs are not present in sufficient quantity to shade the stratosphere from ultraviolet light, and the observed depletion involves active destruction of existing ozone.\nC — Atmospheric mixing distributes CFCs rather than letting them settle by density, and their stratospheric concentration remains very low; the catalytic cycle is what makes the small quantity effective.\nD — CFC molecules do not bind ozone. They must first be broken apart by ultraviolet light to release chlorine, and the chlorine then acts catalytically rather than by bonding permanently.\n\nDiagnostic focus: Explain catalytic ozone destruction, emphasizing regeneration of the chlorine atom as the source of amplification."
  },
  {
    "id": 68,
    "unit": "Unit 9",
    "topic": "9.2",
    "category": "Unit 9: Global Change — Topic 9.2: Reducing Ozone Depletion",
    "big_idea": "STB",
    "sp": "Skill 3.A",
    "skills": "Skill 3.A: Identify the claim an author makes.",
    "difficulty": "2 — Application",
    "stem": "Which statement best identifies the central claim the author is making?",
    "visual": "<svg viewBox='0 0 470 210' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='210' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='208.0' fill='#FAFAF8' stroke='#D8D3C8'/><rect x='1' y='1' width='5' height='208.0' fill='#C41230'/><text x='20' y='26' font-size='13' font-weight='bold' fill='#222222'>Thirty Years On, the Hole Is Still There</text><text x='20' y='43' font-size='10.5' fill='#777' font-style='italic'>Editorial in a science magazine (written for this exam)</text><text x='20' y='64.0' font-size='11.5' fill='#333'>Nations signed the Montreal Protocol in 1987 and phased out the</text><text x='20' y='80.0' font-size='11.5' fill='#333'>chlorofluorocarbons that thinned the ozone layer. Yet a hole still opens</text><text x='20' y='96.0' font-size='11.5' fill='#333'>over Antarctica every spring, and critics point to it as proof that the</text><text x='20' y='112.0' font-size='11.5' fill='#333'>treaty accomplished nothing.</text><text x='20' y='142.0' font-size='11.5' fill='#333'>That reading mistakes a slow recovery for no recovery. Stratospheric</text><text x='20' y='158.0' font-size='11.5' fill='#333'>chlorine peaked in the late 1990s and has been declining since, and the</text><text x='20' y='174.0' font-size='11.5' fill='#333'>hole is now smaller than its worst years. The treaty worked; the</text><text x='20' y='190.0' font-size='11.5' fill='#333'>chemistry is simply slower than politics.</text></svg>",
    "options": {
      "A": "International environmental treaties generally fail to deliver measurable results because chemical and ecological processes operate on timescales far longer than those of the political systems that negotiate them.",
      "B": "The Montreal Protocol succeeded, and the continued appearance of an ozone hole reflects the slow pace of chemical recovery rather than any failure of the treaty.",
      "C": "Stratospheric chlorine concentrations peaked in the late 1990s and have been declining ever since, which is the measurement that scientists rely on to track the state of the ozone layer over time.",
      "D": "The Montreal Protocol failed to achieve its goals, because an ozone hole continues to open over Antarctica every spring more than thirty years after the agreement was signed by its member nations."
    },
    "correct": "B",
    "explanation": "Big Idea: STB — Sustainability\n\nA claim is the conclusion an author wants the reader to accept, as distinct from the evidence offered for it and from positions the author raises only to rebut. Here the first paragraph presents the critics' view, and the second rejects it: the phrase \"that reading mistakes a slow recovery for no recovery\" signals the turn, and \"the treaty worked\" states the conclusion directly. The declining chlorine concentrations and the shrinking hole are the evidence marshalled in support. Distinguishing these three elements — claim, supporting evidence, and opposing view — is the core skill, and the most common error is selecting an accurate fact from the passage that is not the conclusion.\n\nWhy the other options fail:\nA — The author makes the narrower point that this treaty worked despite slow chemistry, and does not generalize to treaties failing overall.\nC — This is a piece of evidence the author cites in support of the claim rather than the claim itself; identifying a claim means finding the conclusion the evidence serves.\nD — This is the position the author attributes to critics and then argues against, so it is the opposite of the author's own claim.\n\nDiagnostic focus: Identify an author's claim, separating it from the supporting evidence and from the counterposition the author rejects."
  },
  {
    "id": 69,
    "unit": "Unit 9",
    "topic": "9.5",
    "category": "Unit 9: Global Change — Topic 9.5: Global Climate Change",
    "big_idea": "STB",
    "sp": "Skill 5.C",
    "skills": "Skill 5.C: Explain patterns and trends in data to draw conclusions.",
    "difficulty": "2 — Application",
    "stem": "Which conclusion is best supported by the carbon dioxide record together with the temperature anomalies given?",
    "visual": "<svg viewBox='0 0 470 324' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='324' fill='#FFFFFF'/><line x1='68.0' y1='238.0' x2='446.0' y2='238.0' stroke='#E2E2E2'/><text x='61.0' y='242.0' font-size='11' fill='#444' text-anchor='end'>300</text><line x1='68.0' y1='187.7' x2='446.0' y2='187.7' stroke='#E2E2E2'/><text x='61.0' y='191.7' font-size='11' fill='#444' text-anchor='end'>330</text><line x1='68.0' y1='137.4' x2='446.0' y2='137.4' stroke='#E2E2E2'/><text x='61.0' y='141.4' font-size='11' fill='#444' text-anchor='end'>360</text><line x1='68.0' y1='87.1' x2='446.0' y2='87.1' stroke='#E2E2E2'/><text x='61.0' y='91.1' font-size='11' fill='#444' text-anchor='end'>390</text><line x1='68.0' y1='36.8' x2='446.0' y2='36.8' stroke='#E2E2E2'/><text x='61.0' y='40.8' font-size='11' fill='#444' text-anchor='end'>420</text><line x1='68.0' y1='238.0' x2='68.0' y2='243.0' stroke='#888'/><text x='68.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1960</text><line x1='162.5' y1='238.0' x2='162.5' y2='243.0' stroke='#888'/><text x='162.5' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1975</text><line x1='257.0' y1='238.0' x2='257.0' y2='243.0' stroke='#888'/><text x='257.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1990</text><line x1='351.5' y1='238.0' x2='351.5' y2='243.0' stroke='#888'/><text x='351.5' y='256.0' font-size='11' fill='#444' text-anchor='middle'>2005</text><line x1='446.0' y1='238.0' x2='446.0' y2='243.0' stroke='#888'/><text x='446.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>2020</text><line x1='68.0' y1='20.0' x2='68.0' y2='238.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='238.0' x2='446.0' y2='238.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,209.5 162.5,186.0 257.0,147.4 351.5,105.5 446.0,46.8' fill='none' stroke='#6A1B9A' stroke-width='2.4'/><circle cx='68.0' cy='209.5' r='3.1' fill='#6A1B9A'/><circle cx='162.5' cy='186.0' r='3.1' fill='#6A1B9A'/><circle cx='257.0' cy='147.4' r='3.1' fill='#6A1B9A'/><circle cx='351.5' cy='105.5' r='3.1' fill='#6A1B9A'/><circle cx='446.0' cy='46.8' r='3.1' fill='#6A1B9A'/><text x='257.0' y='282' font-size='12' fill='#222222' text-anchor='middle'>Year</text><text x='16' y='129.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,129.0)'>Atmospheric CO₂ (ppm)</text><text x='235' y='304' font-size='11' fill='#555' text-anchor='middle'>Atmospheric carbon dioxide concentration. Global mean surface temperature</text><text x='235' y='318' font-size='11' fill='#555' text-anchor='middle'>anomaly over the same years: 0.03, 0.01, 0.45, 0.68, and 1.02 °C.</text></svg>",
    "options": {
      "A": "Carbon dioxide and temperature both rose, but because these are only correlated and correlation never establishes causation, the data give no reason to prefer a causal explanation over coincidence.",
      "B": "The temperature increase caused the carbon dioxide increase, because warmer oceans hold less dissolved gas and so release carbon dioxide into the atmosphere as they warm.",
      "C": "Carbon dioxide rose at a constant rate across the whole period while temperature rose only after 1975, which shows the two quantities are changing independently of one another.",
      "D": "Both quantities rose substantially over the period, and the physical mechanism linking them makes rising carbon dioxide the best-supported explanation for the warming."
    },
    "correct": "D",
    "explanation": "Big Idea: STB — Sustainability\n\nThe data show carbon dioxide rising from 317 to 414 ppm, an increase of 97 ppm, with the rate accelerating from roughly 0.9 ppm per year in 1960-1975 to about 2.3 ppm per year in 2005-2020, while the temperature anomaly rose from near zero to about 1.0 degree Celsius. Drawing a causal conclusion from two correlated time series requires more than the correlation, and here that additional support exists: the infrared absorption properties of carbon dioxide are measured in the laboratory, the isotopic signature of the added carbon identifies fossil fuels as its source, and the pattern of warming matches what greenhouse forcing predicts. The answer neither overclaims from correlation alone nor dismisses the mechanism.\n\nWhy the other options fail:\nA — Correlation alone is weak evidence, but it is not the only evidence available here: the radiative mechanism by which carbon dioxide absorbs infrared is independently established physics.\nB — Ocean outgassing with warming is a real feedback, but the oceans have absorbed roughly a quarter of emitted carbon dioxide over this period rather than being a net source.\nC — The carbon dioxide rate was not constant: it increased from about 0.9 ppm per year in the earlier interval to about 2.3 ppm per year in the latest one.\n\nDiagnostic focus: Combine correlated data with an independently established mechanism to justify a causal conclusion, avoiding both overclaiming and false scepticism."
  },
  {
    "id": 70,
    "unit": "Unit 9",
    "topic": "9.7",
    "category": "Unit 9: Global Change — Topic 9.7: Ocean Acidification",
    "big_idea": "STB",
    "sp": "Skill 6.B",
    "skills": "Skill 6.B: Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "difficulty": "3 — Analysis",
    "stem": "Mean surface ocean pH has fallen from about 8.2 in pre-industrial times to about 8.1 today. By what factor has the hydrogen ion concentration of surface seawater increased?",
    "visual": "",
    "options": {
      "A": "0.79 times",
      "B": "1.01 times",
      "C": "1.26 times",
      "D": "10.0 times"
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nBecause pH = −log₁₀[H⁺], a pH change of Δ corresponds to a concentration ratio of 10 raised to Δ. Here Δ = 8.2 − 8.1 = 0.1, so [H⁺] has risen by a factor of 10⁰·¹ = 1.259, about a 26% increase. The chemistry behind it is that the ocean absorbs roughly a quarter of emitted carbon dioxide, which reacts with water to form carbonic acid; that releases hydrogen ions and also consumes carbonate ions, making it harder for corals, molluscs, and pteropods to build calcium carbonate shells and skeletons. A change that sounds small on the pH scale is substantial on the concentration scale.\n\nWhy the other options fail:\nA — This is 10 raised to the negative pH difference, giving a decrease. A falling pH means hydrogen ion concentration has risen, so the factor must exceed 1.\nB — This divides one pH value by the other. Because pH is a logarithm, pH values cannot be compared as a ratio; their difference must be used as an exponent.\nD — This treats the change as a full pH unit. The change is 0.1 units, so the factor is 10⁰·¹ rather than 10¹.\n\nDiagnostic focus: Convert a small pH change into a concentration factor using powers of ten, in the correct direction."
  },
  {
    "id": 71,
    "unit": "Unit 9",
    "topic": "9.6",
    "category": "Unit 9: Global Change — Topic 9.6: Ocean Warming",
    "big_idea": "STB",
    "sp": "Skill 1.C",
    "skills": "Skill 1.C: Explain environmental concepts, processes, or models in applied contexts.",
    "difficulty": "2 — Application",
    "stem": "A reef that was healthy for decades turns white across most of its area during an unusual marine heat wave. Which explanation of what has happened, and of the reef's prospects, is most accurate?",
    "visual": "",
    "options": {
      "A": "The heat wave caused an algal bloom that coated the reef in a white film, and the corals beneath are unharmed and will be revealed again once the bloom is dispersed by currents.",
      "B": "The warm water bleached the corals by chemically breaking down the coloured pigments in their own tissues, and the pigments will regenerate on their own once water temperature returns to its normal range.",
      "C": "Heat stress caused the corals to expel their symbiotic algae, losing both colour and their main energy source; they can recover if the algae return soon enough, but die if stress persists.",
      "D": "The white colour is the skeletons of corals that have already died from the heat, so the reef is permanently lost and recovery would require larvae from elsewhere to settle and build an entirely new structure."
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nReef-building corals live in symbiosis with photosynthetic zooxanthellae that supply much of the coral's energy and give it its colour. When water temperature exceeds the coral's tolerance for a sustained period, the symbiosis breaks down and the coral expels the algae. The coral tissue is nearly transparent, so the white carbonate skeleton shows through — the bleached appearance. The crucial point is that a bleached coral is typically alive but starving: if temperatures drop within a few weeks the algae can recolonize and the coral recovers, but prolonged stress leads to death, after which the structure erodes and the thousands of species depending on it lose their habitat. Shorter intervals between heat waves are what make recovery increasingly unlikely.\n\nWhy the other options fail:\nA — Bleaching is a loss of algae from coral tissue rather than a coating on the reef surface, and the corals are under severe physiological stress rather than unharmed.\nB — The colour comes from symbiotic zooxanthellae rather than coral pigments, and recovery depends on those algae recolonizing the coral, not on pigment regeneration.\nD — Bleached corals are usually still alive, their white carbonate skeleton visible through transparent tissue once the algae are gone, so recovery remains possible.\n\nDiagnostic focus: Explain coral bleaching as loss of algal symbionts, distinguishing a bleached living coral from a dead one."
  },
  {
    "id": 72,
    "unit": "Unit 9",
    "topic": "9.8",
    "category": "Unit 9: Global Change — Topic 9.8: Invasive Species",
    "big_idea": "EIN",
    "sp": "Skill 7.E",
    "skills": "Skill 7.E: Make a claim that proposes a solution to an environmental problem in an applied context.",
    "difficulty": "2 — Application",
    "stem": "Zebra mussels, spread between lakes on boat hulls and in bilge water, are clogging intake pipes and displacing native mussels. Which proposed response best addresses the way the species spreads?",
    "visual": "",
    "options": {
      "A": "Introduce a predatory fish species from the zebra mussel's native range to control the population biologically, so that the invader is suppressed without the need for chemical treatment.",
      "B": "Apply molluscicide to each lake where zebra mussels have established, at a dose high enough to eliminate the population and prevent any survivors from being carried onward to other lakes.",
      "C": "Fund ongoing monitoring of native mussel populations in all affected lakes so that the ecological damage caused by the invasion is documented in detail as it unfolds over time.",
      "D": "Require boats to be inspected, cleaned, drained, and dried between launches at different lakes, targeting the transport pathway before new lakes are colonized."
    },
    "correct": "D",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nFor invasive species, prevention at the pathway is far more effective and cheaper than control after establishment, because an established population in a large lake is effectively impossible to remove. Zebra mussels spread between otherwise unconnected lakes almost entirely by human transport: microscopic veliger larvae survive in bilge water, live wells, and bait buckets, and adults attach to hulls and trailers. Clean-drain-dry inspection protocols interrupt exactly that step, which is why boat inspection stations are the standard management response. The proposal also avoids the serious unintended consequences of the alternatives, particularly introducing a further non-native species.\n\nWhy the other options fail:\nA — Introducing another non-native species to control an invader risks creating a second invasion, and it still does nothing to stop boats spreading mussels to new lakes.\nB — Lake-wide chemical treatment would kill native mussels and other invertebrates too, and it treats lakes already invaded rather than stopping transport between them.\nC — Monitoring produces valuable information but takes no action against either the established population or the pathway by which it spreads.\n\nDiagnostic focus: Propose an invasive-species response that targets the transport pathway rather than treating established populations."
  },
  {
    "id": 73,
    "unit": "Unit 9",
    "topic": "9.9",
    "category": "Unit 9: Global Change — Topic 9.9: Endangered Species",
    "big_idea": "EIN",
    "sp": "Skill 7.F",
    "skills": "Skill 7.F: Justify a proposed solution, by explaining potential advantages.",
    "difficulty": "3 — Analysis",
    "stem": "A conservation agency can protect a single large reserve or several small reserves of the same total area for a wide-ranging endangered carnivore. Which justification for choosing the single large reserve is strongest for this species?",
    "visual": "",
    "options": {
      "A": "Small reserves are always too small to contain any complete ecosystem, so only a single large reserve can protect the full range of species present in the region regardless of what the target species requires.",
      "B": "Several small reserves would be better for almost any species, so the single large reserve should be chosen only because it is cheaper to patrol and administer than several separate sites with their own staff and boundaries.",
      "C": "A single large reserve guarantees the species cannot go extinct, because a population confined to one continuous protected area is fully insulated from disease outbreaks, fire, and poaching pressure.",
      "D": "A wide-ranging carnivore needs a territory larger than any one small reserve, and a single large area has proportionally less edge, supporting a population big enough to stay genetically viable."
    },
    "correct": "D",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThe reserve-design choice depends on the biology of the target species, and three factors point the same way for a wide-ranging carnivore. First, minimum area: if an individual's home range exceeds the size of a small reserve, no small reserve can support even one territory, let alone a population. Second, edge effects: for a given total area, one large patch has a lower perimeter-to-area ratio than several small ones, so proportionally more interior habitat and less exposure to human contact, roads, and invasive species. Third, population viability: large carnivores occur at low densities, so only a large area holds enough individuals to avoid inbreeding and genetic drift. The honest counterpoint is that a single reserve concentrates risk from catastrophe, which is why corridors connecting reserves are often preferred to either extreme.\n\nWhy the other options fail:\nA — Small reserves can protect many species with modest area needs, and the decisive consideration here is this particular carnivore's requirements.\nB — This concedes the ecological argument and rests on administrative cost, which is a far weaker justification than the species' actual area requirements.\nC — A single reserve is in fact more vulnerable to a single catastrophe such as disease or fire, since there is no spatially separate population to serve as a refuge.\n\nDiagnostic focus: Justify a reserve-design decision from the target species' area, edge, and population viability requirements."
  },
  {
    "id": 74,
    "unit": "Unit 9",
    "topic": "9.10",
    "category": "Unit 9: Global Change — Topic 9.10: Human Impacts on Biodiversity",
    "big_idea": "EIN",
    "sp": "Skill 5.E",
    "skills": "Skill 5.E: Explain what the data implies or illustrates about environmental issues.",
    "difficulty": "2 — Application",
    "stem": "What do these data imply about conservation priorities, and what does the note beneath the table require readers to keep in mind?",
    "visual": "<svg viewBox='0 0 470 208' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='208' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='172.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='118.0' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Driver of biodiversity loss</text><line x1='235.0' y1='1' x2='235.0' y2='173.0' stroke='#DDD'/><text x='352.0' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Share of assessed threatened species</text><text x='352.0' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>affected (%)</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>Habitat loss and degradation</text><text x='352.0' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>72</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>Overexploitation</text><text x='352.0' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>48</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>Invasive species</text><text x='352.0' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>31</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>Pollution</text><text x='352.0' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>24</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='10.0' y='163.0' font-size='11.5' fill='#333' text-anchor='start'>Climate change</text><text x='352.0' y='163.0' font-size='11.5' fill='#333' text-anchor='middle'>19</text><line x1='1' y1='146.0' x2='469.0' y2='146.0' stroke='#ECECEC'/><text x='235' y='188' font-size='11' fill='#555' text-anchor='middle'>Percentage of assessed threatened species affected by each driver. Species may</text><text x='235' y='202' font-size='11' fill='#555' text-anchor='middle'>be affected by more than one driver, so values exceed 100% in total.</text></svg>",
    "options": {
      "A": "Because habitat loss affects 72 percent of threatened species, protecting habitat alone would be sufficient to remove the threat to nearly three-quarters of the species assessed in the table.",
      "B": "Climate change can be deprioritized because it affects the smallest share of threatened species at 19 percent, and the overlapping categories mean that figure likely overstates its true independent contribution to current losses.",
      "C": "Habitat protection should be the leading priority since it affects the most species, and because species face multiple overlapping drivers, addressing one will not necessarily secure them.",
      "D": "The five drivers together affect 194 percent of threatened species, which shows the assessment has double-counted species and that the figures cannot support any conservation priority at all."
    },
    "correct": "C",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nTwo conclusions follow. First, ranking: habitat loss and degradation affects 72% of assessed threatened species, far more than any other driver, so habitat protection and restoration reaches the greatest number of species per unit of effort — which is why protected areas and land-use planning dominate conservation practice. Second, the limit the note imposes: because the categories overlap and sum to 194%, the average threatened species faces about two drivers at once. That means the 72% figure is the share affected by habitat loss, not the share that habitat protection alone would save. Reading overlapping categories as if they were exclusive is the central error to avoid with this kind of table.\n\nWhy the other options fail:\nA — This is exactly what the overlap note rules out: a species affected by habitat loss may also face overexploitation or invasive species, so removing one threat may leave it threatened.\nB — A driver affecting 19% of threatened species is not negligible, and climate change is projected to grow in importance; overlap does not imply its contribution is overstated.\nD — The note explains that the total exceeds 100% because species face multiple drivers, which is a feature of the data rather than an error invalidating them.\n\nDiagnostic focus: Draw a priority conclusion from ranked data while respecting the constraint that overlapping categories impose on it."
  },
  {
    "id": 75,
    "unit": "Unit 9",
    "topic": "9.5",
    "category": "Unit 9: Global Change — Topic 9.5: Global Climate Change",
    "big_idea": "STB",
    "sp": "Skill 2.C",
    "skills": "Skill 2.C: Explain how environmental concepts and processes represented visually relate to broader environmental issues.",
    "difficulty": "2 — Application",
    "stem": "Which statement correctly describes what this curve shows about the rate of sea level rise, and connects it to the physical processes responsible?",
    "visual": "<svg viewBox='0 0 470 310' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='310' fill='#FFFFFF'/><line x1='68.0' y1='238.0' x2='446.0' y2='238.0' stroke='#E2E2E2'/><text x='61.0' y='242.0' font-size='11' fill='#444' text-anchor='end'>0</text><line x1='68.0' y1='188.5' x2='446.0' y2='188.5' stroke='#E2E2E2'/><text x='61.0' y='192.5' font-size='11' fill='#444' text-anchor='end'>50</text><line x1='68.0' y1='138.9' x2='446.0' y2='138.9' stroke='#E2E2E2'/><text x='61.0' y='142.9' font-size='11' fill='#444' text-anchor='end'>100</text><line x1='68.0' y1='89.4' x2='446.0' y2='89.4' stroke='#E2E2E2'/><text x='61.0' y='93.4' font-size='11' fill='#444' text-anchor='end'>150</text><line x1='68.0' y1='39.8' x2='446.0' y2='39.8' stroke='#E2E2E2'/><text x='61.0' y='43.8' font-size='11' fill='#444' text-anchor='end'>200</text><line x1='68.0' y1='238.0' x2='68.0' y2='243.0' stroke='#888'/><text x='68.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1900</text><line x1='162.5' y1='238.0' x2='162.5' y2='243.0' stroke='#888'/><text x='162.5' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1930</text><line x1='257.0' y1='238.0' x2='257.0' y2='243.0' stroke='#888'/><text x='257.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1960</text><line x1='351.5' y1='238.0' x2='351.5' y2='243.0' stroke='#888'/><text x='351.5' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1990</text><line x1='446.0' y1='238.0' x2='446.0' y2='243.0' stroke='#888'/><text x='446.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>2020</text><line x1='68.0' y1='20.0' x2='68.0' y2='238.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='238.0' x2='446.0' y2='238.0' stroke='#222222' stroke-width='1.6'/><polyline points='68.0,238.0 162.5,213.2 257.0,183.5 320.0,153.8 383.0,114.1 446.0,44.8' fill='none' stroke='#1565C0' stroke-width='2.4'/><circle cx='68.0' cy='238.0' r='3.1' fill='#1565C0'/><circle cx='162.5' cy='213.2' r='3.1' fill='#1565C0'/><circle cx='257.0' cy='183.5' r='3.1' fill='#1565C0'/><circle cx='320.0' cy='153.8' r='3.1' fill='#1565C0'/><circle cx='383.0' cy='114.1' r='3.1' fill='#1565C0'/><circle cx='446.0' cy='44.8' r='3.1' fill='#1565C0'/><text x='257.0' y='282' font-size='12' fill='#222222' text-anchor='middle'>Year</text><text x='16' y='129.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,129.0)'>Sea level rise since 1900 (mm)</text><text x='235' y='304' font-size='11' fill='#555' text-anchor='middle'>Global mean sea level relative to 1900.</text></svg>",
    "options": {
      "A": "The rate is accelerating, roughly tripling from the earliest interval to the most recent, driven by thermal expansion of warming seawater and added meltwater from glaciers and ice sheets.",
      "B": "The rate is accelerating, and the dominant cause is the increased volume of water delivered to the oceans by heavier rainfall over the ocean surface in a warmer atmosphere.",
      "C": "The rate is constant at about 1.6 mm per year across the whole record, which indicates a steady background process such as the slow adjustment of continents since the last glaciation rather than recent warming.",
      "D": "The rate is accelerating, and the rise is caused almost entirely by the melting of sea ice floating on the Arctic Ocean, which adds its volume of water to the ocean as it melts each summer."
    },
    "correct": "A",
    "explanation": "Big Idea: STB — Sustainability\n\nReading the slope across intervals shows acceleration: sea level rose 25 mm in the 30 years to 1930, about 0.83 mm per year, but 70 mm in the 20 years to 2020, about 3.5 mm per year — more than four times faster. Two processes dominate. Thermal expansion: water expands as it warms, and because the oceans have absorbed most of the excess heat trapped by greenhouse gases, that expansion alone raises sea level without adding any water. Land ice melt: mountain glaciers and the Greenland and Antarctic ice sheets transfer water that was stored on land into the ocean, adding volume. Floating sea ice is the important exception, since it already displaces its own weight and so contributes almost nothing on melting.\n\nWhy the other options fail:\nB — Precipitation over the ocean is part of a closed cycle that returns water already in the system; it does not add net volume the way land ice melt does.\nC — The curve steepens visibly: about 0.83 mm per year in 1900-1930 versus about 3.5 mm per year in 2000-2020, so the rate is not constant.\nD — The acceleration is read correctly, but floating sea ice already displaces its own weight of water, so melting it does not raise sea level appreciably.\n\nDiagnostic focus: Read acceleration from a curve's changing slope and attribute it to thermal expansion and land ice melt rather than sea ice or precipitation."
  },
  {
    "id": 76,
    "unit": "Unit 9",
    "topic": "9.4",
    "category": "Unit 9: Global Change — Topic 9.4: Increases in the Greenhouse Gases",
    "big_idea": "STB",
    "sp": "Skill 5.B",
    "skills": "Skill 5.B: Describe relationships among variables in data represented.",
    "difficulty": "2 — Application",
    "stem": "Which statement correctly describes the relationship between the variables in this table, and draws the right conclusion about carbon dioxide?",
    "visual": "<svg viewBox='0 0 470 168' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='168' fill='#FFFFFF'/><rect x='1' y='1' width='468.0' height='146.0' fill='none' stroke='#BBB'/><rect x='1' y='1' width='468.0' height='42' fill='#F2EFE9'/><text x='52.4' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Gas</text><line x1='103.9' y1='1' x2='103.9' y2='147.0' stroke='#DDD'/><text x='160.4' y='19.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Atmospheric</text><text x='160.4' y='31.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>lifetime</text><line x1='217.0' y1='1' x2='217.0' y2='147.0' stroke='#DDD'/><text x='260.7' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>100-year GWP</text><line x1='304.4' y1='1' x2='304.4' y2='147.0' stroke='#DDD'/><text x='386.7' y='25.0' font-size='11' font-weight='bold' fill='#222222' text-anchor='middle'>Main anthropogenic source</text><line x1='1' y1='42' x2='469.0' y2='42' stroke='#999' stroke-width='1.4'/><text x='10.0' y='59.0' font-size='11.5' fill='#333' text-anchor='start'>Carbon dioxide</text><text x='160.4' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>centuries</text><text x='260.7' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>1</text><text x='386.7' y='59.0' font-size='11.5' fill='#333' text-anchor='middle'>fossil fuel combustion</text><rect x='1' y='68.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='85.0' font-size='11.5' fill='#333' text-anchor='start'>Methane</text><text x='160.4' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>~12 years</text><text x='260.7' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>28</text><text x='386.7' y='85.0' font-size='11.5' fill='#333' text-anchor='middle'>livestock, landfills, gas leaks</text><line x1='1' y1='68.0' x2='469.0' y2='68.0' stroke='#ECECEC'/><text x='10.0' y='111.0' font-size='11.5' fill='#333' text-anchor='start'>Nitrous oxide</text><text x='160.4' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>~115 years</text><text x='260.7' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>265</text><text x='386.7' y='111.0' font-size='11.5' fill='#333' text-anchor='middle'>fertilizer, manure</text><line x1='1' y1='94.0' x2='469.0' y2='94.0' stroke='#ECECEC'/><rect x='1' y='120.0' width='468.0' height='26' fill='#FAFAF8'/><text x='10.0' y='137.0' font-size='11.5' fill='#333' text-anchor='start'>CFC-12</text><text x='160.4' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>~100 years</text><text x='260.7' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>10,200</text><text x='386.7' y='137.0' font-size='11.5' fill='#333' text-anchor='middle'>legacy refrigerants</text><line x1='1' y1='120.0' x2='469.0' y2='120.0' stroke='#ECECEC'/><text x='235' y='162' font-size='11' fill='#555' text-anchor='middle'>Properties of four greenhouse gases.</text></svg>",
    "options": {
      "A": "CFC-12 is currently the single largest driver of warming because its global warming potential of 10,200 is by far the highest value in the table and potential alone determines total contribution.",
      "B": "Methane is the most urgent gas to control because it has the shortest lifetime of the four, which means its concentration responds fastest to emission cuts and its warming effect is therefore the largest.",
      "C": "Global warming potential is not determined by lifetime, and carbon dioxide drives the most warming overall despite the lowest potential because it is emitted in far greater quantities.",
      "D": "Global warming potential rises consistently with atmospheric lifetime, and carbon dioxide therefore contributes least to warming of the four gases because it has both the lowest potential and a lifetime comparable to the others."
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nThe two numeric columns do not track each other: nitrous oxide persists for about 115 years with a potential of 265, while CFC-12 persists for about 100 years with a potential of 10,200. Potential depends on how strongly a molecule absorbs infrared as well as how long it lasts. The essential further step is that total warming contribution equals potential times quantity emitted. Carbon dioxide has a potential of 1 by definition, the lowest in the table, yet it is emitted in billions of tonnes annually, which makes it the dominant driver of current warming. The high-potential gases matter per tonne but are emitted in far smaller amounts, which is why mitigation policy concentrates on carbon dioxide while also targeting methane for its fast response.\n\nWhy the other options fail:\nA — Total contribution is potential multiplied by the quantity emitted, and CFC-12 emissions are now very small because the Montreal Protocol phased the compound out.\nB — The short-lifetime point is a genuine reason methane cuts act quickly, but a short lifetime reduces rather than increases a gas's cumulative warming effect.\nD — The pattern fails in the table: nitrous oxide has a longer lifetime than CFC-12 but a far lower potential, and carbon dioxide's emission volume makes it the largest contributor.\n\nDiagnostic focus: Recognize that two tabulated variables need not co-vary, and combine potency with emission quantity to rank total contribution."
  },
  {
    "id": 77,
    "unit": "Unit 9",
    "topic": "9.1",
    "category": "Unit 9: Global Change — Topic 9.1: Stratospheric Ozone Depletion",
    "big_idea": "STB",
    "sp": "Skill 2.A",
    "skills": "Skill 2.A: Describe characteristics of an environmental concept, process, or model represented visually.",
    "difficulty": "1 — Foundational",
    "stem": "Which description of the pattern shown by this record is accurate?",
    "visual": "<svg viewBox='0 0 470 324' xmlns='http://www.w3.org/2000/svg' font-family='Helvetica, Arial, sans-serif' role='img' style='max-width:100%;height:auto'><rect width='470' height='324' fill='#FFFFFF'/><line x1='68.0' y1='238.0' x2='446.0' y2='238.0' stroke='#E2E2E2'/><text x='61.0' y='242.0' font-size='11' fill='#444' text-anchor='end'>80</text><line x1='68.0' y1='183.5' x2='446.0' y2='183.5' stroke='#E2E2E2'/><text x='61.0' y='187.5' font-size='11' fill='#444' text-anchor='end'>120</text><line x1='68.0' y1='129.0' x2='446.0' y2='129.0' stroke='#E2E2E2'/><text x='61.0' y='133.0' font-size='11' fill='#444' text-anchor='end'>160</text><line x1='68.0' y1='74.5' x2='446.0' y2='74.5' stroke='#E2E2E2'/><text x='61.0' y='78.5' font-size='11' fill='#444' text-anchor='end'>200</text><line x1='68.0' y1='20.0' x2='446.0' y2='20.0' stroke='#E2E2E2'/><text x='61.0' y='24.0' font-size='11' fill='#444' text-anchor='end'>240</text><line x1='68.0' y1='238.0' x2='68.0' y2='243.0' stroke='#888'/><text x='68.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1979</text><line x1='162.5' y1='238.0' x2='162.5' y2='243.0' stroke='#888'/><text x='162.5' y='256.0' font-size='11' fill='#444' text-anchor='middle'>1990</text><line x1='248.4' y1='238.0' x2='248.4' y2='243.0' stroke='#888'/><text x='248.4' y='256.0' font-size='11' fill='#444' text-anchor='middle'>2000</text><line x1='351.5' y1='238.0' x2='351.5' y2='243.0' stroke='#888'/><text x='351.5' y='256.0' font-size='11' fill='#444' text-anchor='middle'>2012</text><line x1='446.0' y1='238.0' x2='446.0' y2='243.0' stroke='#888'/><text x='446.0' y='256.0' font-size='11' fill='#444' text-anchor='middle'>2023</text><line x1='68.0' y1='20.0' x2='68.0' y2='238.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='238.0' x2='446.0' y2='238.0' stroke='#222222' stroke-width='1.6'/><line x1='68.0' y1='47.2' x2='446.0' y2='47.2' stroke='#888' stroke-width='1.2' stroke-dasharray='5 4'/><text x='442.0' y='42.2' font-size='10' fill='#666' text-anchor='end' stroke='#FFFFFF' stroke-width='3' paint-order='stroke'>ozone hole threshold 220 DU</text><polyline points='68.0,40.4 119.5,81.3 162.5,129.0 205.5,176.7 248.4,197.1 300.0,217.6 351.5,176.7 403.0,156.2 446.0,142.6' fill='none' stroke='#6A1B9A' stroke-width='2.4'/><circle cx='68.0' cy='40.4' r='3.1' fill='#6A1B9A'/><circle cx='119.5' cy='81.3' r='3.1' fill='#6A1B9A'/><circle cx='162.5' cy='129.0' r='3.1' fill='#6A1B9A'/><circle cx='205.5' cy='176.7' r='3.1' fill='#6A1B9A'/><circle cx='248.4' cy='197.1' r='3.1' fill='#6A1B9A'/><circle cx='300.0' cy='217.6' r='3.1' fill='#6A1B9A'/><circle cx='351.5' cy='176.7' r='3.1' fill='#6A1B9A'/><circle cx='403.0' cy='156.2' r='3.1' fill='#6A1B9A'/><circle cx='446.0' cy='142.6' r='3.1' fill='#6A1B9A'/><text x='257.0' y='282' font-size='12' fill='#222222' text-anchor='middle'>Year</text><text x='16' y='129.0' font-size='12' fill='#222222' text-anchor='middle' transform='rotate(-90 16,129.0)'>Minimum ozone column (Dobson units)</text><text x='235' y='304' font-size='11' fill='#555' text-anchor='middle'>Annual minimum ozone column measured over Antarctica each spring. The Montreal</text><text x='235' y='318' font-size='11' fill='#555' text-anchor='middle'>Protocol entered force in 1989.</text></svg>",
    "options": {
      "A": "Minimum ozone rose steadily from 1979 through 2023, and the values below the threshold line early in the record reflect measurement limitations of the instruments available at that time.",
      "B": "Minimum ozone fell steeply from 1979 to a low near 2006, then partially recovered through 2023 while remaining below the 220 Dobson unit threshold throughout.",
      "C": "Minimum ozone declined continuously throughout the whole record from 1979 to 2023, which indicates that the Montreal Protocol produced no detectable change in Antarctic stratospheric ozone.",
      "D": "Minimum ozone fell steeply from 1979 to a low near 2006, then recovered to above the 220 Dobson unit threshold by 2023, indicating that the Antarctic ozone hole has now closed completely."
    },
    "correct": "B",
    "explanation": "Big Idea: STB — Sustainability\n\nThe curve has two distinct phases. From 1979 to about 2006 the annual minimum falls from 225 to 95 Dobson units, crossing below the 220 threshold that defines an ozone hole in the early 1980s. From about 2006 onward it rises to roughly 150 Dobson units by 2023, a partial recovery consistent with declining stratospheric chlorine following the Montreal Protocol. Describing the pattern accurately requires both parts and the position relative to the reference line: there is genuine improvement, and the values are still far below the threshold. Full recovery is expected to take until roughly the second half of this century because of the long atmospheric lifetimes of the compounds already released.\n\nWhy the other options fail:\nA — The record falls sharply through the first half, from 225 to 95 Dobson units, before any recovery begins, so it does not rise steadily.\nC — The record reverses direction after about 2006, rising from 95 to 150 Dobson units, so the decline is not continuous.\nD — The 2023 value is about 150 Dobson units, well below the 220 threshold line, so the hole has not closed even though it has shrunk.\n\nDiagnostic focus: Describe a two-phase trend and state its position relative to a reference line without overstating recovery."
  },
  {
    "id": 78,
    "unit": "Unit 9",
    "topic": "9.8",
    "category": "Unit 9: Global Change — Topic 9.8: Invasive Species",
    "big_idea": "EIN",
    "sp": "Skill 4.C",
    "skills": "Skill 4.C: Describe an aspect of a research method, design, and/or measure used.",
    "difficulty": "2 — Application",
    "stem": "To test whether an invasive reed suppresses native marsh plants by shading them, researchers clip reed stems in half of 20 paired plots and measure native plant cover after one season. Which aspect of this design most needs strengthening, and why?",
    "visual": "",
    "options": {
      "A": "The sample of 20 paired plots is too small to detect any difference in native plant cover, so the study should be expanded to several hundred plots before any treatment is applied to them.",
      "B": "Clipping removes both shading and root competition at once, so a shade-only treatment such as adding artificial shade to reed-free plots is needed to isolate the proposed mechanism.",
      "C": "Native plant cover is the wrong response variable, and the researchers should instead measure the light reaching the marsh surface in clipped and unclipped plots to test their hypothesis.",
      "D": "Measuring after one season is too short an interval, so the study should run for at least a decade before native plant cover is recorded in either the clipped or the unclipped plots."
    },
    "correct": "B",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nThe hypothesis names a specific mechanism — suppression by shading — so the design must be able to attribute any effect to shading rather than to the invader's other influences. Clipping stems removes the canopy but also removes the above-ground tissue supporting root competition for water and nutrients, and leaves the root system in place to decompose and release nutrients. If native cover increases in clipped plots, shading, nutrient competition, and nutrient release are all candidate explanations. Adding a treatment that manipulates shade alone, such as shade cloth over reed-free plots matched to the light levels measured under intact reed, separates the mechanism from the correlated effects. The paired-plot structure and the one-season interval are reasonable features of the design.\n\nWhy the other options fail:\nA — Twenty pairs is a workable sample for a paired design, and increasing it would not address the fact that the treatment changes more than one thing at once.\nC — Light measurements would confirm that clipping changes light but would no longer test the biological effect on native plants, which is the outcome of interest.\nD — A longer study would show more about recovery trajectories, but it would still confound shading with root competition in exactly the same way.\n\nDiagnostic focus: Evaluate whether an experimental treatment isolates the hypothesized mechanism, rather than defaulting to sample size or duration critiques."
  },
  {
    "id": 79,
    "unit": "Unit 9",
    "topic": "9.4",
    "category": "Unit 9: Global Change — Topic 9.4: Increases in the Greenhouse Gases",
    "big_idea": "STB",
    "sp": "Skill 6.C",
    "skills": "Skill 6.C: Calculate an accurate numeric answer with appropriate units.",
    "difficulty": "1 — Foundational",
    "stem": "Atmospheric carbon dioxide measured at Mauna Loa rose from about 315 ppm in 1958 to about 424 ppm in 2024. By what percentage did the concentration increase over that period?",
    "visual": "",
    "options": {
      "A": "3.5%",
      "B": "25.7%",
      "C": "34.6%",
      "D": "109%"
    },
    "correct": "C",
    "explanation": "Big Idea: STB — Sustainability\n\nPercentage increase is the change divided by the original value: (424 − 315) ÷ 315 × 100 = 109 ÷ 315 × 100 = 34.6%. Choosing the denominator correctly matters — using the final value instead gives 25.7%, which answers a different question. For context, the pre-industrial concentration was about 280 ppm, so the rise since 1958 is only part of a larger increase, and the Mauna Loa record is valuable precisely because it is a continuous direct measurement begun before most of that change occurred.\n\nWhy the other options fail:\nA — This is the correct percentage divided by ten, a decimal slip from expressing the ratio 1.3460 as a percentage.\nB — This divides the increase by the 2024 value instead of the 1958 value. A percentage increase is always measured against the starting value.\nD — This is the increase in ppm, 109, reported as though it were a percentage. The difference must still be divided by the original concentration.\n\nDiagnostic focus: Compute a percentage increase against the original value, not the final value."
  },
  {
    "id": 80,
    "unit": "Unit 9",
    "topic": "9.10",
    "category": "Unit 9: Global Change — Topic 9.10: Human Impacts on Biodiversity",
    "big_idea": "EIN",
    "sp": "Skill 7.C",
    "skills": "Skill 7.C: Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "difficulty": "3 — Analysis",
    "stem": "A government proposes paying landowners to plant fast-growing non-native eucalyptus across degraded grassland to sequester carbon. Which assessment of the unintended consequences of this proposal is most accurate?",
    "visual": "",
    "options": {
      "A": "Carbon is sequestered, but planting trees on native grassland can reduce habitat for grassland species, draw down water tables, raise fire risk, and allow the non-native trees to spread.",
      "B": "The chief problem is that planted forests release more carbon than they absorb over their lifetime, because soil disturbance during planting oxidizes more soil carbon than the trees can ever accumulate.",
      "C": "The main unintended consequence is that eucalyptus grows too slowly to sequester a meaningful quantity of carbon within the time frame that matters for climate mitigation.",
      "D": "The proposal carries essentially no ecological risk, because adding trees to any landscape increases biomass, soil carbon, and habitat complexity simultaneously, so grassland species benefit alongside the climate."
    },
    "correct": "A",
    "explanation": "Big Idea: EIN — Interactions Between Different Species and the Environment\n\nAfforestation delivers real carbon sequestration, and the fair assessment names that benefit alongside costs that follow from the choice of site and species. Native grasslands are not degraded forests; they support specialist birds, insects, and plants that disappear under a closed canopy, and much of their own carbon is stored below ground in deep root systems and soil. Fast-growing eucalyptus has high water demand and can lower local water tables and stream flows in dry regions. Its oils and shed litter make eucalyptus stands notably fire-prone, and a fire releases the stored carbon. As a vigorous non-native it can also spread beyond planting boundaries. None of this makes carbon sequestration a bad goal; it argues for species and sites chosen so that the climate benefit does not come at the cost of the ecosystem being replaced.\n\nWhy the other options fail:\nB — Planting disturbance does release some soil carbon, but a fast-growing plantation accumulates far more carbon in biomass than that initial loss.\nC — Eucalyptus is chosen precisely because it grows fast; the problems lie in its ecological effects rather than in the rate of carbon uptake.\nD — Grassland specialists are adapted to open habitat and are displaced rather than helped by tree cover, so added complexity is not a universal benefit.\n\nDiagnostic focus: Identify the unintended consequences of a carbon-sequestration proposal arising from site and species choice, without denying its benefit."
  }
];

const APES_META = {
  "course": "AP Environmental Science",
  "title": "AP Environmental Science — Complete Diagnostic Assessment (2026-2027 CED)",
  "cedYear": "2026-2027",
  "cedSource": "College Board AP Environmental Science CED, effective Fall 2020",
  "totalQuestions": 80,
  "examMinutes": 90,
  "calculatorNote": "A four-function (with square root), scientific, or graphing calculator is permitted on the entire AP Environmental Science exam. No formula or equation sheet is provided, so quantitative relationships must be recalled.",
  "units": [
    {
      "code": "Unit 1",
      "number": 1,
      "name": "The Living World: Ecosystems",
      "weight": "6-8%",
      "questions": [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    },
    {
      "code": "Unit 2",
      "number": 2,
      "name": "The Living World: Biodiversity",
      "weight": "6-8%",
      "questions": [
        7,
        8,
        9,
        10,
        11,
        12
      ]
    },
    {
      "code": "Unit 3",
      "number": 3,
      "name": "Populations",
      "weight": "10-15%",
      "questions": [
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21
      ]
    },
    {
      "code": "Unit 4",
      "number": 4,
      "name": "Earth Systems and Resources",
      "weight": "10-15%",
      "questions": [
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30
      ]
    },
    {
      "code": "Unit 5",
      "number": 5,
      "name": "Land and Water Use",
      "weight": "10-15%",
      "questions": [
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40
      ]
    },
    {
      "code": "Unit 6",
      "number": 6,
      "name": "Energy Resources and Consumption",
      "weight": "10-15%",
      "questions": [
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50
      ]
    },
    {
      "code": "Unit 7",
      "number": 7,
      "name": "Atmospheric Pollution",
      "weight": "7-10%",
      "questions": [
        51,
        52,
        53,
        54,
        55,
        56,
        57
      ]
    },
    {
      "code": "Unit 8",
      "number": 8,
      "name": "Aquatic and Terrestrial Pollution",
      "weight": "7-10%",
      "questions": [
        58,
        59,
        60,
        61,
        62,
        63,
        64
      ]
    },
    {
      "code": "Unit 9",
      "number": 9,
      "name": "Global Change",
      "weight": "15-20%",
      "questions": [
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80
      ]
    }
  ],
  "bigIdeas": {
    "ERT": "Interactions Between Earth Systems",
    "ENG": "Energy Transfer",
    "EIN": "Interactions Between Different Species and the Environment",
    "STB": "Sustainability"
  },
  "bigIdeaDesc": {
    "ENG": "Energy conversions underlie all ecological processes; as energy flows through a system, more of it becomes unusable at each step.",
    "ERT": "The Earth is one interconnected system whose natural subsystems change over time and space and vary in their ability to recover from disturbance.",
    "EIN": "Humans alter natural systems, and technology and population growth have increased both the rate and the scale of that impact.",
    "STB": "Human survival depends on developing practices that achieve sustainable systems."
  },
  "practices": [
    {
      "code": "Practice 1",
      "name": "Concept Explanation",
      "description": "Explain environmental concepts, processes, and models presented in written format."
    },
    {
      "code": "Practice 2",
      "name": "Visual Representations",
      "description": "Analyze visual representations of environmental concepts and processes."
    },
    {
      "code": "Practice 3",
      "name": "Text Analysis",
      "description": "Analyze sources of information about environmental issues."
    },
    {
      "code": "Practice 4",
      "name": "Scientific Experiments",
      "description": "Analyze research studies that test environmental principles."
    },
    {
      "code": "Practice 5",
      "name": "Data Analysis",
      "description": "Analyze and interpret quantitative data represented in tables, charts, and graphs."
    },
    {
      "code": "Practice 6",
      "name": "Mathematical Routines",
      "description": "Apply quantitative methods to address environmental concepts."
    },
    {
      "code": "Practice 7",
      "name": "Environmental Solutions",
      "description": "Propose and justify solutions to environmental problems."
    }
  ],
  "skills": {
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
    "5.E": "Explain what the data implies or illustrates about environmental issues.",
    "6.B": "Apply appropriate mathematical relationships to solve a problem, with work shown.",
    "6.C": "Calculate an accurate numeric answer with appropriate units.",
    "7.C": "Describe disadvantages, advantages, or unintended consequences for potential solutions.",
    "7.D": "Use data and evidence to support a potential solution.",
    "7.E": "Make a claim that proposes a solution to an environmental problem in an applied context.",
    "7.F": "Justify a proposed solution, by explaining potential advantages."
  },
  "allSkills": {
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
    "7.F": "Justify a proposed solution, by explaining potential advantages."
  },
  "topics": {
    "1.1": {
      "bigIdea": "ERT",
      "title": "Introduction to Ecosystems"
    },
    "1.2": {
      "bigIdea": "ERT",
      "title": "Terrestrial Biomes"
    },
    "1.3": {
      "bigIdea": "ERT",
      "title": "Aquatic Biomes"
    },
    "1.4": {
      "bigIdea": "ERT",
      "title": "The Carbon Cycle"
    },
    "1.5": {
      "bigIdea": "ERT",
      "title": "The Nitrogen Cycle"
    },
    "1.6": {
      "bigIdea": "ERT",
      "title": "The Phosphorus Cycle"
    },
    "1.7": {
      "bigIdea": "ERT",
      "title": "The Hydrologic (Water) Cycle"
    },
    "1.8": {
      "bigIdea": "ENG",
      "title": "Primary Productivity"
    },
    "1.9": {
      "bigIdea": "ENG",
      "title": "Trophic Levels"
    },
    "1.10": {
      "bigIdea": "ENG",
      "title": "Energy Flow and the 10% Rule"
    },
    "1.11": {
      "bigIdea": "ENG",
      "title": "Food Chains and Food Webs"
    },
    "2.1": {
      "bigIdea": "ERT",
      "title": "Introduction to Biodiversity"
    },
    "2.2": {
      "bigIdea": "ERT",
      "title": "Ecosystem Services"
    },
    "2.3": {
      "bigIdea": "ERT",
      "title": "Island Biogeography"
    },
    "2.4": {
      "bigIdea": "ERT",
      "title": "Ecological Tolerance"
    },
    "2.5": {
      "bigIdea": "ERT",
      "title": "Natural Disruptions to Ecosystems"
    },
    "2.6": {
      "bigIdea": "ERT",
      "title": "Adaptations"
    },
    "2.7": {
      "bigIdea": "ERT",
      "title": "Ecological Succession"
    },
    "3.1": {
      "bigIdea": "ERT",
      "title": "Generalist and Specialist Species"
    },
    "3.2": {
      "bigIdea": "ERT",
      "title": "K-Selected r-Selected Species"
    },
    "3.3": {
      "bigIdea": "ERT",
      "title": "Survivorship Curves"
    },
    "3.4": {
      "bigIdea": "ERT",
      "title": "Carrying Capacity"
    },
    "3.5": {
      "bigIdea": "ERT",
      "title": "Population Growth and Resource Availability"
    },
    "3.6": {
      "bigIdea": "EIN",
      "title": "Age Structure Diagrams"
    },
    "3.7": {
      "bigIdea": "EIN",
      "title": "Total Fertility Rate"
    },
    "3.8": {
      "bigIdea": "EIN",
      "title": "Human Population Dynamics"
    },
    "3.9": {
      "bigIdea": "EIN",
      "title": "Demographic Transition"
    },
    "4.1": {
      "bigIdea": "ERT",
      "title": "Plate Tectonics"
    },
    "4.2": {
      "bigIdea": "ERT",
      "title": "Soil Formation and Erosion"
    },
    "4.3": {
      "bigIdea": "ERT",
      "title": "Soil Composition and Properties"
    },
    "4.4": {
      "bigIdea": "ERT",
      "title": "Earth's Atmosphere"
    },
    "4.5": {
      "bigIdea": "ERT",
      "title": "Global Wind Patterns"
    },
    "4.6": {
      "bigIdea": "ERT",
      "title": "Watersheds"
    },
    "4.7": {
      "bigIdea": "ENG",
      "title": "Solar Radiation and Earth's Seasons"
    },
    "4.8": {
      "bigIdea": "ENG",
      "title": "Earth's Geography and Climate"
    },
    "4.9": {
      "bigIdea": "ENG",
      "title": "El Nino and La Nina"
    },
    "5.1": {
      "bigIdea": "EIN",
      "title": "The Tragedy of the Commons"
    },
    "5.2": {
      "bigIdea": "EIN",
      "title": "Clearcutting"
    },
    "5.3": {
      "bigIdea": "EIN",
      "title": "The Green Revolution"
    },
    "5.4": {
      "bigIdea": "EIN",
      "title": "Impacts of Agricultural Practices"
    },
    "5.5": {
      "bigIdea": "EIN",
      "title": "Irrigation Methods"
    },
    "5.6": {
      "bigIdea": "EIN",
      "title": "Pest Control Methods"
    },
    "5.7": {
      "bigIdea": "EIN",
      "title": "Meat Production Methods"
    },
    "5.8": {
      "bigIdea": "EIN",
      "title": "Impacts of Overfishing"
    },
    "5.9": {
      "bigIdea": "EIN",
      "title": "Impacts of Mining"
    },
    "5.10": {
      "bigIdea": "EIN",
      "title": "Impacts of Urbanization"
    },
    "5.11": {
      "bigIdea": "EIN",
      "title": "Ecological Footprints"
    },
    "5.12": {
      "bigIdea": "STB",
      "title": "Introduction to Sustainability"
    },
    "5.13": {
      "bigIdea": "STB",
      "title": "Methods to Reduce Urban Runoff"
    },
    "5.14": {
      "bigIdea": "STB",
      "title": "Integrated Pest Management"
    },
    "5.15": {
      "bigIdea": "STB",
      "title": "Sustainable Agriculture"
    },
    "5.16": {
      "bigIdea": "STB",
      "title": "Aquaculture"
    },
    "5.17": {
      "bigIdea": "STB",
      "title": "Sustainable Forestry"
    },
    "6.1": {
      "bigIdea": "ENG",
      "title": "Renewable and Nonrenewable Resources"
    },
    "6.2": {
      "bigIdea": "ENG",
      "title": "Global Energy Consumption"
    },
    "6.3": {
      "bigIdea": "ENG",
      "title": "Fuel Types and Uses"
    },
    "6.4": {
      "bigIdea": "ENG",
      "title": "Distribution of Natural Energy Resources"
    },
    "6.5": {
      "bigIdea": "ENG",
      "title": "Fossil Fuels"
    },
    "6.6": {
      "bigIdea": "ENG",
      "title": "Nuclear Power"
    },
    "6.7": {
      "bigIdea": "ENG",
      "title": "Energy from Biomass"
    },
    "6.8": {
      "bigIdea": "ENG",
      "title": "Solar Energy"
    },
    "6.9": {
      "bigIdea": "ENG",
      "title": "Hydroelectric Power"
    },
    "6.10": {
      "bigIdea": "ENG",
      "title": "Geothermal Energy"
    },
    "6.11": {
      "bigIdea": "ENG",
      "title": "Hydrogen Fuel Cell"
    },
    "6.12": {
      "bigIdea": "ENG",
      "title": "Wind Energy"
    },
    "6.13": {
      "bigIdea": "ENG",
      "title": "Energy Conservation"
    },
    "7.1": {
      "bigIdea": "STB",
      "title": "Introduction to Air Pollution"
    },
    "7.2": {
      "bigIdea": "STB",
      "title": "Photochemical Smog"
    },
    "7.3": {
      "bigIdea": "STB",
      "title": "Thermal Inversion"
    },
    "7.4": {
      "bigIdea": "STB",
      "title": "Atmospheric CO2 and Particulates"
    },
    "7.5": {
      "bigIdea": "STB",
      "title": "Indoor Air Pollutants"
    },
    "7.6": {
      "bigIdea": "STB",
      "title": "Reduction of Air Pollutants"
    },
    "7.7": {
      "bigIdea": "STB",
      "title": "Acid Rain"
    },
    "7.8": {
      "bigIdea": "STB",
      "title": "Noise Pollution"
    },
    "8.1": {
      "bigIdea": "STB",
      "title": "Sources of Pollution"
    },
    "8.2": {
      "bigIdea": "STB",
      "title": "Human Impacts on Ecosystems"
    },
    "8.3": {
      "bigIdea": "STB",
      "title": "Endocrine Disruptors"
    },
    "8.4": {
      "bigIdea": "STB",
      "title": "Human Impacts on Wetlands and Mangroves"
    },
    "8.5": {
      "bigIdea": "STB",
      "title": "Eutrophication"
    },
    "8.6": {
      "bigIdea": "STB",
      "title": "Thermal Pollution"
    },
    "8.7": {
      "bigIdea": "STB",
      "title": "Persistent Organic Pollutants (POPs)"
    },
    "8.8": {
      "bigIdea": "STB",
      "title": "Bioaccumulation and Biomagnification"
    },
    "8.9": {
      "bigIdea": "STB",
      "title": "Solid Waste Disposal"
    },
    "8.10": {
      "bigIdea": "STB",
      "title": "Waste Reduction Methods"
    },
    "8.11": {
      "bigIdea": "STB",
      "title": "Sewage Treatment"
    },
    "8.12": {
      "bigIdea": "EIN",
      "title": "Lethal Dose 50% (LD50)"
    },
    "8.13": {
      "bigIdea": "EIN",
      "title": "Dose Response Curve"
    },
    "8.14": {
      "bigIdea": "EIN",
      "title": "Pollution and Human Health"
    },
    "8.15": {
      "bigIdea": "EIN",
      "title": "Pathogens and Infectious Diseases"
    },
    "9.1": {
      "bigIdea": "STB",
      "title": "Stratospheric Ozone Depletion"
    },
    "9.2": {
      "bigIdea": "STB",
      "title": "Reducing Ozone Depletion"
    },
    "9.3": {
      "bigIdea": "STB",
      "title": "The Greenhouse Effect"
    },
    "9.4": {
      "bigIdea": "STB",
      "title": "Increases in the Greenhouse Gases"
    },
    "9.5": {
      "bigIdea": "STB",
      "title": "Global Climate Change"
    },
    "9.6": {
      "bigIdea": "STB",
      "title": "Ocean Warming"
    },
    "9.7": {
      "bigIdea": "STB",
      "title": "Ocean Acidification"
    },
    "9.8": {
      "bigIdea": "EIN",
      "title": "Invasive Species"
    },
    "9.9": {
      "bigIdea": "EIN",
      "title": "Endangered Species"
    },
    "9.10": {
      "bigIdea": "EIN",
      "title": "Human Impacts on Biodiversity"
    }
  }
};


// Aliases kept so any page referencing the generic names keeps working.
const AP_ENV_QUESTIONS = APES_QUESTIONS;
const AP_ENV_META = APES_META;
if (typeof window !== 'undefined') {
  window.APES_QUESTIONS = APES_QUESTIONS;
  window.APES_META = APES_META;
}
