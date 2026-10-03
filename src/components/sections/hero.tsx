import { ArchOutline, ArchWindow, SectionLabel, Star8 } from "@/components/ornaments";
import { profile } from "@/content/profile";
import { palette } from "@/lib/palette";
import { starLattice } from "@/lib/patterns";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <SectionLabel tr="Hoş geldiniz" en="Welcome" />
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.01em] text-ink">
            Muhammad <em className="font-normal text-turq-700">Iqbal</em>
          </h1>
          <p className="mt-6 max-w-xl text-[1.07rem] leading-relaxed text-ink-soft">
            A {profile.role.toLowerCase()} in {profile.location}, building dependable web apps with React, Next.js,
            TypeScript and .NET.
          </p>
          <p className="mt-4 font-display text-xl italic text-turq-700">“{profile.tagline}”</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-turq-700"
            >
              See my work
            </a>
            <a
              href={profile.cv}
              download
              className="text-sm font-semibold text-ink underline decoration-khaki-400 decoration-1 underline-offset-[6px] transition-colors hover:text-turq-700 hover:decoration-turq-500"
            >
              Download CV <span className="font-normal text-ink-soft">(PDF)</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] text-khaki-400 sm:max-w-[20rem] lg:max-w-[22rem]">
            <ArchOutline />
            <ArchWindow pattern={starLattice(palette.turq300, 44)} className="absolute inset-x-[5%] bottom-0 top-[5%] text-khaki-500">
              <div className="absolute inset-x-0 bottom-[16%] flex justify-center">
                <div className="grid aspect-square w-[36%] place-items-center rounded-full border border-khaki-400 bg-sand-50">
                  <Star8 className="h-[46%] w-[46%] text-turq-700" />
                </div>
              </div>
            </ArchWindow>
            <span aria-hidden className="absolute -inset-x-[8%] bottom-0 h-px bg-khaki-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
