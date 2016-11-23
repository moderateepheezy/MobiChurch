var mongoose = require('mongoose');


var ChurchSchema = new mongoose.Schema({
	"name": String,
	"abbreviation": String,
	"about": String,
	"create_at": { type: Date, default: Date.now },
});

module.exports = mongoose.model('Church', ChurchSchema);