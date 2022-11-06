# vinted Automation Test Project

This project contains the automated tests for vinted, supported by the [Cypress](http://cypress.io) framework. In
this readme you'll find the following:

# Project contents and folder structure:

[/ cypress](cypress)

  with cypress and return data that's been stored in this folder. The data is organized per use case.
- [/Specs](cypress/Specs/) contains end-to-end tests that cover complete happy flow tests.

- [/components](cypress/Components/) contains our **selectors** and **actions** used in the testing frameworks. 

- [/reports](cypress/reports/mochawesome-report/assets/) contains screenshots for the failing test.

- [/videos](cypress/videos/) contains videos for the failing test.

# Local installation

### Pre-requisites

- node 14+
- yarn

### Installation Steps

1. Clone this repository.
2. In the terminal and in the root folder, download all the dependencies:
```
yarn
```

3. Open cypress runners and  run test cases:
```
- yarn cypress:open:Uk
- yarn cypress:open:DE


4.To execute tests and generate Allure Report
```
- yarn test:UK-Allure
- yarn test:DE-Allure

Note : After running command "index.html" file is automatically genereated in google chrome (you will automatically redirect)
