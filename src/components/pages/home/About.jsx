import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";

function About() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>About Me</SectionHead>

        <Typography variant="body2" maxWidth={700} textAlign="center">
          {personalInfo?.about}
        </Typography>

        <Button variant="contained">View Resume</Button>
      </Stack>
    </Section>
  );
}

export default About;