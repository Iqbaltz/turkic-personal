import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Divider, SectionLabel, Star8 } from "@/components/ornaments";
import { ProjectGallery } from "@/components/project-gallery";
import { Footer } from "@/components/sections/footer";
import { StatusBadge } from "@/components/sections/works";
import { Words } from "@/components/words";
import { getProject, profile, projects } from "@/content/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const title = `${project.name} · ${profile.name}`;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article", images: [project.images[0].src] },
    twitter: { card: "summary_large_image", title, description: project.summary, images: [project.images[0].src] },
  };
}

const linkStyle =
  "font-semibold text-turq-700 underline decoration-turq-300 underline-offset-4 hover:decoration-turq-700";

export default async function WorkPage({ params }: PageProps<"/works/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const at = projects.indexOf(project);
  const previous = projects[(at - 1 + projects.length) % projects.length];
  const next = projects[(at + 1) % projects.length];

  return (
    <>
      <main id="main" className="pt-16">
        <article>
          <header id="top" className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-turq-700"
            >
              <span aria-hidden>←</span> All works
            </Link>

            <div className="mt-10 max-w-3xl">
              <div data-reveal="up" className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <SectionLabel tr="Çarşı" en={project.kind} />
                {project.status && <StatusBadge status={project.status} />}
              </div>
              <h1
                data-reveal="words"
                className="mt-6 font-display text-[clamp(2.8rem,6.5vw,4.6rem)] font-medium leading-[1.02] text-ink"
              >
                <Words>{project.name}</Words>
              </h1>
              {project.fullName && (
                <p data-reveal="up" className="mt-3 font-display text-2xl italic leading-snug text-ink-soft">
                  {project.fullName}
                </p>
              )}
              <p data-reveal="up" className="mt-6 text-[1.15rem] leading-relaxed text-ink-soft">
                {project.summary}
              </p>
            </div>
          </header>

          <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
            <ProjectGallery
              name={project.name}
              address={project.host ?? "Internal system"}
              images={project.images}
              sizes="(min-width: 1152px) 46rem, (min-width: 1024px) 66vw, 100vw"
              className="lg:col-span-8"
            />

            <dl data-reveal="up" className="divide-y divide-khaki-400/45 self-start border-y border-khaki-400/45 lg:col-span-4">
              <div className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-khaki-600">Type</dt>
                <dd className="mt-1.5 font-display text-[1.45rem] leading-snug text-ink">{project.kind}</dd>
              </div>
              <div className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-khaki-600">Built with</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-khaki-400/60 px-3 py-1 text-sm text-ink-soft"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-khaki-600">
                  {project.url ? "Live at" : "Access"}
                </dt>
                <dd className="mt-2">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-turq-700"
                    >
                      {project.host} <span aria-hidden>↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <p className="leading-relaxed text-ink-soft">
                      An internal system, not publicly available.{" "}
                      <Link href="/#contact" className={linkStyle}>
                        Ask for a walkthrough
                      </Link>
                    </p>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-12">
            <section aria-labelledby="about-project" className="lg:col-span-7">
              <h2 id="about-project" data-reveal="up" className="font-display text-[2.1rem] font-medium leading-tight text-ink">
                About the <em className="text-turq-700">project</em>
              </h2>
              <div data-reveal="up" className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
                {project.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="what-it-does" className="lg:col-span-5">
              <h2 id="what-it-does" data-reveal="up" className="font-display text-[2.1rem] font-medium leading-tight text-ink">
                What it <em className="text-turq-700">does</em>
              </h2>
              <ul data-reveal="up" className="mt-6 divide-y divide-khaki-400/45 border-y border-khaki-400/45">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 py-3.5 leading-relaxed text-ink-soft">
                    <Star8 className="mt-[0.45em] h-2.5 w-2.5 shrink-0 text-turq-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <Divider />

        <nav aria-label="More works" className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 md:px-8">
          {[
            { project: previous, label: "Previous", arrow: "←" },
            { project: next, label: "Next", arrow: "→" },
          ].map(({ project: other, label, arrow }) => (
            <Link
              key={label}
              href={`/works/${other.slug}`}
              className={`group rounded-2xl border border-khaki-400/55 p-5 transition-colors hover:border-turq-500 ${label === "Next" ? "sm:text-right" : ""}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-khaki-600">
                {label === "Previous" && <span aria-hidden>{arrow} </span>}
                {label}
                {label === "Next" && <span aria-hidden> {arrow}</span>}
              </span>
              <span className="mt-1.5 block font-display text-[1.7rem] font-semibold leading-tight text-ink transition-colors group-hover:text-turq-700">
                {other.name}
              </span>
              <span className="mt-1 block text-sm text-ink-soft">{other.kind}</span>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
