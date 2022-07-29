var trimTxt = require('./trimTxt').trimTxt;
var formatCustomDate = require('./formatCustomDate').formatCDate;

function getNewStringArr(strArr, delimeter) {
    let nwArr = [];
    strArr.shift(); // Remove column header
    strArr.forEach((ppd, i) => {
        let pstring = ppd;
        let finalString = '';
        let nwString = '';
        if (ppd === undefined) return;
        if (delimeter === '$') {
            nwString = pstring.split(delimeter);
            finalString = `${trimTxt(nwString[3])}, ${trimTxt(nwString[0])}, ${formatCustomDate(nwString[1])}`;
        } else if (delimeter === '%') {
            nwString = pstring.split(delimeter);
            finalString = `${trimTxt(nwString[0])}, ${trimTxt(nwString[1])}, ${formatCustomDate(nwString[2])}`;
        }
        
        nwArr.push(finalString);
    });
    
    return nwArr;
}

module.exports.getNewStringArr = getNewStringArr;