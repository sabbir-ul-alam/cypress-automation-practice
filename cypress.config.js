const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

function getConfigFile(file){
  const pathToConfigFile = path.resolve(`cypress.env.${file}.json`);
  return JSON.parse(fs.readFileSync(pathToConfigFile));
}

module.exports = defineConfig({
  projectId: 'practice-automation1',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      const file = config.env.configFile || 'uat';
      return{...config, ...getConfigFile(file)};
    },
    specPattern: 'cypress/tests/'


  },
});
