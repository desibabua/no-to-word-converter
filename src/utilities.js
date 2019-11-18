const englishNamesOfDefaultNumbers = require('./defaultNumbers.js').englishNamesOfDefaultNumbers; 

const forTwoNumber = function(number) {
  let desireNoSet = [];
  let noDivider = 10;
  let suffix = number % noDivider
  let prefix = Math.floor(number / noDivider) * noDivider
  if(englishNamesOfDefaultNumbers[number] === undefined) {
    desireNoSet.unshift(suffix);
    desireNoSet.unshift(prefix);
    return desireNoSet;
  }
  desireNoSet.unshift(number)
  return desireNoSet;
};

const complexNoConverter = function(givenNo) {
  let number = givenNo;
  if(number < 100) {
    return forTwoNumber(number)
  }
  let desireNoSet = forTwoNumber(number % 100);
  desireNoSet.unshift(100);
  desireNoSet.unshift(Math.floor(number/100));
  return desireNoSet;
};

const reducer = function(desiredOutput, inputElement ) {
  return desiredOutput +" " + englishNamesOfDefaultNumbers[inputElement]
};

const converter = function(givenNumber) {
  let desiredSet = complexNoConverter(givenNumber);
  return(desiredSet.reduce(reducer,""))
}


exports.englishNamesOfDefaultNumbers = englishNamesOfDefaultNumbers;
exports.converter = converter;
