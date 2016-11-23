var mongoose = require('mongoose');


var EventSchema = new mongoose.Schema({
	"name": String,
	"pic_url": String,
	"description": String,
	"create_at": { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);