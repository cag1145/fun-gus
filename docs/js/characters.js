/* Fun-Gus Character Gallery */

const characters = [
  // === FUNGI ===
  { name: 'Fun-Gus', species: 'Amanita muscaria — Fly Agaric', kingdom: 'fungi', role: 'Guide & Mentor',
    img: 'images/characters/fun-gus.webp',
    desc: 'The warm heart of the Sillium network. Fun-Gus is patient, funny, and incapable of condescension. He connects everyone, coordinates the network, and welcomes newcomers with open arms. He teaches cooperation, patience, and the power of connection.',
    fact: 'The iconic red-and-white spotted mushroom forms real mycorrhizal partnerships with birch and pine trees, trading minerals for sugar.' },

  { name: 'Spora', species: 'Fungal Spore — New Life', kingdom: 'fungi', role: 'Learner & Audience Surrogate',
    img: 'images/characters/spora.webp',
    desc: 'Tiny, uncertain, and brand new. Spora is learning everything for the first time — how to send messages, how to connect, how to belong. She represents every kid who\'s ever felt too small or too new. Her journey from flickering signal to steady glow is the emotional core of the series.',
    fact: 'A single mushroom can release BILLIONS of spores. Each one is a potential new organism — every giant fungal network started as one tiny spore.' },

  { name: 'Truff-Low', species: 'Tuber sp. — Truffle', kingdom: 'fungi', role: 'Memory Keeper & Elder',
    img: 'images/characters/truff-low.webp',
    desc: 'Ancient. Deliberate. Every word matters. Truff-Low holds the memory of the entire forest — centuries of droughts, fires, seasons, and stories stored in the deep threads. He speaks rarely, but when he does, the network listens.',
    fact: 'Truffles grow entirely underground and can take 7-10 years to produce their first fruiting body. Some truffle networks are estimated to be hundreds of years old.' },

  { name: 'Lumos', species: 'Mycena chlorophos — Bioluminescent Mycena', kingdom: 'fungi', role: 'Scout & Lamplighter',
    img: 'images/characters/lumos.webp',
    desc: 'Nervous, jittery, and perpetually scared — but he goes first anyway. Lumos glows brighter the more afraid he is, illuminating the darkest paths of the network. He reactivates dormant threads in his wake.',
    fact: 'Over 80 species of fungi are bioluminescent. Scientists believe the glow attracts insects that help spread spores. The brightest can be seen from 50 feet away in total darkness.' },

  { name: 'Chanty', species: 'Cantharellus cibarius — Golden Chanterelle', kingdom: 'fungi', role: 'Storyteller & Network Historian',
    img: 'images/characters/chanty.webp',
    desc: 'Theatrical, regal, and magnetic. Chanty carries the stories the forest wants to remember. Her golden story-dust can replay network memories as visible, hovering images — making the invisible past visible to everyone.',
    fact: 'Chanterelles grow in family groups and form long-term partnerships with specific trees. The same patch can produce mushrooms in the same spot for decades.' },

  { name: 'Puff', species: 'Calvatia gigantea — Giant Puffball', kingdom: 'fungi', role: 'Messenger & Comic Relief',
    img: 'images/characters/puff.webp',
    desc: 'Round, rosy, and perpetually exploding with joy. Puff can\'t help bursting — but those golden clouds carry messages across the entire network. He\'s the loudest, fastest signal in Sillium. What looks like a flaw is actually his superpower.',
    fact: 'A single giant puffball can release up to 7 TRILLION spores in one burst! If every spore grew, they would outweigh the Earth.' },

  { name: 'Rhiza', species: 'Mycorrhizal Interface', kingdom: 'fungi', role: 'Translator & Bridge',
    img: 'images/characters/rhiza.webp',
    desc: 'Half mushroom, half root, glowing gold where the two touch. Rhiza exists at the exact intersection of fungal and tree worlds, translating between them. Without her, the whole network goes quiet. She is calm, patient, and utterly essential.',
    fact: 'Mycorrhizae are the physical connection between fungi and tree roots. About 90% of all plants on Earth depend on these partnerships to survive.' },

  { name: 'Inky', species: 'Coprinus comatus — Shaggy Ink Cap', kingdom: 'fungi', role: 'Scribe & Record-Keeper',
    img: 'images/characters/inky.webp',
    desc: 'Tall, elegant, dissolving. Inky writes down what matters using her own cap as ink. Each record costs her a little — making every entry a gift. "Everything worth keeping costs something." The most emotionally resonant character in the cast.',
    fact: 'Ink cap mushrooms undergo autodigestion — they dissolve their own caps into black liquid to disperse spores. This real ink was historically used for writing.' },

  { name: 'Stench', species: 'Phallales — Stinkhorn', kingdom: 'fungi', role: 'Insect Diplomat',
    img: 'images/characters/stench.webp',
    desc: 'Misunderstood genius. His smell repels everyone — except the insects who are essential for spore dispersal. Beetles perch on his shoulders like old friends. "Important things aren\'t always pretty."',
    fact: 'Stinkhorn fungi produce a smell that attracts flies and beetles who carry their spores. What seems unpleasant is actually a brilliant dispersal strategy.' },

  { name: 'Birdie', species: 'Nidulariaceae — Bird\'s Nest Fungus', kingdom: 'fungi', role: 'Precision Launcher',
    img: 'images/characters/birdie.webp',
    desc: 'Small, precise, and organized to a fault. Birdie runs long-range delivery from her meticulously organized launch station. Tiny spectacles, clipboard in hand, every delivery right on time. "Every delivery matters."',
    fact: 'Bird\'s nest fungi launch spore packets using raindrop impacts. A single raindrop can launch a packet over 100 times the fungus\'s own height!' },

  { name: 'Snapper', species: 'Pleurotus ostreatus — Oyster Mushroom', kingdom: 'fungi', role: 'Protector & Hunter',
    img: 'images/characters/snapper.webp',
    desc: 'Cool, calm, armored. Snapper guards the network\'s edges with web-like trap threads that catch parasitic threats before they spread. Not all heroes are gentle. "Not everything in the forest plays fair. That\'s why I\'m here."',
    fact: 'Oyster mushrooms are real predators! They produce lasso-like loops that capture nematodes in under a second. They\'re the only "carnivorous" mushroom most people eat.' },

  { name: 'Morel', species: 'Morchella — Morel Mushroom', kingdom: 'fungi', role: 'Fire Ecology Specialist',
    img: 'images/characters/morel.webp',
    desc: 'The wanderer. Morel appears after fire and disaster, teaching that destruction leads to renewal. Weathered, wise, always moving. "The forest doesn\'t end with fire. It begins again."',
    fact: 'Morel mushrooms famously fruit in areas that experienced fire the previous year. They\'re one of the most prized edible mushrooms and among the hardest to cultivate.' },

  { name: 'Physa', species: 'Physarum polycephalum — Slime Mold', kingdom: 'fungi', role: 'Problem Solver & Engineer',
    img: 'images/characters/physa.webp',
    desc: 'Not quite fungus, not quite anything else. Physa is an identity explorer and brilliant engineer who solves problems no one else can — finding the shortest path, optimizing networks, embracing being different.',
    fact: 'Slime molds can solve mazes, replicate highway networks, and make optimal decisions — all without a brain. They challenge our definitions of intelligence.' },

  { name: 'Russula', species: 'Russula — Russula Mushroom', kingdom: 'fungi', role: 'Self-Acceptance',
    img: 'images/characters/russula.webp',
    desc: 'Beautiful but fragile. Russula crumbles easily — and learns that cracks don\'t make you broken. Her journey is about accepting vulnerability as strength. Vibrant red cap that chips at the edges.',
    fact: 'Russula mushrooms are known for their brittle, crumbly flesh — they snap cleanly instead of bending. Despite their fragility, they\'re one of the most diverse genera with over 750 species.' },

  { name: 'Tardi', species: 'Tardigrade — Water Bear', kingdom: 'fungi', role: 'Extremophile & Survivor',
    img: 'images/characters/tardi.webp',
    desc: 'Tiny, indestructible, and endlessly cheerful about it. Tardi can survive anything — extreme heat, cold, radiation, vacuum. He ventures to the network\'s most dangerous edges. "You can\'t break me. I\'ve tried."',
    fact: 'Tardigrades can survive temperatures from -272°C to 150°C, pressures 6x the ocean floor, radiation 1000x lethal human dose, and the vacuum of space.' },

  // === BACTERIA ===
  { name: 'Nitro', species: 'Rhizobium — Nitrogen Fixer', kingdom: 'bacteria', role: 'Root Nodule Worker',
    img: 'images/characters/nitro.webp',
    desc: 'Humble, essential, and proud of his work. Nitro lives in root nodules, converting atmospheric nitrogen into forms plants can use. Without him, the forest would starve. He never seeks credit.',
    fact: 'Nitrogen-fixing bacteria convert N₂ gas from the atmosphere into ammonia that plants need. They fix about 200 million tons of nitrogen per year globally.' },

  { name: 'Strepto', species: 'Streptomyces — Soil Antibiotic Producer', kingdom: 'bacteria', role: 'Medic & Disease Fighter',
    img: 'images/characters/strepto.webp',
    desc: 'The forest\'s immune system. Strepto produces natural antibiotics that fight disease in the soil. Calm under pressure, methodical, and always ready when Blight arrives.',
    fact: 'Over 70% of naturally-derived antibiotics come from Streptomyces bacteria in soil. The smell of fresh earth ("petrichor") is partly caused by geosmin, a compound they produce.' },

  { name: 'Lacto', species: 'Lactobacillus — Fermenter', kingdom: 'bacteria', role: 'Alchemist & Food Transformer',
    img: 'images/characters/lacto.webp',
    desc: 'The alchemist. Lacto transforms raw materials into something new — fermentation as magic. Yogurt, cheese, sourdough, kimchi — she\'s behind all of it. "Transformation is my art."',
    fact: 'Lactobacillus bacteria are responsible for fermented foods humans have eaten for thousands of years. They produce lactic acid, which preserves food and creates distinctive flavors.' },

  { name: 'Cyano', species: 'Cyanobacteria — Ancient Photosynthesizer', kingdom: 'bacteria', role: 'Oxygen Producer',
    img: 'images/characters/cyano.webp',
    desc: 'The most ancient character in the cast — 3.5 billion years old. Cyano\'s ancestors created the oxygen in Earth\'s atmosphere. She carries the weight of being the reason everything else can breathe.',
    fact: 'Cyanobacteria created Earth\'s oxygen atmosphere 2.4 billion years ago in the "Great Oxidation Event." They\'re the reason aerobic life — including us — exists.' },

  { name: 'Bacilli', species: 'Bacillus subtilis — Soil Bacterium', kingdom: 'bacteria', role: 'Soil Builder',
    img: 'images/characters/bacilli.webp',
    desc: 'Sturdy, reliable, and everywhere. Bacilli breaks down organic matter and builds healthy soil structure. Not glamorous, but absolutely foundational. "Someone has to do the groundwork."',
    fact: 'Bacillus subtilis is one of the most studied bacteria. It forms resilient endospores that can survive extreme conditions and is used in agriculture as a natural biocontrol agent.' },

  { name: 'Blight', species: 'Pathogenic Bacterium', kingdom: 'bacteria', role: 'Disease Spreader (Antagonist)',
    img: 'images/characters/blight.webp',
    desc: 'Not evil — just doing what pathogens do. Blight spreads disease through the network, testing its defenses. He\'s the natural challenge that forces the network to adapt and grow stronger. Strepto\'s nemesis.',
    fact: 'Bacterial blights are real plant diseases that can devastate crops and forests. They spread through water, insects, and contaminated soil — making network defense essential.' },

  { name: 'Proto', species: 'Proteobacteria', kingdom: 'bacteria', role: 'Versatile Adapter',
    img: 'images/characters/proto.webp',
    desc: 'The shapeshifter. Proto can adapt to almost any environment and fill almost any role. Jack of all trades, master of adaptation. Flexible, resourceful, and impossible to pin down.',
    fact: 'Proteobacteria are the largest and most diverse phylum of bacteria, including everything from E. coli to nitrogen fixers to purple photosynthetic bacteria.' },

  { name: 'Virion', species: 'Bacteriophage', kingdom: 'bacteria', role: 'Viral Specialist',
    img: 'images/characters/virion.webp',
    desc: 'Technically not alive, which he finds philosophically interesting. Virion is a bacteriophage — a virus that infects bacteria. He keeps bacterial populations in check and maintains ecosystem balance.',
    fact: 'Bacteriophages are the most abundant biological entities on Earth — there are an estimated 10³¹ phages on the planet. They kill about 40% of ocean bacteria every day, recycling nutrients.' },

  // === INSECTS ===
  { name: 'Buzz', species: 'Apis mellifera — Western Honeybee', kingdom: 'insect', role: 'Above-Ground Connector',
    img: 'images/characters/buzz.webp',
    desc: 'The sky bridge. Buzz connects the above-ground world to the underground network. Pollen, signals, news — he carries them between realms. Energetic, community-focused, and tireless.',
    fact: 'A single honeybee can visit up to 5,000 flowers per day. Bees communicate through "waggle dances" that tell others exactly where to find food — their own form of networking.' },

  { name: 'Mantis', species: 'Mantodea — Praying Mantis', kingdom: 'insect', role: 'Predator & Ecosystem Balancer',
    img: 'images/characters/mantis.webp',
    desc: 'Patient, precise, and philosophical. Mantis is the apex predator of the insect world — keeping populations in balance. She waits. She watches. She strikes only when necessary. "Balance requires hard choices."',
    fact: 'Praying mantises can rotate their heads 180 degrees and see in 3D. They\'re ambush predators that play a crucial role in controlling pest insect populations.' },

  // === HUMANS ===
  { name: 'Birch', species: 'Human — 8 years old', kingdom: 'human', role: 'Adventurer & Action Hero',
    img: 'images/characters/birch.webp',
    desc: 'Bold, adventurous, and always first through the door. Short messy dark hair, yellow rain boots, purple jacket, magnifying glass on lanyard. Birch notices possibilities where others see ordinary. He takes the first step into the fairy ring.',
    fact: 'Named after the birch tree — one of the first trees to colonize new ground after disturbance. Pioneer species, just like the character.' },

  { name: 'Fern', species: 'Human — 7 years old', kingdom: 'human', role: 'Observer & Detail Finder',
    img: 'images/characters/fern.webp',
    desc: 'Cautious, observant, and always writing in her nature journal. Ponytail with a leaf stuck in it, green boots, brown vest. Fern notices patterns where others see chaos. She asks the questions that matter most.',
    fact: 'Named after ferns — ancient plants that reproduce by spores, connecting her to the fungal world. Ferns have been around for over 360 million years.' },

  { name: 'Ms. Hawthorn', species: 'Human(?) — Ageless', kingdom: 'human', role: 'Teacher & Threshold Guardian',
    img: 'images/characters/mrs-hawthorn.webp',
    desc: 'Warm, encouraging, and subtly... other. Olive coat, autumn-leaf scarf, woven basket, kind eyes with an ageless quality. She guides children to the fairy ring but never steps inside. Animals approach her unafraid. Flowers lean toward her. She hums melodies no one recognizes. The show never confirms what she might be. Only wonders.',
    fact: 'The hawthorn tree is deeply embedded in Celtic and European folklore as a faerie tree — a threshold between the human world and the otherworld. Her name is not a coincidence.' },
];

