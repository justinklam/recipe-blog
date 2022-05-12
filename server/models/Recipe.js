const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  ingredients: {
    type: Array,
    required: [true, 'Ingredients is required']
  },
  directions: {
    type: Array,
    required: [true, 'Directions is required']
  },
  category: {
    // Array causes error
    type: String,
    enum: ['American', 'Chinese', 'French', 'Indian', 'Italian', 'Japanese', 'Mexican', 'Spanish', 'Vietnamese'],
    required: [true, 'Category is required']
  },
  image: {
    type: String,
    required: [true, 'Image is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
});

// index the name/description for the search query
recipeSchema.index({name: 'text', description: 'text'});
// WildCard Indexing - to search the entire recipe
// recipeSchema.index({"$**": 'text'});

module.exports = mongoose.model('Recipe', recipeSchema);