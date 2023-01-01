const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  defaultCommandTimeout: 7000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // on("file:preprocessor", cucumber());
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", browserify.default(config));
      return config;
    },
    specPattern: ["cypress/integration/**/*.{js,jsx,ts,tsx,feature}"],
    // testFiles: ["**/*.feature", "**/*.js"],
  },
});
