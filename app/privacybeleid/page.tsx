import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"

export const metadata = {
  title: "Privacybeleid | Slob Tuinen",
  description: "Privacybeleid van Slob Tuinen. Lees hoe wij omgaan met uw persoonsgegevens.",
  alternates: { canonical: "https://slobtuinen.nl/privacybeleid" },
}

export default function PrivacybeleidPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="hoofdinhoud" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
          Juridisch
        </p>
        <h1 className="mb-10 font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.25rem,5vw,4rem)]">
          Privacybeleid
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
          <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 21 september 2026</p>

          <h2>1. Wie zijn wij</h2>
          <p>
            Slob Tuinen, gevestigd te Recht van Ter Leede 28a, 4143 LP Leerdam,
            is verantwoordelijk voor de verwerking van persoonsgegevens zoals
            weergegeven in dit privacybeleid.
          </p>
          <p>
            <strong>Contactgegevens:</strong><br />
            Telefoon: 0628864744<br />
            E-mail: slobdienstverlening@gmail.com<br />
            WhatsApp: via de website
          </p>

          <h2>2. Welke gegevens verwerken wij</h2>
          <p>
            Slob Tuinen verwerkt uw persoonsgegevens wanneer u contact opneemt
            via telefoon, WhatsApp, e-mail of een van de formulieren op deze
            website. De gegevens die wij verwerken zijn:
          </p>
          <ul>
            <li>Naam</li>
            <li>Telefoonnummer en/of WhatsApp-nummer</li>
            <li>E-mailadres</li>
            <li>Adresgegevens van de uit te voeren klus</li>
            <li>Omschrijving van het gevraagde werk</li>
          </ul>

          <h2>3. De formulieren op deze website</h2>
          <p>
            Op deze website staan een contactformulier en een offerteformulier.
            Die werken anders dan u gewend bent: de website heeft geen server
            die iets opslaat. Wanneer u op verzenden klikt, opent uw eigen
            e&#8209;mailprogramma met de ingevulde gegevens als bericht aan ons.
            U verstuurt dat bericht zelf. Kiest u voor de WhatsApp&#8209;knop,
            dan opent WhatsApp met dezelfde tekst.
          </p>
          <p>
            Dat betekent dat wat u typt de website nooit verlaat zolang u niet
            zelf verzendt, dat er geen gegevens in een database of bij een
            formulierdienst terechtkomen, en dat wij uw aanvraag ontvangen in
            onze e&#8209;mail of WhatsApp — precies zoals bij een gewoon bericht.
          </p>

          <h2>4. Doel van de verwerking</h2>
          <p>Wij verwerken uw gegevens voor de volgende doelen:</p>
          <ul>
            <li>Beantwoorden van vragen en offerteaanvragen</li>
            <li>Uitvoering van de overeenkomst (de aan te leggen tuin, het grondwerk, etc.)</li>
            <li>Administratie en facturering</li>
          </ul>

          <h2>5. Bewaartermijn</h2>
          <p>
            Slob Tuinen bewaart uw persoonsgegevens niet langer dan noodzakelijk
            voor de doelen waarvoor zij zijn verzameld. Gegevens die nodig zijn
            voor de belastingadministratie worden bewaard conform de wettelijke
            bewaartermijn van 7 jaar.
          </p>

          <h2>6. Delen met derden</h2>
          <p>
            Slob Tuinen verkoopt uw gegevens niet en verstrekt ze niet aan
            derden, tenzij dit noodzakelijk is voor de uitvoering van een
            overeenkomst (bijvoorbeeld een leverancier die materiaal bij u
            aflevert) of om te voldoen aan een wettelijke verplichting. De
            dienstverleners die wij nodig hebben om de website en onze
            communicatie te laten werken staan hieronder.
          </p>

          <h2>7. Partijen die wij inschakelen</h2>
          <p>
            Om de website en onze communicatie te laten werken maken wij gebruik
            van de volgende partijen. Zij kunnen daarbij gegevens van u
            verwerken:
          </p>
          <ul>
            <li>
              <strong>GitHub Pages</strong> (GitHub, Inc.) — hosting van deze
              website. GitHub legt bij ieder bezoek technische gegevens vast,
              waaronder uw IP&#8209;adres, om de site te kunnen uitleveren en
              misbruik tegen te gaan.
            </li>
            <li>
              <strong>Google Maps</strong> (Google Ireland Ltd.) — de
              interactieve kaart op de contactpagina, alleen nadat u die zelf
              laadt. Zie hieronder.
            </li>
            <li>
              <strong>WhatsApp</strong> (Meta Platforms Ireland Ltd.) — als u
              ons via WhatsApp benadert, verloopt dat bericht via WhatsApp.
            </li>
            <li>
              <strong>Gmail</strong> (Google Ireland Ltd.) — ons e&#8209;mailadres
              loopt via Gmail, dus e&#8209;mail aan ons wordt daar opgeslagen.
            </li>
          </ul>
          <p>
            Op deze website staan geen trackers, advertentiepixels of
            statistiekprogramma&apos;s. De lettertypen worden vanaf deze website
            zelf geladen en niet bij een lettertypedienst opgehaald, zodat uw
            bezoek ook daar niet bekend wordt.
          </p>

          <h2>8. Google Maps</h2>
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

          <h2>9. Uw rechten</h2>
          <p>U heeft het recht om:</p>
          <ul>
            <li>inzage te vragen in uw persoonsgegevens</li>
            <li>onjuiste gegevens te laten corrigeren</li>
            <li>uw gegevens te laten verwijderen</li>
            <li>bezwaar te maken tegen de verwerking</li>
          </ul>
          <p>
            U kunt een verzoek indienen via telefoon, WhatsApp of e-mail
            (slobdienstverlening@gmail.com). Wij reageren binnen 4 weken op uw
            verzoek.
          </p>

          <h2>10. Klachten</h2>
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
