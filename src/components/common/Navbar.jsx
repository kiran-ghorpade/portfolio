/* eslint-disable react/prop-types */
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { DarkModeContext } from "../../services/context/DarkModeContextProvider";

function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const NavButtons = () => (
    <>
      {routes
        ?.filter((route) => route.type === "navgation")
        ?.map((nav, index) => {
          return (
            <Button
              key={index}
              size="small"
              color={location?.pathname === nav?.path ? "primary" : "secondary"}
              LinkComponent={Link}
              to={nav?.path}
              sx={{ minWidth: 50 }}
            >
              {isMobile ? nav.icon : nav.title}
            </Button>
          );
        })}
    </>
  );

  const Bar = ({ children }) => {
    return isMobile ? (
      <BottomNavigation
        sx={{
          zIndex: theme.zIndex.drawer + 10,
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      >
        {children}
      </BottomNavigation>
    ) : (
      <AppBar
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          backgroundImage: "none",
        }}
      >
        {children}
      </AppBar>
    );
  };

  return (
    <Bar>
      <Stack direction="row" justifyContent="center" padding={1}>
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
    </Bar>
  );
}

export default Navbar;
