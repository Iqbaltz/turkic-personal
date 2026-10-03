import { SectionLabel } from "@/components/ornaments";
import { stack } from "@/content/profile";

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tr="Tezgâh" en="The workbench" />
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink">
              The tools I <em className="text-turq-700">work with.</em>
            </h2>
          </div>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-5 lg:justify-self-end">
            From the interface down to the database, these are what I reach for to build and ship.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {stack.map((group) => (
            <div key={group.label}>
              <h3 className="border-b border-khaki-400/60 pb-3 font-display text-[1.4rem] font-semibold text-ink">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.95rem] text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