// ===== Render Grid =====
function renderGrid(filter = 'all') {
  const grid = document.getElementById('char-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? characters : characters.filter(c => c.kingdom === filter);

  grid.innerHTML = filtered.map((c, i) => `
    <div class="char-card reveal" data-index="${characters.indexOf(c)}" style="animation-delay: ${(i % 8) * 0.05}s" role="button" tabindex="0">
      ${c.img
        ? `<img src="${c.img}" alt="${c.name}" class="card-img" loading="lazy">`
        : `<div class="placeholder-img">?</div>`}
      <div class="char-card-body">
        <h3>${c.name}</h3>
        <div class="species">${c.species}</div>
        <div class="role">${c.role}</div>
        <span class="kingdom-tag tag-${c.kingdom}">${c.kingdom}</span>
      </div>
    </div>
  `).join('');

  // Re-init scroll reveal for new elements
  const reveals = grid.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  reveals.forEach(el => observer.observe(el));

  // Click and keyboard handlers for modal
  grid.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.index)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(parseInt(card.dataset.index));
      }
    });
  });
}

// ===== Modal =====
let previouslyFocusedElement = null;

function openModal(index) {
  const c = characters[index];
  const modal = document.getElementById('char-modal');

  previouslyFocusedElement = document.activeElement;

  document.getElementById('modal-img').src = c.img || '';
  document.getElementById('modal-img').style.display = c.img ? 'block' : 'none';
  document.getElementById('modal-name').textContent = c.name;
  document.getElementById('modal-species').textContent = c.species;

  const tag = document.getElementById('modal-kingdom');
  tag.textContent = c.kingdom;
  tag.className = `kingdom-tag tag-${c.kingdom}`;

  document.getElementById('modal-desc').textContent = c.desc;
  document.getElementById('modal-fact-text').textContent = c.fact;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Move focus into the modal
  const closeBtn = document.getElementById('modal-close');
  closeBtn.focus();
}

function closeModal() {
  document.getElementById('char-modal').classList.remove('open');
  document.body.style.overflow = '';

  // Restore focus to the element that opened the modal
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
    previouslyFocusedElement = null;
  }
}

// ===== Filter Buttons =====
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.filter);
    });
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('char-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Focus trap within modal
  document.getElementById('char-modal').addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const modal = document.getElementById('char-modal');
    if (!modal.classList.contains('open')) return;
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
