# Testing JavaScript with Mocha

## Setup

1. From the project directory, install the dependencies:
```
npm install
```
You can also install mocha globally:
```
npm install --global mocha
```

2. Run tests with mocha:
```
npm test
```
or
```
npm test test/test.js
```
or, if mocha is installed globally:
```
mocha test/test.js
```
or
```
mocha test/test.js -grep 'should check the platform'
```
