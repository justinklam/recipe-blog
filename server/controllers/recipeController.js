require ('../models/database');
const Category = require('../models/Category')

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

// async function insertDummyCategoryData() {
//   try {
//     await Category.insertMany([
//   {
//     "name": "Chinese",
//     "image": "food-chinese.jpg"
//   },
//   {
//     "name": "French",
//     "image": "food-french.jpg"
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
//     "name": "Vietnamnese",
//     "image": "food-vietnamnese.jpg"
//   },
// ]);
//   } catch(error) {
//     console.log('Error', + error);
//   }
// };

// insertDummyCategoryData();