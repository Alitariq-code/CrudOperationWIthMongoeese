const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'name required.'],
  },
  price: {
    type: Number,
    unique: true,
    required: [true, 'price required.'],
  },
  ratings: {
    type: Number,
    default: 4.5,
  },
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
