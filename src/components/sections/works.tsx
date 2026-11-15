import Link from "next/link";
import { SectionLabel } from "@/components/ornaments";
import { ProjectCarousel } from "@/components/project-carousel";
import { Words } from "@/components/words";
import { projects, type Project } from "@/content/profile";

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-turq-300 bg-turq-200/45 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-turq-700">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-turq-500" />
      {status}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const href = `/works/${project.slug}`;

  return (
    <article
      data-reveal="up"
      className="group flex flex-col overflow-hidden rounded-2xl border border-khaki-400/55 bg-sand-50 transition-shadow hover:shadow-[0_28px_50px_-36px_rgba(58,50,42,0.6)]"
    >
      <ProjectCarousel
        name={project.name}
        href={href}
        images={project.images}
        sizes="(min-width: 1152px) 34rem, (min-width: 768px) 50vw, 100vw"
        className="border-b border-khaki-400/45"
      />

      {/* The title's link stretches over this block, so the whole text area opens the project. */}
      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-khaki-600">
          {project.kind}
          {project.status && <StatusBadge status={project.status} />}
        </p>
        <h3 className="mt-2 font-display text-[1.9rem] font-semibold leading-none text-ink">
          <Link href={href} className="transition-colors after:absolute after:inset-0 group-hover:text-turq-700">
            {project.name}
          </Link>
        </h3>
        <p className="mb-6 mt-3 leading-relaxed text-ink-soft">{project.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-khaki-400/45 pt-4 text-sm">
          <span aria-hidden className="font-semibold text-ink transition-colors group-hover:text-turq-700">
            View project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-ink-soft transition-colors hover:text-turq-700"
            >
              Visit site <span aria-hidden>↗</span>
              <span className="sr-only"> {project.host} (opens in a new tab)</span>
            </a>
          ) : (
            <span className="text-ink-soft">Internal system</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Works() {
  return (
    <section id="works" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tr="Çarşı" en="The bazaar" data-reveal="up" />
            <h2
              data-reveal="words"
              className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink"
            >
              <Words>
                Selected <em className="text-turq-700">works.</em>
              </Words>
            </h2>
          </div>
          <p data-reveal="up" className="max-w-md text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-5 lg:justify-self-end">
            Sites and apps I’ve built, from a supplement storefront and a medical journal to an AI dictation app and
            the ERP behind a contractor’s projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <aside data-reveal="up" className="mt-10 grid gap-3 border-l border-khaki-400/60 pl-6 md:max-w-3xl">
          <p className="font-display text-2xl text-ink">Much of my work lives inside companies, too.</p>
          <p className="leading-relaxed text-ink-soft">
            A store expansion ERP, HR performance management, a self-service cashier and a revenue and billing system
            for tower leasing.
            Happy to walk you through them.{" "}
            <a
              href="#contact"
              className="font-semibold text-turq-700 underline decoration-turq-300 underline-offset-4 hover:decoration-turq-700"
            >
              Ask me about them
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
