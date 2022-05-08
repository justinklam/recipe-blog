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
        "directions": 
          ['Preheat waffle iron. Beat eggs in large bowl with hand beater until fluffy. Beat in flour, milk, vegetable oil, sugar, baking powder, salt and vanilla, just until smooth.',
          'Spray preheated waffle iron with non-stick cooking spray. Pour mix onto hot waffle iron. Cook until golden brown. Serve hot.'
          ],
        "category": "American",
        "image": "waffles.jpg"
      },
      { 
        "name": "Pork Dumpling",
        "description": `Chinese Pork Dumplings`,
        "email": "user@email.com",
        "ingredients": [
          '½ cup soy sauce',
          '1 tablespoon seasoned rice vinegar',
          '1 tablespoon finely chopped Chinese chives',
          '1 tablespoon sesame seeds',
          '1 teaspoon chile-garlic sauce (such as Sriracha®)',
          '1 pound ground pork',
          '3 cloves garlic, minced',
          '1 large egg, beaten',
          '2 tablespoons finely chopped Chinese chives',
          '2 tablespoons soy sauce',
          '1 ½ tablespoons sesame oil',
          '1 tablespoon minced fresh ginger',
          '50 dumpling wrappers',
          '1 cup vegetable oil for frying',
          '1 quart water, or more as needed'
        ],
        "directions": 
          ['Combine 1/2 cup soy sauce, rice vinegar, 1 tablespoon chives, sesame seeds, and chile sauce in a small bowl. Set aside.',
          'Mix pork, garlic, egg, 2 tablespoons chives, soy sauce, sesame oil, and ginger in a large bowl until thoroughly combined. Place a dumpling wrapper on a lightly floured work surface and spoon about 1 tablespoon of the filling in the middle. Wet the edge with a little water and crimp together forming small pleats to seal the dumpling. Repeat with remaining dumpling wrappers and filling.',
          'Heat 1 to 2 tablespoons vegetable oil in a large skillet over medium-high heat. Place 8 to 10 dumplings in the pan and cook until browned, about 2 minutes per side. Pour in 1 cup of water, cover and cook until the dumplings are tender and the pork is cooked through, about 5 minutes. Repeat for remaining dumplings. Serve with soy sauce mixture for dipping.'
          ],
        "category": "Chinese",
        "image": "pork-dumplings.jpg"
      },
    ]);
  } catch(error) {
    console.log('Error', + error);
  }
};

// insertDummyRecipeData();