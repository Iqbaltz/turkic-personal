# Muhammad Iqbal · Portfolio

A quiet, minimal personal portfolio with an Ottoman accent: a pointed-arch window, line-drawn eight-pointed stars
and Turkish section names (Hakkımda, Tezgâh, Yolculuk, Çarşı, Kitaplık, Çayhane). Almost nothing moves; only links
and buttons change colour on hover.

Next.js 16 (App Router) · Tailwind CSS v4. All ornament is hand-drawn SVG, no image files.

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
| Sections | `src/components/sections/*` |
| Arch, stars and dividers | `src/components/ornaments.tsx` |
| Palette | `src/app/globals.css` (`@theme`) and `src/lib/palette.ts` |
| Star geometry and pattern | `src/lib/patterns.ts` |

## Deploy

Works on Vercel as-is. Set `NEXT_PUBLIC_SITE_URL` to the live address (for example `https://muhammad-iqbal.vercel.app`)
so link previews use the right social image URL.
