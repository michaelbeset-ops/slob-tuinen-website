import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"

export const metadata = {
  title: "Cookiebeleid | Slob Tuinen",
  description: "Cookiebeleid van Slob Tuinen. Lees welke cookies wij gebruiken en waarom.",
}

export default function CookiebeleidPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="hoofdinhoud" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
          Juridisch
        </p>
        <h1 className="mb-10 font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.25rem,5vw,4rem)]">
          Cookiebeleid
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_table]:mb-6 [&_table]:w-full [&_table]:text-sm [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground [&_td]:border [&_td]:border-border [&_td]:p-3">
          <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 5 juli 2026</p>

          <h2>1. Wat zijn cookies</h2>
          <p>
            Cookies zijn kleine tekstbestanden die bij het bezoek aan een website
            worden opgeslagen op uw apparaat. Ze worden gebruikt om de website
            goed te laten functioneren en om uw voorkeuren te onthouden.
          </p>

          <h2>2. Welke cookies gebruiken wij</h2>
          <p>
            De website van Slob Tuinen maakt gebruik van de volgende cookies:
          </p>

          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Type</th>
                <th>Doel</th>
                <th>Bewaartermijn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Functioneel</td>
                <td>Onthoudt uw cookievoorkeur</td>
                <td>1 jaar</td>
              </tr>
              <tr>
                <td>Google Maps cookies</td>
                <td>Derde partij</td>
                <td>
                  Weergave van de interactieve kaart, alleen nadat u zelf op
                  &ldquo;Kaart laden&rdquo; klikt
                </td>
                <td>Zie Google-beleid</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Functionele cookies</h2>
          <p>
            Wij plaatsen één functionele cookie (<code>cookie_consent</code>)
            om uw keuze ten aanzien van cookies te onthouden. Deze cookie is
            noodzakelijk om te voorkomen dat het cookiemelding elke keer
            opnieuw verschijnt. Hiervoor is geen toestemming vereist.
          </p>

          <h2>4. Cookies van Google Maps</h2>
          <p>
            Op de contactpagina kan een Google Maps-kaart worden getoond. Deze
            kaart wordt <strong>niet automatisch geladen</strong>: pas nadat u
            zelf op &ldquo;Kaart laden&rdquo; klikt, wordt verbinding gemaakt
            met Google en kan Google cookies op uw apparaat plaatsen. Kiest u
            daar niet voor, dan worden er geen cookies van Google geplaatst.
            Slob Tuinen heeft geen invloed op de cookies die Google plaatst.
            Voor meer informatie verwijzen wij u naar het cookiebeleid van
            Google:{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              policies.google.com/technologies/cookies
            </a>
            .
          </p>

          <h2>5. Cookies weigeren of verwijderen</h2>
          <p>
            U kunt cookies weigeren via de cookiemelding onderaan de pagina.
            Daarnaast kunt u via uw browserinstellingen opgeslagen cookies
            verwijderen en de plaatsing van nieuwe cookies blokkeren. Let op:
            als u alle cookies weigert, kan dit de functionaliteit van de
            website beïnvloeden.
          </p>

          <h2>6. Wijzigingen</h2>
          <p>
            Slob Tuinen behoudt zich het recht voor dit cookiebeleid te wijzigen.
            Controleer dit beleid periodiek op eventuele wijzigingen.
          </p>

          <h2>7. Contact</h2>
          <p>
            Heeft u vragen over ons cookiebeleid? Neem dan contact op via
            telefoon 0628864744, via WhatsApp of per e-mail:
            slobdienstverlening@gmail.com.
          </p>
        </div>
      </main>
      <WhatsAppFloat />
    </div>
  )
}
