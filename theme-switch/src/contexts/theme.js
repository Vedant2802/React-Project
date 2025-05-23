import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: function () {},
  ligthTheme: function () {},
});

// console.log(ThemeContext);

export const ThemeProvider = ThemeContext.Provider;
// console.log(ThemeContext.Provider);

console.log("ThemeContext", ThemeContext);
console.log("ThemeProvider", ThemeContext.Provider);

export default function useTheme() {
  return useContext(ThemeContext);
}
