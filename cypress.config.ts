import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    testIsolation: true,
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
  },
});
