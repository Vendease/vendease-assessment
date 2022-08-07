const fs = require('fs').promises;;

const convertDate = (d, format) => {
    const date = d.split('-');

    // extract date based on input format
    let year; let month; let day;
    if(format=='%'){
        year = date[0];
        month = date[1]
        day = date[2];
    }else{
        year = date[2];
        month = date[1]
        day = date[0];
    }

    let newDate = month + "/" + day + "/" + year;

    return newDate;
}

const loadInput = async (file) =>{
    const data = await fs.readFile(file, 'utf8');
    const processedData = data.split('\n');
    return processedData.slice(1,-1);
}

const convertInput = async (dataWithDelimiter, delimiter) =>{
    let data = dataWithDelimiter.map((info,i)=>{
        let newInfo = info.split(delimiter);

        // extract info based on input format
        if(delimiter==='%'){
            return  {
                first_name: newInfo[0].trim(),
                city: newInfo[1].trim(),
                birth_date: convertDate(newInfo[2].trim(), delimiter),
            }
        }else{
            return {
                first_name: newInfo[2].trim(),
                city: newInfo[0].trim(),
                birth_date: convertDate(newInfo[1].trim(), delimiter),
            }
        }
        
    })
    return data
}

module.exports = {
  loadInput, convertDate, convertInput
};