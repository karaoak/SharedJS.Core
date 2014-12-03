var proxy = require('../utils/proxy');

var expect = require('chai').expect,
    sinon = require('sinon'),
    User = require('../src/models/User'),
    Cat = require('../src/models/animals/Cat');

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

var cat = new Cat();

describe("Trying out the test libraries", function () {
    describe("Chai", function () {
        it("should be equal using 'expect'", function () {
            expect(cat.sayHello()).to.equal("Miaauw!");
        }); });
    describe("Sinon.JS", function () {
        it("should report spy called", function () {
            var helloSpy = sinon.spy(cat, 'sayHello');
            expect(helloSpy.called).to.be.false;
            cat.sayHello();
            expect(helloSpy.called).to.be.true;
            cat.sayHello.restore();
        }); });
});

var cat2 = new Cat();

describe("Trying out the test libraries", function () {
    describe("Chai", function () {
        it("should be equal using 'expect'", function () {
            expect(cat2.sayHello()).to.equal("Miaauw!");
        }); });
    describe("Sinon.JS", function () {
        it("should report spy called", function () {
            var helloSpy = sinon.spy(cat2, 'sayHello');
            expect(helloSpy.called).to.be.false;
            cat2.sayHello();
            expect(helloSpy.called).to.be.true;
            cat2.sayHello.restore();
        }); });
});