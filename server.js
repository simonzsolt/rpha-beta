var compression = require('compression');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
var path = require('path');
var dotenv =  require('dotenv').config();
var winston = require('winston');
var arangojs = require('arangojs');
var db = require('./public/dbConnection.js');


// logging | winston config
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

// routes
var index = require('./routes/index');

// for performance
app.use(compression())

// server connection config
var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';

app.listen(port, function() {
	winston.info('[server.js] Example app listening on "http://' +
	process.env.HOST + ':' +
	process.env.PORT +
	'",\n\t\t\t\t\t        in ' + process.env.NODE_ENV +  ' environment.')
})

// path to public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// use index route
app.use('/', index)

module.exports = app;
