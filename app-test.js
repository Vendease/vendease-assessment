// We use the assert standard library to make assertions
const assert = require('assert');
const fs = require('fs');
const { customFileReader } = require('./helpers/customFileReader');
const { trimTxt } = require('./helpers/trimTxt');
const { getNewStringArr } = require('./helpers/getNewStringArr');

// We do not need to import the test functions since
// they are made global variables by test.js
test('if file is not empty', () => {
    assert(customFileReader('./fixtures/people_by_dollar.txt') !== '');
});

test('if value is a string', () => {
    assert(typeof trimTxt('typeof') === 'string');
});

test('if new returned value is an array', () => {
    assert(typeof getNewStringArr(['string1 $ string2 $ string3']) == 'object');
});

