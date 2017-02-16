var express = require('express');
var app = express();
var router = express.Router();
var winston = require('winston');
var arangojs = require('arangojs');
var db = require('../public/dbConnection.js');
var collVerse = db.collection('verse');
var collSource = db.collection('source');
var collHasSource = db.collection('hasSource');
var graphRPHA = db.graph('RPHA');

//winston.info(db);
/*
collVerse.properties()
.then( data => {
winston.info(data)
}, err => winston.error(err.stack)
);
*/

// get verse by ID
router.route('/verse/:id')
	.get(function(req, res, next) {
		collVerse.byExample({
				'id': req.params.id
			})
			.then(verse => {
				if (verse.count > 0) {
					res.json(verse._result)
				} else {
					res.sendStatus(400)
				};
			}, err => winston.error(err.stack));
	});

// get source by ID
router.route('/source/:id')
	.get(function(req, res, next) {
		collSource.byExample({
				'id': req.params.id
			})
			.then(source => {
				if (source.count > 0) {
					res.json(source._result)
				} else {
					res.sendStatus(400)
				};
			}, err => winston.error(err.stack));
	});

// get verse and sources form 'RPHA' graph by verse ID
router.route('/r/:id')
	.get(function(req, res, next) {

		collVerse.byExample({
				'id': req.params.id
			})
			.then(verse => {

				if (verse.count > 0) {
					graphRPHA.traversal(verse._result[0]._id, {
							direction: 'any'
						})
						.then(graph => {
							res.json(graph)
						}, err => winston.error(err.stack));
				} else {
					res.sendStatus(400)
				};



			}, err => winston.error(err.stack));
	});

router.route('/*')
	.get(function(req, res, next) {
		res.send('../src/index.html');
	});

module.exports = router;
