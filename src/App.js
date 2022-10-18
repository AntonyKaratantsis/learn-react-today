import { createContext } from "react";
import Counter from "./Counter";

export const ThemeContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider>
      <p>Counter 1</p>
      <Counter initialCount={0} />
      <p>Counter 2</p>
      <Counter initialCount={0} />
    </ThemeContext.Provider>
  );
};

export default App;
