var arangojs = require('arangojs');
var winston = require('winston');

// DB connection

var db_host = process.env.ARANGODB_HOST;
var db_port = process.env.ARANGODB_PORT;
var db_name = process.env.ARANGODB_DB;
var db_user = process.env.ARANGODB_USERNAME;
var db_pass = process.env.ARANGODB_PASSWORD;

var db = arangojs({
	url: `http://${db_user}:${db_pass}@${db_host}:${db_port}`,
	databaseName: db_name
});

var collVerse = db.collection('verse');
var collSource = db.collection('source');
var collHasSource = db.collection('hasSource');

module.exports = db;
