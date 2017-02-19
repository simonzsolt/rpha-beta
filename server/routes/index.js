var express = require('express');
var app = express();
var path = require('path');
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

// get all verse
router.route('/api/verse')
	.get(function(req, res, next) {
		collVerse.all()
			.then(cursor => {
				if (cursor.count > 0) {
					cursor.all().then( val => res.json(val) )
				} else {
					res.sendStatus(400)
				};
			}, err => winston.error(err.stack));
	});

// get a verse at random (for testing)
router.route('/api/verse/any')
	.get(function(req, res, next) {
		collVerse.any()
			.then(verse => {
					res.json(verse);
			}, err => winston.error(err.stack));
	});

// get verse by ID
router.route('/api/verse/:id')
	.get(function(req, res, next) {
		collVerse.byExample({
				'id': req.params.id
			})
			.then(verse => {
				if (verse.count > 0) {
					res.json(verse._result[0])
				} else {
					res.sendStatus(400)
				};
			}, err => winston.error(err.stack));
	});

// get source by ID
router.route('/api/source/:id')
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
router.route('/api/r/:id')
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
		// res.sendFile(path.join(__dirname+'/../../src/index.html'));
		// res.send(404);
		res.redirect('back')
	});

module.exports = router;
