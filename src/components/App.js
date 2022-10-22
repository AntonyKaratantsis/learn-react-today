import { useState } from "react";
import { v4 } from "uuid";
import RecipeList from "./RecipeList";
import "../css/app.css";

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: v4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [
        {
          id: v4(),
          name: "Name",
          amount: "1 Tbsp",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
    </>
  );
};

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: `1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken`,
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 pounds" },
      { id: 2, name: "Salt", amount: "1 tbsp" },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      { id: 1, name: "Pork", amount: "3 pounds" },
      { id: 2, name: "Paprika", amount: "2 tbsp" },
    ],
  },
];

export default App;
