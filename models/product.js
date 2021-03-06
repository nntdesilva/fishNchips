const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	item: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
