import { Divider } from "@/components/ornaments";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Library } from "@/components/sections/library";
import { Stack } from "@/components/sections/stack";
import { Works } from "@/components/sections/works";
import { profile } from "@/content/profile";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  worksFor: { "@type": "Organization", name: profile.now.place },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  knowsAbout: ["React", "Next.js", "TypeScript", ".NET", "SQL Server", "PostgreSQL", "Tailwind CSS"],
};

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Stack />
        <Divider />
        <Journey />
        <Divider />
        <Works />
        <Divider />
        <Library />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    </>
  );
}
