var sortTextFiles = require('./helpers/sortTxtFiles.js').sortTxtFiles;


// define file paths and delimeters as array of objects
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

console.log(sortTextFiles(files));
