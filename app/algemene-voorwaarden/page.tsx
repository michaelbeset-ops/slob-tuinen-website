import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"

export const metadata = {
  title: "Algemene Voorwaarden | Slob Tuinen",
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

        <div className="prose prose-neutral max-w-none text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6">
          <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 5 juli 2026</p>

          <h2>Artikel 1. Definities</h2>
          <ul>
            <li>
              <strong>Opdrachtnemer:</strong> Slob Tuinen, gevestigd aan Recht
              van Ter Leede, 4143 LP Leerdam, ingeschreven bij de Kamer van
              Koophandel onder nummer 97104078, bereikbaar via telefoon
              0628864744 en e-mail slobdienstverlening@gmail.com.
            </li>
            <li>
              <strong>Opdrachtgever:</strong> iedere natuurlijke of
              rechtspersoon die aan Slob Tuinen een opdracht verstrekt.
            </li>
            <li>
              <strong>Consument:</strong> de opdrachtgever die niet handelt in
              de uitoefening van een beroep of bedrijf.
            </li>
            <li>
              <strong>Werkzaamheden:</strong> alle door Slob Tuinen uit te
              voeren werkzaamheden, waaronder tuinaanleg, grondverzet,
              beschoeiingswerk, groenvoorziening, grondwerk en straatwerk,
              inclusief levering van de daarbij benodigde materialen.
            </li>
          </ul>

          <h2>Artikel 2. Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle offertes,
            overeenkomsten en werkzaamheden van Slob Tuinen. Afwijkingen gelden
            alleen als deze schriftelijk (waaronder per e-mail of WhatsApp)
            zijn overeengekomen. Is of wordt een bepaling uit deze voorwaarden
            nietig of vernietigd, dan blijven de overige bepalingen volledig
            van kracht; partijen vervangen de betreffende bepaling dan door een
            geldige bepaling die de oorspronkelijke bedoeling zo dicht mogelijk
            benadert.
          </p>

          <h2>Artikel 3. Offertes en totstandkoming</h2>
          <p>
            Alle offertes zijn vrijblijvend en 30 dagen geldig, tenzij in de
            offerte anders is aangegeven. Offertes zijn gebaseerd op de door de
            opdrachtgever verstrekte informatie en, waar mogelijk, op een
            bezichtiging van het terrein. Kennelijke vergissingen of
            verschrijvingen in een offerte binden Slob Tuinen niet. De
            overeenkomst komt tot stand zodra de opdrachtgever de offerte
            schriftelijk (waaronder per e-mail of WhatsApp) heeft aanvaard.
          </p>

          <h2>Artikel 4. Prijzen</h2>
          <p>
            Voor consumenten zijn genoemde prijzen inclusief btw; voor
            zakelijke opdrachtgevers exclusief btw, tenzij anders vermeld.
            Kosten van stort, afvoer en (extra) levering van materialen worden
            in de offerte gespecificeerd. Blijkt tijdens de uitvoering dat de
            door de opdrachtgever verstrekte informatie onjuist of onvolledig
            was, dan kan dit tot aanpassing van prijs en planning leiden;
            Slob Tuinen meldt dit zo snel mogelijk en voert extra werk pas uit
            na akkoord (zie artikel 8).
          </p>

          <h2>Artikel 5. Herroepingsrecht voor consumenten</h2>
          <p>
            Is de overeenkomst met een consument op afstand (bijvoorbeeld via
            WhatsApp, telefoon of e-mail) of buiten de bedrijfsruimte van Slob
            Tuinen (bijvoorbeeld bij de consument thuis) gesloten, dan heeft de
            consument het wettelijke recht de overeenkomst binnen 14 dagen na
            het sluiten daarvan zonder opgave van redenen te herroepen. De
            herroeping kan worden gemeld via telefoon, WhatsApp of e-mail
            (slobdienstverlening@gmail.com).
          </p>
          <p>
            Wenst de consument dat Slob Tuinen al binnen deze bedenktijd met de
            werkzaamheden begint, dan verzoekt hij daar uitdrukkelijk om. Bij
            herroeping na zo&rsquo;n verzoek is de consument een evenredige
            vergoeding verschuldigd voor het al uitgevoerde werk en de al
            geleverde of specifiek bestelde materialen. Het herroepingsrecht
            vervalt zodra de werkzaamheden volledig zijn uitgevoerd, mits de
            uitvoering is begonnen met uitdrukkelijke voorafgaande instemming
            van de consument en de consument heeft verklaard afstand te doen
            van zijn herroepingsrecht zodra de overeenkomst volledig is
            nagekomen.
          </p>

          <h2>Artikel 6. Uitvoering en planning</h2>
          <p>
            Slob Tuinen voert de werkzaamheden vakkundig en volgens afspraak
            uit. Opgegeven termijnen zijn indicatief en gelden niet als fatale
            termijnen: buitenwerk is afhankelijk van weersomstandigheden en de
            conditie van het terrein. Bij vertraging door weer, onwerkbare
            grond of andere omstandigheden buiten de invloed van Slob Tuinen
            wordt in overleg een nieuwe planning gemaakt. Bij overschrijding
            van een termijn dient de opdrachtgever Slob Tuinen eerst
            schriftelijk in gebreke te stellen en een redelijke termijn te
            gunnen om alsnog na te komen, voordat sprake kan zijn van verzuim.
          </p>

          <h2>Artikel 7. Verplichtingen van de opdrachtgever</h2>
          <ul>
            <li>
              De opdrachtgever zorgt dat het terrein goed bereikbaar en
              beschikbaar is voor mens en materieel.
            </li>
            <li>
              De opdrachtgever informeert Slob Tuinen vooraf over de ligging
              van kabels, leidingen, drainage en andere obstakels. Schade aan
              niet of onjuist gemelde kabels, leidingen of obstakels komt voor
              rekening van de opdrachtgever, tenzij de schade te wijten is aan
              opzet of bewuste roekeloosheid van Slob Tuinen.
            </li>
            <li>
              Benodigde vergunningen en toestemmingen worden, tenzij anders
              afgesproken, door de opdrachtgever geregeld.
            </li>
          </ul>

          <h2>Artikel 8. Meerwerk</h2>
          <p>
            Werkzaamheden die buiten de offerte vallen (meerwerk) worden vooraf
            besproken, inclusief de prijsgevolgen, en pas na akkoord van de
            opdrachtgever uitgevoerd. Meerwerk wordt apart gespecificeerd op de
            factuur.
          </p>

          <h2>Artikel 9. Annulering en opzegging</h2>
          <p>
            De opdrachtgever is bevoegd de overeenkomst geheel of gedeeltelijk
            op te zeggen. In dat geval worden het al uitgevoerde werk, de al
            gemaakte kosten en de specifiek voor de opdracht ingekochte of
            bestelde materialen afgerekend, vermeerderd met een redelijke
            vergoeding overeenkomstig de wet (artikel 7:764 BW), waarbij
            besparingen die voor Slob Tuinen uit de opzegging voortvloeien in
            mindering worden gebracht.
          </p>

          <h2>Artikel 10. Betaling</h2>
          <p>
            Betaling geschiedt binnen 14 dagen na factuurdatum, tenzij anders
            overeengekomen. Bij grotere projecten kan een aanbetaling of
            betaling in termijnen worden afgesproken; dit wordt in de offerte
            vermeld. Blijft betaling uit, dan ontvangt de consument eerst een
            kosteloze betalingsherinnering met een termijn van 14 dagen na
            ontvangst daarvan. Wordt daarna niet betaald, dan is de wettelijke
            rente verschuldigd en worden buitengerechtelijke incassokosten in
            rekening gebracht conform het Besluit vergoeding voor
            buitengerechtelijke incassokosten. Slob Tuinen mag de
            werkzaamheden opschorten zolang een opeisbare factuur onbetaald
            blijft.
          </p>

          <h2>Artikel 11. Eigendomsvoorbehoud</h2>
          <p>
            Geleverde materialen blijven eigendom van Slob Tuinen totdat de
            opdrachtgever alle daarvoor verschuldigde bedragen volledig heeft
            betaald. Dit eigendomsvoorbehoud strekt niet verder dan de wet
            toestaat.
          </p>

          <h2>Artikel 12. Garantie en beplanting</h2>
          <p>
            Slob Tuinen staat in voor de deugdelijkheid van het geleverde werk.
            Op levend materiaal (planten, bomen, gras) kan geen garantie op
            aanslaan of hergroei worden gegeven, omdat dit mede afhankelijk is
            van verzorging en weersomstandigheden, tenzij schriftelijk anders
            is overeengekomen. Verzakking van bestrating door natuurlijke
            zetting van de ondergrond valt buiten de garantie. Deze bepaling
            doet geen afbreuk aan de wettelijke rechten van de consument,
            waaronder het recht op een deugdelijke nakoming (conformiteit).
          </p>

          <h2>Artikel 13. Aansprakelijkheid</h2>
          <p>
            De aansprakelijkheid van Slob Tuinen is beperkt tot het bedrag dat
            in het betreffende geval door de
            bedrijfsaansprakelijkheidsverzekering wordt uitgekeerd. Vindt geen
            uitkering plaats, dan is de aansprakelijkheid beperkt tot het
            factuurbedrag van de betreffende opdracht. Slob Tuinen is niet
            aansprakelijk voor indirecte schade of gevolgschade. Deze
            beperkingen gelden niet bij opzet of bewuste roekeloosheid van
            Slob Tuinen en doen geen afbreuk aan dwingende wettelijke rechten
            van consumenten.
          </p>

          <h2>Artikel 14. Overmacht</h2>
          <p>
            Bij overmacht (waaronder extreme weersomstandigheden, ziekte en
            leveringsproblemen bij toeleveranciers) worden de verplichtingen
            opgeschort zolang de overmacht duurt. Duurt de overmacht langer dan
            twee maanden, dan kunnen beide partijen de overeenkomst voor het
            nog niet uitgevoerde deel ontbinden, zonder recht op
            schadevergoeding. Al uitgevoerd werk wordt in dat geval naar
            verhouding afgerekend.
          </p>

          <h2>Artikel 15. Klachten</h2>
          <p>
            Klachten over het uitgevoerde werk dienen binnen bekwame tijd na
            ontdekking te worden gemeld via telefoon (0628864744), WhatsApp of
            e-mail (slobdienstverlening@gmail.com); een melding binnen twee
            maanden na ontdekking is in ieder geval tijdig. Slob Tuinen krijgt
            de gelegenheid de klacht te beoordelen en gegronde klachten binnen
            een redelijke termijn te herstellen. Het indienen van een klacht
            schort de betalingsverplichting van een zakelijke opdrachtgever
            niet op.
          </p>

          <h2>Artikel 16. Toepasselijk recht en geschillen</h2>
          <p>
            Op alle overeenkomsten is Nederlands recht van toepassing.
            Geschillen worden bij voorkeur in onderling overleg opgelost.
            Lukt dat niet, dan is de volgens de wet bevoegde rechter bevoegd.
          </p>
        </div>
      </main>
      <WhatsAppFloat />
    </div>
  )
}
