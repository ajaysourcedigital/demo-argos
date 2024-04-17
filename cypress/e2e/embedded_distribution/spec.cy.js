/// <reference types="cypress" />

import { visit_home_page } from "../../support/embedded_distribution/home"
import { visit_html5_player, visit_jw_player, visit_videojs_player } from "../../support/embedded_distribution/players"
import { visit_publisher_page } from "../../support/embedded_distribution/publisher"

describe('smart ui cypress automation', function () {
    it('embedded distribution', function() {
        visit_home_page()
        cy.capture_multi_viewport_screenshot('Example Embedder Home Page','#player_html5_api + div iframe')

        // visit_publisher_page()
        // cy.capture_multi_viewport_screenshot('Publisher List Page','.e-con-inner a img')

        // visit_videojs_player()
        // cy.capture_multi_viewport_screenshot('Vidoe JS','iframe')

        // visit_jw_player()
        // cy.capture_multi_viewport_screenshot('JW Player','iframe')

        // visit_html5_player()
        // cy.capture_multi_viewport_screenshot('Native HTML 5 Player','iframe')
    })
 })