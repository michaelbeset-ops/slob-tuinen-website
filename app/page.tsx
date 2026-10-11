import { Hero } from "@/components/slob/hero"
import { StickyNav } from "@/components/slob/sticky-nav"
import { Services } from "@/components/slob/services"
import { Projects } from "@/components/slob/projects"
import { About } from "@/components/slob/about"
import { TeamTeaser } from "@/components/slob/team-teaser"
import { Reviews } from "@/components/slob/reviews"
import { HomeFaq } from "@/components/slob/home-faq"
import { Contact } from "@/components/slob/contact"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { HOME_FAQ } from "@/components/slob/data"

export const metadata = {
  alternates: { canonical: "https://slobtuinen.nl/" },
}

// FAQ-structured-data: helpt Google en AI-zoekmachines vraag en antwoord direct te citeren.
const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function Page() {
  return (
    <main id="hoofdinhoud" tabIndex={-1} className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <StickyNav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <TeamTeaser />
      <Reviews />
      <HomeFaq />
      <Contact />
      <WhatsAppFloat />
    </main>
  )
}
