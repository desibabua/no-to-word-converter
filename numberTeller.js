const converter = require('./src/utilities').converter;

const main =function() {
  const number = process.argv[2]
  console.log(converter(number));
};

main();
