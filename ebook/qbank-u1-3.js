// ═══════════════════════════════════════════════════════════════
// AP ENVIRONMENTAL SCIENCE — QUESTION BANK: UNITS 1, 2, 3
// CED-aligned MCQs with stimulus, misconception-driven distractors
// ═══════════════════════════════════════════════════════════════
window.QBANK_U1_3 = [

// ─────────────────────────────────────────────────────────────────
// UNIT 1 — THE LIVING WORLD: ECOSYSTEMS
// ─────────────────────────────────────────────────────────────────
{
  id: 101, unit: 1, topic: "1.1", topicName: "Niche & Resource Partitioning",
  skill: "evaluation", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Three species of hawk forage in the same woodland: red-tailed hawks hunt open fields for small mammals, Cooper's hawks hunt forest understory for birds, and broad-winged hawks hunt forest floor for reptiles and frogs.",
  stem: "The coexistence of these three hawk species in the same woodland most strongly supports which ecological principle, and what does the data imply about competitive exclusion?",
  options: {
    A: "Competitive exclusion — one species will eventually outcompete the others, reducing the community to a single hawk species.",
    B: "Resource partitioning — the species have subdivided the habitat and prey types, reducing niche overlap sufficiently to allow stable coexistence.",
    C: "Character displacement — the hawks evolved different body sizes because they directly compete for identical resources.",
    D: "Mutualism — the three species collectively suppress rodent, bird, and reptile populations to mutual benefit."
  },
  correct: "B",
  rationale: "B. Resource partitioning through spatial and dietary niche differentiation allows these species to coexist without triggering competitive exclusion. Competitive exclusion (A) applies when niches are identical — it predicts elimination, not coexistence. Character displacement (C) refers to morphological evolution in sympatry, which isn't demonstrated here. Mutualism (D) requires reciprocal benefit between species, not described."
},
{
  id: 102, unit: 1, topic: "1.2", topicName: "Terrestrial Biomes",
  skill: "analysis", difficulty: "medium", cedSkill: "Identifying & Analyzing Data",
  stimulus: "A climograph shows the following monthly data for Location X: temperature range 22–28°C (essentially flat), precipitation ranging from near-zero in June–August to 250+ mm in November–March.",
  stem: "Based on the climograph, Location X is most likely which biome, and which abiotic factor primarily distinguishes it from a tropical rainforest?",
  options: {
    A: "Temperate deciduous forest — distinguished by lower annual temperatures",
    B: "Tropical dry forest / savanna — distinguished by a pronounced dry season despite warm temperatures year-round",
    C: "Boreal forest (taiga) — distinguished by coniferous trees adapted to cold winters",
    D: "Desert — distinguished by the near-zero precipitation months that cause permanent water deficit"
  },
  correct: "B",
  rationale: "B. High, stable temperatures (22–28°C) rule out boreal and temperate biomes. The strongly seasonal precipitation with a 3-month dry season distinguishes tropical dry forest or savanna from tropical rainforest, where precipitation is distributed more evenly throughout the year. Deserts (D) have chronically low annual precipitation, not just a seasonal minimum with very wet months."
},
{
  id: 103, unit: 1, topic: "1.4", topicName: "Primary Productivity",
  skill: "application", difficulty: "medium", cedSkill: "Quantitative Analysis",
  stimulus: "Data table for four ecosystems:\nEcosystem A: GPP = 9,000 gC/m²/yr; Rₚ = 3,600 gC/m²/yr\nEcosystem B: GPP = 1,200 gC/m²/yr; Rₚ = 400 gC/m²/yr\nEcosystem C: GPP = 500 gC/m²/yr; Rₚ = 180 gC/m²/yr\nEcosystem D: GPP = 6,000 gC/m²/yr; Rₚ = 2,800 gC/m²/yr",
  stem: "Which ecosystem has the highest net primary productivity (NPP) and is therefore likely to support the greatest consumer biomass per unit area?",
  options: {
    A: "Ecosystem A (NPP = 5,400 gC/m²/yr)",
    B: "Ecosystem B (NPP = 800 gC/m²/yr)",
    C: "Ecosystem C (NPP = 320 gC/m²/yr)",
    D: "Ecosystem D (NPP = 3,200 gC/m²/yr)"
  },
  correct: "A",
  rationale: "A. NPP = GPP − Rₚ: A = 5,400; B = 800; C = 320; D = 3,200. Ecosystem A's NPP is highest, representing the most biomass available to consumers. A common error is selecting Ecosystem D because of its high GPP — but the high respiration nearly halves its NPP. NPP, not GPP, determines energy available to heterotrophs."
},
{
  id: 104, unit: 1, topic: "1.5", topicName: "Carbon Cycle",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Ice core records show that over the past 800,000 years, atmospheric CO₂ has cycled between ~180 ppm during glacial maxima and ~280 ppm during interglacials. Since 1750, CO₂ has risen to over 420 ppm — a level not seen in at least 3 million years. The rate of increase (2–3 ppm/yr) is approximately 100× faster than any glacial-to-interglacial transition.",
  stem: "A student argues that because CO₂ has been higher in Earth's distant past, current increases are part of a natural cycle and not cause for concern. Which response most effectively refutes this argument using the data?",
  options: {
    A: "The argument is correct — ice cores confirm CO₂ naturally varies, so current levels are within historical norms.",
    B: "The rate of current increase (100× faster than natural cycles) is unprecedented in the ice core record, giving ecosystems and human societies far less time to adapt than during past natural transitions.",
    C: "Ice core data are unreliable, so the argument cannot be evaluated using this evidence.",
    D: "Past high CO₂ levels were beneficial for plant growth, so current increases should increase global NPP without negative consequences."
  },
  correct: "B",
  rationale: "B. The key distinction is RATE, not magnitude. The data explicitly state the current rate is ~100× faster than natural glacial-to-interglacial transitions. Even if absolute values had historical precedent, the speed of change prevents evolutionary and ecological adaptation. A misreads the data (420 ppm exceeds the 280 ppm interglacial maximum). C dismisses valid scientific evidence. D is a true-but-incomplete overgeneralization — elevated CO₂ can stimulate growth in some plants, but ignores drought, heat stress, and ecosystem disruption."
},
{
  id: 105, unit: 1, topic: "1.5", topicName: "Nitrogen Cycle",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: null,
  stem: "Industrial production of synthetic nitrogen fertilizers via the Haber-Bosch process has approximately doubled the rate of nitrogen fixation entering terrestrial ecosystems compared to pre-industrial levels. Which of the following is the most likely environmental consequence of this alteration to the nitrogen cycle?",
  options: {
    A: "Decreased NPP in agricultural fields due to nitrogen toxicity in most crop species.",
    B: "Eutrophication of downstream aquatic ecosystems via nitrogen-rich agricultural runoff causing algal blooms and hypoxia.",
    C: "A net decrease in atmospheric N₂O because excess soil nitrogen is converted back to N₂ by denitrifying bacteria.",
    D: "Improved biodiversity in nitrogen-limited ecosystems, because more nitrogen allows more plant species to coexist."
  },
  correct: "B",
  rationale: "B. Excess nitrogen from fertilizers that is not absorbed by crops enters waterways through runoff and leaching. This nitrogen fertilizes phytoplankton → algal blooms → decomposer oxygen consumption → hypoxic dead zones. The Gulf of Mexico dead zone is the canonical example. A is wrong — nitrogen typically increases, not decreases, crop NPP. C is wrong — excess soil N₂ actually increases N₂O production (a potent GHG) from denitrification. D is wrong — research shows nitrogen addition actually decreases plant diversity by favoring a few dominant, fast-growing species."
},
{
  id: 106, unit: 1, topic: "1.7", topicName: "Energy Flow & 10% Rule",
  skill: "application", difficulty: "easy", cedSkill: "Quantitative Analysis",
  stimulus: "A marsh ecosystem's net primary productivity is 8,000 kcal/m²/yr. The food chain proceeds: Marsh grasses → Marsh wrens → Marsh hawks.",
  stem: "Assuming 10% ecological efficiency at each trophic transfer, approximately how much energy (kcal/m²/yr) is available to marsh hawks?",
  options: { A: "800 kcal/m²/yr", B: "80 kcal/m²/yr", C: "8 kcal/m²/yr", D: "0.8 kcal/m²/yr" },
  correct: "B",
  rationale: "B. Marsh grasses = 8,000 kcal. Marsh wrens (primary consumers) = 8,000 × 0.10 = 800 kcal. Marsh hawks (secondary consumers) = 800 × 0.10 = 80 kcal/m²/yr. A represents the wren level. C represents a third consumer level (if one existed). This question demonstrates why top predators require large home ranges — little energy reaches them."
},
{
  id: 107, unit: 1, topic: "1.8", topicName: "Keystone Species & Trophic Cascades",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Yellowstone National Park reintroduced gray wolves in 1995. Within a decade: elk populations declined and changed grazing behavior, avoiding riparian zones; willows, aspens, and cottonwoods regenerated along rivers; riverbank erosion decreased; beaver populations recovered; and stream channel morphology shifted. Ecologists termed this a 'landscape of fear.'",
  stem: "The cascade of changes following wolf reintroduction is best characterized as which type of ecological phenomenon, and which conclusion is most strongly supported by this evidence?",
  options: {
    A: "Bottom-up trophic cascade, supporting the conclusion that wolf reintroduction directly increased plant productivity by fertilizing soils with elk carcasses.",
    B: "Top-down trophic cascade, supporting the conclusion that apex predators can reshape entire ecosystems through both lethal and non-lethal (behavioral) effects on prey.",
    C: "Primary succession, supporting the conclusion that wolves triggered a fundamental shift to a new climax community type.",
    D: "Competitive exclusion, supporting the conclusion that wolves are generalist species that outcompeted elk for resources."
  },
  correct: "B",
  rationale: "B. This is a textbook top-down trophic cascade: apex predator (wolves) → altered elk behavior and numbers → release of plants from herbivory → restructured riparian ecosystems. Critically, the 'landscape of fear' component highlights that predator effects include behavioral changes (elk avoiding risky habitat), not just lethal predation — a finding from modern predator-prey research. A incorrectly identifies this as bottom-up (which would start with plant productivity changes driving the cascade upward). C Primary succession begins on barren substrate, not an existing ecosystem. D misapplies competitive exclusion."
},
{
  id: 108, unit: 1, topic: "1.3", topicName: "Aquatic Biomes",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A graph shows dissolved oxygen (DO) concentration versus water temperature in freshwater. As temperature increases from 5°C to 30°C, DO decreases from ~12.8 mg/L to ~7.5 mg/L.",
  stem: "A power plant discharges cooling water that raises a river's temperature by 8°C. Based on the relationship shown, which consequence for aquatic organisms is most directly predicted?",
  options: {
    A: "Increased productivity, because warmer water accelerates photosynthesis in aquatic plants and algae.",
    B: "Thermal stratification collapse, because heating lowers water density and creates uniform mixing.",
    C: "Physiological stress and potential mortality in cold-water fish species due to reduced dissolved oxygen availability.",
    D: "Increased biodiversity, because warmer temperatures increase habitat heterogeneity within the river."
  },
  correct: "C",
  rationale: "C. The graph shows DO decreases as temperature rises. Cold-water fish (trout, salmon) have high oxygen requirements and narrow thermal tolerance windows. A temperature increase of 8°C can drop DO below their physiological minimum, causing stress or mortality. A is a true-but-irrelevant distractor — photosynthesis does initially increase with temperature but is constrained by CO₂ and nutrients, and the question asks about the consequence of reduced DO. B describes a real phenomenon but isn't the most direct consequence for organisms. D is an overgeneralization — warming typically reduces, not increases, fish diversity in temperate rivers."
},
{
  id: 109, unit: 1, topic: "1.6", topicName: "Trophic Levels",
  skill: "recall", difficulty: "easy", cedSkill: "Identifying & Describing Concepts",
  stimulus: null,
  stem: "Which of the following organisms occupies the highest trophic level and would therefore be expected to have the lowest biomass per unit area in a typical ecosystem?",
  options: {
    A: "Grass in a prairie",
    B: "Grasshoppers feeding on grass",
    C: "Sparrows feeding on grasshoppers",
    D: "Peregrine falcons feeding on sparrows"
  },
  correct: "D",
  rationale: "D. Trophic level increases from producers (grass) → primary consumers (grasshoppers) → secondary consumers (sparrows) → tertiary consumers (falcons). Due to the 10% rule, biomass decreases at each successive level — apex predators occupy the smallest biomass in the pyramid. This is why large predators require vast territories and are the first species to disappear when ecosystems are reduced in size."
},
{
  id: 110, unit: 1, topic: "1.5", topicName: "Phosphorus Cycle",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Researchers studying a clear oligotrophic lake (low-nutrient, high clarity) added experimentally controlled amounts of nitrogen and phosphorus in divided sections. Only the sections receiving phosphorus additions showed significant algal growth and turbidity increases.",
  stem: "Which conclusion is most strongly supported by these experimental results regarding nutrient limitation in this freshwater system?",
  options: {
    A: "Nitrogen is the limiting nutrient because it was added alongside phosphorus and may have contributed to algal growth.",
    B: "Phosphorus is the primary limiting nutrient in this lake, because algal growth occurred only when phosphorus was present.",
    C: "Both nitrogen and phosphorus equally limit algal growth; removing either one would halt eutrophication.",
    D: "Carbon dioxide is the true limiting nutrient; nitrogen and phosphorus merely allow algae to access available CO₂."
  },
  correct: "B",
  rationale: "B. The experimental design tests each nutrient in isolation. Only phosphorus additions produced algal blooms — a classic demonstration of Liebig's Law of the Minimum, confirming phosphorus as the limiting nutrient. This is consistent with well-established limnological research (Schindler's Experimental Lakes Area studies). A confuses causation — nitrogen additions without phosphorus produced no bloom. C contradicts the experimental result. D introduces CO₂ as an unsupported variable."
},

// ─────────────────────────────────────────────────────────────────
// UNIT 2 — THE LIVING WORLD: BIODIVERSITY
// ─────────────────────────────────────────────────────────────────
{
  id: 201, unit: 2, topic: "2.3", topicName: "Island Biogeography",
  skill: "application", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Four proposed nature reserves (A–D) are being evaluated. Reserve A: 500 km², isolated, 80 km from nearest habitat. Reserve B: 500 km², 2 km from continuous forest. Reserve C: 50 km², 2 km from continuous forest. Reserve D: 50 km², 80 km from nearest habitat.",
  stem: "Based on island biogeography theory, rank these reserves from highest to lowest expected equilibrium species richness.",
  options: {
    A: "B > A > C > D",
    B: "A > B > C > D",
    C: "D > C > B > A",
    D: "C > D > A > B"
  },
  correct: "A",
  rationale: "A. Island biogeography predicts species richness is determined by immigration rate (proximity to source) and extinction rate (island size). B is large AND close to source — highest immigration, lowest extinction. A is large but isolated — low extinction but low immigration. C is small but close — high immigration but higher extinction than large reserves. D is small AND isolated — worst on both dimensions. Large size and proximity to source are additive benefits."
},
{
  id: 202, unit: 2, topic: "2.6", topicName: "Ecological Succession",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A forest fire destroys a 200-hectare stand of mature oak-hickory forest. Five years later, ecologists survey the recovering area and find annual grasses and forbs, some shrubs, and young pioneer trees. Soil organic matter is 60% of pre-fire levels.",
  stem: "Which ecological process is occurring, and what does the retained soil organic matter indicate about the recovery trajectory compared to primary succession?",
  options: {
    A: "Primary succession — soil retention is irrelevant because fire resets communities to bare mineral substrate.",
    B: "Secondary succession — retained soil, seed banks, and root systems allow faster recovery than primary succession on bare rock.",
    C: "Climax community reformation — the presence of pioneer trees indicates the community has reached its stable endpoint.",
    D: "Primary succession — retained soil organic matter will delay plant recolonization by creating toxic anaerobic conditions."
  },
  correct: "B",
  rationale: "B. Secondary succession occurs where soil and biological legacies (seed banks, surviving root crowns, mycorrhizal networks) remain. These dramatically accelerate recovery compared to primary succession on bare rock, which must first create soil. The retained soil organic matter (60% of pre-fire levels) means nutrients, microbiota, and seed banks are partially intact. A incorrectly classifies fire as equivalent to bare rock — the critical distinction is soil preservation. C misidentifies pioneer-stage vegetation as a climax community."
},
{
  id: 203, unit: 2, topic: "2.2", topicName: "Ecosystem Services",
  skill: "evaluation", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: "A developer proposes draining a 300-hectare coastal wetland to build a resort. An economic analysis finds the resort would generate $8 million annually. An ecological economist estimates the wetland provides $12 million annually in storm surge protection, fishery nursery habitat, water filtration, and carbon sequestration.",
  stem: "The ecological economist's analysis most directly illustrates which concept, and what is its implication for environmental decision-making?",
  options: {
    A: "The tragedy of the commons — the wetland is a shared resource being destroyed for private gain.",
    B: "Natural capital valuation — assigning monetary value to ecosystem services can reveal that conservation may be economically rational even under market frameworks.",
    C: "The precautionary principle — when uncertain about ecosystem impacts, development should be halted.",
    D: "The 10% rule — only 10% of ecosystem energy is available for economic extraction."
  },
  correct: "B",
  rationale: "B. Natural capital valuation (pioneered by Costanza et al., 1997) quantifies ecosystem services in economic terms to make them comparable to development benefits in policy decisions. The analysis shows the wetland's services ($12M) exceed the development value ($8M), suggesting conservation is economically optimal. A describes a governance problem but doesn't explain the economic analysis. C relates to uncertainty, not valuation. D incorrectly applies the 10% rule to economic analysis."
},
{
  id: 204, unit: 2, topic: "2.1", topicName: "Biodiversity & Resilience",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Research compares monoculture corn fields to diverse prairie plantings in the same region. After a severe drought year, the monocultures lost 90% of yield; the diverse prairies maintained 70% of biomass production. After a wet year, monocultures outproduced prairies by 40%.",
  stem: "What conclusion about biodiversity and ecosystem stability is most strongly supported by this comparative data?",
  options: {
    A: "Monocultures are superior to diverse systems because they consistently outperform prairies in productive years.",
    B: "Biodiversity provides insurance against environmental variability — diverse systems sacrifice peak performance but gain resistance to stress, stabilizing production across variable conditions.",
    C: "Prairie diversity causes yield suppression through competition, outweighing any resilience benefits in most agricultural contexts.",
    D: "The data show that monocultures are more efficient energy converters and should replace prairies to maximize food production globally."
  },
  correct: "B",
  rationale: "B. This is the biodiversity-stability hypothesis (Tilman et al.): diverse communities show greater temporal stability across variable environmental conditions, even if peak productivity is occasionally lower. The 'insurance effect' of biodiversity means different species respond differently to stressors — when drought kills some species, others survive, maintaining ecosystem function. A cherry-picks only the wet year data. C and D ignore the catastrophic drought loss in monocultures, which represents systemic agricultural risk at scale."
},
{
  id: 205, unit: 2, topic: "2.4", topicName: "Ecological Tolerance",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A stream runs through an agricultural valley. Water quality testing at five stations shows: Station 1 (headwaters): pH 7.0, macroinvertebrate diversity: 42 species. Station 3 (below fertilized fields): pH 6.6, macroinvertebrate diversity: 28 species. Station 5 (5 km downstream): pH 6.2, macroinvertebrate diversity: 11 species.",
  stem: "The declining macroinvertebrate diversity downstream is best explained by which of the following?",
  options: {
    A: "Increasing species richness requires higher nutrient inputs, and agricultural runoff is reducing available nutrients.",
    B: "As pH approaches or exceeds the tolerance limits of sensitive species, those species are eliminated, leaving only tolerant generalists.",
    C: "Species diversity naturally decreases downstream in all river systems due to reduced current speed.",
    D: "Agricultural chemicals are directly increasing water temperature, reducing dissolved oxygen independent of pH."
  },
  correct: "B",
  rationale: "B. Macroinvertebrates (especially stoneflies, mayflies, caddisflies) are sensitive bioindicators with narrow pH tolerance ranges. As runoff-caused acidification pushes pH below their tolerance limits, these sensitive species are eliminated. The gradient from 42 → 11 species maps to the pH decline from 7.0 → 6.2 — a textbook tolerance curve application. A reverses the nutrient-diversity relationship. C overgeneralizes — river diversity patterns vary with nutrient inputs, not just flow. D introduces temperature/DO as unsupported variables."
},
{
  id: 206, unit: 2, topic: "2.6", topicName: "Human Influence on Succession",
  skill: "application", difficulty: "medium", cedSkill: "Evaluating Solutions",
  stimulus: null,
  stem: "Forest managers in the southeastern US conduct prescribed burns every 3–5 years in longleaf pine ecosystems. Without burning, hardwoods rapidly overtop and shade out the fire-adapted longleaf pines, reducing habitat for red-cockaded woodpeckers. This management practice most directly represents which concept?",
  options: {
    A: "Accelerating succession toward a hardwood climax community to maximize species diversity.",
    B: "Arresting succession at an intermediate stage to maintain a fire-dependent ecosystem and its associated species.",
    C: "Initiating primary succession by removing existing vegetation to allow pioneer species to establish.",
    D: "Applying the competitive exclusion principle to favor longleaf pines over hardwood competitors."
  },
  correct: "B",
  rationale: "B. Prescribed fire interrupts natural succession from fire-maintained longleaf pine savanna to hardwood forest. Without fire, the succession trajectory favors hardwood dominance. By periodically resetting succession to an intermediate stage, managers maintain the disturbance-dependent longleaf ecosystem. This is a practical application of the intermediate disturbance hypothesis in conservation management. A describes the opposite of what fire achieves. C Primary succession requires bare substrate, not removal of competing trees. D Competitive exclusion is a community-level outcome, not a management concept."
},
{
  id: 207, unit: 2, topic: "2.5", topicName: "Natural Disturbances",
  skill: "analysis", difficulty: "easy", cedSkill: "Identifying & Describing Concepts",
  stimulus: null,
  stem: "A forest experiences a catastrophic windstorm that flattens 80% of the canopy trees. Which of the following best describes the disturbance type and the expected initial ecological response?",
  options: {
    A: "Periodic disturbance; succession continues without interruption because wind is a predictable event.",
    B: "Episodic disturbance; a pulse of light reaching the forest floor triggers a burst of understory plant growth and secondary succession.",
    C: "Random disturbance; the community shifts immediately to the climax state because disturbance energy rejuvenates soil nutrients.",
    D: "Chronic disturbance; gradual wind damage over decades slowly shifts species composition."
  },
  correct: "B",
  rationale: "B. Major windstorms are episodic (irregularly recurring, not seasonally predictable). The canopy gap dramatically increases light at the forest floor — the primary driver of successional change in forest ecosystems. Pioneer and shade-intolerant species respond rapidly. A describes periodic disturbances (seasonal floods, annual tides). C incorrectly predicts an immediate jump to climax; succession proceeds through stages. D describes chronic disturbance, which is gradual, not sudden."
},

// ─────────────────────────────────────────────────────────────────
// UNIT 3 — POPULATIONS
// ─────────────────────────────────────────────────────────────────
{
  id: 301, unit: 3, topic: "3.3", topicName: "Logistic Population Growth",
  skill: "application", difficulty: "medium", cedSkill: "Quantitative Analysis",
  stimulus: "A white-tailed deer population in a 500 km² forest is estimated at 1,200 animals. Ecologists estimate the carrying capacity at 1,500. The population's intrinsic growth rate (r) is 0.4/yr.",
  stem: "Using the logistic growth equation dN/dt = rN((K−N)/K), what is the approximate current rate of population increase per year?",
  options: {
    A: "480 deer/yr (exponential rate, no resource limitation)",
    B: "96 deer/yr (logistic rate with current K constraint)",
    C: "600 deer/yr (maximum rate at N = K/2)",
    D: "0 deer/yr (population is at carrying capacity)"
  },
  correct: "B",
  rationale: "B. dN/dt = 0.4 × 1,200 × ((1,500−1,200)/1,500) = 0.4 × 1,200 × (300/1,500) = 0.4 × 1,200 × 0.20 = 96 deer/yr. A calculates the exponential rate (rN = 480) without the logistic correction factor. C represents the maximum growth rate that occurs at N = K/2 = 750 (dN/dt = 0.4 × 750 × 0.5 = 150). D would apply if N = K. The population is growing, but substantially slower than its exponential potential."
},
{
  id: 302, unit: 3, topic: "3.6", topicName: "Demographic Transition Model",
  skill: "analysis", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A researcher examines demographic data from 1800–2000 for four countries: Country W shows TFR declining from 6.1 to 2.0 as per-capita income rises. Country X maintains TFR > 5.0 despite income growth, due to religious and social norms. Country Y has TFR = 1.2 despite low income, due to strong government family planning. Country Z has TFR = 4.5 and stagnant development.",
  stem: "These data most effectively challenge which assumption of the classical demographic transition model?",
  options: {
    A: "That death rates always decline before birth rates — the data show birth rates can decline first.",
    B: "That economic development is the sole and universal driver of fertility decline — cultural, social, and policy factors can accelerate or delay transition independent of income.",
    C: "That Stage 4 populations never grow — the data show some high-income countries maintain TFR above replacement.",
    D: "That Stage 1 populations have the highest resource consumption per capita — developing countries actually have lower footprints."
  },
  correct: "B",
  rationale: "B. The classical DTM assumes a deterministic link between economic development and fertility decline. Country X (high income, high TFR due to cultural factors) and Country Y (low income, low TFR due to policy) both deviate from this pattern, demonstrating that cultural, religious, and governmental factors are independent drivers. Modern demographic research (Lesthaeghe's Second Demographic Transition) explicitly accounts for these non-economic drivers. A describes a different DTM assumption not tested here. C and D make claims not directly supported by the data presented."
},
{
  id: 303, unit: 3, topic: "3.2", topicName: "Survivorship Curves",
  skill: "analysis", difficulty: "medium", cedSkill: "Identifying & Analyzing Data",
  stimulus: "A long-term study of three bird populations records the percentage of individuals surviving to each age. Population P: 95% survive to year 5 (middle age), then rapidly die. Population Q: 50% survive each year regardless of age. Population R: 5% survive to year 1, but survivors live to year 15+.",
  stem: "Match each population to its survivorship curve type and describe the life history strategy most consistent with each pattern.",
  options: {
    A: "P = Type III (r-strategist); Q = Type I (K-strategist); R = Type II (no clear strategy)",
    B: "P = Type I (K-strategist with good early survival, late-life mortality); Q = Type II (constant mortality); R = Type III (r-strategist with high early mortality)",
    C: "P = Type II (K-strategist); Q = Type III (r-strategist); R = Type I (K-strategist)",
    D: "P = Type I (r-strategist); Q = Type III (K-strategist); R = Type II (r-strategist)"
  },
  correct: "B",
  rationale: "B. Type I: most individuals survive to old age before dying (Population P — high early survival, late mortality surge). Type II: constant per-capita mortality at all ages (Population Q — 50% survival each year regardless of age). Type III: massive early mortality, few survivors that then live long (Population R — 5% survive year 1, but survivors are long-lived). K-strategists typically show Type I; r-strategists show Type III; Type II organisms invest moderately in both survival and reproduction."
},
{
  id: 304, unit: 3, topic: "3.3", topicName: "Density-Dependent Regulation",
  skill: "evaluation", difficulty: "hard", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Long-term data on a lynx-hare system show oscillating 10-year population cycles: hare populations peak, then crash; lynx populations follow with a 1–2 year lag. However, researchers also find that hare populations cycle even on islands with no lynx, though with lower amplitude.",
  stem: "Which conclusion about population regulation in this system is most strongly supported by the combined data?",
  options: {
    A: "Lynx predation is the sole driver of hare population cycles — the island data are outliers caused by habitat differences.",
    B: "Hare populations are regulated by multiple density-dependent factors including both predation and food limitation; lynx amplify but do not solely cause the cycle.",
    C: "The hare population cycles are density-independent, driven entirely by climatic cycles that also affect lynx populations.",
    D: "The lag between hare and lynx cycles proves that predator-prey dynamics always produce synchronized 10-year oscillations in boreal systems."
  },
  correct: "B",
  rationale: "B. The island data are critical: hare oscillations without lynx demonstrate intrinsic density-dependent regulation (likely plant-herbivore dynamics and intraspecific competition). Lynx predation amplifies these cycles but is not their sole cause. This represents a multi-factor regulation model consistent with modern predator-prey research. A dismisses valid experimental evidence (island studies). C incorrectly attributes density-dependent cycles to density-independent factors. D makes an overgeneralization ('always') not supported by the data."
},
{
  id: 305, unit: 3, topic: "3.5", topicName: "Age Structure & Momentum",
  skill: "application", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "A country reduces its total fertility rate to exactly 2.1 (replacement level) in 2024. Its current age structure shows 35% of the population under age 15.",
  stem: "Which prediction about this country's population trajectory over the next 50 years is most accurate?",
  options: {
    A: "The population will immediately stabilize because TFR = replacement level.",
    B: "The population will continue growing for several decades due to population momentum, as the large young cohort ages into reproductive years.",
    C: "The population will decline rapidly because replacement-level fertility is below the rate needed to maintain current size.",
    D: "The population will grow exponentially because a TFR of 2.1 is above replacement level in most demographic conditions."
  },
  correct: "B",
  rationale: "B. Population momentum is a well-established demographic phenomenon. When TFR drops to replacement, population growth doesn't immediately halt — the large proportion of young people (35% under 15) has yet to reproduce. As this cohort reaches reproductive age (even at only 2.1 children each), total births will exceed deaths for decades because there are so many more young people than old people. Some demographers estimate global population momentum alone accounts for 1–2 billion of projected population growth. A incorrectly treats TFR as an instantaneous stabilizer. C misunderstands replacement TFR (2.1 IS replacement). D misidentifies 2.1 as above replacement."
},
{
  id: 306, unit: 3, topic: "3.1", topicName: "Generalist vs Specialist",
  skill: "analysis", difficulty: "medium", cedSkill: "Analyzing Environmental Problems",
  stimulus: "Climate change is shifting average temperatures in a temperate forest region 2°C warmer over 50 years. Species survey data show generalist species (raccoons, coyotes, common starlings) have maintained or increased populations. Two specialist species — a cave salamander requiring specific temperature/humidity in limestone caves, and a bog-dependent orchid — have declined by 60% and 45% respectively.",
  stem: "These data most directly illustrate which relationship between niche breadth and extinction vulnerability?",
  options: {
    A: "Generalist species decline faster because their broad niches overlap with more competitors during environmental change.",
    B: "Specialist species face higher extinction risk during environmental change because their narrow tolerance ranges leave no alternative habitats or resources when conditions shift.",
    C: "Specialist species are more resilient because their specialized adaptations provide physiological advantages under new climate conditions.",
    D: "Niche breadth has no predictive relationship with extinction vulnerability; population declines are determined solely by reproductive rates."
  },
  correct: "B",
  rationale: "B. The data directly show specialist species (cave salamander, bog orchid) declining while generalists maintain populations under the same temperature shift — a classic demonstration of the niche breadth-vulnerability relationship. Specialists are ecological 'experts' adapted to narrow conditions; when those conditions shift, they have no alternatives. A is the opposite of the observed pattern. C is contradicted by the data. D is refuted by the differential responses shown across species with different niche breadths."
},
{
  id: 307, unit: 3, topic: "3.6", topicName: "Human Population Resources",
  skill: "evaluation", difficulty: "hard", cedSkill: "Evaluating Solutions",
  stimulus: "Global population is approximately 8 billion. Ecological footprint analyses estimate the average global citizen requires ~2.7 hectares of biologically productive land to sustain their consumption. Earth has approximately 1.7 hectares of biocapacity per person.",
  stem: "Based on this analysis, which conclusion about human population and resource consumption is most strongly supported?",
  options: {
    A: "Human population is sustainable at current levels because technological innovation will expand biocapacity proportionally.",
    B: "Humanity is operating in global ecological overshoot — consuming resources ~60% faster than ecosystems can regenerate — depleting natural capital.",
    C: "The 1.0 ha deficit is insignificant because natural systems contain sufficient buffer capacity to absorb this level of overconsumption indefinitely.",
    D: "Only population reduction can resolve the overshoot; changes in consumption patterns cannot meaningfully reduce the footprint gap."
  },
  correct: "B",
  rationale: "B. 2.7/1.7 ≈ 1.59, meaning humanity uses about 59% more than Earth regenerates annually — the definition of ecological overshoot. This is reflected in declining forest cover, soil degradation, aquifer depletion, and biodiversity loss. A introduces technological optimism as an unstated assumption not supported by data. C dismisses the gap without evidence. D is an overgeneralization — consumption patterns (diet, energy use, material goods) are among the most impactful variables in footprint calculations and are actionable policy levers."
},

]; // End QBANK_U1_3
