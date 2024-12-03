const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['parrure', 'collier', 'bracelet', 'bague', 'montre', 'boucle'],
    trim: true
  },
  images: [
    {
      url: {
        type: String,
        // required: true
      },
      alt: {
        type: String,
        trim: true
      }
    }
  ],
  dateAdded: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Product', productSchema);