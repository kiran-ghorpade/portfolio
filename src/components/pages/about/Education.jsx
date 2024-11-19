import { Grid2, Typography } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/Section";

function Education() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Section>
      <SectionHead>Education</SectionHead>
      <Grid2 xs={12} sm={6} md={8}>
        <Grid2 marginBottom={3}>
          <Typography variant="body1">
            {personalInfo?.links?.linkedin}
          </Typography>
        </Grid2>
      </Grid2>
    </Section>
  );
}

export default Education;
