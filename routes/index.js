var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
        res.send("2 files");
});

module.exports = router
