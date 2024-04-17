export function visit_publisher_page() {
    cy.get('a.elementor-element:first-child').click()
    cy.get('.e-con-inner a img').should('be.visible')
    cy.get('header div[data-device="desktop"] .ct-sticky-container > div').invoke('removeAttr','data-sticky')
}