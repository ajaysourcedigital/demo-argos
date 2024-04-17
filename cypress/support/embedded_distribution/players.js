export function visit_videojs_player() {
    cy.intercept('https://experience.sourcesync.io/data/settings?*').as('loadSetting')
    cy.get('.e-con-inner a img').eq(0).click()
    cy.wait('@loadSetting')
    cy.intercept('https://cdn.sourcesync.io/smartblocks/source-digital~SmartBlockDisplay@*').as('smartBlock')
    cy.get('[title="Play Video"]').should("be.visible").click().then(() => {
        cy.wait('@smartBlock')
    })
    cy.get('header div[data-device="desktop"] .ct-sticky-container > div').invoke('removeAttr','data-sticky')
}

export function visit_jw_player() {
    cy.go('back')
    cy.get('.e-con-inner a img').should('be.visible')
    cy.get('.e-con-inner a img').eq(1).click()
    cy.intercept('https://cdn.sourcesync.io/smartblocks/source-digital~SmartBlockDisplay@*').as('smartBlock')
    cy.get('.jw-display-icon-container > [aria-label="Play"]').should("be.visible").click().then(() => {
        cy.wait('@smartBlock')
    })
    cy.get('header div[data-device="desktop"] .ct-sticky-container > div').invoke('removeAttr','data-sticky')
}

export function visit_html5_player() {
    cy.go('back')
    cy.get('.e-con-inner a img').should('be.visible')
    cy.get('.e-con-inner a img').eq(2).click()
    cy.document().then($doc => {
        const $iframe = $doc.querySelector('#post-1774 iframe')
        cy.intercept('https://cdn.sourcesync.io/smartblocks/source-digital~SmartBlockDisplay@*').as('smartBlock')
        cy.wrap($iframe.contentWindow?.document.body).click()
        cy.wait('@smartBlock')
    })
    cy.get('header div[data-device="desktop"] .ct-sticky-container > div').invoke('removeAttr','data-sticky')
}