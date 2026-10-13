import { SectionLabel, Star8 } from "@/components/ornaments";
import { CopyEmail } from "@/components/sections/copy-email";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-24 pt-10 md:px-8 md:pb-28">
      <div className="mx-auto max-w-4xl">
        {/* Ogee arch cap over the panel */}
        <div className="relative">
          <svg viewBox="0 0 1000 150" className="block h-auto w-full" aria-hidden focusable="false">
            <path
              d="M0 150V120C170 120 318 92 410 50C448 34 480 18 500 2C520 18 552 34 590 50C682 92 830 120 1000 120V150Z"
              className="fill-sand-100"
            />
            <path
              d="M0.5 150V120C170 120 318 92 410 50C448 34 480 18 500 2C520 18 552 34 590 50C682 92 830 120 999.5 120V150"
              fill="none"
              className="stroke-khaki-400"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="absolute left-1/2 top-0 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-khaki-400 bg-sand-50">
            <Star8 className="h-4 w-4 text-turq-500" />
          </span>
        </div>

        <div className="-mt-px rounded-b-2xl border-x border-b border-khaki-400 bg-sand-100 px-6 pb-12 pt-2 text-center md:px-14 md:pb-16">
          <SectionLabel tr="Çayhane" en="The tea house" className="justify-center" />
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink">
            Do you want to start a project <em className="text-turq-700">together?</em>
          </h2>
          <p className="mt-3 font-display text-xl italic text-ink-soft">Let’s talk it over a glass of çay.</p>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-soft">
            Ready to take your digital presence to the next level? Reach out today and let’s discuss how I can help you
            reach your goals.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            <CopyEmail email={profile.email} />
            <a
              href={profile.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between gap-6 rounded-xl border border-khaki-400/70 bg-sand-50 p-5 transition-colors hover:border-turq-500"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-khaki-600">WhatsApp</span>
              <span>
                <span className="block font-display text-[1.4rem] font-semibold leading-tight text-ink">
                  Chat on WhatsApp
                </span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {profile.whatsapp.display}
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </span>
            </a>
          </div>

          <a
            href={profile.cv}
            download
            className="mt-8 inline-block text-sm font-semibold text-ink underline decoration-khaki-400 decoration-1 underline-offset-[6px] transition-colors hover:text-turq-700 hover:decoration-turq-500"
          >
            Download my CV <span className="font-normal text-ink-soft">(PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
