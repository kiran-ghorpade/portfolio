import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";

function ResumeSection() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>View My Resume</SectionHead>
        <Button href={personalInfo?.resumeLink} target="_blank">Resume</Button>
      </Stack>
    </Section>
  );
}

export default ResumeSection;
