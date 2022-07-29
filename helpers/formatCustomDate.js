function formatCDate(val) {
    if (val === undefined) { return '';}
    let _val = (val.replaceAll("-", "/")).trim();
    
    return _val;
}

module.exports.formatCDate = formatCDate;