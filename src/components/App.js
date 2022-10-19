import RecipeList from "./RecipeList";
import "../css/app.css"

const App = () => {
  console.log("App render");

  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  );
};

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
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