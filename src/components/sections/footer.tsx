import { Monogram } from "@/components/ornaments";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-khaki-400/45">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <Monogram className="h-10 w-10" />
          <div>
            <p className="font-display text-xl font-semibold leading-none text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-soft">
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>
        <p className="text-sm text-ink-soft md:text-center">Built with Next.js, with ornament after Ottoman tilework.</p>
        <div className="flex flex-col gap-1.5 md:items-end">
          <a
            href="#top"
            className="text-sm font-semibold text-ink underline decoration-khaki-400 underline-offset-[6px] hover:text-turq-700"
          >
            Back to top <span aria-hidden>↑</span>
          </a>
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
