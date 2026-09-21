/**
 * Veilig serialiseren van structured data voor een <script type="application/ld+json">.
 *
 * JSON.stringify laat `<` en `>` ongemoeid. Staat er ooit een `</script>` in de
 * tekst van een review, projectomschrijving of FAQ-antwoord, dan sluit de
 * browser het scriptblok daar af en belandt de rest van de tekst als HTML in de
 * pagina. Vandaag komt alle data uit data.ts en is dat dus geen actueel lek,
 * maar de teksten worden regelmatig bijgewerkt en niemand denkt daarbij aan
 * HTML-escaping. Door het hier één keer goed te doen kan dat ook niet meer
 * misgaan.
 *
 * Ook U+2028 en U+2029 worden ontsnapt: geldige JSON, maar ongeldig in
 * JavaScript-broncode, waardoor oudere parsers erop kunnen stuklopen.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}
