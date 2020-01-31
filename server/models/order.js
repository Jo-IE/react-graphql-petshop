const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      count: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  date: { type: Date, required: true, default: Date.now() },
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Order', OrderSchema);
