var assert = require('assert');
var sinon = require('sinon');
var chai = require('chai');
var request = require('supertest');
var app = require('../app');
var expect = chai.expect;

describe('routes SPECS', function () {
	

	beforeEach(function () {

	});

	afterEach(function () {

	});

    it('index route ', function (done) {
    	request(app).get('/').expect(200, done);

 
    });


    it('login route ', function (done) {

        request(app).get('/login').expect(200, done);
        
    });


});


