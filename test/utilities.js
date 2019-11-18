const assert = require('assert')
const converter = require('../src/utilities.js').converter;

describe("default number",function(){
  it("should give english convertion for No.below 10",function(){
    assert.strictEqual(converter(00000)," zero");
    assert.strictEqual(converter(7)," seven");
    assert.strictEqual(converter(07)," seven");
  });

  it("should give english convertion for No.below 20",function(){
    assert.strictEqual(converter(15)," fifteen");
    assert.strictEqual(converter(17)," seventeen");
  });

  it("should give english convertion for No.below 100",function(){
    assert.strictEqual(converter(22)," twenty two");
    assert.strictEqual(converter(57)," fifty seven");
  });

  it("should give english convertion for No.below 100 with zero in them",function(){
    assert.strictEqual(converter(40)," fourty");
    assert.strictEqual(converter(90)," ninty");
  });

  it("should give english convertion for No.below 1000",function(){
    assert.strictEqual(converter(122)," one hundred twenty two");
    assert.strictEqual(converter(117)," one hundred seventeen");
    assert.strictEqual(converter(657)," six hundred fifty seven");
  });

  it("should give english convertion for No.below 1000 having zero in them",function(){
    assert.strictEqual(converter(907)," nine hundred seven");
    assert.strictEqual(converter(450)," four hundred fifty");
  });

});
