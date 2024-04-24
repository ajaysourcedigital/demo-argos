function open_sam(display_icon_selector, block_name) {
    cy.contains(display_icon_selector, block_name).should('be.visible').click({force:true})
}

function close_sam() {
    cy.get('.activation-details .top-bar button').click()
}

export function visit_experience_engine_page() {
    cy.visit("https://experience-stg.sourcesync.io/38960")
}

export function capture_action_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.action_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.action_block_display_name, standaloneJson.action_block_contents_selector)
        close_sam()
    })
}

export function capture_brand_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.brand_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.brand_block_display_name, standaloneJson.brand_block_contents_selector)
        close_sam()
    })
}

export function capture_display_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.display_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.display_block_display_name, standaloneJson.display_block_contents_selector)
        close_sam()
    })
}

export function capture_iframe_kurator_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        cy.intercept('https://api-stg.sourcesync.io/settings/apps/sourcesync-admin').as('loadIframe')
        cy.intercept('https://ekr.zdassets.com/compose/*').as('loadIframeRequest2')
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.iframe_kurator_block_display_name)
        cy.wait(['@loadIframe','@loadIframeRequest2'])
        cy.wait(1000)
        cy.get('.activation-details-container .smart-block-list__item').find('iframe').then(($el) => {
            cy.wrap($el[0].contentWindow?.document.body.querySelector('.q-page-container a.q-btn')).should('be.visible')
        })
        cy.capture_multi_viewport_screenshot(standaloneJson.iframe_kurator_block_display_name, standaloneJson.iframe_kurator_block_contents_selector)
        close_sam()
    })
}

export function capture_iframe_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        cy.intercept('https://example.sourcesync.io/wp-includes/js/jquery/*').as('iframeRequest2')
        cy.intercept('https://example.sourcesync.io/wp-content/plugins/videojs-html5-player/videojs/video.min.js?*').as('iframeRequest3')
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.iframe_block_display_name)
        cy.wait(['@iframeRequest2','@iframeRequest3'])
        cy.wait(1000)
        cy.get('.activation-details-container .smart-block-list__item').find('iframe').then(($el) => {
            cy.wrap($el[0].contentWindow?.document.body.querySelector('figure')).should('be.visible')
        })
        cy.capture_multi_viewport_screenshot(standaloneJson.iframe_block_display_name, standaloneJson.iframe_block_contents_selector)
        close_sam()
    })
}

export function capture_image_carousel_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.image_carousel_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.image_carousel_block_display_name, standaloneJson.image_carousel_block_contents_selector)
        close_sam()
    })
}

export function capture_image_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.image_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.image_block_display_name, standaloneJson.image_block_contents_selector)
        close_sam()
    })
}

export function capture_location_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.location_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.location_block_display_name, standaloneJson.location_block_contents_selector)
        close_sam()
    })
}

export function capture_markdown_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.markdown_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.markdown_block_display_name, standaloneJson.markdown_block_contents_selector)
        close_sam()
    })
}

export function capture_product_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.product_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.product_block_display_name, standaloneJson.product_block_contents_selector)
        close_sam()
    })
}

export function capture_richtext_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.richtext_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.richtext_block_display_name, standaloneJson.richtext_block_contents_selector)
        close_sam()
    })
}

export function capture_social_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.social_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.social_block_display_name, standaloneJson.social_block_contents_selector)
        close_sam()
    })
}

export function capture_survey_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.survey_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.survey_block_display_name, standaloneJson.survey_block_contents_selector)
        close_sam()
    })
}

export function capture_video_block() {
    cy.fetch_standalone_json().then(standaloneJson => {
        open_sam(standaloneJson.smartblock_display_icon_selector, standaloneJson.video_block_display_name)
        cy.capture_multi_viewport_screenshot(standaloneJson.video_block_display_name, standaloneJson.video_block_contents_selector)
        close_sam()
    })
}

export function capture_smartblocks_list() {
    cy.fetch_standalone_json().then(standaloneJson => {
        cy.capture_multi_viewport_screenshot('Overlay',standaloneJson.smartblock_display_icon_selector)
    })
}