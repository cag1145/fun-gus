# MY FUNGAL ADVENTURE — Production Spread Prompts

## Page Pair Format (Left + Right)

Each spread is two separate images stitched together.

- **Each page:** `--ar 5:4 --s 750 --v 6.1`
- **Print size per page:** 3075 × 2475 px (10" × 8" at 300 DPI with bleed)
- **Final spread:** 6150 × 2475 px (stitch left + right)

### Stitch Rules (apply to EVERY pair)

1. **Use the same `--seed` value** for both left and right pages of each spread
2. **Style prefix is identical** on both — never vary it
3. **Lighting direction is identical** — noted per spread
4. **Horizon line is identical** — noted per spread
5. **Camera height is identical** — noted per spread
6. **Inner edges have continuation elements** — a path, glow, or environment trailing off the edge toward the other page
7. **Generate both pages in the same Midjourney session** for consistent style drift

### Style Prefix (use on EVERY prompt)

```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, warm tones, depth of field bokeh. No text, no words, no letters.
```

### Character Shorthand (for prompt brevity)

- **BIRCH:** 8-year-old boy, short messy dark brown hair, plum-purple rain jacket, yellow rain boots, magnifying glass on lanyard
- **FERN:** 7-year-old girl, brown ponytail with leaf stuck in hair, brown vest over neutral shirt, leaf-green rain boots, nature journal
- **MS. H:** Woman early 30s, chestnut brown hair with silver threads, olive green coat, autumn-leaf scarf, woven basket, robin on shoulder
- **FG:** Friendly amanita mushroom, red-orange cap with white spots, cream body, blue sash, warm amber eyes, glowing gills
- **SPORA:** Tiny palm-sized pink-white translucent spore, enormous amber eyes, flickering golden head filaments, floating
- **LUMOS:** Slender translucent bell-cap mushroom, cyan-teal bioluminescent glow, pale green eyes, nervous hunch
- **PUFF:** Large perfectly round white-cream puffball, enormous blue eyes, goofy grin, stubby limbs, golden spore-dust cracks
- **CHANTY:** Regal golden-amber trumpet-cap mushroom, wavy ruffled edges, apricot-gold, amber eyes, golden story-dust from cap
- **RHIZA:** Ethereal half-fungus half-root, white hyphae upper body, brown root tendrils below, semi-transparent, golden center glow
- **INKY:** Tall elegant shaggy white cap dissolving to black-purple ink at bottom, ink-stained hands, dark purple eyes, bark satchel
- **STENCH:** Tall latticed olive-green head like a lantern, white stalk body, kind guarded brown eyes, green-brown aura, insect friends
- **BIRDIE:** Small cup-shaped bird's nest, dark brown-gray, spore-packet eggs inside, spectacles, apron, clipboard
- **SNAPPER:** Sleek layered blue-gray oyster-shell caps, athletic build, pale silver eyes, web-like finger structures, pale blue vein patterns

---

## SPREAD 1 — INTO THE RING

**Stitch specs:** Horizon at upper third. Light from upper left, warm golden afternoon. Camera at child eye level. Forest path connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, warm tones, depth of field bokeh. No text, no words, no letters.

Two children running eagerly along a sun-dappled forest path toward the right edge of the frame. The boy leads — 8 years old, short messy dark brown hair, plum-purple rain jacket, yellow rain boots, magnifying glass bouncing on lanyard, mid-stride, excited. The girl follows close behind — 7, brown ponytail with a small leaf caught in her hair, brown vest, leaf-green rain boots, clutching a nature journal, wide-eyed and eager. Mixed oak and birch forest, golden afternoon light from upper left, autumn leaves scattered on the path. The dirt path continues off the right edge of the frame. Ferns, moss, small fungi on fallen logs.

--ar 5:4 --s 750 --v 6.1 --seed 1001
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, warm tones, depth of field bokeh. No text, no words, no letters.

