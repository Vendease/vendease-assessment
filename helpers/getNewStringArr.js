var splitString = require('./splitString').splitString;

function getNewStringArr(strArr, delimeter) {
    let nwArr = [];
    strArr.shift(); // Remove column header
    strArr.forEach((ppd, i) => {
        if (ppd === undefined) return;
        finalString = splitString(ppd, delimeter); // splits string into an array
        nwArr.push(finalString);
    });
    
    return nwArr;
}

module.exports.getNewStringArr = getNewStringArr;