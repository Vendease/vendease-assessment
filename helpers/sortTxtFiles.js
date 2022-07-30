var customReadFile = require('./customFileReader.js').customFileReader;
var getNewStringArr = require('./getNewStringArr.js').getNewStringArr;
var concatenateArrays = require('./concatenateArrays.js').concatenateArrays;

function sortTxtFiles(files) {
    // iterate through files array
    let newStringArrs = [];
    files.forEach(el => {
        let delimeter = el.delimeter; 
        let filePath = el.filepath;
        
        // Reaf File Content
        let fileRead = customReadFile(filePath);
        // return string content as array to be accessed and procesed
        let newString = getNewStringArr(fileRead, delimeter); 
        newStringArrs.push(newString) ; //newString.concat(newString);
    });

    const cArray = concatenateArrays(newStringArrs);
    return cArray.sort(); // sort array 
}

module.exports.sortTxtFiles = sortTxtFiles;