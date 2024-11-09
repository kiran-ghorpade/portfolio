/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

function SectionHead({ children }) {
  return (
    <Typography
      variant="h2"
      fontSize="1.75rem"
      fontWeight=" 900"
      letterSpacing=".1rem"
      my={5}
      py={2}
    >
      {children}
    </Typography>
  );
}

export default SectionHead;
