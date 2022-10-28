import React, { useContext } from "react";
import RecipeIngredient from "./RecipeIngredient";
import { RecipeContext } from "./App";

export default function RecipecEdit({ recipe }) {
  const { handleRecipeUpdate, handleEditCloseClick } =
    useContext(RecipeContext);

  return recipe !== null ? (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="recipe-edit__remove-button"
          onClick={() => handleEditCloseClick()}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          value={recipe.name}
          onChange={(e) => {
            handleRecipeUpdate({ ...recipe, name: e.target.value });
          }}
        />
        <label className="recipe-edit__label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={recipe.cookTime}
          onChange={(e) => {
            handleRecipeUpdate({ ...recipe, cookTime: e.target.value });
          }}
        />
        <label className="recipe-edit__label" htmlFor="servings">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input"
          value={recipe.servings}
          onChange={(e) => {
            handleRecipeUpdate({ ...recipe, servings: e.target.value });
          }}
        />
        <label className="recipe-edit__label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          value={recipe.instructions}
          onChange={(e) => {
            handleRecipeUpdate({ ...recipe, instructions: e.target.value });
          }}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(({ id, name, amount }) => (
          <RecipeIngredient key={id} name={name} amount={amount} />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  ) : (
    <></>
  );
}
