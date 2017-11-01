
function convertArrayToString (val) {
    var result = [];
    val.forEach((row) => {
        result.push(row.join(""));
    })
    return result.join('\n');
}

module.exports = {
    test: (val) => val,
    print: (val) => {
        return convertArrayToString(val);
    }
};