A small perfect fairy ring of softly glowing white mushrooms in a mossy forest clearing, positioned in the center-right of the frame. The ring is modest — six feet across, each mushroom cap glowing warm white from within. Subtle golden particles drift upward from inside the circle like inverted snow. One yellow rain boot and one leaf-green rain boot are just crossing the ring's threshold from the left edge of the frame. Deep in the background behind the ring, partially obscured by a tree trunk, a woman watches — early 30s, olive green coat, autumn-leaf scarf, woven basket, robin perched on her shoulder. She has a calm knowing smile and does not approach. A beetle walks the mossy ground outside the ring. Mixed oak and birch forest, golden afternoon light from upper left, dirt path enters from the left edge.

--ar 5:4 --s 750 --v 6.1 --seed 1001
```

---

## SPREAD 2 — DOWN TO SILLIUM (Hero Spread)

**Stitch specs:** Horizon at center (soil line). Light transitions from warm gold above to cyan-teal below. Camera at dramatic tilt. Soil layers connect across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, warm-to-cool transition, depth of field bokeh. No text, no words, no letters.

Two children falling through swirling golden particles, mid-shrink. The world expands enormously around them — a blade of grass towers like a redwood, a pebble looms like a boulder, an iridescent green beetle the size of a bus walks past. Upper half is warm sunlit golden-green. Lower half transitions through soil layers — dark rich earth, tiny roots, embedded stones — shifting from warm amber to cool teal. The soil layers extend off the right edge. Dynamic diagonal composition, falling from upper area toward lower right.

--ar 5:4 --s 750 --v 6.1 --seed 1002
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, cool bioluminescent tones, depth of field bokeh. No text, no words, no letters.

A vast underground cavern revealed. Soil layers transition from the left edge at the top, giving way to an enormous bioluminescent space below. Dozens of mycelium threads branch in every direction, pulsing with cyan and teal light. Root systems descend from the ceiling like cathedral columns. Standing in the lower right of the frame with arms spread wide in welcome: a friendly three-foot-tall amanita mushroom character, red-orange cap with white spots, cream body, blue sash, warm amber eyes, glowing gills. He radiates warmth against the vast cyan cavern behind him. The cavern stretches into glowing depth. Soil layers enter from the left edge, connecting to the surface world.

--ar 5:4 --s 750 --v 6.1 --seed 1002
```

---

## SPREAD 3 — THE GUIDE (Fun-Gus)

**Stitch specs:** Horizon not applicable (underground). Ambient cyan-teal bioluminescence. Camera at character eye level. Network threads connect across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, bioluminescent underground tones, depth of field bokeh. No text, no words, no letters.

Underground bioluminescent cavern. A friendly amanita mushroom character (red-orange cap, white spots, cream body, blue sash, glowing gills) walks between two children, one stubby arm around each shoulder. He gestures enthusiastically toward the right with his free hand. The boy's jaw is dropped. The girl scribbles in a nature journal. Behind them, a living organic diagram forms in the mycelium threads — a mushroom connected to a vast branching web below, with tree shapes and glowing nutrient paths. 

--ar 5:4 --s 750 --v 6.1 --seed 1003
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, bioluminescent underground tones, depth of field bokeh. No text, no words, no letters.

Underground bioluminescent cavern. Network threads enter from the left edge, pulsing cyan-teal. But one specific thread is FADING — barely glowing, sputtering weakly, visibly dimmer than everything around it. It leads from the left into a darker section of the cavern toward the center-right of frame. The contrast between the vibrant healthy network and this one dying connection is stark. The fading thread disappears into shadow at the far right. The cavern walls are still alive with healthy cyan threads everywhere else. The dim sputtering thread is the clear focal point — something is wrong.

