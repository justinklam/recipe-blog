const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required']
  },
  description: {
    type: String,
    required: [true, 'This field is required']
  },
  ingredients: {
    type: Array,
    required: [true, 'This field is required']
  },
  category: {
    // Array causes error
    type: String,
    enum: ['Chinese', 'French', 'Italian', 'Japanese', 'Mexican', 'Spanish', 'Vietnamese'],
    required: [true, 'This field is required']
  },
  image: {
    type: String,
    required: [true, 'This field is required']
  },
  email: {
    type: String,
    required: [true, 'This field is required']
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);