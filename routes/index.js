var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var Verse = mongoose.model('Verse', Verse);
var Source = mongoose.model('Source', Source);
var winston = require('winston');

router.get('/verse', function(req, res, next) {
    Verse.find({}).exec()
        .then(function(verse) {
            res.json(verse);
        })
        .catch(function(err) {
            winston.error([index.js] + "\t" + err);
        });
});

router.get('/verse/:id', function(req, res, next) {
    Verse.find({
            "id": req.params.id
        }).exec()
        .then(function(verse) {
            res.json(verse);
        })
        .catch(function(err) {
            winston.error('[index.js] \t' + err);
        })
})

router.get('/source', function(req, res, next) {
    Source.find({}).exec()
        .then(function(source) {
            res.json(source);
        })
        .catch(function(err) {
            winston.error([index.js] + "\t" + err);
        });
});

router.get('/source/:id', function(req, res, next) {
    Source.find({
            "id": req.params.id
        }).exec()
        .then(function(source) {
            res.json(source);
        })
        .catch(function(err) {
            winston.error([index.js] + "\t" + err);
        })
})

router.get('/:id', function(req, res, next) {
    Verse.find({
            "id": req.params.id
        }).exec()
        .then(function(verse) {
            // TODO: Remodell printedSources and writtenSources in both source and verse
            // TODO: Create ids in verse docs for the source sub-docs (e.g. 0000-BOOK-0000)
        })
        .catch(function(err) {
            winston.error('[index.js] \t' + err);
        })
});

module.exports = router;
