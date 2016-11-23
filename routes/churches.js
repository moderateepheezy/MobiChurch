var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Church = require('../models/Church.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	Church.find(function (err, churches){
		if (err) return next(err);
		res.json(churches);
	});
});

/*POST create user*/
router.post('/create', function(req, res, next){
	Church.create(req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

/*Get get Church by id*/
router.get('/retrive/:id', function(req, res, next) {
	Church.findById(req.params.id, function(err, church) {
		if (err) return next(err);
		res.json(church);
	});
});



module.exports = router;