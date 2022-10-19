import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientList = ingredients.map((i) => (
    <Ingredient key={i.id} {...i} />
  ));

  return <>{ingredientList}</>;
}
