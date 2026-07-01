import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"

export const metadata = {
  title: "Privacybeleid — Slob Tuinen",
  description: "Privacybeleid van Slob Tuinen. Lees hoe wij omgaan met uw persoonsgegevens.",
}

export default function PrivacybeleidPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
          Juridisch
        </p>
        <h1 className="mb-10 font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.25rem,5vw,4rem)]">
          Privacybeleid
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
          <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 1 juli 2026</p>

          <h2>1. Wie zijn wij</h2>
          <p>
            Slob Tuinen, gevestigd te Recht van Ter Leede, 4143 LP Leerdam,
            is verantwoordelijk voor de verwerking van persoonsgegevens zoals
            weergegeven in dit privacybeleid.
          </p>
          <p>
            <strong>Contactgegevens:</strong><br />
            Telefoon: 0628864744<br />
            WhatsApp: via de website
          </p>

          <h2>2. Welke gegevens verwerken wij</h2>
          <p>
            Slob Tuinen verwerkt uw persoonsgegevens uitsluitend wanneer u
            direct contact opneemt via telefoon of WhatsApp. De gegevens die
            wij verwerken zijn:
          </p>
          <ul>
            <li>Naam</li>
            <li>Telefoonnummer en/of WhatsApp-nummer</li>
            <li>Adresgegevens van de uit te voeren klus</li>
            <li>Omschrijving van het gevraagde werk</li>
          </ul>
          <p>
            Wij slaan geen gegevens op via de website. Er is geen contactformulier
            of database aanwezig op deze website.
          </p>

          <h2>3. Doel van de verwerking</h2>
          <p>Wij verwerken uw gegevens voor de volgende doelen:</p>
          <ul>
            <li>Beantwoorden van vragen en offerteaanvragen</li>
            <li>Uitvoering van de overeenkomst (de aan te leggen tuin, het grondwerk, etc.)</li>
            <li>Administratie en facturering</li>
          </ul>

          <h2>4. Bewaartermijn</h2>
          <p>
            Slob Tuinen bewaart uw persoonsgegevens niet langer dan noodzakelijk
            voor de doelen waarvoor zij zijn verzameld. Gegevens die nodig zijn
            voor de belastingadministratie worden bewaard conform de wettelijke
            bewaartermijn van 7 jaar.
          </p>

          <h2>5. Delen met derden</h2>
          <p>
            Slob Tuinen verstrekt uw gegevens niet aan derden, tenzij dit
            noodzakelijk is voor de uitvoering van een overeenkomst of om te
            voldoen aan een wettelijke verplichting.
          </p>

          <h2>6. Google Maps</h2>
          <p>
            Op deze website wordt gebruik gemaakt van Google Maps. Google kan
            via de ingebedde kaart persoonsgegevens verwerken. Wij verwijzen
            naar het privacybeleid van Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              policies.google.com/privacy
            </a>
            .
          </p>

          <h2>7. Uw rechten</h2>
          <p>U heeft het recht om:</p>
          <ul>
            <li>inzage te vragen in uw persoonsgegevens</li>
            <li>onjuiste gegevens te laten corrigeren</li>
            <li>uw gegevens te laten verwijderen</li>
            <li>bezwaar te maken tegen de verwerking</li>
          </ul>
          <p>
            U kunt een verzoek indienen via telefoon of WhatsApp. Wij reageren
            binnen 4 weken op uw verzoek.
          </p>

          <h2>8. Klachten</h2>
          <p>
            Heeft u een klacht over de verwerking van uw persoonsgegevens? Dan
            kunt u contact opnemen met de Autoriteit Persoonsgegevens:{" "}
            <a
              href="https://autoriteitpersoonsgegevens.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              autoriteitpersoonsgegevens.nl
            </a>
            .
          </p>
        </div>
      </main>
      <WhatsAppFloat />
    </div>
  )
}