--ar 5:4 --s 750 --v 6.1 --seed 1003
```

---

## SPREAD 4 — THE LITTLE LEARNER (Spora)

**Stitch specs:** Underground ambient cyan. Warm amber-gold character lighting. Camera low, at spore level. Cavern floor connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, warm intimate bioluminescent tones, depth of field bokeh. No text, no words, no letters.

Underground cavern, intimate scene. A tiny newborn spore character emerges shyly from behind the leg of a friendly amanita mushroom (red-orange cap, cream body, blue sash). The spore is palm-sized, round pale pink-white translucent body, pearlescent quality, enormous amber-gold eyes, rosy cheeks, teardrop shape. Delicate golden filaments extend from her head but FLICKER and sputter, unstable like a candle in wind. She floats slightly off the ground, half-hidden, nervous. The mushroom crouches protectively, one gentle hand near her back. Low camera angle at spore level. Soft cyan network threads glow on cavern walls. Warm amber glow from the spore's flickering filaments.

--ar 5:4 --s 750 --v 6.1 --seed 1004
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich color palette, warm intimate bioluminescent tones, depth of field bokeh. No text, no words, no letters.

Underground cavern, intimate scene. Two children crouch low, meeting a tiny creature at its level. The boy (8, messy dark hair, purple jacket, yellow boots) crouches with a soft kind expression, face full of gentleness. The girl (7, ponytail, brown vest, green boots) kneels with hands on knees, encouraging and warm. They both look toward the left edge of frame where they see something small and wonderful. Their body language is open, welcoming, protective. Low camera angle at child-crouching height. Soft cyan network threads glow on cavern walls behind them. Warm amber-gold light spills from the left edge onto their faces.

--ar 5:4 --s 750 --v 6.1 --seed 1004
```

---

## SPREAD 5 — THE LAMPLIGHTER (Lumos)

**Stitch specs:** Strong light gradient — dark left, bright right. Camera at character level. Tunnel walls connect across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. High contrast, bioluminescent cyan against deep darkness, depth of field bokeh. No text, no words, no letters.

Dark underground tunnel. A slender delicate mushroom character with a translucent bell-shaped cap glowing intense cyan-teal bioluminescent light stands facing left into total darkness. His body is translucent with faint network threads visible inside like fiber optics. Large pale green eyes with glowing pupils. Slight nervous hunch but chin up — going first despite fear. He IS the only light source. Behind him, dormant threads on the tunnel walls are relighting in his wake — flaring back to cyan one by one. Trails of soft light where his hands touched surfaces. Ahead of him: pitch black. The relit threads extend toward the right edge of the frame.

--ar 5:4 --s 750 --v 6.1 --seed 1005
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Bioluminescent underground tones, cyan network glow, depth of field bokeh. No text, no words, no letters.

Brightly lit underground tunnel. Active network threads pulse steady cyan-teal on the walls. A friendly amanita mushroom character (red-orange cap, cream body, blue sash), two children (boy in purple jacket and yellow boots, girl with ponytail and green boots holding journal), and a tiny floating pink-white spore with flickering filaments stand together watching toward the left edge with expressions of quiet awe. They are bathed in warm network light — their zone is safe, active, glowing. The tunnel extends toward the left edge where the light fades slightly, transitioning toward where the lamplighter works. Threads are brighter closer to the group, dimmer toward the left edge.

--ar 5:4 --s 750 --v 6.1 --seed 1005
```

---

## SPREAD 6 — THE MESSENGER (Puff)

**Stitch specs:** Golden volumetric haze throughout both pages. Camera at character level. Golden spore-dust clouds connect across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm golden explosion, volumetric light, depth of field bokeh. No text, no words, no letters.

Underground cavern filled with billowing golden-amber spore-dust clouds. The aftermath of an explosion of golden glitter. A boy (8, messy dark hair, purple jacket, yellow boots) laughs with golden dust coating his hair. A girl (7, ponytail, brown vest, green boots) sneezes, one hand on face, journal dusted gold. A friendly amanita mushroom (red-orange cap, cream body) shields a tiny floating pink-white spore behind his body — the spore peeks out, delighted. A slender glowing cyan mushroom is completely coated in golden dust, glowing through it like a sparkly nightlight. Golden spore-clouds billow toward the right edge. Everyone is laughing.

--ar 5:4 --s 750 --v 6.1 --seed 1006
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm golden explosion, volumetric light, depth of field bokeh. No text, no words, no letters.

Underground cavern. A large perfectly round white-cream puffball character — like a giant marshmallow with a face — has just BURST. Enormous bright blue eyes wide with excitement. Big goofy grin. Rosy cheeks. Stubby tiny arms and legs too small for his round body. Cracks across his surface emit the last wisps of a massive golden-amber spore cloud. He is SO round, comically perfectly round. The golden spore-dust billows outward in every direction, drifting along mycelium threads in the background. Volumetric golden light fills the air. Golden clouds drift toward the left edge. He looks sheepish but delighted.

--ar 5:4 --s 750 --v 6.1 --seed 1006
```

