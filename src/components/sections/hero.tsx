import Image from "next/image";
import { ArchOutline, SectionLabel, Star8 } from "@/components/ornaments";
import { Words } from "@/components/words";
import { profile } from "@/content/profile";
import portrait from "../../../public/images/iqbal.png";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <SectionLabel tr="Hoş geldiniz" en="Welcome" className="hero-in" />
          <h1 className="hero-words mt-6 font-display text-[clamp(3rem,8vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.01em] text-ink [--char-duration:85ms] [--d:150ms]">
            <Words>
              Muhammad <em className="font-normal text-turq-700">Iqbal</em>
            </Words>
          </h1>
          <p className="hero-in mt-6 max-w-xl text-[1.07rem] leading-relaxed text-ink-soft [--d:1450ms]">
            A {profile.role.toLowerCase()} in {profile.location}, building
            dependable web apps with React, Next.js, TypeScript and .NET.
          </p>
          <p className="hero-in mt-4 font-display text-xl italic text-turq-700 [--d:1650ms]">
            “{profile.tagline}”
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 [--d:1850ms]">
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
              Download CV{" "}
              <span className="font-normal text-ink-soft">(PDF)</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[22rem]">
            <div className="hero-in relative aspect-[4/5] w-full text-khaki-400 [--d:250ms]">
              <ArchOutline />
              <div className="absolute inset-x-[5%] bottom-0 top-[5%] text-khaki-500">
                <div className="clip-arch absolute inset-0 bg-sand-50">
                  <Image
                    src={portrait}
                    alt="Portrait of Muhammad Iqbal"
                    fill
                    preload
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 15rem"
                    className="hero-settle origin-[50%_35%] scale-[1.4] object-cover [--d:300ms]"
                  />
                </div>
                <ArchOutline />
              </div>
              <span
                aria-hidden
                className="hero-line absolute -inset-x-[8%] bottom-0 h-px bg-khaki-400 [--d:500ms]"
              />
            </div>
            {/* On phones the card sits below the portrait (only overlapping the shoulders) so the face stays clear. */}
            <blockquote className="hero-in [--d:2050ms] relative z-10 -mx-3 -mt-10 rounded-2xl border border-khaki-400 bg-sand-50/90 px-5 py-4 shadow-[0_8px_24px_-12px_rgba(58,50,42,0.35)] backdrop-blur-sm sm:absolute sm:-left-[6%] sm:right-[18%] sm:bottom-[9%] sm:mx-0 sm:mt-0">
              <Star8 className="h-3 w-3 text-turq-500" />
              <p className="mt-2 font-display text-lg italic leading-snug text-ink">
                “The most beloved deeds to Allah are the most consistent, even
                if small.” ~ Hadith (Bukhari & Muslim)
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
