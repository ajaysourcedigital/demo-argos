const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");

module.exports = defineConfig({
  // setupNodeEvents can also be defined in "component"
  e2e: {
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: true,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: "aaebb5525c333775c049c2acd182a4097e010190",
      });
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 60000,
    requestTimeout: 60000,
    responseTimeout: 60000
  },
});