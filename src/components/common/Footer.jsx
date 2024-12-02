import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box textAlign="center" my={2} mb={{ xs: 10 }}>
      <Link to="/portfolio">
        <Typography variant="body2" color="textSecondary">
          About Portfolio
        </Typography>
      </Link>
      <Typography variant="body2">
        2024 - Crafted with ❤️ by Kiran Ghorpade
      </Typography>
    </Box>
  );
}

export default Footer;