---

## SPREAD 7 — THE STORYTELLER (Chanty)

**Stitch specs:** Golden-amber warmth throughout. Camera slightly low, looking up at story-dust vision. Amphitheater cavern connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich golden-amber palette, ethereal particle effects, depth of field bokeh. No text, no words, no letters.

Underground natural amphitheater with curved warm cavern walls. A regal medium-sized mushroom character with a flowing trumpet-shaped golden-amber cap with wavy ruffled edges like a performer's cape. Rich apricot-gold coloring, warm amber eyes sparkling. She stands in full theatrical pose, one hand raised in storytelling gesture. Delicate ridges on her cap glow with pulsing gold light. Golden story-dust particles drift upward from her cap edges like embers. Above her, the story-dust coalesces into a ghostly luminous vision — a great oak tree, tall and proud, glowing amber. The vision extends toward the right edge. She commands the space.

--ar 5:4 --s 750 --v 6.1 --seed 1007
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Rich golden-amber palette, ethereal particle effects, depth of field bokeh. No text, no words, no letters.

Underground natural amphitheater. Golden story-dust particles fill the air, drifting from the left edge. Above the scene, a ghostly luminous vision formed of golden dust — a great oak tree fallen, and beside it a single tiny sapling growing where it once stood. The vision enters from the left and floats overhead. Below, the group watches in mesmerized silence: a boy (purple jacket, yellow boots) standing still for once, mouth open. A girl (ponytail, brown vest, green boots) has stopped writing, just listening. A round white puffball character is motionless, mouth agape. A tiny pink-white spore floats near the girl, both staring upward. A friendly amanita mushroom watches fondly. All faces upturned toward the golden vision.

--ar 5:4 --s 750 --v 6.1 --seed 1007
```

---

## SPREAD 8 — THE TRANSLATOR (Rhiza)

**Stitch specs:** Split lighting — warm brown from roots above, cool cyan from threads below, golden center. Camera at character level. Root-thread junction connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Dual warm-brown and cool-cyan palette, golden center glow, depth of field bokeh. No text, no words, no letters.

Underground junction where massive tree roots descend from above and mycelium threads rise from below. At the exact intersection, an ethereal flowing character half-emerges from the ground. Upper body: delicate white fungal threads forming a graceful feminine form. Lower body: warm brown root tendrils merging into earth. Semi-transparent — tiny glowing nutrient particles visible flowing through her body in both directions, amber specks upward, blue-white specks downward. Calm serene face with deep amber eyes. Soft golden glow at her center where the exchange happens. She IS the bridge between two worlds. Warm brown root-light from above, cool cyan from below, golden glow where they meet.

--ar 5:4 --s 750 --v 6.1 --seed 1008
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Dual warm-brown and cool-cyan palette, golden center glow, depth of field bokeh. No text, no words, no letters.

Underground junction with massive tree roots above and mycelium threads below. The group watches a miraculous sight from this side. A boy (purple jacket, yellow boots) stares with mouth open. A girl (ponytail, brown vest, green boots) whispers something to the boy with an expression of sudden understanding. A friendly amanita mushroom (red-orange cap, cream body) gestures excitedly toward the left edge. A tiny pink-white spore floats nearby, amber eyes wide. Golden nutrient particles drift through the air from the left edge, visible flowing between the root-world above and thread-world below. Warm brown root-light from above, cool cyan from below.

--ar 5:4 --s 750 --v 6.1 --seed 1008
```

---

## SPREAD 9 — THE SCRIBE (Inky)

**Stitch specs:** Warm intimate library lighting with purple-black ink accents. Camera at character level. Ink-inscribed cavern wall connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm intimate tones with purple-black ink accents, depth of field bokeh. No text, no words, no letters.

