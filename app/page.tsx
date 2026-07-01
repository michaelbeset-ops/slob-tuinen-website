import { Hero } from "@/components/slob/hero"
import { Services } from "@/components/slob/services"
import { Projects } from "@/components/slob/projects"
import { About } from "@/components/slob/about"
import { TeamTeaser } from "@/components/slob/team-teaser"
import { Reviews } from "@/components/slob/reviews"
import { Contact } from "@/components/slob/contact"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Services />
      <Projects />
      <About />
      <TeamTeaser />
      <Reviews />
      <Contact />
      <WhatsAppFloat />
    </main>
  )
}
