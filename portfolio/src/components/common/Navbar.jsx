import { AppBar, Button, IconButton, List, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../services/context/DarkModeContextProvider";

function Navbar() {
  const theme = useTheme();
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  };

  return (
    <AppBar
      elevation={0}
      sx={{ bgcolor: theme.palette.background.default, backgroundImage: "none" }}
    >
      <List
        sx={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
        <Link to="/about">
          <Button color="primary">About</Button>
        </Link>
        <Link to="/projects">
          <Button color="primary">Projects</Button>
        </Link>
        <Link to="/contact">
          <Button color="primary">contact</Button>
        </Link>
        <IconButton color="primary" size="small" onClick={toggleDarkMode}>
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </List>
    </AppBar>
  );
}

export default Navbar;
