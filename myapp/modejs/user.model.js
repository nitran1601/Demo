var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
	password: String,
	day: String,
	avatar: String,
	movie: String
});
var User = mongoose.model('User', userSchema, 'users');

module.exports = User;