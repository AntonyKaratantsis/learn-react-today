import React from "react";

export default function RecipeIngredient({ name, amount }) {
  return (
    <>
      <input className="recipe-edit__input" type="text" value={name} />
      <input className="recipe-edit__input" type="text" value={amount} />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