A quiet underground alcove. The cavern wall is covered in beautiful black-purple calligraphic ink marks — images, symbols, flowing script covering the stone like a living library. The inscriptions are elegant, iridescent purple-black, clearly accumulated over years. The wall extends off the right edge. A tall elegant mushroom character stands at the wall, writing. She has a shaggy cylindrical white cap with curling edges — the bottom edges dissolving into dripping black-purple ink, a beautiful gradient like watercolor bleeding. Slim pale body, ink-stained dark hands. One hand traces flowing marks onto the stone. Thoughtful dark eyes with purple undertones. A bark satchel at her side. Intimate library atmosphere.

--ar 5:4 --s 750 --v 6.1 --seed 1009
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm intimate tones with purple-black ink accents, depth of field bokeh. No text, no words, no letters.

A quiet underground alcove. Ink-inscribed cavern wall extends from the left edge — beautiful black-purple calligraphic marks covering the stone. A girl (7, ponytail, brown vest, green boots) reaches out and gently touches one of the ancient ink marks on the wall with reverence, eyes full of wonder. A boy (8, messy dark hair, purple jacket, yellow boots) stands behind her, unusually quiet and still — deeply affected. A tiny pink-white spore floats near the wall, enormous amber eyes staring at the inscriptions. Intimate warm lighting. The ink marks catch light with subtle purple iridescence. The mood is hushed, like a library where something sacred is kept.

--ar 5:4 --s 750 --v 6.1 --seed 1009
```

---

## SPREAD 10 — THE MISUNDERSTOOD ONE (Stench)

**Stitch specs:** Warm amber filtering through lattice patterns. Camera at character level. Lush insect ecosystem connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm amber and olive-green tones, depth of field bokeh. No text, no words, no letters.

Underground section lush with insect life — colorful beetles, friendly flies, a ladybug, small glowing creatures. Despite being empty of other fungal characters, this area is alive and beautiful in its own way. In the center, a tall unusual mushroom character with a distinctive latticed netted head structure in olive-green and brown tones, open and airy like a natural lantern. Thick sturdy white stalk body. Kind but guarded brown eyes within the lattice. A faint green-brown misty aura surrounds him, gentle not disgusting. Tiny beetles perch comfortably on his lattice like old friends. Warm amber light filters through his lattice head creating beautiful dappled patterns. He looks toward the right edge with cautious hope.

--ar 5:4 --s 750 --v 6.1 --seed 1010
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm amber and olive-green tones, depth of field bokeh. No text, no words, no letters.

Underground section with lush insect life — beetles, flies, small creatures extending from the left edge. A boy (8, messy dark hair, purple jacket, yellow boots) sits cross-legged on the ground right next to where a tall character would be on the left page. He's relaxed, comfortable, genuinely interested — no disgust, no hesitation. A small beetle crawls on his knee and he grins at it. A girl (7, ponytail, brown vest, green boots) sits nearby, nature journal open, sketching with quiet fascination. A friendly amanita mushroom watches the scene with emotional pride. Warm amber dappled light patterns on the ground. The mood has shifted from cautious to gentle warmth. Someone finally sat down next to him.

--ar 5:4 --s 750 --v 6.1 --seed 1010
```

---

## SPREAD 11 — THE LAUNCHER (Birdie)

**Stitch specs:** Warm domestic amber glow. Camera slightly low looking up at launch arc. Organized station and launch trajectory connect across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm domestic amber glow, organized cozy atmosphere, depth of field bokeh. No text, no words, no letters.

Underground launch station — meticulously organized network junction. Labeled containers line the walls. Neat rows of prepared dark glossy spore-packets sit in formation. A targeting scope made of bent root is mounted on a platform. In the center, a small cup-shaped character resembling a tiny bird's nest — dark brown-gray bark exterior, smooth lighter interior holding round glossy dark spore-packets like eggs. Warm round face with kind brown eyes behind small round spectacles. Tiny apron, clipboard under one arm. She has just launched — one hand extended in follow-through, eyes tracking a glowing amber spore-packet arcing away toward the right edge, trailing a line of amber light like a comet. Precision. Satisfaction.

--ar 5:4 --s 750 --v 6.1 --seed 1011
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm domestic amber glow, comedy and wonder, depth of field bokeh. No text, no words, no letters.

