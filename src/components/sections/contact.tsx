import { RoomSign, Star8, TeaGlass } from "@/components/ornaments";
import { CopyEmail } from "@/components/sections/copy-email";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";
import { palette as c } from "@/lib/palette";
import { starCross } from "@/lib/patterns";

export function Contact() {
  return (
    <section id="contact" className="relative bg-sand-100 px-4 pb-20 pt-10 md:px-8 md:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Ogee arch cap over the tea house */}
        <div className="relative">
          <svg viewBox="0 0 1000 170" className="block h-auto w-full" aria-hidden focusable="false">
            <path
              d="M0 170V132C170 132 318 100 410 56C448 38 480 20 500 2C520 20 552 38 590 56C682 100 830 132 1000 132V170Z"
              fill={c.turq100}
            />
            <path
              d="M1 170V132C170 132 318 100 410 56C448 38 480 20 500 2C520 20 552 38 590 56C682 100 830 132 999 132V170"
              fill="none"
              stroke={c.turq300}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="absolute left-1/2 top-0 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-turq-300 bg-sand-50 md:h-12 md:w-12">
            <Star8 className="h-5 w-5 text-rose-300 md:h-6 md:w-6" />
          </span>
        </div>

        <div className="-mt-px rounded-b-[2.5rem] border-x-2 border-b-2 border-turq-300 bg-turq-100 px-6 pb-12 pt-4 md:px-14 md:pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <RoomSign tr="Çayhane" en="The tea house" />
              <Reveal>
                <h2 className="mt-7 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[1.02] text-ink">
                  Do you want to start a project <em className="text-turq-700">together?</em>
                </h2>
              </Reveal>
              <p className="mt-4 font-display text-2xl italic text-ink-soft">Let’s talk it over a glass of çay.</p>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                Ready to take your digital presence to the next level? Reach out today and let’s discuss how I can help
                you reach your goals.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <CopyEmail email={profile.email} />
                <a
                  href={profile.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between gap-6 rounded-[1.75rem] bg-turq-700 p-6 text-sand-50 shadow-[0_24px_40px_-28px_rgba(59,107,102,0.9)] transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-ink"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-turq-200">WhatsApp</span>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-turq-200" aria-hidden>
                      <path
                        d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 8.3c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .5.4.7 1 1.4 1.7 1.8.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .9-.6 1.8-1.6 1.9-1.3.1-3-.4-4.6-2-1.7-1.7-2.2-3.4-2.1-4.6 0-.4.2-.8.4-1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-display text-2xl font-semibold">Chat on WhatsApp</span>
                    <span className="mt-1 block text-sm text-turq-200">
                      {profile.whatsapp.display}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </span>
                </a>
              </div>

              <a
                href={profile.cv}
                download
                className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-ink"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-full border border-khaki-400 bg-sand-50 transition-transform duration-300 group-hover:rotate-[-8deg]"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4 text-khaki-600">
                    <path d="M8 2v8.5M4.5 7.5 8 11l3.5-3.5M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="underline decoration-khaki-400 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-turq-500">
                  Download my CV
                </span>
                <span className="text-ink-soft">PDF</span>
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:col-span-5">
              <div
                aria-hidden
                className="absolute inset-[6%] rounded-full border-2 border-turq-300"
                style={{ backgroundImage: starCross(c.turq200, c.rose300, 40), backgroundColor: c.turq100 }}
              />
              <div aria-hidden className="absolute inset-[16%] rounded-full bg-sand-50 shadow-[inset_0_0_0_2px_#E8B2AA]" />
              <TeaGlass className="relative w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
