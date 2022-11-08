import { useContext } from "react";
import { ThemeContext } from "../common/provider/ThemeProvider";
import "./css/content.css"

export const Content = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
  console.log(theme.pallate.dark);

  if (theme.pallate.dark === true) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
  return (
    <div className="Container">
      <label class="switch">
        <input type="checkbox" onClick={changeDarkTheme }/>
        <span class="slider round"></span>
      </label>
      <h1 style={{ color: theme.pallate.dark ? "white" : "black" }}>Hello</h1>
    </div>
  );
};
