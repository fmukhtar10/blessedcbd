# Blessed CBD UK

This is a Cypress test automation framework for the **Blessed CBD UK** app. It allows you to automate functional tests for the application

## Table of Contents
[Prerequisites](#prerequisites)

[Installation](#installation) 

[Project Structure](#project-structure)

[Test Configuration](#test-configuration)


## Prerequisites
Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed

- [Git]((https://git-scm.com/)) installed

## Installation
To get started with this framework, follow these steps:
- Clone this repository to your local machine

```sh
$ git clone repourl
```
- Navigate to the project directory

```
cd blessedcbd
``` 
- Install the required Node.js packages
```
npm install
```
## Project Structure

```
├── README.md
├── cypress.config.js
├── browserstack.json
|__ cypress
      |__ e2e/specs
          |__ product_checkout.e2e.js
      |__ elements
      |__ fixtures
      |__ pages
      |__ support
      |__ testData
```


- `README.md` this file
- `cypress.config.js` cypress framework configuration for Blessed CBD UK
- `browserstack.json` configurations for BrowserStack execution
- `cypress` directory containing cypress tests and all supporting components
- `e2e` directory containing all e2e flows
- `elements` directory containing all locators and xpaths
- `fixtures` directory containing all test files
- `pages` directory containing all supporting pages and method to run e2e tests
- `testData` directory containing all supporting test data for e2e flows

 ## Test Configuration
 The test configuration can be found in the ``cypress.config.js`` file. You can customize settings such as the ``base URL``, ``browser``, or ``test environment`` in this file.

## Running Tests

You can run the Cypress tests using the following command
```
 npx cypress open
 ```
 This will open the Cypress Test Runner, allowing you to select and run specific test files or suites.

 You can run specific test file in headless mode
 ```
 npm run test:checkout
```

## Reports
```
- HTML reports can be seen under cypress/reports directory
- Videos can also be found under cypress/videos directory
```


### Note
At checkout page, shopify pay method blocks cypress due to automated bot detection, due to this unable to complete checkout process. 

here is the error 
````
shop.app/pay/hop?analytics_trace_id=fca3b91a-909a-4f67-ad21-ec50f55b26bf&target_origin=https%3A%2F%2Fblessedcbd.co.uk&client_handle=blessed-cbd-prod.myshopify.com:1  Failed to load resource: the server responded with a status of 403 (Forbidden)
````