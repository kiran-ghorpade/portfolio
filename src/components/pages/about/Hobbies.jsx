import { Chip, Stack } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";

function Hobbies() {
  const { hobbies } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Hobbies</SectionHead>
        <Stack gap={1} direction="row" flexWrap="wrap">
          {hobbies?.map((value, index) => (
            <Chip key={index} label={value} />
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}

export default Hobbies;
