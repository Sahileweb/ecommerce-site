const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  countInStock: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);