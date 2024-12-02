import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";

function Summary() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Summary</SectionHead>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Stack>
    </Section>
  );
}

export default Summary;
