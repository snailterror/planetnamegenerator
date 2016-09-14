declare var module:any;

interface Params {
  limit: Number,
  nameLength : Number
}

/**
 * Generate planet name with params
 * @param  {Params}
 * @return {Array<string>}
 */
function planetNameGenerator(params:Params):Array<string>{

  let nameArray = [];

  for( let i=0; i < params.limit; i++ ){
    nameArray.push(generateName(params.limit));
  }

  return nameArray;

}

/**
 * Name generator
 * @param  {Number=5} nameLength
 * @return {String}
 */
function generateName(nameLength:Number=5):String{

  let text = "";
  let generateNumber = "";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const numericAlphabet = "0123456789";

  const baseName = ["", "Alm", "Er", "Stid", "Centu", "Sten", "Ly", "Er", "Or", "Ege", "Eg", "Roma", "Pern"];
  const endName = ["", "Prime", "Alpha", "Tetra", "on", "fa", "ri", "ry", "us", "go"];

  text += baseName[Math.floor((Math.random() * (baseName.length - 1)) + 1)];
  text += endName[Math.floor((Math.random() * (endName.length - 1)) + 1)];

  for( let i=0; i < 4; i++ )
      generateNumber += numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length));

  text += `_${generateNumber}`;

  return text;

}

module.exports = planetNameGenerator;
