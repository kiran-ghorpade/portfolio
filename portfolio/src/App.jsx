import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle between light and dark themes
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRoutes setIsDarkMode={setIsDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
