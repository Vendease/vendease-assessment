const { convertInput, loadInput } = require("./functions");

// import { convertInput, loadInput } from "./functions";

const mergeData = async (fileA, fileB) =>{
    // load first input
    const loadInputA = await loadInput(fileA);

    // load second input
    const loadInputB = await loadInput(fileB);

    // strip first input
    const convertedInputA = await convertInput(loadInputA, '$');

    console.log('loaded input: ', loadInputA)
    console.log('converted input: ', convertedInputA)
    // strip second input
    const convertedInputB = await convertInput(loadInputB, '%');

    // merge inputs
    const mergedData =  convertedInputA.concat(convertedInputB)

    // sort inputs
    const sortedData = mergedData.sort(function(a, b) {
        var nameA=a.first_name.toLowerCase(), nameB=b.first_name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1 
        if (nameA > nameB)
            return 1
        return 0 
    });

    // format output
    const result = sortedData.map((r,i)=>{
        return Object.values(r).join(',')
    })

    return result;
}

(async () => {
  const inp = await mergeData('./fixtures/people_by_dollar.txt','./fixtures/people_by_percent.txt')
    console.log('this is the input', inp)
})()