from app.curriculum.lessons.what_is_a_fungus import LESSON as _what_is_a_fungus
from app.curriculum.lessons.mycelium_networks import LESSON as _mycelium_networks
from app.curriculum.lessons.symbiosis import LESSON as _symbiosis
from app.curriculum.lessons.decomposition import LESSON as _decomposition
from app.curriculum.lessons.bacteria_friends_foes import LESSON as _bacteria_friends_foes
from app.curriculum.lessons.insect_partnerships import LESSON as _insect_partnerships
from app.curriculum.lessons.spore_dispersal import LESSON as _spore_dispersal
from app.curriculum.lessons.wood_wide_web import LESSON as _wood_wide_web

LESSON_CONTENT = {
    # =========================================================================
    # DETAILED LESSONS (imported from lessons/ modules)
    # =========================================================================
    _what_is_a_fungus["id"]: _what_is_a_fungus,
    _mycelium_networks["id"]: _mycelium_networks,
    _symbiosis["id"]: _symbiosis,
    _decomposition["id"]: _decomposition,
    _bacteria_friends_foes["id"]: _bacteria_friends_foes,
    _insect_partnerships["id"]: _insect_partnerships,
    _spore_dispersal["id"]: _spore_dispersal,
    _wood_wide_web["id"]: _wood_wide_web,
    # =========================================================================
    # TRACK: FOUNDATIONS (continued)
    # =========================================================================
    "what-are-fungi": {
        "id": "what-are-fungi",
        "title": "What Are Fungi?",
        "track": "foundations",
        "description": "Discover the hidden kingdom of fungi -- neither plant nor animal, but something wonderfully unique.",
        "duration": "15 min",
        "character": "fun-gus",
        "sections": [
            {
                "id": "intro",
                "title": "Welcome to the Kingdom",
                "content": "Fungi are one of the five kingdoms of life. They are not plants, not animals -- they are their own incredible thing. There are over 5 million species of fungi on Earth, and we have only identified about 150,000 of them. The rest are still waiting to be discovered, hidden in soil, on tree bark, and even inside other organisms.",
            },
            {
                "id": "what-makes-fungi-different",
                "title": "What Makes Fungi Different?",
                "content": "Unlike plants, fungi cannot make their own food through photosynthesis. Instead, they absorb nutrients from their environment -- breaking down dead matter, partnering with living organisms, or sometimes parasitizing them. Their cell walls are made of chitin (the same material in insect exoskeletons), not cellulose like plants.",
            },
            {
                "id": "where-fungi-live",
                "title": "Where Do Fungi Live?",
                "content": "Fungi live almost everywhere: in soil, on rocks, in water, inside plants and animals, in the air, and even in extreme environments like Antarctic ice and deep-sea vents. The mushroom you see above ground is just the fruiting body -- the vast majority of a fungus lives underground as a network of tiny threads called mycelium.",
            },
            {
                "id": "why-fungi-matter",
                "title": "Why Fungi Matter",
                "content": "Without fungi, life on Earth would collapse. They decompose dead organic matter, recycling nutrients back into the soil. They form partnerships with over 90% of all plant species, helping them absorb water and minerals. They produce medicines like penicillin. And they are essential to making bread, beer, cheese, and chocolate.",
            },
        ],
    },
    "spore-lifecycle": {
        "id": "spore-lifecycle",
        "title": "The Life of a Spore",
        "track": "foundations",
        "description": "Follow a single spore from release to germination, learning how fungi reproduce and spread.",
        "duration": "12 min",
        "character": "spora",
        "sections": [
            {
                "id": "what-is-a-spore",
                "title": "What Is a Spore?",
                "content": "A spore is a tiny reproductive cell that fungi use to spread to new locations. Think of it like a seed, but much simpler and much smaller. A single mushroom can release billions of spores into the air. Each spore carries the genetic blueprint to grow an entirely new fungal organism.",
            },
            {
                "id": "dispersal",
                "title": "How Spores Travel",
                "content": "Spores travel by wind, water, and even by hitchhiking on animals and insects. Some fungi have evolved extraordinary launch mechanisms -- puffballs explode when struck by raindrops, bird's nest fungi use splash cups to fling spore packets, and some species can shoot spores at speeds that create their own wind currents.",
            },
            {
                "id": "germination",
                "title": "Landing and Growing",
                "content": "When a spore lands in the right conditions -- proper moisture, temperature, and nutrients -- it germinates. A tiny thread called a hypha emerges and begins to grow, branching and spreading through the substrate. This growing network of hyphae is called mycelium, and it is the true body of the fungus.",
            },
            {
                "id": "fruiting",
                "title": "The Fruiting Body",
                "content": "When conditions are right and the mycelium has gathered enough resources, it produces a fruiting body -- what we call a mushroom. The mushroom's sole purpose is to produce and release spores, starting the cycle all over again. Some fungi fruit in hours, while others take years.",
            },
        ],
    },
    "mycelium-network": {
        "id": "mycelium-network",
        "title": "The Mycelium Network",
        "track": "foundations",
        "description": "Explore the vast underground network that connects trees, shares resources, and communicates danger.",
        "duration": "18 min",
        "character": "rhiza",
        "sections": [
            {
                "id": "wood-wide-web",
                "title": "The Wood Wide Web",
                "content": "Beneath every forest floor lies a vast network of fungal threads connecting trees to each other. Scientists call it the mycorrhizal network, but it is popularly known as the Wood Wide Web. Through this network, trees can share nutrients, send chemical warning signals about pests, and even feed their offspring.",
            },
            {
                "id": "how-it-works",
                "title": "How Mycorrhizal Networks Work",
                "content": "Mycorrhizal fungi wrap around or penetrate tree roots, creating a physical connection. The fungus extends its hyphae far into the soil, dramatically increasing the root system's reach. In exchange for sugars from the tree, the fungus delivers water and minerals -- especially phosphorus and nitrogen -- that the tree's roots alone could never access.",
            },
            {
                "id": "communication",
                "title": "Talking Through the Network",
                "content": "When a tree is attacked by insects or disease, it sends chemical signals through the mycelium network. Neighboring trees receive these signals and can activate their own defenses before the threat arrives. Mother trees can recognize their own seedlings and send them extra nutrients through the network.",
            },
            {
                "id": "network-intelligence",
                "title": "Network Intelligence",
                "content": "The mycelium network behaves like a biological internet. It can reroute resources around damaged areas, allocate nutrients to where they are needed most, and maintain connections across vast distances. A single mycelium network can span an entire forest and persist for centuries.",
            },
        ],
    },
    # =========================================================================
    # TRACK: MICROBIOLOGY (continued)
    # =========================================================================
    "intro-to-bacteria": {
        "id": "intro-to-bacteria",
        "title": "The Bacterial World",
        "track": "microbiology",
        "description": "Meet the oldest and most numerous organisms on Earth -- bacteria are everywhere and essential to life.",
        "duration": "15 min",
        "character": "cyano",
        "sections": [
            {
                "id": "bacteria-everywhere",
                "title": "Bacteria Are Everywhere",
                "content": "There are more bacteria on Earth than stars in the observable universe. They live in every environment imaginable: boiling hot springs, frozen Antarctic lakes, deep ocean trenches, and inside every living organism. Your own body contains roughly as many bacterial cells as human cells.",
            },
            {
                "id": "bacteria-structure",
                "title": "How Bacteria Are Built",
                "content": "Bacteria are single-celled organisms without a nucleus. Their DNA floats freely inside the cell, and they reproduce by simply splitting in two. Despite their simplicity, they are incredibly diverse -- some produce oxygen, some fix nitrogen, some glow in the dark, and some can survive radiation that would kill any other organism.",
            },
            {
                "id": "good-bacteria",
                "title": "The Good Guys",
                "content": "Most bacteria are helpful or harmless. They decompose dead matter, produce vitamins in your gut, ferment foods like yogurt and cheese, clean up oil spills, and produce antibiotics. Nitrogen-fixing bacteria in soil are essential for plant growth, and cyanobacteria produced the oxygen we breathe.",
            },
            {
                "id": "bad-bacteria",
                "title": "The Troublemakers",
                "content": "Some bacteria cause disease in plants and animals. Fire blight devastates orchards, and certain species can cause food poisoning or infections. But even pathogenic bacteria play roles in ecosystems -- they help control populations and drive the evolution of immune systems.",
            },
        ],
    },
    "nitrogen-cycle": {
        "id": "nitrogen-cycle",
        "title": "The Nitrogen Cycle",
        "track": "microbiology",
        "description": "Learn how bacteria transform atmospheric nitrogen into food for all living things.",
        "duration": "14 min",
        "character": "nitro",
        "sections": [
            {
                "id": "why-nitrogen-matters",
                "title": "Why Nitrogen Matters",
                "content": "Nitrogen makes up 78% of Earth's atmosphere, but most organisms cannot use it in its gaseous form. Every protein in your body, every strand of DNA, requires nitrogen atoms. The problem is converting atmospheric nitrogen (N2) into forms that living things can absorb -- and that is where bacteria come in.",
            },
            {
                "id": "nitrogen-fixation",
                "title": "Nitrogen Fixation",
                "content": "Nitrogen-fixing bacteria like Rhizobium live in nodules on the roots of legumes (beans, peas, clover). They convert atmospheric N2 into ammonia (NH3), which plants can absorb and use to build proteins. This process requires enormous energy -- the bacterial enzyme nitrogenase is one of the most complex in nature.",
            },
            {
                "id": "the-full-cycle",
                "title": "The Full Cycle",
                "content": "After plants use nitrogen to build proteins, animals eat the plants. When organisms die, decomposer bacteria break the nitrogen compounds back down into ammonia (ammonification). Other bacteria convert ammonia to nitrites and then nitrates (nitrification). Finally, denitrifying bacteria return nitrogen gas to the atmosphere, completing the cycle.",
            },
        ],
    },
    "fermentation": {
        "id": "fermentation",
        "title": "The Art of Fermentation",
        "track": "microbiology",
        "description": "Discover how microbes transform simple ingredients into bread, yogurt, cheese, and more.",
        "duration": "12 min",
        "character": "lacto",
        "sections": [
            {
                "id": "what-is-fermentation",
                "title": "What Is Fermentation?",
                "content": "Fermentation is a metabolic process where microorganisms break down sugars without oxygen. It is one of the oldest biotechnologies -- humans have been using fermentation for over 10,000 years, long before we understood the science behind it. Bread, beer, wine, yogurt, cheese, sauerkraut, kimchi, and chocolate all depend on fermentation.",
            },
            {
                "id": "lactic-acid-fermentation",
                "title": "Lactic Acid Fermentation",
                "content": "Lactobacillus bacteria convert sugars into lactic acid, which preserves food and creates tangy flavors. This process turns milk into yogurt and cheese, cabbage into sauerkraut, and cucumbers into pickles. The lactic acid also prevents harmful bacteria from growing, making fermentation one of the earliest food preservation methods.",
            },
            {
                "id": "yeast-fermentation",
                "title": "Yeast and Alcohol Fermentation",
                "content": "Yeasts (which are fungi, not bacteria) convert sugars into alcohol and carbon dioxide. The CO2 makes bread rise, and the alcohol gives beer and wine their kick. Different yeast strains produce different flavors -- which is why a sourdough tastes different from a baguette, and a Belgian ale tastes different from a German lager.",
            },
        ],
    },
    # =========================================================================
    # TRACK: ECOLOGY (continued)
    # =========================================================================
    # decomposition lesson imported from lessons/decomposition.py (detailed version above)
    "pollination-partnerships": {
        "id": "pollination-partnerships",
        "title": "Pollination Partnerships",
        "track": "ecology",
        "description": "Explore the relationships between insects and the organisms that depend on them.",
        "duration": "14 min",
        "character": "buzz",
        "sections": [
            {
                "id": "what-is-pollination",
                "title": "What Is Pollination?",
                "content": "Pollination is the transfer of pollen from one flower to another, enabling plants to reproduce. While wind and water can carry pollen, the most efficient pollinators are insects -- especially bees, butterflies, and moths. Over 75% of flowering plants depend on animal pollinators.",
            },
            {
                "id": "bee-partnerships",
                "title": "The Bee Partnership",
                "content": "Bees and flowers have co-evolved for over 100 million years. Flowers attract bees with bright colors, sweet nectar, and UV patterns invisible to human eyes. In return for the nectar meal, bees carry pollen from flower to flower. A single honeybee colony can pollinate millions of flowers in a season.",
            },
            {
                "id": "beyond-bees",
                "title": "Beyond Bees",
                "content": "Butterflies, moths, beetles, flies, and even ants all serve as pollinators. Some partnerships are highly specific -- certain orchids can only be pollinated by a single species of moth. Stinkhorn fungi attract flies with their odor, using them to spread spores rather than pollen.",
            },
            {
                "id": "threats-to-pollinators",
                "title": "Threats to Pollinators",
                "content": "Pollinator populations worldwide are declining due to pesticide use, habitat loss, disease, and climate change. This threatens not just wild ecosystems but human food production -- about one-third of all food we eat depends on pollinator activity. Protecting pollinators means protecting our own food supply.",
            },
        ],
    },
    "predator-prey": {
        "id": "predator-prey",
        "title": "Predator and Prey",
        "track": "ecology",
        "description": "Understand the delicate balance between hunters and hunted in the microbial world.",
        "duration": "13 min",
        "character": "snapper",
        "sections": [
            {
                "id": "fungal-predators",
                "title": "Fungal Predators",
                "content": "Some fungi are active hunters. Oyster mushrooms produce sticky knobs and lasso-like loops on their hyphae to trap nematodes (tiny roundworms). Once captured, the fungus penetrates the nematode's body and digests it from the inside. This gives the fungus a crucial source of nitrogen in nutrient-poor environments.",
            },
            {
                "id": "insect-predators",
                "title": "Insect Predators",
                "content": "Praying mantises are ambush predators who wait motionlessly for hours before striking with lightning speed. Ladybugs devour aphids by the hundreds, protecting gardens from pest damage. Dragonflies catch prey mid-flight with 95% accuracy -- making them the most efficient hunters in the animal kingdom.",
            },
            {
                "id": "balance",
                "title": "The Balance of Nature",
                "content": "Predator-prey relationships keep ecosystems in balance. Without predators, prey populations explode and exhaust their food supply. Without prey, predators starve. This dynamic balance drives evolution -- prey evolve better defenses, and predators evolve better hunting strategies, in an endless arms race.",
            },
        ],
    },
    # =========================================================================
    # TRACK: SURVIVAL
    # =========================================================================
    "extremophiles": {
        "id": "extremophiles",
        "title": "Extreme Survivors",
        "track": "survival",
        "description": "Meet the organisms that thrive where nothing else can -- from boiling vents to frozen wastelands.",
        "duration": "15 min",
        "character": "tardi",
        "sections": [
            {
                "id": "what-are-extremophiles",
                "title": "What Are Extremophiles?",
                "content": "Extremophiles are organisms that thrive in conditions lethal to most life. They live in boiling hot springs, frozen Antarctic lakes, ultra-acidic mine drainage, deep-sea volcanic vents, and even inside nuclear reactors. They prove that life can adapt to almost any environment on Earth -- and possibly beyond.",
            },
            {
                "id": "tardigrades",
                "title": "The Indestructible Tardigrade",
                "content": "Tardigrades (water bears) are microscopic animals that can survive temperatures from -272C to 150C, pressures six times greater than the deepest ocean, radiation hundreds of times the lethal human dose, and the vacuum of outer space. They do this by entering a state called cryptobiosis -- essentially shutting down all metabolic processes until conditions improve.",
            },
            {
                "id": "fungal-extremophiles",
                "title": "Fungi in Extreme Places",
                "content": "Fungi have been found growing inside the Chernobyl nuclear reactor, using radiation as an energy source through radiosynthesis. Black yeasts survive on the outside of the International Space Station. Fungi thrive in Antarctic dry valleys, inside rocks in the Atacama Desert, and in deep-sea hydrothermal vents.",
            },
            {
                "id": "lessons-for-space",
                "title": "Lessons for Space Exploration",
                "content": "Studying extremophiles helps scientists understand where life might exist beyond Earth. If organisms can survive radiation, vacuum, and extreme temperatures on Earth, similar life could potentially exist on Mars, Europa, or Enceladus. Extremophiles expand our definition of what is possible for life.",
            },
        ],
    },
    "bioluminescence": {
        "id": "bioluminescence",
        "title": "Living Light",
        "track": "survival",
        "description": "Discover how and why organisms produce their own light in the darkness.",
        "duration": "12 min",
        "character": "lumos",
        "sections": [
            {
                "id": "what-is-bioluminescence",
                "title": "What Is Bioluminescence?",
                "content": "Bioluminescence is the production of light by living organisms through chemical reactions. A molecule called luciferin reacts with oxygen, catalyzed by an enzyme called luciferase, to produce light with almost no heat. Over 80% of deep-sea organisms are bioluminescent, and the trait has evolved independently at least 40 times.",
            },
            {
                "id": "glowing-fungi",
                "title": "Glowing Fungi",
                "content": "About 80 species of fungi glow in the dark. Mycena chlorophos emits an eerie green light from its caps, while the honey mushroom's mycelium creates the phenomenon known as foxfire -- ghostly glowing patches on rotting wood. Scientists believe fungi glow to attract insects that help spread their spores in dark forest environments.",
            },
            {
                "id": "firefly-signals",
                "title": "Firefly Communication",
                "content": "Fireflies use bioluminescence to communicate with potential mates. Each species has a unique flash pattern -- a specific sequence of long and short flashes that identifies them. Males fly and flash, while females watch from the ground and respond if they see a pattern they recognize. It is a language written in light.",
            },
        ],
    },
    "chemical-defense": {
        "id": "chemical-defense",
        "title": "Chemical Warfare",
        "track": "survival",
        "description": "Learn how organisms use chemical compounds to defend themselves and communicate.",
        "duration": "14 min",
        "character": "stench",
        "sections": [
            {
                "id": "fungal-toxins",
                "title": "Fungal Toxins and Defenses",
                "content": "Many fungi produce toxic compounds to deter predators. Amanita mushrooms contain amatoxins that are deadly to humans. The bright red cap of Russula emetica warns predators to stay away. But many fungal toxins have been repurposed as medicines -- cyclosporine (an immunosuppressant) comes from a fungus, as does the cholesterol drug lovastatin.",
            },
            {
                "id": "chemical-signaling",
                "title": "Chemical Signaling",
                "content": "Organisms communicate through chemical signals called semiochemicals. Stinkhorn fungi produce compounds that smell like rotting meat to attract flies. Plants release volatile organic compounds when attacked, warning neighboring plants. Bacteria use quorum sensing -- chemical signals that let them coordinate behavior when their population reaches a critical mass.",
            },
            {
                "id": "antibiotics",
                "title": "Nature's Antibiotics",
                "content": "The most important medicines in human history came from microbial chemical warfare. Penicillin is produced by Penicillium fungi to kill competing bacteria. Streptomyces bacteria in soil produce over two-thirds of all known antibiotics. These organisms have been waging chemical warfare for billions of years -- we have only been borrowing their weapons since 1928.",
            },
        ],
    },
    # =========================================================================
    # TRACK: CONNECTIONS (continued)
    # =========================================================================
    "slime-mold-intelligence": {
        "id": "slime-mold-intelligence",
        "title": "Intelligence Without a Brain",
        "track": "connections",
        "description": "Explore how slime molds solve complex problems without a single neuron.",
        "duration": "15 min",
        "character": "physa",
        "sections": [
            {
                "id": "what-is-slime-mold",
                "title": "What Is Slime Mold?",
                "content": "Slime molds are neither fungi, plants, nor animals -- they are protists that exist as single-celled organisms or as massive multinucleated blobs. Physarum polycephalum can grow to cover several square feet while remaining a single cell with millions of nuclei. They move by pulsing their cytoplasm, flowing toward food and away from danger.",
            },
            {
                "id": "solving-mazes",
                "title": "Solving Mazes and Problems",
                "content": "In a famous 2000 experiment, researchers placed Physarum in a maze with food at two points. The slime mold explored the entire maze, then optimized its network to create the shortest path between the food sources. It solved the maze more efficiently than most algorithms. It has no brain, no nervous system -- yet it computes.",
            },
            {
                "id": "designing-networks",
                "title": "Designing Transportation Networks",
                "content": "When researchers placed food sources to match the locations of Tokyo's major train stations, Physarum grew a network that closely resembled Tokyo's actual rail system -- a network designed by thousands of engineers over decades. The slime mold achieved similar efficiency in hours, suggesting that biological optimization principles underlie good network design.",
            },
            {
                "id": "memory-without-brain",
                "title": "Memory Without a Brain",
                "content": "Physarum can learn and remember without neurons. When exposed to periodic cold shocks, it learns the rhythm and slows down in anticipation of the next one -- even after the shocks stop. It can transfer this memory to other slime molds by fusing with them. This challenges our fundamental understanding of what intelligence and memory require.",
            },
        ],
    },
    "biofilm-cities": {
        "id": "biofilm-cities",
        "title": "Biofilm Cities",
        "track": "connections",
        "description": "Discover how bacteria build complex communities with architecture, communication, and defense.",
        "duration": "13 min",
        "character": "bacilli",
        "sections": [
            {
                "id": "what-are-biofilms",
                "title": "What Are Biofilms?",
                "content": "Biofilms are structured communities of bacteria encased in a self-produced matrix of sugars, proteins, and DNA. They form on virtually any surface -- rocks in streams, medical implants, kitchen counters, and ship hulls. Over 80% of all bacterial infections in humans involve biofilms. They are not random clumps but organized cities with channels, layers, and specialized zones.",
            },
            {
                "id": "quorum-sensing",
                "title": "Quorum Sensing",
                "content": "Bacteria in biofilms communicate through quorum sensing -- releasing and detecting chemical signals that indicate population density. When enough bacteria are present, they collectively switch on genes for biofilm formation, toxin production, or bioluminescence. It is bacterial democracy: they vote with molecules.",
            },
            {
                "id": "biofilm-architecture",
                "title": "Biofilm Architecture",
                "content": "Mature biofilms have complex three-dimensional structures with water channels that deliver nutrients, waste removal systems, and specialized zones where different bacteria perform different functions. Some bacteria on the outside sacrifice themselves to protect the interior. The architecture emerges without any central planning -- it self-organizes through chemical communication.",
            },
        ],
    },
    # =========================================================================
    # TRACK: DEEP TIME
    # =========================================================================
    "origin-of-life": {
        "id": "origin-of-life",
        "title": "The Origin of Complex Life",
        "track": "deep_time",
        "description": "Learn how an ancient merger between organisms created all complex life on Earth.",
        "duration": "16 min",
        "character": "proto",
        "sections": [
            {
                "id": "early-earth",
                "title": "Early Earth",
                "content": "For the first two billion years of life on Earth, all organisms were simple single-celled prokaryotes -- bacteria and archaea. There were no plants, no animals, no fungi. The atmosphere had almost no oxygen. Then, around 2 billion years ago, something unprecedented happened: one cell engulfed another, and instead of being digested, the engulfed cell survived inside its host.",
            },
            {
                "id": "endosymbiosis",
                "title": "The Great Merger",
                "content": "This event, called endosymbiosis, created the first eukaryotic cell. The engulfed bacterium became the mitochondrion -- the powerhouse of the cell. Later, a similar event created chloroplasts when a eukaryote engulfed a cyanobacterium. These mergers gave rise to all complex life: every plant, animal, and fungus on Earth descended from these ancient partnerships.",
            },
            {
                "id": "evidence",
                "title": "Evidence of the Merger",
                "content": "Mitochondria and chloroplasts still carry their own DNA, separate from the cell's nucleus. They have double membranes (one from the original bacterium, one from the host cell). They reproduce by dividing, just like bacteria. They are roughly the same size as bacteria. All of this evidence points to their bacterial origin.",
            },
            {
                "id": "lesson",
                "title": "Cooperation Drives Evolution",
                "content": "The origin of complex life was not driven by competition but by cooperation. Two organisms merged and became something neither could have been alone. This is the same principle we see in mycorrhizal networks, in biofilms, and in every ecosystem. The most transformative events in the history of life came from partnership, not conflict.",
            },
        ],
    },
    "great-oxygenation": {
        "id": "great-oxygenation",
        "title": "The Great Oxygenation Event",
        "track": "deep_time",
        "description": "How cyanobacteria transformed Earth's atmosphere and made complex life possible.",
        "duration": "14 min",
        "character": "cyano",
        "sections": [
            {
                "id": "earth-without-oxygen",
                "title": "Earth Without Oxygen",
                "content": "For the first two billion years, Earth's atmosphere contained almost no free oxygen. The sky was likely orange or pink. Life existed, but it was all anaerobic -- organisms that did not need oxygen and, in many cases, were poisoned by it. Then cyanobacteria evolved the ability to perform oxygenic photosynthesis, splitting water molecules and releasing oxygen as a waste product.",
            },
            {
                "id": "oxygen-catastrophe",
                "title": "The Oxygen Catastrophe",
                "content": "As cyanobacteria proliferated, oxygen accumulated in the atmosphere. For the anaerobic organisms that had dominated Earth for billions of years, this was a catastrophe -- oxygen was toxic to them. It was the first mass extinction event, caused not by an asteroid but by a microbe's waste product. The survivors were pushed to oxygen-free environments where some, like Clostridium, persist today.",
            },
            {
                "id": "new-possibilities",
                "title": "New Possibilities",
                "content": "But oxygen also opened up new possibilities. Aerobic respiration -- using oxygen to burn fuel -- generates far more energy than anaerobic processes. This extra energy made complex multicellular life possible. Without the oxygen produced by cyanobacteria, there would be no plants, no animals, no fungi, no humans.",
            },
        ],
    },
}
