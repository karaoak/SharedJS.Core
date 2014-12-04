var proxy = require('../utils/proxy');

var expect = require('chai').expect,
    sinon = require('sinon'),
    Mule = require('../src/models/animals/Mule');
   //TODO: For other models: http://lostechies.com/derickbailey/2014/02/20/how-i-work-around-the-require-problem-in-nodejs/

var mule = new Mule();

describe("Trying out the test libraries", function() {
    describe("Chai", function () {
        it("should be equal using 'expect'", function() {
            expect(mule.sayHello()).to.equal("Iaahihi!");
        }); });
    describe("Sinon.JS", function() {
        it("should report spy called", function() {
            var helloSpy = sinon.spy(mule, 'sayHello');
            expect(helloSpy.called).to.be.false;
            mule.sayHello();
            expect(helloSpy.called).to.be.true;
            mule.sayHello.restore();
        });
    });
});