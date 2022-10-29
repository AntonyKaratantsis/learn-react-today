import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function RecipeIngredient({ ingredient, recipe }) {
  const { handleRecipeUpdate } = useContext(RecipeContext);
  const { id, name, amount } = ingredient;

  const ingredientIdx = recipe.ingredients.findIndex((i) => i.id === id);

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={name}
        onChange={(e) => {
          const newRecipe = { ...recipe };
          newRecipe.ingredients[ingredientIdx].name = e.target.value;
          handleRecipeUpdate(newRecipe);
        }}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={amount}
        onChange={(e) => {
          const newRecipe = { ...recipe };
          newRecipe.ingredients[ingredientIdx].amount = e.target.value;
          handleRecipeUpdate(newRecipe);
        }}
      />
      <button
        className="btn btn--danger"
        onClick={() => {
          const newRecipe = { ...recipe };
          newRecipe.ingredients.splice(ingredientIdx, 1);
          handleRecipeUpdate(newRecipe);
        }}
      >
        &times;
      </button>
    </>
  );
}