Underground cavern. A glowing amber spore-packet traces a perfect arc from the left edge toward a distant glowing network node in the background, trailing amber light like a comet — a beautiful trajectory line crossing the upper portion of the frame. Below the arc, a boy (8, messy dark hair, purple jacket, yellow boots) watches with jaw dropped, absolutely impressed. A girl (7, ponytail, brown vest, green boots) sketches the trajectory arc in her journal. A round white puffball character has accidentally burst again — a small cloud of golden spore-dust. A friendly amanita mushroom chuckles. The arc of the launched spore-packet IS the composition — the eye follows the trajectory from left to right.

--ar 5:4 --s 750 --v 6.1 --seed 1011
```

---

## SPREAD 12 — THE PROTECTOR (Snapper)

**Stitch specs:** Cool blue-silver atmosphere, dramatic contrast. Camera at character level. Dark tunnel edge connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Cool blue-silver atmosphere, dramatic contrast, depth of field bokeh. No text, no words, no letters.

Underground network perimeter — darker, cooler, tense. A sleek layered fan-shaped mushroom character with overlapping oyster-shell caps in cool blue-gray and slate tones drops from above into frame with silent precision. Strong athletic build, broader and more solid than other characters. Sharp alert pale silver eyes. Cap layers create natural armor. Subtle pale blue bioluminescent vein patterns through her body. Her larger hands extend web-like structures that capture a dark slithering nematode shape cleanly, efficiently. Calm, professional, not aggressive. Pale blue trap threads extend from the soil. Cool blue-silver light. She is between the threat and everything behind her.

--ar 5:4 --s 750 --v 6.1 --seed 1012
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Cool blue-silver transitioning to warmer tones, depth of field bokeh. No text, no words, no letters.

Underground tunnel, slightly brighter and warmer than the left side. The group watches from a safe distance, protected. A boy (8, messy dark hair, purple jacket, yellow boots) stares toward the left edge with wide impressed eyes. A girl (7, ponytail, brown vest, green boots) watches thoughtfully — processing, not afraid. A friendly amanita mushroom (red-orange cap, cream body) stands alert. A tiny pink-white spore hides behind him. A slender glowing cyan mushroom provides light. Steady blue network threads pulse behind them. They are safe because someone is protecting the line between them and the darkness. The tunnel toward the left edge is cooler, darker — the perimeter.

--ar 5:4 --s 750 --v 6.1 --seed 1012
```

---

## SPREAD 13 — ALL TOGETHER (Hero Spread)

**Stitch specs:** Amber-gold explosion radiating from center-right. Camera slightly elevated for wide view. Golden pulse radiates across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm amber-gold radiant light, bioluminescent network glow, depth of field bokeh. No text, no words, no letters.

Underground cavern — the climactic moment. Multiple characters in action positions contributing their abilities. A slender cyan-glowing mushroom illuminates the scene at full brightness. A golden trumpet-capped mushroom hums, golden story-dust drifting from her cap. A tall elegant white-capped mushroom with dissolving purple ink edges writes on the wall, recording the moment. A tall latticed olive-green mushroom's insect friends carry tiny glowing signals outward. A sleek blue-gray armored mushroom guards the perimeter. Above, a glowing amber spore-packet arcs in from a distant launch station, trailing amber light. Bright amber-gold radiance fills the space from the right edge. Every character is lit, active, contributing. The network threads blaze with light.

--ar 5:4 --s 750 --v 6.1 --seed 1013
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Brilliant amber-gold radiant explosion, triumph, depth of field bokeh. No text, no words, no letters.

Underground cavern — the TRIUMPH. At the center of the frame, a tiny pink-white spore touches a fading mycelium thread connected to pale struggling seedling roots above. Her golden head filaments STABILIZE — steady bright amber-gold, no more flickering. From her touch, a BRILLIANT golden pulse of light radiates outward through the entire network, branching, splitting, reaching. Two children kneel beside her with hands on the glowing thread — the boy fist-pumping, the girl in tears of wonder. A friendly amanita mushroom watches with pride. The seedling roots above transform from pale dry gray to warm glowing gold. A tiny new tendril unfurls. The golden pulse radiates outward toward the left edge, filling every thread with light. The smallest voice made the biggest difference.

