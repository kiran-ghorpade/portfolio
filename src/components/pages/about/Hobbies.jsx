import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";

function Hobbies() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Hobbies</SectionHead>
        <Typography variant="subtitle2">
          Lorem, ipsum, dolor, sit, amet
        </Typography>
      </Stack>
    </Section>
  );
}

export default Hobbies;
