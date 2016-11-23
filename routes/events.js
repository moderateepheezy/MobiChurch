var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Event = require('../models/Event.js');


/* GET events listing. */
router.get('/', function(req, res, next) {
	Event.find(function (err, events){
		if (err) return next(err);
		res.json(events);
	});
});

/*POST create event*/
router.post('/create', function(req, res, next){
	Event.create(req.body, function(err, event){
		if(err) return next(err);
		res.json(event);
	});
});

/*Get get Event by id*/
router.get('/retrieve/:id', function(req, res, next) {
	Event.findById(req.params.id, function(err, event) {
		if (err) return next(err);
		res.json(event);
	});
});



module.exports = router;