const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v8nipd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
