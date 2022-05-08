require ('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
  try {
    // number of categories to render
    const limitNumber = 7;

    // locate Category from database
    const categories = await Category.find({}).limit(limitNumber);

    res.render("index", {title: 'Recipe Repo - Home', categories});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }
};

/**
 * GET /categories
 * Categories
 */

 exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;

    // locate Category from database
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", {title: 'Recipe Repo - Categories', categories});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }
};

// Dummy Data

// async function insertDummyCategoryData() {
//   try {
//     await Category.insertMany([
//   {
//     "name": "American",
//     "image": "food-american.jpg"
//   },
//   {
//     "name": "Chinese",
//     "image": "food-chinese.jpg"
//   },
//   {
//     "name": "French",
//     "image": "food-french.jpg"
//   },
//   {
//     "name": "Indian",
//     "image": "food-indian.jpg"
//   },
//   {
//     "name": "Italian",
//     "image": "food-italian.jpg"
//   },
//   {
//     "name": "Japanese",
//     "image": "food-japanese.jpg"
//   },
//   {
//     "name": "Mexican",
//     "image": "food-mexican.jpg"
//   },
//   {
//     "name": "Spanish",
//     "image": "food-spanish.jpg"
//   },
//   {
//     "name": "Vietnamese",
//     "image": "food-vietnamese.jpg"
//   },
// ]);
//   } catch(error) {
//     console.log('Error', + error);
//   }
// };

// insertDummyCategoryData();

async function insertDummyRecipeData(){
  try {
    await Recipe.insertMany([
      { 
        "name": "Waffles",
        "description": `Waffles`,
        "email": "user@email.com",
        "ingredients": [
          '2ggs',
          '2 cups all-purpose flour', 
          '1 3/4 cups milk',
          '1/2 cup vegetable oil',
          '1 tablespoon white sugar',
          '4 teaspoons baking powder',
          '1/4 teaspoon salt',
          '1/2 teaspoon vanilla extract'
        ],
        "category": "American", 
        "image": "waffles.jpg"
      },
      { 
        "name": "Dumplings",
        "description": `Recipe Description Goes Here`,
        "email": "user@email.com",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "Chinese", 
        "image": "dumplings.jpg"
      },
    ]);
  } catch(error) {
    console.log('Error', + error);
  }
};

// insertDummyRecipeData();