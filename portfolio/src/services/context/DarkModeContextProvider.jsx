/* eslint-disable react/prop-types */
import { useState } from "react";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext(true);

function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle between light and dark themes
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;
