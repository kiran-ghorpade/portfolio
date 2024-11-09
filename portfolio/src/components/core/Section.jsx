/* eslint-disable react/prop-types */
import { Card, CardContent } from "@mui/material";

function Section({ children }) {
  return (
    <Card elevation={0} sx={{ bgcolor: "#1e2738" }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default Section;
