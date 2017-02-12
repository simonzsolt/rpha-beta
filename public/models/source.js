var config = require('config');
var mongoose = require('mongoose');
var winston = require('winston');

// use own promise
mongoose.Promise = require('bluebird');
// DB connection
// var MONGO_DB_URI = config.get('MONGO_DB_URI');
// mongoose.connect(MONGO_DB_URI);
// var db = mongoose.connection;
// // on connection error
// db.on('error', winston.error.bind(winston, 'connection error:'));
// db.once('open', function() {
//     winston.info('[source.js] Connected correctly to mongodb server.');
// });

var Schema = mongoose.Schema;
var sourceSchema = new Schema({
    "id": String,
    "source": {
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
        "value": String,
        "type": String
    },
    "recordType": String,
    "lengthUnit": String,
    "integrity": String,
    "length": String
}, {
    collection: 'source'
});

var Source = mongoose.model('Source', sourceSchema);
module.exports = {
    Source: Source
}
