import { createContext, useState } from "react";
import Counter from "./Counter";

export const ThemeContext = createContext();

const App = () => {
  console.log("App render");
  const [theme, setTheme] = useState("green");

  return (
    // Using context API we don't need to pass value
    // as prop to the counter components. This is
    // very useful for use cases where we need to pass
    // something to deeply nested components
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
