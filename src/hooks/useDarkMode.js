import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";

const useDarkMode = () => {
  const darkMode = useContext(DarkModeContext);
  return darkMode;
};

export default useDarkMode;
