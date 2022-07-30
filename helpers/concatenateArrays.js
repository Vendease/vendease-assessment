

function concatenateArrays(arr) {
    let cc = 0;
    let vf = [];
    const mergedArray = arr.forEach((element, i) => {
       vf = vf.concat(arr[i++]);
    });

    return vf;
}

module.exports.concatenateArrays = concatenateArrays;