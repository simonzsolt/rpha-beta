var compression = require('compression');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
var path = require('path');
var config = require('config');
var winston = require('winston');
var arangojs = require('arangojs');


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


// routes
var index = require('./routes/index');

// for performance
app.use(compression())

// DB connection
// Using a complex connection string with authentication
var dbHost = process.env.ARANGODB_HOST;
var dbPort = process.env.ARANGODB_PORT;
var dbName = process.env.ARANGODB_DB;
var dbUser = process.env.ARANGODB_USERNAME;
var dbPass = process.env.ARANGODB_PASSWORD;
var db = arangojs({
  url: `http://${username}:${password}@${host}:${port}`,
  databaseName: database
});

// server connection config
var port = config.get('port') || 3000;
var host = config.get('host') || 'localhost';

app.listen(port, function() {
    winston.info('[server.js] Example app listening on "http://' + host + ':' + port +
    '",\n\t\t\t\t\t        in ' + process.env.NODE_ENV +  ' environment.')
})

// path to public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// use index route
app.use('/', index)

module.exports = app;
