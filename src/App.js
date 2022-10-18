import { createContext, useState } from "react";
import Counter from "./Counter";

export const ThemeContext = createContext();

const App = () => {
  console.log("App render");
  const [theme, setTheme] = useState("red");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <p>Counter 1</p>
      <Counter initialCount={0} />
      <p>Counter 2</p>
      <Counter initialCount={0} />
      <br />
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "red" ? "blue" : "red"))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
};

export default App;
