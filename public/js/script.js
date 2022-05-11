let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

let addDirectionsBtn = document.getElementById('addDirectionsBtn');
let directionList = document.querySelector('.directionList');
let directionDiv = document.querySelectorAll('.directionDiv')[0];

// on click event listener
addIngredientsBtn.addEventListener('click', function(){
  // clones the node
  let newIngredients = ingredientDiv.cloneNode(true);
  // gets the first input
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});

// on click event listener
addDirectionsBtn.addEventListener('click', function(){
  // clones the node
  let newDirections = directionDiv.cloneNode(true);
  // gets the first input
  let input = newDirections.getElementsByTagName('textarea')[0];
  input.value = '';
  directionList.appendChild(newDirections);
});