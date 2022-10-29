import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function RecipeIngredient({ name, amount }) {
  const { handleRecipeUpdate } = useContext(RecipeContext);

  return (
    <>
      <input className="recipe-edit__input" type="text" value={name} />
      <input className="recipe-edit__input" type="text" value={amount} />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
