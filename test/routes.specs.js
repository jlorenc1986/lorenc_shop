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

      it('offers route ', function(done) {

        request(app).get('/offers').expect(200, done);

    });

    it('users list route ', function(done) {

        request(app).get('/users/list').expect(200, done);

    });

    it('users/id route ', function(done) {

        request(app).get('/users/2').expect(200, done);

    });

    it('products route ', function(done) {

        request(app).get('/products').expect(200, done);

    });

     it('products/:id route ', function(done) {

        request(app).get('/products/1').expect(200, done);

    });

});