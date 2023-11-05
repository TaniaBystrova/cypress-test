import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: 'cypress/e2e/fixtures',
  viewportWidth: 1024,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  },
});
