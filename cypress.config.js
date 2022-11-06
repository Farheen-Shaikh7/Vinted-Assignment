const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1coy9a',
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 60000,
    specPattern: 'cypress/Specs/**/*.spec.{js,jsx,ts,tsx}',
    supportFile: false,
    screenshotsFolder: 'cypress/reports/mochawesome-report/assets',
    videoUploadOnPasses: false,
    videoCompression: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    baseUrl:'https://www.vinted.co.uk/',
  },
});
