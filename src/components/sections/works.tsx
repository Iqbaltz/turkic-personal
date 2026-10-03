import { ArchWindow, SectionLabel } from "@/components/ornaments";
import { projects, type Project } from "@/content/profile";
import { palette } from "@/lib/palette";
import { starLattice } from "@/lib/patterns";

const lattice = starLattice(palette.turq300, 22);

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-khaki-400/55 bg-sand-50 p-6 md:p-7">
      <div className="flex items-center gap-5">
        <ArchWindow pattern={lattice} className="relative h-[4.5rem] w-14 shrink-0 text-khaki-500" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-khaki-600">
            No. {project.no} <span aria-hidden>·</span> {project.kind}
          </p>
          <h3 className="mt-1.5 font-display text-[1.9rem] font-semibold leading-none text-ink">{project.name}</h3>
        </div>
      </div>
      <p className="mt-5 leading-relaxed text-ink-soft">{project.description}</p>
      <p className="mb-6 mt-4 text-sm text-khaki-600">
        <span className="sr-only">Built with: </span>
        {project.tech.join(" · ")}
      </p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-between gap-3 border-t border-khaki-400/45 pt-4 text-sm font-semibold text-ink transition-colors hover:text-turq-700"
      >
        <span>
          Visit site <span className="font-normal text-ink-soft">· {project.host}</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
}

export function Works() {
  return (
    <section id="works" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tr="Çarşı" en="The bazaar" />
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink">
              Selected <em className="text-turq-700">works.</em>
            </h2>
          </div>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-5 lg:justify-self-end">
            Sites and apps I’ve built for clients, from an agency’s home to a cashier’s everyday tool. All of them are
            live.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.no} project={project} />
          ))}
        </div>

        <aside className="mt-10 grid gap-3 border-l border-khaki-400/60 pl-6 md:max-w-3xl">
          <p className="font-display text-2xl text-ink">Much of my work lives inside companies, too.</p>
          <p className="leading-relaxed text-ink-soft">
            A store expansion ERP, HR performance management, a self-service cashier and a company-wide budget planner.
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
