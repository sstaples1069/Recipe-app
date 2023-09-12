import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  function addARecipe(newRecipe) {
    let newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes)
  }

  function deleteARecipe(recipeToDelete) {
    let newRecipes = recipes.filter( (recipe, index) => index !== recipeToDelete)
    setRecipes(newRecipes)
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteARecipe={deleteARecipe}/>
      <RecipeCreate addARecipe={addARecipe}/>
    </div>
  );
}

export default App;
