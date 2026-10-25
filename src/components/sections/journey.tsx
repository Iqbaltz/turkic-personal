import { SectionLabel, Star8 } from "@/components/ornaments";
import { Words } from "@/components/words";
import { experience } from "@/content/profile";

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel tr="Yolculuk" en="The journey" data-reveal="up" />
            <h2
              data-reveal="words"
              className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink"
            >
              <Words>
                Four stops on the road <em className="text-turq-700">so far.</em>
              </Words>
            </h2>
            <p data-reveal="up" className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
              Like a caravan crossing from inn to inn, each role added something to the saddlebags: agency and
              freelance craft, Web3 products, enterprise systems and now billing for tower infrastructure.
            </p>
          </div>
        </div>

        <ol className="border-t border-khaki-400/45 lg:col-span-8">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              data-reveal="up"
              className="grid gap-3 border-b border-khaki-400/45 py-8 sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">{job.period}</p>
                {job.current && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-turq-700">
                    <Star8 className="h-2.5 w-2.5 text-turq-500" />
                    Current role
                  </p>
                )}
              </div>
              <article>
                <h3 className="font-display text-[1.65rem] font-semibold leading-tight text-ink">{job.role}</h3>
                <p className="mt-0.5 text-[0.95rem] font-semibold text-turq-700">{job.company}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{job.summary}</p>
                {job.points.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-[0.7rem] h-1 w-1 shrink-0 rotate-45 bg-khaki-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {job.tags.length > 0 && (
                  <p className="mt-4 text-sm text-khaki-600">
                    <span className="sr-only">Tools used: </span>
                    {job.tags.join(" · ")}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
