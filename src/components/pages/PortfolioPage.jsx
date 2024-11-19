import { Container, Stack, Typography } from "@mui/material";
import Section from "../common/Section";
import SectionHead from "../common/SectionHead";

function PortfolioPage() {
  return (
    <Container>
      <Stack spacing={4}>
        <Section>
          <Stack alignItems="center" spacing={2}>
            <SectionHead>Portfolio Information</SectionHead>
            <Typography>Version : 2.0.0</Typography>
            <Typography>Date of Creation : 10th November 2024</Typography>
            <Typography>Last Update : 14th November 2024</Typography>
          </Stack>
        </Section>

        <Section>
          <Stack alignItems="center" spacing={2}>
            {/* <SectionHead>Visitor Information</SectionHead> */}
            <SectionHead>Used Components</SectionHead>
            <Typography>React</Typography>
            <Typography>Material UI</Typography>
            <Typography>BootStrap Theme</Typography>
            <Typography>React Router Dom</Typography>
          </Stack>
        </Section>
      </Stack>
    </Container>
  );
}

export default PortfolioPage;
