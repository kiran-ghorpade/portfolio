/* eslint-disable react/prop-types */
import { School } from "@mui/icons-material";
import {
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import CardHorizontal from "../../common/CardHorizontal";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";
import EducationDialog from "./EducationDialog";

function EducationCard({ education, handleCardClick }) {
  return (
    <CardHorizontal onClick={() => handleCardClick(education)}>
      <CardActions>
        <IconButton color="info" onClick={() => handleCardClick(education)}>
          <School />
        </IconButton>
      </CardActions>
      <CardContent sx={{ cursor: "pointer" }}>
        <Typography variant="body1">{education?.degree}</Typography>
        <Typography variant="caption">{education?.duration}</Typography>
      </CardContent>
    </CardHorizontal>
  );
}

function Education() {
  const { education } = useContext(InformationContext);
  const [openEducationDialog, setOpenEducationDialog] = useState(false);
  const [educationDetails, setEducationDetails] = useState({});

  const handleCardClick = (education) => {
    setOpenEducationDialog(!openEducationDialog);
    setEducationDetails(education);
  };

  return (
    <Section>
      <Stack alignItems="center" spacing={1}>
        <SectionHead>Education</SectionHead>
        <Stack gap={1}>
          {education?.map((course, index) => (
            <EducationCard
              key={index}
              education={course}
              handleCardClick={handleCardClick}
            />
          ))}
        </Stack>
      </Stack>

      <EducationDialog
        open={openEducationDialog}
        education={educationDetails}
        handleCardClick={handleCardClick}
      />
    </Section>
  );
}

export default Education;
