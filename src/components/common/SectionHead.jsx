/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

function SectionHead({ children }) {
  return (
    <Typography
      variant="h5"
      fontSize="0.8rem"
      // fontWeight=" 900"
      letterSpacing=".1rem"
      my={1}
    >
      {children}
    </Typography>
  );
}

export default SectionHead;
