import { Monogram, TileBand } from "@/components/ornaments";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="bg-sand-200">
      <TileBand tone="rose" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <Monogram className="h-12 w-12" />
          <div>
            <p className="font-display text-2xl font-semibold leading-none text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-soft">
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-ink-soft md:text-center">
          Built with Next.js, and drawn after Iznik tiles and Ottoman courtyards.
        </p>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-khaki-400 decoration-2 underline-offset-[6px] hover:text-turq-700"
          >
            Back to the gate <span aria-hidden>↑</span>
          </a>
          <p className="text-xs text-ink-soft">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
