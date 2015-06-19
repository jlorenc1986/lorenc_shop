var should = require('should');
var request = require('supertest');
var assert = require('assert');
var express = require('express');
var app = express();

request = request('http://localhost:3000');

describe('GET /users', function () {

    it('respond with data', function (done) {


        request.get('/users').expect(200, done);
    });
});

describe('GET /products', function () {

    it('respond with json', function (done) {


        request.get('/products').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
    });
});

