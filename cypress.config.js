const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    defaultCommandTimeout: 90000,
    pageLoadTimeout: 50000,
    watchForFileChanges: false,
    video: true,
    specPattern: 'cypress/e2e/specs/**/**e2e.js',
    baseUrl : 'https://blessedcbd.co.uk/',
    
    env:{
      user_email : '',
      user_password: '',
      phoneNumber: ''
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
