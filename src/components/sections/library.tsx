import { RoomSign, TulipGlyph } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { books } from "@/content/profile";
import { palette as c, tones } from "@/lib/palette";

// The niche's shelf sits at y=388 of a 400×520 drawing.
const SHELF_FROM_BOTTOM = `${((520 - 388) / 520) * 100}%`;

function Niche() {
  return (
    <svg viewBox="0 0 400 520" className="absolute inset-0 h-full w-full" aria-hidden focusable="false">
      <defs>
        <linearGradient id="niche-depth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D3C09E" />
          <stop offset="0.7" stopColor={c.sand300} />
        </linearGradient>
        <pattern id="niche-band" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill={c.turq200} />
          <g fill={c.turq300}>
            <rect x="6" y="6" width="8" height="8" />
            <rect x="6" y="6" width="8" height="8" transform="rotate(45 10 10)" />
          </g>
        </pattern>
        <pattern id="niche-cabinet" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill={c.cobalt100} />
          <g fill="none" stroke={c.cobalt300} strokeWidth="1.2">
            <circle cx="0" cy="0" r="20" />
            <circle cx="40" cy="0" r="20" />
            <circle cx="0" cy="40" r="20" />
            <circle cx="40" cy="40" r="20" />
            <circle cx="20" cy="20" r="20" />
          </g>
        </pattern>
      </defs>
      <path d="M14 520V196C14 104 108 46 200 8C292 46 386 104 386 196V520Z" fill={c.sand50} stroke={c.khaki400} strokeWidth="2" />
      <path
        d="M34 520V200C34 118 116 66 200 30C284 66 366 118 366 200V520ZM56 520V206C56 136 126 92 200 58C274 92 344 136 344 206V520Z"
        fillRule="evenodd"
        fill="url(#niche-band)"
      />
      <path d="M56 520V206C56 136 126 92 200 58C274 92 344 136 344 206V520Z" fill="url(#niche-depth)" />
      <path d="M200 58V96" stroke={c.khaki500} strokeWidth="1.5" />
      <path d="M200 96C210 100 214 110 210 118C207 124 203 126 200 127C197 126 193 124 190 118C186 110 190 100 200 96Z" fill={c.rose200} stroke={c.rose500} strokeWidth="1.2" />
      <circle cx="200" cy="112" r="30" fill="#FCE6C6" opacity="0.35" />
      <rect x="44" y="388" width="312" height="14" rx="3" fill={c.khaki500} />
      <rect x="44" y="402" width="312" height="10" fill="#000" opacity="0.06" />
      <rect x="56" y="412" width="288" height="108" fill="url(#niche-cabinet)" />
      <path d="M200 412V520" stroke={c.cobalt300} strokeWidth="2" />
      <g transform="translate(20 0)">
        <path d="M288 388C276 388 272 376 276 362C279 352 286 348 286 340H306C306 348 313 352 316 362C320 376 316 388 304 388Z" fill={c.turq300} stroke={c.cobalt300} strokeWidth="1.5" />
        <path d="M280 366H312" stroke={c.sand50} strokeWidth="3" strokeDasharray="3 4" />
        <TulipGlyph transform="translate(276 300) scale(1.25)" />
        <TulipGlyph transform="translate(288 290) scale(1.3)" petal={c.turq300} deep={c.turq500} />
        <TulipGlyph transform="translate(300 306) scale(1.15)" />
      </g>
    </svg>
  );
}

export function Library() {
  return (
    <section id="library" className="relative bg-sand-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="@container relative mx-auto aspect-[400/520] w-full max-w-[26rem] lg:col-span-5">
          <Niche />
          <div className="absolute left-[26%] flex items-end gap-[1.5cqw]" style={{ bottom: SHELF_FROM_BOTTOM }} aria-hidden>
            {books.map((book, i) => {
              const t = tones[book.tone];
              return (
                <div
                  key={book.title}
                  className="relative flex flex-col items-center justify-between rounded-t-[3px] py-[4cqw] shadow-[inset_-6px_0_0_rgba(0,0,0,0.06)] transition-transform duration-500 ease-out hover:-translate-y-[4cqw]"
                  style={{
                    height: `${book.height * 1.3}cqw`,
                    width: `${book.width}cqw`,
                    background: t.deep,
                    rotate: i === 1 ? "-3deg" : undefined,
                    transformOrigin: "bottom left",
                  }}
                >
                  <span className="h-[0.8cqw] w-[70%] rounded-full" style={{ background: t.ink, opacity: 0.4 }} />
                  <span
                    className="font-display font-semibold leading-none text-ink [writing-mode:vertical-rl]"
                    style={{ fontSize: "3.3cqw" }}
                  >
                    {book.title}
                  </span>
                  <span className="h-[0.8cqw] w-[70%] rounded-full" style={{ background: t.ink, opacity: 0.4 }} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <RoomSign tr="Kitaplık" en="The library" />
          <Reveal>
            <h2 className="mt-7 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.02] text-ink">
              What’s on my shelf, <em className="text-sage-700">between the pull requests.</em>
            </h2>
          </Reveal>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
            Books I’m reading and returning to. Fittingly for this courtyard, one of them is about the Ottomans.
          </p>
          <ol className="mt-10 divide-y divide-khaki-400/50 border-y border-khaki-400/50">
            {books.map((book, i) => {
              const t = tones[book.tone];
              return (
                <li key={book.title} className="group grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr]">
                  <span className="font-display text-3xl italic" style={{ color: t.ink }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[1.75rem] font-semibold leading-tight text-ink">
                      <cite className="not-italic">{book.title}</cite>
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">{book.author}</p>
                    <p className="mt-2 leading-relaxed text-ink-soft">{book.note}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
