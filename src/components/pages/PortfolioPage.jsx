import { Card, Container, Stack, Typography } from "@mui/material";
import Section from "../common/Section";
import SectionHead from "../common/SectionHead";
import { useContext } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";

function PortfolioPage() {
  const { repositoryInfo } = useContext(InformationContext);

  return (
    <Container>
      <Stack spacing={4}>
        <Section>
          <Stack alignItems="center" spacing={2} textAlign="center">
            <SectionHead>Portfolio Information</SectionHead>
            <Card>
              <Typography variant="h6">Description</Typography>
              <Typography variant="subtitle1" width="80%">
                {repositoryInfo?.description || " No Description Found"}
              </Typography>
            </Card>
            <Typography variant="h6">Date of Creation</Typography>
            <Typography>
              {new Date(repositoryInfo?.created_at).toLocaleString() ||
                " No Date Found"}
            </Typography>
            <Typography variant="h6">Last Update :</Typography>
            <Typography>
              {new Date(repositoryInfo?.pushed_at).toLocaleString() ||
                " No Date Found"}
            </Typography>
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
            <Typography>AOS</Typography>
          </Stack>
        </Section>
      </Stack>
    </Container>
  );
}

export default PortfolioPage;
