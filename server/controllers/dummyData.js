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

async function insertDummyRecipeData(){
  try {
    await Recipe.insertMany([
      { 
        "name": "Waffles",
        "description": `Waffles.
        From: https://www.allrecipes.com/recipe/22180/waffles-i/`,
        "ingredients": [
          '2 eggs',
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
        "image": "waffles.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Pork Dumpling",
        "description": `Chinese Pork Dumplings
        From: https://www.allrecipes.com/recipe/228052/chinese-pork-dumplings/`,
        "ingredients": [
          '1/2 cup soy sauce',
          '1 tablespoon seasoned rice vinegar',
          '1 tablespoon finely chopped Chinese chives',
          '1 tablespoon sesame seeds',
          '1 teaspoon chile-garlic sauce (such as Sriracha®)',
          '1 pound ground pork',
          '3 cloves garlic, minced',
          '1 large egg, beaten',
          '2 tablespoons finely chopped Chinese chives',
          '2 tablespoons soy sauce',
          '1 1/2 tablespoons sesame oil',
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
        "image": "pork-dumplings.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Strawberry Crepes",
        "description": `Strawberry Crepes.
        From: https://www.allrecipes.com/recipe/143886/creamy-strawberry-crepes/`,
        "ingredients": [
          '3 eggs',
          '1/2 cup milk',
          '1/2 cup water',
          '3 tablespoons butter, melted',
          '3/4 cup all-purpose flour',
          '1/2 teaspoon salt',
          '1 (8 ounce) package cream cheese, softened',
          '1 1/4 cups sifted confectioners sugar',
          '1 tablespoon lemon juice',
          '1 teaspoon lemon zest',
          '1/2 teaspoon vanilla extract',
          '1 cup heavy cream, whipped',
          '4 cups sliced strawberries'
        ],
        "directions": 
          ['Place the eggs, milk, water, melted butter, flour, and salt in the pitcher of a blender; blend until smooth.',
          'Blend the cream cheese, confectioners sugar, lemon juice, lemon zest, and vanilla with an electric mixer until smooth. Gently fold in the whipped cream.',
          'Heat a lightly oiled griddle or non-stick skillet over medium heat. Pour or scoop the batter onto the griddle, using approximately 2 tablespoons for each crepe. Tip and rotate pan to spread batter as thinly as possible. Flip over when the batter is set and the edges are beginning to brown. Cook until the other side begins to brown. Stack finished crepes on a plate, cover with a damp towel and set aside.',
          'To serve, fill each crepe with 1/4 cup sliced strawberries and 1/3 cup of the cream cheese filling, roll up and top with a small dollop of the cream cheese filling and more sliced strawberries.'
          ],
        "category": "French",
        "image": "strawberry-crepe.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Beef Tacos",
        "description": `Beef Tacos.
        From: https://www.twopeasandtheirpod.com/grilled-steak-tacos/`,
        "ingredients": [
          '1 1/2 pounds flank steak',
          'Juice of 2 large limes',
          'Zest of 1 large lime',
          '2 teaspoons kosher salt',
          '1/2 teaspoon black pepper',
          '1 teaspoon granulated sugar',
          '1/2 teaspoon chili powder',
          '1/2 teaspoon cumin',
          '1/2 teaspoon paprika ',
          '1/2 teaspoon garlic powder',
          '1/2 teaspoon dried oregano  ',
          '1/8 teaspoon ground cinnamon ',
          'Olive oil for grill',
          'Corn tortillas',
          '1/2 small red onion chopped',
          '1 large avocado sliced',
          '1/3 cup queso fresco',
          'Chopped cilantro for serving',
          'Lime wedges for serving'
        ],
        "directions": 
          ['Place the flank steak in a 9x13 pan. Pour lime juice over the steak and let marinate for 30 minutes, at room temperature.',
          'Meanwhile, in a small bowl, combine lime zest, salt, sugar, pepper, chili powder, cumin, paprika, garlic powder, oregano, and cinnamon.',
          'Rub both sides of the steak with the spice mixture, pressing with your fingers to help the rub adhere to the meat.',
          'Preheat grill to high heat. Lightly coat a paper towel with oil and, holding it with long tongs, carefully rub the oiled towel over the grill rack. Place steak directly on the grill and cook for 5 minutes on each side. Remove from grill and let the steak rest on a cutting board, covered with foil, for 10 minutes.',
          'While the steak is resting, warm the corn tortillas on the grill or use a gas flame to char them slightly.',
          'Cut the steak into strips, against the grain. Place steak strips in the corn tortillas and top with red onion, avocado, cilantro, and queso fresco. Squeeze with lime juice, if desired. Serve warm.'
          ],
        "category": "Mexican",
        "image": "tacos-beef.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Bolognese",
        "description": `Easy and delicious chicken recipe that goes well with rice. 
        From: https://www.allrecipes.com/recipe/235273/how-to-make-bolognese-sauce/`,
        "ingredients": [
          '2 tablespoons butter',
          '1 tablespoon olive oil',
          '1 cup finely diced onion',
          '1/2 cup finely diced celery',
          '1/2 cup finely diced carrot',
          '1 pinch salt',
          '1 1/2 pounds ground beef',
          'salt',
          'freshly ground black pepper to taste',
          '1 pinch cayenne pepper, or to taste',
          '1/8 teaspoon ground nutmeg',
          '1 1/2 cups 2% milk',
          '2 cups white wine',
          '1 (28 ounce) can whole Italian plum tomatoes (preferably San Marzano)',
          '2 cups water, or as needed'
        ],
        "directions": 
          ['Melt butter with olive oil in a large saucepan over medium heat; cook onion, celery, and carrot with pinch of salt until onion turns translucent, about 5 minutes. Stir ground beef into vegetables and cook, stirring constantly until meat is crumbly and no longer pink, about 5 minutes. Season meat mixture with 1 1/2 teaspoon salt, black pepper, cayenne pepper, and nutmeg.',
          'Pour milk into ground beef mixture and bring to a simmer. Cook, stirring often, until most of the milk has evaporated and bottom of pan is still slightly saucy, about 5 minutes.',
          'Raise heat to medium high and pour white wine into ground beef mixture; cook and stir until white wine has mostly evaporated, about 5 more minutes.',
          'Pour tomatoes with juice into a large mixing bowl and crush them with your fingers until they resemble a slightly chunky sauce. Pour tomatoes into sauce; fill can with 2 cups water and add to sauce. Bring to a simmer.',
          'Reduce heat to low and simmer, stirring often, until mixture cooks down into a thick sauce, at least 3 hours but preferably 4 to 6 hours. Skim fat from top of sauce if desired. If sauce is too thick or too hot on the bottom, add a little more water. Taste and adjust seasonings before serving.'
          ],
        "category": "Italian",
        "image": "bolognese.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Curried Chicken",
        "description": `Easy and delicious chicken recipe that goes well with rice. 
        From: https://www.allrecipes.com/recipe/216795/curried-chicken/`,
        "ingredients": [
          '2 9-inch unbaked pie crusts',
          '1 1/4 cups white sugar',
          '1/3 cup all-purpose flour',
          '1/3 teaspoon ground cinnamon',
          '4 cups fresh strawberries',
          '2 tablespoons butter'
        ],
        "directions": 
          ['Preheat oven to 425 degrees F (220 degrees C). Place one crust in a nine inch pie pan.',
          'Mix together sugar, flour, and cinnamon. Mix lightly through the berries. Pour filling into pastry lined pan, and dot fruit with butter or margarine. Cover with top crust, and cut slits in the top. Seal and flute the edges.',
          'Bake for 35 to 45 minutes, or until the crust is slightly browned.',
          ],
        "category": "Indian",
        "image": "curry-chicken.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Fresh Rolls with Shrimp",
        "description": `Fresh Rolls with Shrimp.
        From: https://www.allrecipes.com/recipe/24239/vietnamese-fresh-spring-rolls/`,
        "ingredients": [
          '2 ounces rice vermicelli',
          '8 rice wrappers (8.5 inch diameter)',
          '8 large cooked shrimp - peeled, deveined and cut in half',
          '1 1/3 tablespoons chopped fresh Thai basil',
          '3 tablespoons chopped fresh mint leaves',
          '3 tablespoons chopped fresh cilantro',
          '2 leaves lettuce, chopped',
          '4 teaspoons fish sauce',
          '1/4 cup water',
          '2 tablespoons fresh lime juice',
          '1 clove garlic, minced',
          '2 tablespoons white sugar',
          '1/2 teaspoon garlic chili sauce',
          '3 tablespoons hoisin sauce',
          '1 teaspoon finely chopped peanuts'
        ],
        "directions": 
          ['Bring a medium saucepan of water to boil. Boil rice vermicelli 3 to 5 minutes, or until al dente, and drain.',
          'Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften. Lay wrapper flat. In a row across the center, place 2 shrimp halves, a handful of vermicelli, basil, mint, cilantro and lettuce, leaving about 2 inches uncovered on each side. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce. Repeat with remaining ingredients.',
          'In a small bowl, mix the fish sauce, water, lime juice, garlic, sugar and chili sauce.',
          'In another small bowl, mix the hoisin sauce and peanuts.',
          'Serve rolled spring rolls with the fish sauce and hoisin sauce mixtures.'
          ],
        "category": "Vietnamese",
        "image": "spring-rolls-shrimp.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Chicken Pot Pie",
        "description": `Easy chicken pot pie recipe. 
        From: https://www.allrecipes.com/recipe/12281/chicken-pot-pie-i/`,
        "ingredients": [
          '4 skinless, boneless chicken breast halves',
          '1 (10.75 ounce) can condensed cream of chicken soup',
          '2 (15 ounce) cans mixed vegetables, drained',
          '1 recipe pastry for a 9 inch double crust pie'
        ],
        "directions": 
          ['Boil or steam the chicken breasts until done. Dice.',
          'Mix together undiluted soup, canned vegetables, and diced chicken. Pour mixture into pie shell, and cover with the second crust. Crimp the edges, and make slits in the top crust.',
          'Bake at 375 degrees F (190 degrees C) for 45 minutes, or until crust is golden brown.',
          ],
        "category": "American",
        "image": "chicken-potpie.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Strawberry Pie",
        "description": `Old fashioned two crust strawberry pie.
        From: https://www.allrecipes.com/recipe/12468/old-fashioned-strawberry-pie/`,
        "ingredients": [
          '2 9-inch unbaked pie crusts',
          '1 1/4 cups white sugar',
          '1/3 cup all-purpose flour',
          '1/3 teaspoon ground cinnamon',
          '4 cups fresh strawberries',
          '2 tablespoons butter'
        ],
        "directions": 
          ['Preheat oven to 425 degrees F (220 degrees C). Place one crust in a nine inch pie pan.',
          'Mix together sugar, flour, and cinnamon. Mix lightly through the berries. Pour filling into pastry lined pan, and dot fruit with butter or margarine. Cover with top crust, and cut slits in the top. Seal and flute the edges.',
          'Bake for 35 to 45 minutes, or until the crust is slightly browned.',
          ],
        "category": "American",
        "image": "strawberry-pie.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Mochi",
        "description": `Mochi are small, sweet Japanese cakes made with glutinous rice flour (mochiko). They have a soft, chewy outer layer and a deliciously sticky filling made of sweetened red bean paste. Freezing the red bean paste before you use it is optional but it does make the process easier.

        From: https://www.allrecipes.com/recipe/193307/easy-mochi/`,
        "ingredients": [
          '1 cup sweetened red bean paste',
          '1 cup glutinous rice flour',
          '1 teaspoon green tea powder (matcha)',
          '1 cup water',
          '1/4 cup white sugar',
          '1/2 cup cornstarch, for rolling out the dough'
        ],
        "directions": 
          ['Wrap red bean paste in aluminum foil and place in the freezer until solid, at least 1 hour.',
          'Mix glutinous rice flour and green tea powder thoroughly in a microwave-safe bowl. Stir in water, then sugar; mix until smooth.',
          'Cover the bowl with plastic wrap and microwave for 3 minutes 30 seconds.',
          'Meanwhile, remove red bean paste from the freezer and divide into 8 equal balls. Set aside.',
          'Remove rice flour mixture from the microwave. Stir and heat, covered, for another 15 to 30 seconds.',
          'Dust a work surface with cornstarch. Roll about 2 tablespoons of hot rice flour mixture into a ball. Flatten the ball and place one ball of frozen red bean paste in the center. Pinch and press the dough around the bean paste until completely covered. Sprinkle with additional cornstarch and place mochi, seam-side down, in a paper muffin liner to prevent sticking.',
          'Repeat Step 6 to make remaining mochi.'
          ],
        "category": "Japanese",
        "image": "mochi.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Churros",
        "description": `Churros.
        From: https://www.allrecipes.com/recipe/25805/churros-ii/`,
        "ingredients": [
          '2 quarts vegetable oil for frying',
          '1 cup water',
          '1/2 cup margarine',
          '1 cup all-purpose flour',
          '1/4 teaspoon salt',
          '3 eggs',
          '1/4 cup white sugar',
          '1/4 teaspoon ground cinnamon'
        ],
        "directions": 
          ['In a heavy deep skillet or deep-fryer, heat oil to 360 degrees F (180 degrees C). Oil should be about 1 1/2 inches deep.',
          'In a medium saucepan, heat water and margarine to a rolling boil. Combine the flour and salt; stir into the boiling mixture. Reduce heat to low and stir vigorously until the mixture forms a ball, about 1 minute. Remove from heat and beat in the eggs one at a time. Spoon the mixture into a pastry bag fitted with a large star tip.',
          'Carefully squeeze out 4 inch long strips of dough directly into the hot oil. Fry 3 or 4 strips at once, until golden brown, about 2 minutes on each side. Remove from hot oil to drain on paper towels. Stir together the sugar and cinnamon; roll churros in the mixture while still hot.'
          ],
        "category": "Spanish",
        "image": "churros.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Spring Rolls",
        "description": `Spring rolls with vegetable, seafood and pork.
        From: https://www.allrecipes.com/recipe/21652/spring-rolls/`,
        "ingredients": [
          '2 ounces dry soy vermicelli',
          '4 eggs, beaten',
          '1 onion, finely chopped',
          '2 ounces mushrooms, drained and chopped',
          '3/4 (4 ounce) can small shrimp, drained and chopped',
          '1 pound lean ground pork',
          '2 tablespoons vegetable oil',
          '1 carrot, shredded',
          '2 ounces crabmeat',
          '3 ounces bean sprouts',
          '2 pinches ground black pepper',
          '1 tablespoon soy sauce',
          '3 tablespoons fish sauce',
          '1 clove garlic, chopped',
          '20 rice wrappers (6.5 inch diameter)',
          '1 quart oil for deep frying'
        ],
        "directions": 
          ['Soak the vermicelli 30 minutes in warm water; drain.',
          'In a large bowl, mix the vermicelli, eggs, onion, mushrooms, shrimp, pork, vegetable oil, carrot, crabmeat, bean sprouts, pepper, soy sauce, fish sauce and garlic.',
          'One by one, moisten the rice wrappers with a damp tea towel and fill with 2 to 3 tablespoons of the vermicelli mixture. Roll the wrappers, and allow them to set for 30 minutes.',
          'In a large saucepan, heat the oil to 375 degrees F (190 degrees C).',
          'Fry the spring rolls one or two at a time until golden brown, about 3 minutes. Drain on paper towels.'
          ],
        "category": "Chinese",
        "image": "spring-rolls.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Chow Mein",
        "description": `This stir-fry combines chicken breast, bok choy, zucchini, carrots, snap peas, and chow mein noodles in a flavorful Chinese-inspired sauce.
        From: https://www.allrecipes.com/recipe/231308/chow-mein-with-chicken-and-vegetables/`,
        "ingredients": [
          '2 teaspoons soy sauce',
          '1 teaspoon cornstarch',
          '1/4 teaspoon sesame oil',
          '1/2 pound skinless, boneless chicken breast halves, cut into strips',
          '3/4 cup chicken broth',
          '2 tablespoons oyster sauce',
          '3/4 teaspoon white sugar',
          '1/2 pound chow mein noodles',
          '1 tablespoon vegetable oil',
          '1 teaspoon minced garlic',
          '2 heads bok choy, chopped',
          '1/2 zucchini, diced',
          '10 sugar snap peas',
          '1 carrot, cut into thin strips',
          '2 tablespoons chopped green onion'
        ],
        "directions": 
          ['Whisk soy sauce, corn starch, and sesame oil together in a large bowl until smooth; add chicken strips and toss to coat. Cover and refrigerate for at least 20 minutes.',
          'Combine chicken broth, oyster sauce, and sugar in a small bowl and set aside.',
          'Bring a large pot of water to a boil. Add noodles and cook over medium heat until cooked through but still firm to the bite, 4 to 5 minutes. Drain and rinse with cold water.',
          'Heat vegetable oil in a large skillet. Cook and garlic in hot oil for 30 seconds; add marinated chicken. Cook and stir until browned and no longer pink in the center, 5 to 6 minutes. Remove chicken mixture to a plate. Cook and stir bok choy, zucchini, snap peas, and carrot in the hot skillet until softened, about 2 minutes. Return noodles and chicken mixture to the skillet. Pour broth mixture into noodle mixture; cook and stir until warmed through, about 2 minutes. Serve garnished with green onions.'
          ],
        "category": "Chinese",
        "image": "chow-mein.jpg",
        "email": "user@email.com"
      },
      { 
        "name": "Buttermilk Pancakes",
        "description": `A very light and fluffy pancake recipe that requires fresh buttermilk, but it's the best I've ever made!
        From: https://www.allrecipes.com/recipe/24530/buttermilk-pancakes-ii/`,
        "ingredients": [
          '3 cups all-purpose flour',
          '3 tablespoons white sugar',
          '3 teaspoons baking powder',
          '1 ½ teaspoons baking soda',
          '¾ teaspoon salt',
          '3 cups buttermilk',
          '½ cup milk',
          '3 eggs',
          '1/3 cup butter, melted'
        ],
        "directions": 
          ['In a large bowl, combine flour, sugar, baking powder, baking soda, and salt. In a separate bowl, beat together buttermilk, milk, eggs and melted butter. Keep the two mixtures separate until you are ready to cook.',
          "Heat a lightly oiled griddle or frying pan over medium high heat. You can flick water across the surface and if it beads up and sizzles, it's ready!",
          'Pour the wet mixture into the dry mixture; use a wooden spoon or fork to mix until its just blended together. The batter will be a little lumpy which is what you want.',
          'Pour or scoop the batter onto the preheated griddle, using approximately 1/2 cup for each pancake. Cook until bubbles appear on the surface, 1 to 2 minutes; flip with a spatula and cook until browned on the other side. Repeat with remaining batter.'
          ],
        "category": "American",
        "image": "pancake.jpg",
        "email": "user@email.com"
      },
    ]);
  } catch(error) {
    console.log('Recipe Insert Error', + error);
  }
};

// insertDummyRecipeData();