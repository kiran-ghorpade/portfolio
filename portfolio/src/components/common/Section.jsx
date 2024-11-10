/* eslint-disable react/prop-types */
import { Card, CardContent, useTheme } from "@mui/material";

function Section({ children }) {
  const theme = useTheme();
  return (
    <Card elevation={0} sx={{ bgcolor: theme.palette.background }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default Section;
