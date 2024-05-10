import { ThemeContext } from "@/contexts/theme";
import { use, useEffect } from "react";
import { Button } from "./ui/button";

const ThemeToggler = ({ userId }: { userId?: string }) => {
  const { toggleTheme } = use(ThemeContext);

  return <Button onClick={toggleTheme}>Toggle theme</Button>;
};

export default ThemeToggler;
