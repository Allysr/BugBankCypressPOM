const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bugbank.netlify.app/",
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});