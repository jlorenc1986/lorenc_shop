var assert = require('assert'),
    sinon = require('sinon'),
    chai = require('chai'),
    request = require('supertest'),
    app = require('../app'),
    expect = chai.expect;

describe('routes SPECS', function() {


    beforeEach(function() {

    });

    afterEach(function() {

    });

    it('index route ', function(done) {
        request(app).get('/').expect(200, done);


    });


    it('login route ', function(done) {

        request(app).get('/login').expect(200, done);

    });

});