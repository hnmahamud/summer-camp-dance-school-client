import { createContext, useState } from "react";

// Create context API
export const DarkModeContext = createContext(null);

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode"))
  );

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark-mode", !darkMode);
  };

  // Data sent as context API
  const darkModeInfo = { darkMode, handleDarkMode };
  return (
    <DarkModeContext.Provider value={darkModeInfo}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
