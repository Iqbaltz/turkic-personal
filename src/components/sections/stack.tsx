import { RoomSign, TileBand } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { stack } from "@/content/profile";
import { tones } from "@/lib/palette";
import { patternFor } from "@/lib/patterns";

// Every column is filled to the same height so the panel reads as one tiled wall.
const rows = Math.max(...stack.map((group) => group.items.length));

export function Stack() {
  return (
    <section id="stack" className="relative bg-sand-200">
      <TileBand tone="turq" />
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <RoomSign tr="Tezgâh" en="The workbench" />
            <Reveal>
              <h2 className="mt-7 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.02] text-ink">
                The tools on my bench, <em className="text-cobalt-700">laid out like a tile panel.</em>
              </h2>
            </Reveal>
          </div>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-5 lg:justify-self-end">
            Each colour is a craft: turquoise for the front end, cobalt for servers, sage for data, rose for content and
            khaki for the cloud.<span className="hidden lg:inline"> Hover a tile to turn it.</span>
          </p>
        </div>

        <div className="mt-14 grid gap-3 rounded-[2rem] border border-khaki-400/60 bg-sand-50/60 p-3 shadow-[0_40px_60px_-50px_rgba(90,70,40,0.5)] lg:grid-cols-5">
          {stack.map((group) => {
            const t = tones[group.tone];
            const pattern = patternFor(group.pattern, group.tone, 44);
            return (
              <div key={group.label} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div
                  className="col-span-2 flex items-end justify-between rounded-2xl p-4 sm:col-span-3 lg:col-span-1 lg:aspect-[5/3]"
                  style={{ background: t.deep }}
                >
                  <h3 className="font-display text-2xl font-semibold leading-none text-ink">{group.label}</h3>
                  <span className="font-display text-lg italic" style={{ color: t.ink }}>
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="group relative isolate flex min-h-24 items-end overflow-hidden rounded-2xl border p-3 lg:aspect-[5/3] lg:min-h-0"
                    style={{ background: t.soft, borderColor: t.mid }}
                  >
                    <div
                      aria-hidden
                      className="absolute -inset-8 -z-10 opacity-80 transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-125"
                      style={{ backgroundImage: pattern }}
                    />
                    <span className="rounded-lg bg-sand-50/95 px-2.5 py-1 text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(58,50,42,0.12)]">
                      {item}
                    </span>
                  </div>
                ))}
                {Array.from({ length: rows - group.items.length }, (_, i) => (
                  <div
                    key={i}
                    aria-hidden
                    className="hidden aspect-[5/3] rounded-2xl border lg:block"
                    style={{ backgroundColor: t.soft, backgroundImage: pattern, borderColor: t.mid, opacity: 0.55 }}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <TileBand tone="cobalt" />
    </section>
  );
}
