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

    // passing on the query results-categories into the render below
    res.render("categories", {title: 'Recipe Repo - Categories', categories});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }
};

/**
 * GET /categories/:id
 * Categories by ID
 */

exports.exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;

    const limitNumber = 20;

    // locate recipes by category from database
    const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);

    res.render("categories", {title: 'Recipe Repo - Categories', categoryById});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }
};

/**
 * GET /explore-latest
 * Explore Latest
 */

exports.exploreLatest = async (req, res) => {
  try {
    const limitNumber = 20;
    // locate latest recipes
    const recipe = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);

    res.render("explore-latest", {title: 'Recipe Repo - Explore Latest', recipe});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }
};

/**
 * GET /explore-random
 * Explore Random
 */

exports.exploreRandom = async (req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    // query for one receipe, skip to the random number generated above
    let recipe = await Recipe.findOne().skip(random).exec();

    res.render("explore-random", {title: 'Recipe Repo - Explore Random', recipe});
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
    // query through id
    const recipe = await Recipe.findById(recipeId);

    res.render("recipe", {title: 'Recipe Repo - Recipe', recipe});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }
};

/**
 * GET /submit-recipe
 * Submit Recipe
 */

exports.submitRecipe = async (req, res) => {
  // this will hold all the error messages we display to the user
  const infoErrorsObj = req.flash('infoErrors');
  // on success message
  const infoSubmitObj = req.flash('infoSubmit');

  res.render("submit-recipe", {title: 'Recipe Repo - Submit Recipe', infoErrorsObj, infoSubmitObj});
};

/**
 * POST /submit-recipe
 * SubmitRecipe
 */

exports.submitRecipeOnPost = async (req, res) => {
  try {

    // express file uploader
    let imageUploadFile;
    let uploadPath;
    let newImageName;
    
    // if upload file does not exist
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log('No files were uploaded');
    } else {
      imageUploadFile = req.files.image;
      // set name to date
      newImageName = Date.now() + imageUploadFile.name;
      uploadPath = require('path').resolve('./') + '/public/uploads' + newImageName;
      imageUploadFile.mv(uploadPath, function(err) {
        if(err) return res.status(500).send(error);
      })
    }

    const newRecipe = new Recipe({
      // using the name from the field in submit-recipe
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      directions: req.body.direction,
      category: req.body.category,
      image: newImageName,
      email: req.body.email,
    });

    // saves to database
    await newRecipe.save();

    req.flash('infoSubmit', 'Recipe has been added!')
    res.redirect('/submit-recipe');
  } catch (error) {
    req.flash('infoErrors', error)
    res.redirect('/submit-recipe');
  }

};

/**
 * POST /search
 * Search
 */

exports.searchRecipe = async (req, res) => {
  try {
    // req.body coming from the search form
    let searchTerm = req.body.searchTerm;

    // $text text search with text index
    // $search MongoDB parses and uses to query the text index
    let recipe = await Recipe.find(
      { $text: { 
        $search: searchTerm, 
        $diacriticSensitive: true
      }});

    res.render("search", {title: 'Recipe Repo - Search', recipe});
  } catch(error) {
    res.status(500).send({message: error.message || 'Error Occured'});
  }

};
