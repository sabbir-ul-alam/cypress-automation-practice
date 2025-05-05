const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

function getConfigFile(file){
  const pathToConfigFile = path.resolve(`cypress.env.${file}.json`);
  return JSON.parse(fs.readFileSync(pathToConfigFile));
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || 'uat';
      return{...config, ...getConfigFile(file)};
    },
    specPattern: 'cypress/tests/'


  },
});
