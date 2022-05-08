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

    // locate latest recipes
    const latest = await Recipe.find({}).sort({_id: -1}).limit(5);

    // locate by category
    const american = await Recipe.find({ 'category': 'American'}).limit(limitNumber);
    const chinese = await Recipe.find({ 'category': 'Chinese'}).limit(limitNumber);
    const french = await Recipe.find({ 'category': 'French'}).limit(limitNumber);
    const indian = await Recipe.find({ 'category': 'Indian'}).limit(limitNumber);
    const japanese = await Recipe.find({ 'category': 'Japanese'}).limit(limitNumber);
    const mexican = await Recipe.find({ 'category': 'Mexican'}).limit(limitNumber);
    const spanish = await Recipe.find({ 'category': 'Spanish'}).limit(limitNumber);
    const vietnamese = await Recipe.find({ 'category': 'Vietnamese'}).limit(limitNumber);

    // passing latest query as a food object
    const food = { latest, american, chinese, french, indian, japanese, mexican, spanish, vietnamese };

    res.render("index", {title: 'Recipe Repo - Home', categories, food});
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

/**
 * GET /recipe/id
 * Recipe
 */

 exports.exploreRecipe = async (req, res) => {
  try {

    // to get the recipe id
    let recipeId = req.params.id;
    
    const recipe = await Recipe.findById(recipeId);

    res.render("recipe", {title: 'Recipe Repo - Recipe', recipe});
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
//     console.log('Category Insertion Error', + error);
//   }
// };

// insertDummyCategoryData();

// async function insertDummyRecipeData(){
//   try {
//     await Recipe.insertMany([
//       { 
//         "name": "Waffles",
//         "description": `Waffles`,
//         "ingredients": [
//           '2 eggs',
//           '2 cups all-purpose flour', 
//           '1 3/4 cups milk',
//           '1/2 cup vegetable oil',
//           '1 tablespoon white sugar',
//           '4 teaspoons baking powder',
//           '1/4 teaspoon salt',
//           '1/2 teaspoon vanilla extract'
//         ],
//         "directions": 
//           ['Preheat waffle iron. Beat eggs in large bowl with hand beater until fluffy. Beat in flour, milk, vegetable oil, sugar, baking powder, salt and vanilla, just until smooth.',
//           'Spray preheated waffle iron with non-stick cooking spray. Pour mix onto hot waffle iron. Cook until golden brown. Serve hot.'
//           ],
//         "category": "American",
//         "image": "waffles.jpg",
//         "email": "user@email.com"
//       },
//       { 
//         "name": "Pork Dumpling",
//         "description": `Chinese Pork Dumplings`,
//         "ingredients": [
//           '1/2 cup soy sauce',
//           '1 tablespoon seasoned rice vinegar',
//           '1 tablespoon finely chopped Chinese chives',
//           '1 tablespoon sesame seeds',
//           '1 teaspoon chile-garlic sauce (such as Sriracha®)',
//           '1 pound ground pork',
//           '3 cloves garlic, minced',
//           '1 large egg, beaten',
//           '2 tablespoons finely chopped Chinese chives',
//           '2 tablespoons soy sauce',
//           '1 1/2 tablespoons sesame oil',
//           '1 tablespoon minced fresh ginger',
//           '50 dumpling wrappers',
//           '1 cup vegetable oil for frying',
//           '1 quart water, or more as needed'
//         ],
//         "directions": 
//           ['Combine 1/2 cup soy sauce, rice vinegar, 1 tablespoon chives, sesame seeds, and chile sauce in a small bowl. Set aside.',
//           'Mix pork, garlic, egg, 2 tablespoons chives, soy sauce, sesame oil, and ginger in a large bowl until thoroughly combined. Place a dumpling wrapper on a lightly floured work surface and spoon about 1 tablespoon of the filling in the middle. Wet the edge with a little water and crimp together forming small pleats to seal the dumpling. Repeat with remaining dumpling wrappers and filling.',
//           'Heat 1 to 2 tablespoons vegetable oil in a large skillet over medium-high heat. Place 8 to 10 dumplings in the pan and cook until browned, about 2 minutes per side. Pour in 1 cup of water, cover and cook until the dumplings are tender and the pork is cooked through, about 5 minutes. Repeat for remaining dumplings. Serve with soy sauce mixture for dipping.'
//           ],
//         "category": "Chinese",
//         "image": "pork-dumplings.jpg",
//         "email": "user@email.com"
//       },
//       { 
//         "name": "Strawberry Crepes",
//         "description": `Strawberry Crepes`,
//         "ingredients": [
//           '3 eggs',
//           '1/2 cup milk',
//           '1/2 cup water',
//           '3 tablespoons butter, melted',
//           '3/4 cup all-purpose flour',
//           '1/2 teaspoon salt',
//           '1 (8 ounce) package cream cheese, softened',
//           '1 1/4 cups sifted confectioners sugar',
//           '1 tablespoon lemon juice',
//           '1 teaspoon lemon zest',
//           '1/2 teaspoon vanilla extract',
//           '1 cup heavy cream, whipped',
//           '4 cups sliced strawberries'
//         ],
//         "directions": 
//           ['Place the eggs, milk, water, melted butter, flour, and salt in the pitcher of a blender; blend until smooth.',
//           'Blend the cream cheese, confectioners sugar, lemon juice, lemon zest, and vanilla with an electric mixer until smooth. Gently fold in the whipped cream.',
//           'Heat a lightly oiled griddle or non-stick skillet over medium heat. Pour or scoop the batter onto the griddle, using approximately 2 tablespoons for each crepe. Tip and rotate pan to spread batter as thinly as possible. Flip over when the batter is set and the edges are beginning to brown. Cook until the other side begins to brown. Stack finished crepes on a plate, cover with a damp towel and set aside.',
//           'To serve, fill each crepe with 1/4 cup sliced strawberries and 1/3 cup of the cream cheese filling, roll up and top with a small dollop of the cream cheese filling and more sliced strawberries.'
//           ],
//         "category": "French",
//         "image": "strawberry-crepe.jpg",
//         "email": "user@email.com"
//       },
//       { 
//         "name": "Beef Tacos",
//         "description": `Beef Tacos`,
//         "ingredients": [
//           '1 1/2 pounds flank steak',
//           'Juice of 2 large limes',
//           'Zest of 1 large lime',
//           '2 teaspoons kosher salt',
//           '1/2 teaspoon black pepper',
//           '1 teaspoon granulated sugar',
//           '1/2 teaspoon chili powder',
//           '1/2 teaspoon cumin',
//           '1/2 teaspoon paprika ',
//           '1/2 teaspoon garlic powder',
//           '1/2 teaspoon dried oregano  ',
//           '1/8 teaspoon ground cinnamon ',
//           'Olive oil for grill',
//           'Corn tortillas',
//           '1/2 small red onion chopped',
//           '1 large avocado sliced',
//           '1/3 cup queso fresco',
//           'Chopped cilantro for serving',
//           'Lime wedges for serving'
//         ],
//         "directions": 
//           ['Place the flank steak in a 9x13 pan. Pour lime juice over the steak and let marinate for 30 minutes, at room temperature.',
//           'Meanwhile, in a small bowl, combine lime zest, salt, sugar, pepper, chili powder, cumin, paprika, garlic powder, oregano, and cinnamon.',
//           'Rub both sides of the steak with the spice mixture, pressing with your fingers to help the rub adhere to the meat.',
//           'Preheat grill to high heat. Lightly coat a paper towel with oil and, holding it with long tongs, carefully rub the oiled towel over the grill rack. Place steak directly on the grill and cook for 5 minutes on each side. Remove from grill and let the steak rest on a cutting board, covered with foil, for 10 minutes.',
//           'While the steak is resting, warm the corn tortillas on the grill or use a gas flame to char them slightly.',
//           'Cut the steak into strips, against the grain. Place steak strips in the corn tortillas and top with red onion, avocado, cilantro, and queso fresco. Squeeze with lime juice, if desired. Serve warm.'
//           ],
//         "category": "Mexican",
//         "image": "tacos-beef.jpg",
//         "email": "user@email.com"
//       },
//       { 
//         "name": "Fresh Rolls with Shrimp",
//         "description": `Fresh Rolls with Shrimp`,
//         "ingredients": [
//           '2 ounces rice vermicelli',
//           '8 rice wrappers (8.5 inch diameter)',
//           '8 large cooked shrimp - peeled, deveined and cut in half',
//           '1 1/3 tablespoons chopped fresh Thai basil',
//           '3 tablespoons chopped fresh mint leaves',
//           '3 tablespoons chopped fresh cilantro',
//           '2 leaves lettuce, chopped',
//           '4 teaspoons fish sauce',
//           '1/4 cup water',
//           '2 tablespoons fresh lime juice',
//           '1 clove garlic, minced',
//           '2 tablespoons white sugar',
//           '1/2 teaspoon garlic chili sauce',
//           '3 tablespoons hoisin sauce',
//           '1 teaspoon finely chopped peanuts'
//         ],
//         "directions": 
//           ['Bring a medium saucepan of water to boil. Boil rice vermicelli 3 to 5 minutes, or until al dente, and drain.',
//           'Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften. Lay wrapper flat. In a row across the center, place 2 shrimp halves, a handful of vermicelli, basil, mint, cilantro and lettuce, leaving about 2 inches uncovered on each side. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce. Repeat with remaining ingredients.',
//           'In a small bowl, mix the fish sauce, water, lime juice, garlic, sugar and chili sauce.',
//           'In another small bowl, mix the hoisin sauce and peanuts.',
//           'Serve rolled spring rolls with the fish sauce and hoisin sauce mixtures.'
//           ],
//         "category": "Vietnamese",
//         "image": "spring-rolls-shrimp.jpg",
//         "email": "user@email.com"
//       },
//     ]);
//   } catch(error) {
//     console.log('Recipe Insert Error', + error);
//   }
// };

// insertDummyRecipeData();