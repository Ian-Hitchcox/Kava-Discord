// Repeat a passed in character a number of times
function RepeatCharacter (charToRepeat, numTimes) {
    if (charToRepeat && numTimes) {
        return charToRepeat.repeat(numTimes);
    }
    return null;
}

module.exports = {
    RepeatCharacter: RepeatCharacter
}