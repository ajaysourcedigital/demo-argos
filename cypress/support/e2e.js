import './kurator/common_pages/commands'
import "@argos-ci/cypress/support"; 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})