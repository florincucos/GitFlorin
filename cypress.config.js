const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  experimentalSessionSupport: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 0,
  defaultCommandTimeout: 30000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
