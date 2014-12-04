var proxy = require('../utils/proxy');

var expect = require('chai').expect,
    sinon = require('sinon'),
    User = require('../src/models/humans/User'),
    Donkey = require('../src/models/animals/Donkey');

var user = new User();

describe("Trying out the test libraries", function () {
    describe("Chai", function () {
        it("should be equal using 'expect'", function () {
            expect(user.sayHello()).to.equal("Hello");
        }); });
    describe("Sinon.JS", function () {
        it("should report spy called", function () {
            var helloSpy = sinon.spy(user, 'sayHello');
            expect(helloSpy.called).to.be.false;
            user.sayHello();
            expect(helloSpy.called).to.be.true;
            user.sayHello.restore();
        }); });
});

var donkey = new Donkey();

describe("Trying out the test libraries", function () {
    describe("Chai", function () {
        it("should be equal using 'expect'", function () {
            expect(donkey.sayHello()).to.equal("Iaah!");
        }); });
    describe("Sinon.JS", function () {
        it("should report spy called", function () {
            var helloSpy = sinon.spy(donkey, 'sayHello');
            expect(helloSpy.called).to.be.false;
            donkey.sayHello();
            expect(helloSpy.called).to.be.true;
            donkey.sayHello.restore();
        }); });
});

var donkey2 = new Donkey();

describe("Trying out the test libraries", function () {
    describe("Chai", function () {
        it("should be equal using 'expect'", function () {
            expect(donkey2.sayHello()).to.equal("Iaah!");
        }); });
    describe("Sinon.JS", function () {
        it("should report spy called", function () {
            var helloSpy = sinon.spy(donkey2, 'sayHello');
            expect(helloSpy.called).to.be.false;
            donkey2.sayHello();
            expect(helloSpy.called).to.be.true;
            donkey2.sayHello.restore();
        }); });
});