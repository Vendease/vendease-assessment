var trimTxt = require('./trimTxt').trimTxt;
var formatCustomDate = require('./formatCustomDate').formatCDate;

// splits string into an array
// access using array index and concatenate to form expected string
function splitString(stringVal, delimeter) {
    let finalString = '';
    if (delimeter === '$') {
        nwString = stringVal.split(delimeter);
        finalString = `${trimTxt(nwString[3])}, ${trimTxt(nwString[0])}, ${formatCustomDate(nwString[1])}`;
    } else if (delimeter === '%') {
        nwString = stringVal.split(delimeter);
        finalString = `${trimTxt(nwString[0])}, ${trimTxt(nwString[1])}, ${formatCustomDate(nwString[2])}`;
    }
    return finalString;
}

module.exports.splitString = splitString;