//Wait Related Command
Cypress.Commands.addAll({
    fetch_landing_json() {
        cy.fixture('kurator/landing.json').then(landingJson => {
            return landingJson
        })
    },

    fetch_login_json() {
        cy.fixture('kurator/login').then(loginJson => {
            return loginJson
        })
    },

    fetch_dashboard_json() {
        cy.fixture('kurator/dashboard.json').then(dashboardJson => {
            return dashboardJson
        })
    },

    fetch_common_json() {
        cy.fixture('kurator/common.json').then(commonJson => {
            return commonJson
        })
    },

    fetch_asset_json() {
        cy.fixture('kurator/asset.json').then(assetJson => {
            return assetJson
        })
    },

    fetch_sam_json() {
        cy.fixture('kurator/sam.json').then(samJson => {
            return samJson
        })
    },

    fetch_production_json() {
        cy.fixture('kurator/production.json').then(productionJson => {
            return productionJson
        })
    },

    fetch_interactive_json() {
        cy.fixture('kurator/interactive.json').then(interactiveJson => {
            return interactiveJson
        })
    },

    fetch_distribution_json() {
        cy.fixture('kurator/distribution.json').then(distributionJson => {
            return distributionJson
        })
    },

    fetch_live_production_json() {
        cy.fixture('kurator/live_production.json').then(liveJson => {
            return liveJson
        })
    },

    fetch_campaign_json() {
        cy.fixture('kurator/campaign.json').then(campaignJson => {
            return campaignJson
        })
    },

    fetch_categories_and_keyword_json() {
        cy.fixture('kurator/categories_and_keywords.json').then(TagsJson => {
            return TagsJson
        })
    },

    fetch_account_json() {
        cy.fixture('kurator/account.json').then(accountJson => {
            return accountJson
        })
    },

    fetch_pulse_analytics_json() {
        cy.fixture('kurator/pulse_analytics.json').then(pulseAnalyticsJson => {
            return pulseAnalyticsJson
        })
    },

    fetch_standalone_json() {
        cy.fixture('standalone_distribution/standalone.json').then(standaloneJson => {
            return standaloneJson
        })
    },

    wait_top_loader() {
        cy.fetch_common_json().then(commonJson => {
            cy.get(commonJson.top_loading_bar_locator).should('have.attr','role')
        })
    },

    wait_top_loader_complete() {
        cy.fetch_common_json().then(commonJson => {
            cy.get(commonJson.top_loading_bar_locator).should('not.have.attr','role')
        })
    },

    wait_center_loader() {
        cy.fetch_common_json().then(commonJson => {
            cy.get(commonJson.center_loader_locator).should('exist')
        })
    },

    wait_center_loader_complete() {
        cy.fetch_common_json().then(commonJson => {
            cy.get(commonJson.center_loader_locator).should('not.exist')
        })
    },

    wait_top_center_loader_complete() {
        cy.fetch_common_json().then(commonJson => {
            cy.get(commonJson.center_loader_locator).should('not.exist')
            cy.get(commonJson.top_loading_bar_locator).should('not.have.attr','role')
        })
    },

    wait_top_center_loader() {
        cy.fetch_common_json().then(commonJson => {
            cy.get(commonJson.center_loader_locator).should('exist')
            cy.get(commonJson.top_loading_bar_locator).should('have.attr','role')
        })
    },

    wait_template_load_complete() {
        cy.fetch_sam_json().then(samJson => {
            cy.get(samJson.sam_details_template_preview_load_image_locator).should('not.have.class','q-transition--fade-leave')
        })
    }
})


Cypress.Commands.addAll({
    expand_item(item_selector) {
        cy.get(item_selector).click()
    },

    smartuiSnapshot(screenshotLabel) {
        cy.screenshot(screenshotLabel)
    },

    capture_multi_viewport_screenshot(screenshotLabel, elementSelector, specific) {
        cy.capture_argos_screenshot(screenshotLabel)
    },

    capture_argos_screenshot(screenshotLabel) {
        cy.argosScreenshot(screenshotLabel, {
            viewports: [
                {height: 1920, width: 1080},
                {height: 768, width: 1024},
                {height: 390, width: 844}
            ],
        });
    },

    make_header_nonSticky() {
        cy.get('header div[data-device="desktop"] .ct-sticky-container > div').invoke('removeAttr','data-sticky')
    },

    capture_lambdatest_screenshot(screenshotLabel, elementSelector, specific) {
        if(specific === undefined) {
            cy.get(elementSelector).should('be.visible')
            cy.wait(0)
            cy.screenshot(screenshotLabel + ' (1920@1080)')

            cy.viewport(768, 1024)
            cy.get(elementSelector).should('be.visible')
            cy.wait(0)
            cy.screenshot(screenshotLabel + " (768@1024)")

            cy.viewport(390, 844)
            cy.get(elementSelector).should('be.visible')
            cy.wait(0)
            cy.screenshot(screenshotLabel + ' (390@844)')

            cy.viewport(1920, 1080)
        }
        else {
            cy.wait(0)
            cy.get(elementSelector).scrollIntoView().should('be.visible').screenshot(screenshotLabel + ' (1920@1080)')

            cy.viewport(768, 1024)
            cy.wait(0)
            cy.get(elementSelector).scrollIntoView().should('be.visible').screenshot(screenshotLabel + ' (768@1024)')

            cy.viewport(390, 844)
            cy.wait(0)
            cy.get(elementSelector).scrollIntoView().should('be.visible').screenshot(screenshotLabel + ' (390@844)')

            cy.viewport(1920, 1080)
        }
    }
})