const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  count: { type: Number },
  price: { type: Number },
  inStock: { type: Number }
});

module.exports = mongoose.model('Product', ProductSchema);
