import React, { useContext, useEffect } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  const { handleRecipeEditClick, handleRecipeDelete } =
    useContext(RecipeContext);

  useEffect(() => {
    console.log("Recipe render");
    // The returned function is called when the component is unmounted
    // This functionallity allows us to clean things up
    // when a component is removed from our app. E.g,
    // If we had assigned an event listener we could undo it here...
    // But, an important quirk to know is that the return function is actually
    // called every subsequent time after the first call of this use effect!!
    return () => {
      console.log("Recipe unmounted!");
    };
  }, []);

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => {
              handleRecipeEditClick(props);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time: </span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings: </span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions: </span>
        <div className="recipe__value recipe__value--indented recipe__instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients: </span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
