import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SectionHead from "../common/SectionHead";

function NotFoundPage() {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <SectionHead>404 - Page Not Found</SectionHead>
      <Typography variant="body1">
        page not found... <Link to="/">Go to Home</Link>
      </Typography>
    </Stack>
  );
}

export default NotFoundPage;
