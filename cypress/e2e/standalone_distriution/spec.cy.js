/// <reference types="cypress" />

import { capture_action_block, capture_brand_block, capture_display_block, capture_iframe_block, capture_iframe_kurator_block, capture_image_block, capture_image_carousel_block, capture_location_block, capture_markdown_block, capture_product_block, capture_richtext_block, capture_smartblocks_list, capture_social_block, capture_survey_block, capture_video_block, visit_experience_engine_page } from "../../support/standalone_distribution/standalone"

describe('smart ui cypress automation', function () {
    it('standalone distribution', function() {
        cy.then(() => {
            visit_experience_engine_page()
        }).then(() => {
            capture_action_block()
        }).then(() => {
            capture_brand_block()
        }).then(() => {
            capture_display_block()
        }).then(() => {
            capture_iframe_kurator_block()
        }).then(() => {
            capture_iframe_block()
        }).then(() => {
            capture_image_carousel_block()
        }).then(() => {
            capture_image_block()
        }).then(() => {
            capture_location_block()
        }).then(() => {
            capture_markdown_block()
        }).then(() => {
            capture_product_block()
        }).then(() => {
            capture_richtext_block()
        }).then(() => {
            capture_social_block()
        }).then(() => {
            capture_survey_block()
        }).then(() => {
            capture_video_block()
        }).then(() => {
            capture_smartblocks_list()
        })
    }) 
})