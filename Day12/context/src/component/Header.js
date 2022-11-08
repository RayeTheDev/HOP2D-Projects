import { useContext } from "react";
import { ThemeContext } from "../common/provider/ThemeProvider";

export const Header = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
  const data = useContext(ThemeContext);

  console.log(data, "data");
  return (
    <div style={{ color: theme.pallate.dark ? "white" : "black" }}>Header</div>
  );
};