--ar 5:4 --s 750 --v 6.1 --seed 1013
```

---

## SPREAD 14 — GOING HOME

**Stitch specs:** Warm golden afternoon surface light. Camera at child level. Forest path connects across inner edges.

### Left Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm golden late afternoon light, gentle nostalgia, depth of field bokeh. No text, no words, no letters.

Late golden afternoon in a temperate forest. Two children stand in a clearing, normal size, back on the surface. A circle of ordinary white mushrooms on the ground behind them — no glow, just mushrooms. The boy (8, messy dark hair, purple jacket, yellow boots) looks at the girl with quiet wonder, subdued for once. The girl (7, ponytail, brown vest, green boots) looks back. They share a look that says "did that just happen." On the nearby trail, a woman (early 30s, olive green coat, autumn-leaf scarf, woven basket) sits on a fallen log, smiling warmly as if they'd only been gone a moment. A robin flies from her shoulder. She shows zero surprise. Golden afternoon sun, long shadows, the warmth of returning home.

--ar 5:4 --s 750 --v 6.1 --seed 1014
```

### Right Page
```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly picture book illustration. Warm golden late afternoon light with subtle underground glow, depth of field bokeh. No text, no words, no letters.

Late golden afternoon in a temperate forest. Close-up: a girl's hand pressed flat against the rough bark of a massive oak tree, eyes closed, peaceful smile on her face. She KNOWS what's underneath. At the very bottom of the frame, shown as a subtle translucent cross-section underground: glowing cyan mycelium threads pulse with light beneath the soil. Tiny silhouettes are barely visible in the underground glow — a small mushroom character waving, a tiny floating spore glowing steady, a round puffball bouncing, a slender cyan lamp glowing. Hidden reward for close readers. The forest above is warm golden afternoon. The underground is a whisper of cyan. Two worlds. Connected. The network was always there.

--ar 5:4 --s 750 --v 6.1 --seed 1014
```

---

## BACK MATTER — "The Real Science!"

**Single page, not a spread.** Vertical format.

```
Pixar-quality 3D render, soft cinematic lighting, kid-friendly educational infographic style. Bright, clean, cheerful. No text, no words, no letters.

A cross-section illustration split vertically — forest ABOVE and underground BELOW, divided by the soil line at center. Above: healthy trees of different sizes, green canopy, sunny sky, one mushroom visible on the surface. Below: root systems connected by extensive glowing cyan mycelium network, amber pulses showing nutrient flow, the underground web far larger than the surface mushroom. Around the cross-section, small character portraits arranged like a cast photo: a red-orange amanita waving, a tiny pink spore glowing, a cyan bell-cap mushroom, a round white puffball mid-burst, a golden trumpet-capped storyteller, a half-white half-brown ethereal translator, a white cap dissolving to purple ink, a latticed olive-green mushroom with insects, a cup-shaped character with spectacles, a blue-gray armored mushroom. Bright natural sun above, cyan bioluminescence below.

--ar 5:4 --s 750 --v 6.1
```

---

## PRODUCTION CHECKLIST

### Generation Order
1. Character reference sheets first (use existing prompts in `Prompts/Human/` and `Prompts/Fungal/`)
2. Generate both pages of each spread in the same session with the same `--seed`
3. Start with above-ground spreads (1, 14) for consistent forest lighting
4. Then underground character spreads (3-12) as a batch
5. Hero spreads last (2, 13) — most complex, benefit from established style

### Stitching in Photoshop
1. Create canvas at 6150 × 2475 px
2. Place left page flush left, right page flush right
3. If edge colors don't match perfectly: use a 50-100px soft gradient blend at the center seam
4. Check: horizon lines align, lighting direction matches, color temperature is consistent
5. Flatten and export

### Color Language (consistent across all spreads)
| Color | Meaning |
|-------|---------|
| Cyan/teal | Network communication, active threads, SILLIUM |
| Amber/gold | Learning, growth, connection, Spora's glow, story-dust |
| Warm white | Trust, guidance, Fun-Gus's glow |
| Purple-black | Preservation, record-keeping (Inky) |
| Cool blue-gray | Protection, strength (Snapper) |
| Golden-amber | Storytelling, memory (Chanty) |
| Olive-green | Stench's unique palette |
