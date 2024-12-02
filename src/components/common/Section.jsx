/* eslint-disable react/prop-types */
import { Card, CardContent, useTheme } from "@mui/material";

function Section({ children }) {
  const theme = useTheme();
  return (
    <Card
      data-aos="zoom-in-up"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background,
        "&:hover": {
          boxShadow: 6, // Apply a larger shadow on hover
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Lighter background color on hover
        },
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default Section;
