/**
 * Generate planet name with params
 * @param  {Params}
 * @return {Array<string>}
 */
function planetNameGenerator(params) {
    var nameArray = [];
    for (var i = 0; i < params.limit; i++) {
        nameArray.push(generateName(params.limit));
    }
    return nameArray;
}
/**
 * Name generator
 * @param  {Number=5} nameLength
 * @return {String}
 */
function generateName(nameLength) {
    if (nameLength === void 0) { nameLength = 5; }
    var text = "";
    var generateNumber = "";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var numericAlphabet = "0123456789";
    var baseName = ["", "Alm", "Er", "Stid", "Centu", "Sten", "Ly", "Er", "Or", "Ege", "Eg", "Roma", "Pern"];
    var endName = ["", "Prime", "Alpha", "Tetra", "on", "fa", "ri", "ry", "us", "go"];
    text += baseName[Math.floor((Math.random() * (baseName.length - 1)) + 1)];
    text += endName[Math.floor((Math.random() * (endName.length - 1)) + 1)];
    for (var i = 0; i < 4; i++)
        generateNumber += numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length));
    text += "_" + generateNumber;
    return text;
}
module.exports = planetNameGenerator;
