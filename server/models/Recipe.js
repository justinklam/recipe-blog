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
  directions: {
    type: Array,
    required: [true, 'This field is required']
  },
  category: {
    // Array causes error
    type: String,
    enum: ['American', 'Chinese', 'French', 'Indian', 'Italian', 'Japanese', 'Mexican', 'Spanish', 'Vietnamese'],
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

// index the name/description for the search query
recipeSchema.index({name: 'text', description: 'text'});
// WildCard Indexing - to search the entire recipe
// recipeSchema.index({"$**": 'text'});

module.exports = mongoose.model('Recipe', recipeSchema);