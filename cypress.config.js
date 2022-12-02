const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /// <reference types="cypress" />
      /// <reference types="cypress-xpath" />
      "testfiles"; ['myfirsttest.js']
      reporter: 'mochawesome'
    },
  },
});
