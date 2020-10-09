var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
    movie: String,
    day: String,
	image: String,
	description: String
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;