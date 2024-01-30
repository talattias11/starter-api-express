const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	price: Number,
}, {
	toJSON: {
		virtuals: true,
		versionKey: false,
		transform: function (doc, ret) {
			ret.id = ret._id; // Rename '_id' to 'id'
			delete ret._id; // Remove the '_id' property
		}
	}
});

module.exports = mongoose.model('product', productSchema);