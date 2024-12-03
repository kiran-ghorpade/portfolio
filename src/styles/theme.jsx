import { createTheme } from "@mui/material/styles";

// Define the light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fe655c", // --bs-primary
      contrastText: "#fff", // --bs-primary-text-emphasis
    },
    secondary: {
      main: "#4f6591", // --bs-secondary
      contrastText: "#fff", // --bs-secondary-text-emphasis
    },
    success: {
      main: "#198754", // --bs-success
      contrastText: "#0a3622", // --bs-success-text-emphasis
    },
    info: {
      main: "#0dcaf0", // --bs-info
      contrastText: "#055160", // --bs-info-text-emphasis
    },
    warning: {
      main: "#ffc107", // --bs-warning
      contrastText: "#664d03", // --bs-warning-text-emphasis
    },
    danger: {
      main: "#dc3545", // --bs-danger
      contrastText: "#58151c", // --bs-danger-text-emphasis
    },
    background: {
      default: "#fff", // --bs-body-bg
      paper: "#e2e2e2", // --bs-light-bg-subtle
    },
    text: {
      primary: "#212529", // --bs-body-color
      secondary: "#6c757d", // --bs-secondary-color
      disabled: "#adb5bd", // --bs-tertiary-color
    },
    action: {
      active: "#fe655c", // --bs-link-color
      hover: "#cb514a", // --bs-link-hover-color
    },
    border: {
      light: "#dee2e6", // --bs-border-color
      dark: "#495057", // --bs-dark-border-subtle
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // --bs-font-sans-serif
    body1: {
      fontSize: "1rem", // --bs-body-font-size
      fontWeight: 400, // --bs-body-font-weight
      lineHeight: 1.5, // --bs-body-line-height
      color: "#212529", // --bs-body-color
    },
    h1: {
      color: "inherit",
    },
    h2: {
      color: "inherit",
    },
    // Add more heading styles as needed
  },
  shape: {
    borderRadius: "0.375rem", // --bs-border-radius
  },

});

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fea39d", // --bs-primary (dark theme variant)
      contrastText: "#000", // --bs-primary-text-emphasis
    },
    secondary: {
      main: "#95a3bd", // --bs-secondary (dark theme variant)
      contrastText: "#95a3bd", // --bs-secondary-text-emphasis
    },
    success: {
      main: "#75b798", // --bs-success (dark theme variant)
      contrastText: "#75b798", // --bs-success-text-emphasis
    },
    info: {
      main: "#6edff6", // --bs-info (dark theme variant)
      contrastText: "#6edff6", // --bs-info-text-emphasis
    },
    warning: {
      main: "#ffda6a", // --bs-warning (dark theme variant)
      contrastText: "#ffda6a", // --bs-warning-text-emphasis
    },
    danger: {
      main: "#ea868f", // --bs-danger (dark theme variant)
      contrastText: "#ea868f", // --bs-danger-text-emphasis
    },
    background: {
      default: "#19202e", // --bs-body-bg (dark theme)
      paper: "#212a37", // --bs-secondary-bg
    },
    text: {
      primary: "#dee2e6", // --bs-body-color (dark theme)
      secondary: "#adb5bd", // --bs-secondary-color (dark theme)
      disabled: "#6c757d", // --bs-tertiary-color (dark theme)
    },
    action: {
      active: "#fea39d", // --bs-link-color (dark theme)
      hover: "#feb5b1", // --bs-link-hover-color (dark theme)
    },
    border: {
      light: "#495057", // --bs-border-color (dark theme)
      dark: "#343a40", // --bs-dark-border-subtle
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // --bs-font-sans-serif
    body1: {
      fontSize: "1rem", // --bs-body-font-size
      fontWeight: 400, // --bs-body-font-weight
      lineHeight: 1.5, // --bs-body-line-height
      color: "#dee2e6", // --bs-body-color (dark theme)
    },
    button: {
      color: "#000",
    },
  },
  shape: {
    borderRadius: "0.375rem", // --bs-border-radius
  },
});

export { lightTheme, darkTheme };
