const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const excelToJson = require('convert-excel-to-json');

function getConfigFile(file){
  const pathToConfigFile = path.resolve(`cypress.env.${file}.json`);
  return JSON.parse(fs.readFileSync(pathToConfigFile));
}

module.exports = defineConfig({
  projectId: '768ynj',
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
      on('task',{
        excelToJsonConverter(filePath){
          const result = excelToJson({
            source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
          });
          return result;

        }
      })

      const file = config.env.configFile || 'stg';
      return{...config, ...getConfigFile(file)};
    },
    specPattern: 'cypress/tests/'


  },
});
