## Changes to `public/invite.html`

### 1. Entry envelope video
Regenerate `public/entry-ganesha.mp4` as a wide, antique cream/ivory wedding envelope (landscape framing, ornate gold border, aged paper texture) sealed with a 3D metallic gold Ganesha stamp. Motion: slow push-in → seal cracks → gold sparks/embers burst → envelope flap opens upward → white flash transition out. No second Ganesha appearance after opening. Existing music/audio in the page stays as-is (video itself muted, matches current setup). Update the `<source>` and `<link rel="preload">` URLs to the new asset.

### 2. Sacred Ceremonies — all four as animated videos
Replace the two `<img>` blocks (Pellikoduku, Muhurtham) with the same `<video autoplay muted loop playsinline>` markup used by Sangeet/Reception. Also replace the existing Sangeet & Reception R2 video sources with new on-brand animated clips so all four feel cohesive. Each video has the date/day/time burned in as an overlay caption at the top of the frame.

Generate four short (5s, 1080p, vertical-ish 4:3 to fit current `event-video-wrap`) animated videos:

- **Sangeet** — "28 June 2026 · Sunday · 6 PM" top caption. Bride in modern ethnic lehenga, groom in modern suit-sherwani, warm lantern/fairy-light vibe, dancing silhouettes.
- **Pellikoduku** — "01 July 2026 · Wednesday · 10 AM" top caption. Telugu pellikoduku ceremony stylization (groom seated, traditional South-Indian setup, brass lamps, banana leaves, jasmine).
- **Reception** — "02 July 2026 · Thursday · 7 PM" top caption. Bride in ethnic lehenga + groom in sherwani on a reception stage, floral arch, soft bokeh.
- **Muhurtham** — "02 July 2026 · Thursday · 1:51 AM" top caption. Telugu talambralu ritual animation (couple showering rice/pearls on each other, mandapam, sacred fire glow).

Files written: `public/sangeet.mp4`, `public/pellikoduku.mp4`, `public/reception.mp4`, `public/muhurtham.mp4` (with `.asset.json` pointers). Old `pellikoduku.jpg` / `muhurtham.jpg` left in place but unreferenced.

### 3. Footer (lines 640–651)
- `Jogendra` → `Ravi`
- `Alekhya` stays
- Replace the "MADE WITH ♥ BY HOUSE OF INVITATION" line with just `MADE WITH ♥` (drop the "BY …" anchor entirely).

### Out of scope
Page `<title>` is already "Ravi & Alekhya". No other names, no copy, no section changes.
