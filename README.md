# Testing JavaScript with Mocha

This project demonstrates how to run test JavaScript code with the [mocha](https://mochajs.org/) framework and several assertion libraries, [assert](https://mochajs.org/), [should](https://shouldjs.github.io/), and [chai](http://chaijs.com/).

## Setup

1. From the project directory, install the dependencies:

  `npm install`

  You can also install mocha globally:

  `npm install --global mocha`

2. Run tests with mocha:

  `npm test`

  or

  `npm test test/test.js`

  or, if mocha is installed globally:

  `mocha test/test.js`

  or

  `mocha test/test.js -grep 'should check the platform'`
