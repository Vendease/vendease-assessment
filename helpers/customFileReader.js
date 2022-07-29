var fs = require('fs');
function customFileReader(fileUrl) {
    return fs.readFileSync(fileUrl, {encoding:'utf8', flag:'r'}).trim().split('\n');
}

exports.customFileReader = customFileReader;