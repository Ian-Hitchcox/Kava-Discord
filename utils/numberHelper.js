// Calculate how many characters a line should have
function CalculateLineLength (lengthObj, pipeLen) {    

    if (lengthObj && pipeLen) {
        let lineLen = pipeLen;

        Object.keys(lengthObj).map(function(key, index) {
            lineLen += lengthObj[key] + pipeLen;
        });

        return lineLen;
    }
    return null;
}

module.exports = {
    CalculateLineLength: CalculateLineLength
}