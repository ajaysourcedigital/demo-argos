export function visit_home_page() {
    cy.intercept('https://experience.sourcesync.io/data/settings?*').as('loadSetting')
    cy.intercept('https://cdn.sourcesync.io/smartblocks/source-digital~SmartBlockDisplay@*').as('loadSmartblock')
    cy.visit('https://example.sourcesync.io/')
    cy.wait(['@loadSetting','@loadSmartblock'])
}