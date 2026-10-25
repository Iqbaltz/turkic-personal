import Image from "next/image";
import { SectionLabel } from "@/components/ornaments";
import { Words } from "@/components/words";
import { books } from "@/content/profile";

export function Library() {
  return (
    <section id="library" className="py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionLabel tr="Kitaplık" en="The library" data-reveal="up" />
          <h2
            data-reveal="words"
            className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ink"
          >
            <Words>
              What’s on my shelf, <em className="text-turq-700">between the pull requests.</em>
            </Words>
          </h2>
          <p data-reveal="up" className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Books I’m reading and returning to, one of them about the Ottomans.
          </p>
        </div>

        <ol className="divide-y divide-khaki-400/45 border-y border-khaki-400/45 lg:col-span-7 lg:self-end">
          {books.map((book, i) => (
            <li
              key={book.title}
              data-reveal="up"
              className="grid grid-cols-[1.75rem_4rem_1fr] items-start gap-4 py-6 sm:grid-cols-[3rem_5rem_1fr] sm:gap-6"
            >
              <span className="font-display text-2xl italic text-turq-700">{String(i + 1).padStart(2, "0")}</span>
              {/* The cover as a small volume on the shelf, its spine shaded on the left */}
              <div className="relative aspect-[5/7] overflow-hidden rounded-[2px_5px_5px_2px] shadow-[0_12px_22px_-12px_rgba(58,50,42,0.55)] ring-1 ring-khaki-400/50">
                <Image src={book.cover} alt="" fill sizes="5rem" className="object-cover" />
                <span aria-hidden className="absolute inset-y-0 left-0 w-[9%] bg-linear-to-r from-ink/30 to-transparent" />
              </div>
              <div>
                <p className="font-display text-[1.6rem] font-semibold leading-tight text-ink">
                  <cite className="not-italic">{book.title}</cite>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-khaki-600">{book.author}</p>
                <p className="mt-2 leading-relaxed text-ink-soft">{book.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
