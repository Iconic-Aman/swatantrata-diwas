# Website Build Prompt — "15 August" (saloon.wtf clone)

Use this prompt as-is to generate the site (e.g. paste into Claude Code, v0, or any AI code tool).

---

## PROMPT

Build a single-page nostalgia website, structurally identical to saloon.wtf but themed around a 1990s Indian school Independence Day flag-hoisting ceremony. Plain HTML/CSS/JS (or Next.js if deploying to Vercel), no framework bloat, mobile-first, single centered column, no nav bar, no footer.

### 1. Meta / Head tags
- `<title>`: शासकीय उच्चतर माध्यमिक विद्यालय, रामपुर
- `meta description`: "वो देशभक्ति गाने जो स्कूल असेंबली में बजते थे — १५ अगस्त १९९५"
- `og:title`: same as title
- `og:description`: same as description
- `og:image`: the uploaded artwork (schoolboy saluting flag), 1200×675 crop
- `og:image:alt`: same as description
- `og:type`: website
- `og:locale`: hi_IN
- `twitter:card`: summary_large_image
- `twitter:image`: same as og:image
- `twitter:creator`: (your handle, optional)
- `viewport`: width=device-width, initial-scale=1

### 2. Page content, in exact order
1. **Live counter**: "XX online" (small text, top of page, fake-live number e.g. random 15–40 that ticks occasionally)
2. **Playlist links row**: two links side by side — "Spotify" and "YT Music" — opening external playlist URLs in a new tab
3. **Heading (H1)**: शासकीय उच्चतर माध्यमिक विद्यालय, रामपुर
4. **Cover art**: the uploaded image, square/rounded corners, centered, max-width ~500px
5. **Song title** (placeholder text, e.g. "ऐ मेरे वतन के लोगो")
6. **Artist/label name** (placeholder text, e.g. "आकाशवाणी रिकॉर्डिंग्स")
7. **Audio player**: minimal — play/pause button, scrubber bar, "0:00 / 0:00" timestamp. No extra controls (no volume, no playlist queue, no download button).

### 3. Visual style
- Background: warm cream/sepia tone matching the poster's palette
- Accent colors: saffron (#FF9933) and green (#138808) pulled from the Indian flag, used sparingly for links/buttons/borders
- Typography: Devanagari-friendly font for Hindi text (e.g. Noto Sans Devanagari or Tiro Devanagari Hindi), simple serif or clean sans-serif for English/numeric text
- Layout: everything centered in a single narrow column (max-width ~600px), generous vertical spacing, no clutter, no extra pages, no footer, no nav
- Whole page should feel calm and nostalgic, matching saloon.wtf's minimal "mood capsule" feel — not a busy poster-style layout

### 4. Functionality
- Audio player: real working play/pause + scrubbing, updates timestamp live
- "Online" counter: static or lightly randomized number on load (no backend needed for v1)
- Playlist links: plain `<a href="...">` opening in new tab
- No login, no forms, no other pages — single `index.html` (or single route if Next.js)

### 5. Assets needed (to be swapped in before deploy)
- [ ] Cover image (have it — the flag salute artwork)
- [ ] Song title + artist name (placeholder for now, swap later)
- [ ] Spotify playlist URL (placeholder for now)
- [ ] YT Music playlist URL (placeholder for now)
- [ ] Audio file or streaming source for the player (placeholder for now)

### 6. Deployment target
Structure the project so it deploys cleanly to Vercel (static `index.html` + assets, or a minimal Next.js app — no server/database required).

---

Fill in the placeholders (song, artist, playlist links, audio file) once decided, then this prompt is ready to hand off for a full build.
