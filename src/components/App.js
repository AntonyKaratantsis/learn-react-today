import { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  // The first time our page loads (and at every refresh)
  // we retrieve saved recipes from localStorage.
  // If they exist in localStorage, we retrieve them
  // and set our state to them as an initial value
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  // Everytime our recipe list changes, it is saved in Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

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
    setRecipeToEdit(newRecipe);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
    if (recipeToEdit.id === id) setRecipeToEdit(null);
  };

  const handleRecipeUpdate = (recipe) => {
    const idx = recipes.findIndex((r) => r.id === recipe.id);
    const newRecipes = [...recipes];
    newRecipes[idx] = recipe;
    setRecipes(newRecipes);
    setRecipeToEdit(recipe);
  };

  const handleRecipeEditClick = (recipe) => {
    setRecipeToEdit(recipe);
  };

  const handleEditCloseClick = () => {
    setRecipeToEdit(null);
  };

  const recipeContextValue = {
    // handleRecipeAdd: handleRecipeAdd,
    // handleRecipeDelete: handleRecipeDelete,
    // Same as above, nice shorthand!!!
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeUpdate,
    handleRecipeEditClick,
    handleEditCloseClick
  };

  return (
    <>
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
        <RecipeEdit recipe={recipeToEdit} />
      </RecipeContext.Provider>
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
