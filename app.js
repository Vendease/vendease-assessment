var customReadFile = require('./helpers/customFileReader.js').customFileReader;
var getNewStringArr = require('./helpers/getNewStringArr.js').getNewStringArr;

// Read File Contents
const ppleByDollar = customReadFile('fixtures/people_by_dollar.txt');
const ppleByPercent = customReadFile('fixtures/people_by_percent.txt');

const _ppleByDollar = getNewStringArr(ppleByDollar, '$');
const _ppleByPercent = getNewStringArr(ppleByPercent, '%');

const finalDat = _ppleByDollar.concat(_ppleByPercent);

console.log(finalDat.sort());
