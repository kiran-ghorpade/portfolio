import { Grid2, Stack, useMediaQuery, useTheme } from "@mui/material";
import Education from "./about/Education";
import Header from "./about/Header";
import Summary from "./about/Summary";
import Hobbies from "./about/Hobbies";
import ResumeSection from "./about/ResumeSection";

function AboutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid2 container justifyContent="space-around" wrap="wrap" spacing={1}>
      <Grid2
        size={{ md: 6, xs: 12 }}
        sx={{ order: { md: 1, xs: 1 } }}
        data-aos="zoom-in-up"
      >
        <Stack gap={1}>
          <Header />
          {!isMobile && (
            <Grid2
              size={{ md: 12, xs: 12 }}
              sx={{ order: { md: 4, xs: 3 } }}
              data-aos="zoom-in-up"
            >
              <Hobbies />
            </Grid2>
          )}
        </Stack>
      </Grid2>
      <Grid2
        size={{ md: 6, xs: 12 }}
        sx={{ order: { md: 2, xs: 2 } }}
        data-aos="zoom-in-up"
      >
        <Stack gap={1}>
          <Summary />
          <Education />
          <ResumeSection/>
        </Stack>
      </Grid2>
      {isMobile && (
        <Grid2
          size={{ md: 12, xs: 12 }}
          sx={{ order: { md: 4, xs: 3 } }}
          data-aos="zoom-in-up"
        >
          <Hobbies />
        </Grid2>
      )}
    </Grid2>
  );
}

export default AboutPage;
