# Testing JavaScript with Mocha

This project demonstrates how to test JavaScript code with the [mocha](https://mochajs.org/) testing framework and several assertion libraries, [assert](https://nodejs.org/api/assert.html), [should](https://shouldjs.github.io/), and [chai](http://chaijs.com/).

## Requirements

Requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (project developed with Node.js version 6.3.1).

To check:
```
node --version
npm --version
```
## Setup

Clone the project to your local environment:

`git clone https://github.com/wooldridge/mocha-testing.git`

From the project directory, install the dependencies (defined in [package.json](https://github.com/wooldridge/mocha-testing/blob/master/package.json)):
```
cd mocha-testing
npm install
```
You can also install mocha globally:

`npm install --global mocha`

## Running Tests

The example tests are mostly in a [single file](https://github.com/wooldridge/mocha-testing/blob/master/test/test.js) and test some Node.js core functions and [MarkLogic Node.js Client API](https://github.com/marklogic/node-client-api) methods.

Run tests with mocha:

`npm test`

or

`npm test test/test.js`

If mocha is installed globally:

`mocha test/test.js`

or

`mocha test/test.js --grep 'should check the platform'`
