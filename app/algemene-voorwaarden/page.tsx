import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"

export const metadata = {
  title: "Algemene Voorwaarden — Slob Tuinen",
  description:
    "Algemene voorwaarden van Slob Tuinen voor tuinaanleg, grondverzet, beschoeiingswerk, groenvoorziening, grondwerk en straatwerk.",
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="hoofdinhoud" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
          Juridisch
        </p>
        <h1 className="mb-10 font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.25rem,5vw,4rem)]">
          Algemene Voorwaarden
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
          <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 5 juli 2026</p>

          <h2>1. Definities</h2>
          <ul>
            <li>
              <strong>Opdrachtnemer:</strong> Slob Tuinen, gevestigd te Recht
              van Ter Leede, 4143 LP Leerdam, ingeschreven bij de Kamer van
              Koophandel onder nummer 97104078.
            </li>
            <li>
              <strong>Opdrachtgever:</strong> iedere natuurlijke of
              rechtspersoon die aan Slob Tuinen een opdracht verstrekt.
            </li>
            <li>
              <strong>Werkzaamheden:</strong> alle door Slob Tuinen uit te
              voeren werkzaamheden, waaronder tuinaanleg, grondverzet,
              beschoeiingswerk, groenvoorziening, grondwerk en straatwerk.
            </li>
          </ul>

          <h2>2. Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle offertes,
            overeenkomsten en werkzaamheden van Slob Tuinen, tenzij schriftelijk
            anders is overeengekomen.
          </p>

          <h2>3. Offertes</h2>
          <p>
            Alle offertes zijn vrijblijvend en 30 dagen geldig, tenzij in de
            offerte anders is aangegeven. Offertes zijn gebaseerd op de door de
            opdrachtgever verstrekte informatie. Blijkt die informatie
            onjuist of onvolledig, dan kan dit gevolgen hebben voor de prijs en
            de planning.
          </p>

          <h2>4. Prijzen</h2>
          <p>
            Voor particuliere opdrachtgevers zijn genoemde prijzen inclusief
            btw, tenzij anders vermeld. Voor zakelijke opdrachtgevers zijn
            prijzen exclusief btw. Kosten van stort, afvoer en (extra) levering
            van materialen worden gespecificeerd in de offerte.
          </p>

          <h2>5. Uitvoering en planning</h2>
          <p>
            Slob Tuinen voert de werkzaamheden vakkundig en volgens afspraak
            uit. Opgegeven termijnen zijn indicatief: buitenwerk is afhankelijk
            van weersomstandigheden en de conditie van het terrein. Bij
            vertraging door weer, onwerkbare grond of andere omstandigheden
            buiten de invloed van Slob Tuinen wordt in overleg een nieuwe
            planning gemaakt; dit geeft geen recht op schadevergoeding of
            ontbinding.
          </p>

          <h2>6. Verplichtingen van de opdrachtgever</h2>
          <ul>
            <li>
              De opdrachtgever zorgt dat het terrein goed bereikbaar en
              beschikbaar is voor mens en materieel.
            </li>
            <li>
              De opdrachtgever informeert Slob Tuinen vooraf over de ligging
              van kabels, leidingen, drainage en andere obstakels. Schade aan
              niet-gemelde kabels of leidingen komt voor rekening van de
              opdrachtgever.
            </li>
            <li>
              Benodigde vergunningen en toestemmingen worden, tenzij anders
              afgesproken, door de opdrachtgever geregeld.
            </li>
          </ul>

          <h2>7. Meerwerk</h2>
          <p>
            Werkzaamheden die buiten de offerte vallen (meerwerk) worden vooraf
            besproken en pas na akkoord van de opdrachtgever uitgevoerd.
            Meerwerk wordt apart gespecificeerd op de factuur.
          </p>

          <h2>8. Betaling</h2>
          <p>
            Betaling geschiedt binnen 14 dagen na factuurdatum, tenzij anders
            overeengekomen. Bij grotere projecten kan een aanbetaling of
            betaling in termijnen worden afgesproken; dit wordt in de offerte
            vermeld. Bij niet-tijdige betaling is Slob Tuinen gerechtigd de
            wettelijke rente en redelijke incassokosten in rekening te brengen.
          </p>

          <h2>9. Garantie en beplanting</h2>
          <p>
            Slob Tuinen staat in voor de deugdelijkheid van het geleverde werk.
            Op levend materiaal (planten, bomen, gras) kan geen garantie op
            aanslaan of hergroei worden gegeven, omdat dit mede afhankelijk is
            van verzorging en weersomstandigheden — tenzij schriftelijk anders
            is overeengekomen. Verzakking van bestrating door natuurlijke
            zetting van de ondergrond valt buiten de garantie.
          </p>

          <h2>10. Aansprakelijkheid</h2>
          <p>
            De aansprakelijkheid van Slob Tuinen is beperkt tot het bedrag dat
            in het betreffende geval door de bedrijfsaansprakelijkheids-
            verzekering wordt uitgekeerd, of — indien geen uitkering
            plaatsvindt — tot het factuurbedrag van de betreffende opdracht.
            Slob Tuinen is niet aansprakelijk voor indirecte schade of
            gevolgschade. Deze beperkingen gelden niet bij opzet of bewuste
            roekeloosheid, en doen geen afbreuk aan dwingende wettelijke rechten
            van consumenten.
          </p>

          <h2>11. Overmacht</h2>
          <p>
            Bij overmacht (waaronder extreme weersomstandigheden, ziekte,
            leveringsproblemen bij toeleveranciers) worden de verplichtingen
            opgeschort zolang de overmacht duurt. Duurt de overmacht langer dan
            twee maanden, dan kunnen beide partijen de overeenkomst voor het
            nog niet uitgevoerde deel ontbinden, zonder recht op
            schadevergoeding.
          </p>

          <h2>12. Klachten</h2>
          <p>
            Klachten over het uitgevoerde werk dienen binnen bekwame tijd na
            ontdekking, doch uiterlijk binnen twee maanden, te worden gemeld
            via telefoon (0628864744) of WhatsApp. Slob Tuinen krijgt de
            gelegenheid de klacht te beoordelen en gegronde klachten binnen een
            redelijke termijn te herstellen.
          </p>

          <h2>13. Toepasselijk recht</h2>
          <p>
            Op alle overeenkomsten is Nederlands recht van toepassing.
            Geschillen worden bij voorkeur in onderling overleg opgelost.
          </p>
        </div>
      </main>
      <WhatsAppFloat />
    </div>
  )
}
