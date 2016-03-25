var primeFinder = require('../challenge_7.js');
var chai = require('chai');
var expect = chai.expect;
chai.should();

// describe the class PrimeFinder
describe("primeFinder", function(){
  it("should be a function", function(){
    expect(primeFinder).to.be.a('function');
  });
  it("should have a function", function(){
    expect(primeFinder.getPrimeNumber()).to.be.a('function');
});
});




// write your tests here\
