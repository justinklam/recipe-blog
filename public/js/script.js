let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

// on click event listener
addIngredientsBtn.addEventListener('click', function(){
  // clones the node
  let newIngredients = ingredientDiv.cloneNode(true);
  // gets the first input
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});