/**
 * Generate planet name with params
 * @return {Array<string>} return array of string with generated name
 */
function planetNameGenerator(params) {
    var nameArray = [];
    for (var i = 0; i < params.limit; i++) {
        nameArray.push(generateName(params.limit));
    }
    return ["", ""];
}
function generateName(nameLength) {
    if (nameLength === void 0) { nameLength = 5; }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < nameLength; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
module.exports = planetNameGenerator;
