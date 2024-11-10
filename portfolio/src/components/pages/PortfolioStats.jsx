import { Stack, Typography } from "@mui/material";
import Section from "../common/Section";
import SectionHead from "../common/SectionHead";

function PortfolioStats() {
  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Stack Information</SectionHead>

        <Typography>React</Typography>
        <Typography>Material UI</Typography>
        <Typography>BootStrap Theme</Typography>
        <Typography>React Router Dom</Typography>
      </Stack>
    </Section>
  );
}

export default PortfolioStats;
