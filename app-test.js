// We use the assert standard library to make assertions
const assert = require('assert');
const fs = require('fs');
const { customFileReader } = require('./helpers/customFileReader');
const { trimTxt } = require('./helpers/trimTxt');
const { getNewStringArr } = require('./helpers/getNewStringArr');
const { sortTxtFiles } = require('./helpers/sortTxtFiles');

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

test('if file returns expected content', () => {
    var pplByDollar = [
        'city $ birthdate $ last_name $ first_name',
        'LA $ 30-4-1974 $ Nolan $ Rhiannon',
        'NYC $ 5-1-1962 $ Bruen $ Rigoberto'
    ];
    var pplByPercentage =[
        'first_name % city % birthdate',
        'Mckayla % Atlanta % 1986-05-29',
        'Elliot % New York City % 1947-05-04'
    ];

    // expectedVal = sortTxtFiles(files);
    _byDollar = customFileReader('./fixtures/people_by_dollar.txt');
    _byPercentage = customFileReader('./fixtures/people_by_percent.txt');

    assert.deepEqual(pplByDollar, _byDollar);
    assert.deepEqual(pplByPercentage, _byPercentage);
})

test('if file sorted and returns as expected', () => {
    var fval =  [
        'Elliot, New York City, 1947/05/04',
        'Mckayla, Atlanta, 1986/05/29',
        'Rhiannon, LA, 30/4/1974',
        'Rigoberto, NYC, 5/1/1962'
    ];

    var files = [
        {
            delimeter: '$',
            filepath: './fixtures/people_by_dollar.txt'
        },
        {
            delimeter: '%',
            filepath: './fixtures/people_by_percent.txt'
        },
    ];

    expectedVal = sortTxtFiles(files);

    assert.deepEqual(fval, expectedVal);
})

