import { SectionLabel, StarOutline } from "@/components/ornaments";
import { Words } from "@/components/words";
import { profile, values } from "@/content/profile";

const facts = [
  { figure: "2021", label: "Shipping production web apps since" },
  { figure: "4", label: "Stops so far: agency and freelance, Web3, retail and infrastructure" },
  { figure: profile.timezone, label: "Jakarta time, and flexible across time zones" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionLabel tr="Hakkımda" en="About me" data-reveal="up" />
          <h2
            data-reveal="words"
            className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink"
          >
            <Words>
              Hi, I’m Iqbal, a <em className="text-turq-700">software engineer</em> based in Indonesia.
            </Words>
          </h2>
          <div data-reveal="up" className="mt-7 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
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
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <dl data-reveal="up" className="divide-y divide-khaki-400/45 border-y border-khaki-400/45">
            <div className="py-6">
              <dt className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-turq-700">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-turq-500" />
                Right now
              </dt>
              <dd className="mt-2 font-display text-[1.6rem] leading-snug text-ink">
                {profile.now.text} at {profile.now.place}.
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-khaki-600">Studied</dt>
              <dd className="mt-2 font-display text-[1.6rem] leading-snug text-ink">{profile.education.degree}</dd>
              <dd className="mt-1 text-sm text-ink-soft">
                {profile.education.school} · {profile.education.years}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
        <dl className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {facts.map((fact) => (
            <div key={fact.label} data-reveal="up" className="flex flex-col gap-1.5 border-l border-khaki-400/60 pl-5">
              <dt className="order-2 text-sm leading-snug text-ink-soft">{fact.label}</dt>
              <dd className="order-1 font-display text-4xl font-medium lining-nums text-turq-700">{fact.figure}</dd>
            </div>
          ))}
        </dl>

        <h3 data-reveal="up" className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-khaki-600">How I work</h3>
        <ul className="mt-6 grid gap-10 sm:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} data-reveal="up">
              <StarOutline className="h-6 w-6 text-turq-500" />
              <p className="mt-4 font-display text-xl font-semibold text-ink">{value.title}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
