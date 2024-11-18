import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Button, Stack, useTheme } from "@mui/material";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { DarkModeContext } from "../../services/context/DarkModeContextProvider";

function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const NavButtons = () => (
    <>
      {routes
        ?.filter((route) => {
          return route.type === "navgation";
        })
        ?.map((nav, index) => (
          <Button
            key={index}
            size="small"
            color={location?.pathname === nav?.path ? "primary" : "secondary"}
            LinkComponent={Link}
            to={nav?.path}
          >
            {nav.title}
          </Button>
        ))}
    </>
  );

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.default,
        backgroundImage: "none",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        padding={1}
        sx={{ paddingX: { xs: 2 } }}
      >
        <NavButtons />
        <Button
          size="small"
          onClick={toggleDarkMode}
          color={isDarkMode ? "secondary" : "primary"}
        >
          {isDarkMode ? (
            <LightMode fontSize="small" />
          ) : (
            <DarkMode fontSize="small" />
          )}
        </Button>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
