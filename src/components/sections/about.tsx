import { CrestEdge, RoomSign, Rosette, ValueIcon } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { profile, values } from "@/content/profile";
import { palette, tones } from "@/lib/palette";

const facts = [
  { figure: "2021", label: "Shipping production web apps since" },
  { figure: "5", label: "Stops so far: agency, freelance, Web3, retail and infrastructure" },
  { figure: profile.timezone, label: "Jakarta time, and flexible across time zones" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 bg-sand-100 pb-24 pt-24 md:pb-32 md:pt-32">
      <CrestEdge color={palette.sand100} className="absolute inset-x-0 -top-[21px]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <RoomSign tr="Hakkımda" en="About me" />
          <Reveal>
            <h2 className="mt-7 font-display text-[clamp(2.5rem,5.4vw,4.6rem)] font-medium leading-[1.02] text-ink">
              Hi, I’m Iqbal, a <em className="text-turq-700">software engineer</em> based in Indonesia.
            </h2>
          </Reveal>
          <div className="mt-8 max-w-2xl space-y-5 text-[1.07rem] leading-relaxed text-ink-soft">
            <p>
              I’m a full-stack developer who likes turning real-world problems into dependable web applications. On the
              front end I work with React, Next.js, TypeScript and Tailwind CSS. Behind it, .NET, Node.js and SQL
              databases do the heavy lifting.
            </p>
            <p>
              I’m a tech enthusiast with a passion for development, and I’m committed to continuous learning in a field
              that never stands still.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-turq-300 bg-turq-100 p-6">
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-turq-700">
                <span className="pulse-dot relative h-2 w-2 rounded-full bg-turq-500" aria-hidden />
                Right now
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-ink">
                Leading a company-wide Budget Plan app at {profile.now.place}.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-khaki-400/60 bg-sand-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-khaki-600">Studied</p>
              <p className="mt-3 font-display text-2xl leading-snug text-ink">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {profile.education.school} · {profile.education.years}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] lg:max-w-[23rem]">
            <Rosette className="spin-slow h-full w-full drop-shadow-[0_30px_40px_rgba(140,123,87,0.25)]" />
          </div>
          <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-khaki-600">How I work</h3>
          <ul className="mt-4 space-y-3">
            {values.map((value, i) => {
              const t = tones[value.tone];
              return (
                <li key={value.title}>
                  <Reveal delay={i * 0.08}>
                    <div className="flex gap-4 rounded-3xl border border-khaki-400/50 bg-sand-50/80 p-5">
                      <span
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                        style={{ background: t.soft, boxShadow: `inset 0 0 0 1.5px ${t.deep}` }}
                      >
                        <ValueIcon kind={value.icon} className="h-7 w-7" />
                      </span>
                      <div>
                        <p className="font-display text-xl font-semibold text-ink">{value.title}</p>
                        <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{value.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 md:px-8">
        <dl className="grid overflow-hidden rounded-[2rem] border border-khaki-400/60 bg-sand-50 sm:grid-cols-3">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col gap-2 p-7 ${i > 0 ? "border-t border-khaki-400/50 sm:border-l sm:border-t-0" : ""}`}
            >
              <dt className="order-2 text-sm leading-snug text-ink-soft">{fact.label}</dt>
              <dd className="order-1 font-display text-5xl font-semibold lining-nums text-turq-700">{fact.figure}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
