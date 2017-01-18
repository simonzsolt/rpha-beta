var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var config = require('config');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

var index = require('./routes/index');

// var morgan = require('morgan');

// app.use(morgan('combined'));

var MONGO_DB_URI =  config.get('MONGO_DB_URI');

MongoClient.connect(MONGO_DB_URI, function (err, db) {
     assert.equal(null, err);
     console.log("[server.js] Connected correctly to mongodb server.");

     db.close();
});

var port = config.get('port') || 3000;
var host = config.get('host') || 'localhost';

app.listen(port, function () {
    console.log('[server.js] Example app listening on "http://' + host + ':' + port + '", in ' +
        process.env.NODE_ENV + '.' + ' environment.')
})

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/',  index)

module.exports = app;
