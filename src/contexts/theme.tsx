// create theme context

import { PropsWithChildren, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
