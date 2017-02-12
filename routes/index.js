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
.get(function(req, res){
	collVerse.byExample( { 'id' : req.params.id } )
	.then( verse => {
		res.json(verse._result)
	}, err => winston.error(err.stack) );
});

// get source by ID
router.route('/source/:id')
.get(function(req, res){
	collSource.byExample( { 'id' : req.params.id } )
	.then( source => {
		res.json(source._result)
	}, err => winston.error(err.stack) );
});

// get verse and sources form 'RPHA' graph by verse ID
router.route('/:id')
.get(function(req, res) {

	collVerse.byExample( { 'id' : req.params.id } )
	.then( verse => {
		//res.json(verse._result[0]._id);

		graphRPHA.traversal(  verse._result[0]._id, {direction: 'any'}  )
		.then(graph => {
			res.json(graph)
		}, err => winston.error(err.stack) );

	}, err => winston.error(err.stack) );
})

module.exports = router;
