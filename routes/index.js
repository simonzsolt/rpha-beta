var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var Verse = mongoose.model('Verse', Verse);
var Source = mongoose.model('Source', Source);
var winston = require('winston');

router.get('/', function(req, res) {
    res.render('./views/index.html', function(err, html) {
        res.send(html)
    })
});

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
});

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
});

router.get('/:id', function(req, res, next) {
    Verse.aggregate([
        {
            $match: { "id":req.params.id }
        },
        { $unwind: "$source" },
        {
            $lookup:{
                from: "source",
                localField: "source.bookId",
                foreignField: "id",
                as: "books"
            }
        }
    ]).exec()
    .then(function(total) {
        res.json(total);
    })
    .catch(next);
});

app.use(function (err, req, res, next) {
    winston.error('[index.js] \t' + err);
})

module.exports = router;
