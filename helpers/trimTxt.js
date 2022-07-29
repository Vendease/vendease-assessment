function trimTxt(val) {
    if (val === undefined) {return;}
    let _val = val.trim();
    return _val;
}

module.exports.trimTxt = trimTxt;