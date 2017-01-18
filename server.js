var compression = require('compression');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
var path = require('path');
var config = require('config');
// var morgan = require('morgan');
var winston = require('winston');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// logging
winston.configure({
    // var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            colorize: true,
            level: 'verbose',
            timestamp: function() {
                return new Date(Date.now());
            },
            prettyPrint: true,
            humanReadableUnhandledException: true
        })
    ]
});

// require model
var Verse = require('./public/models/verse').Verse;
var Source = require('./public/models/source').Source;

// routes
var index = require('./routes/index');

app.use(compression())

// DB connection
var MONGO_DB_URI = config.get('MONGO_DB_URI');
mongoose.connect(MONGO_DB_URI);
var db = mongoose.connection;
// on connection error
db.on('error', winston.error.bind(winston, 'connection error:'));
db.once('open', function() {
    winston.info('[server.js] Connected correctly to mongodb server.');
});

// server connection config
var port = config.get('port') || 3000;
var host = config.get('host') || 'localhost';

app.listen(port, function() {
    winston.info('[server.js] Example app listening on "http://' + host + ':' + port + '", in ' +
        process.env.NODE_ENV + '.' + ' environment.')
})

// path to public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// use index route
app.use('/', index)

module.exports = app;
app.use('/', index)

module.exports = app;
