var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/Users.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	User.find(function (err, users){
		if (err) return next(err);
		res.json(users);
	});
});

/*POST create user*/
router.post('/create', function(req, res, next){
	User.create(req.body, function(err, user){
		if(err) return next(err);
		res.json(user);
	});
});

/*Get get User by id*/
router.get('/retrive/:id', function(req, res, next) {
	User.findById(req.params.id, function(err, user) {
		if (err) return next(err);
		res.json(user);
	});
});



module.exports = router;
