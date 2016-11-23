var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	"user_name": String,
	"msisdn": String,
	"create_at": { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);