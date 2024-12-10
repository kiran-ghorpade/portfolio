/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ViewCarousel,
} from "@mui/icons-material";
import { Button, CardMedia, MobileStepper } from "@mui/material";
import { useState } from "react";

function Carousel({ imageList }) {
  const theme = useTheme();
  const [activeImage, setActiveImage] = useState(0);
  const MAX = 9,
    MIN = 0;

  const handleNext = () => {
    setActiveImage((prevActiveImage) => prevActiveImage + 1);
  };

  const handleBack = () => {
    setActiveImage((prevActiveImage) => prevActiveImage - 1);
  };

  return (
    <>
      <ViewCarousel />
      <CardMedia
        component="img"
        sx={{
          width: { md: 350 }, // Set width for different screen sizes
          objectFit: "cover",
        }}
        image={imageList?.image}
        alt={imageList?.title}
      />
      <MobileStepper
        variant="dots"
        steps={10}
        position="static"
        activeStep={activeImage}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeImage === MAX}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeImage === MIN}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}

export default Carousel;
