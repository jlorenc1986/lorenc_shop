var assert = require('assert');
var sinon = require('sinon');
var chai = require('chai');
var request = require('supertest');
var app = require('../app');
var expect = chai.expect;


var routesIndex = require('../routes/index');


describe('routes SPECS', function () {
	

	beforeEach(function () {

	});

	afterEach(function () {

	});

    it('routesIndex', function (done) {
    	request(app).get('/').expect(200, done);

 
    });


    it('dummy test 2 ', function () {

        assert.equal(true, true, 'values are equal');
        
    });


});


