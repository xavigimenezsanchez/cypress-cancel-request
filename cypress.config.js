const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-terminal-report/src/installLogsPrinter")(on, {
        printLogsToConsole: "always",
      });
    },
  },
});
