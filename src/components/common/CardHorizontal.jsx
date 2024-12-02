/* eslint-disable react/prop-types */
import {
    Card
} from "@mui/material";

function CardHorizontal({ children }) {
  // Horizontal Card
    return (
      <Card
        data-aos="zoom-in-up"
        elevation={1}
        sx={{
          display: {md:"flex"},
          "&:hover": {
            boxShadow: 6, // Apply a larger shadow on hover
          },
        }}
      >
        {children}
      </Card>
    );
}

export default CardHorizontal;
