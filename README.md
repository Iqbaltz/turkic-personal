# Muhammad Iqbal · Portfolio

A personal portfolio built as a walk through an Ottoman caravanserai: scroll through the palace gate into a pastel
courtyard, then visit the rooms (About, Workbench, Journey, Bazaar, Library, Tea house).

Next.js 16 (App Router) · Tailwind CSS v4 · Motion · Lenis. All artwork is hand-drawn SVG, no image files.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Edit the content

Everything visitors read lives in [`src/content/profile.ts`](src/content/profile.ts): bio, jobs, projects, tools,
books and contact details. The CV served for download is [`public/cv/Muhammad-Iqbal-CV.pdf`](public/cv/Muhammad-Iqbal-CV.pdf).

| Piece | File |
| --- | --- |
| Gate and courtyard artwork | `src/components/hero/portal-scene.tsx` |
| Scroll walk-through | `src/components/hero/portal-hero.tsx` |
| Sections | `src/components/sections/*` |
| Palette | `src/app/globals.css` (`@theme`) and `src/lib/palette.ts` |
| Tile patterns | `src/lib/patterns.ts` |

## Deploy

Works on Vercel as-is. Set `NEXT_PUBLIC_SITE_URL` to the live address (for example `https://muhammad-iqbal.vercel.app`)
so link previews use the right social image URL.
