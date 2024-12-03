import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CardHorizontal from "../../common/CardHorizontal";

/* eslint-disable react/prop-types */
export default function SkillCard({ skill, handleCardClick }) {
  // Horizontal Card
  return (
    <CardHorizontal
      sx={{ cursor: "pointer", display: { md: "flex" } }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        sx={{
          height: { xs: 80, md: 125 }, // Set height for different screen sizes
          width: { xs: "100%", md: 200 }, // Set width for different screen sizes
          objectFit: "contain", // Ensure the image covers the space without distortion
          p: 1,
        }}
        image={skill?.image}
        alt={skill?.title}
      />
      <CardContent>
        <Box>
          <Typography variant="subtitle2">{skill?.name}</Typography>
          <Typography variant="caption">{skill?.level}</Typography>
        </Box>
      </CardContent>
    </CardHorizontal>
  );
}
