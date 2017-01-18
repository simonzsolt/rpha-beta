var config = require('config');
var mongoose = require('mongoose');
var winston = require('winston');

// use own promise
mongoose.Promise = require('bluebird');



var Schema = mongoose.Schema;
var verseSchema = new Schema({

    "acrosticState": String,
    "author": [{
        "surname": String,
        "forename": String,
        "note": String
    }],
    "colophonState": String,
    "date": [String],
    "datePrecision": String,
    "denomination": {
        "catholic": Number,
        "protestant": Number,
        "reformed": Number,
        "evangelical": Number,
        "sabbatarian": Number,
        "unitarian": Number,
        "muslim": Number,
        "secular": Number,
        "without": Number
    },
    "genre": [String],
    "id": String,
    "incipit": String,
    "integrity": Number,
    "length": [Number],
    "lengthUnit": String,
    "metreSchema": [String],
    "metreType": String,
    "modernEd": [String],
    "printedSources": [{
        "bookId": String,
        "docBibNum": String,
        "docType": String,
        "itemId": String,
        "itemMainId": String,
        "itemSubId": String,
        "itemSubNote": String,
        "page": String,
        "pageSubId": String,
        "pageSubNote": String,
        "sourceTypeCode": String,
        "value": String
    }],
    "recordType": String,
    "rhymeScheme": String,
    "signature": String,
    "song": String,
    "syllNum": String,
    "title": [String],
    "tradition": String
}, {
    collection: 'verse'
});

var Verse = mongoose.model('Verse', verseSchema);
module.exports = {
    Verse: Verse
}
