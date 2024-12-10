import { GitHub } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { InformationContext } from "../../services/context/InformationContextProvider";
import SocialLink from "../common/SocialLink";

function HomePage() {
  const { personalInfo, socialAccounts } = useContext(InformationContext);

  return (
    <Container>
      <Grid2
        container
        textAlign="center"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        // direction='column'
        height={{ md: "70vh" }}
        spacing={2}
        data-aos="zoom-in-up"
      >
        <Grid2 size={6} container justifyContent='center'>
          <IconButton>
            <Avatar
              alt="My Image"
              src={personalInfo?.image || "https://via.placeholder.com/200"}
              sx={{
                width: 250,
                height: 250,
                objectFit: "cover",
              }}
            />
          </IconButton>
        </Grid2>

        <Grid2
          size={6}
          container
          justifyContent="center"
          spacing={2}
          width={400}
        >
          <Grid2>
            <Typography
              variant="h1"
              fontSize="2.75rem"
              fontWeight=" 900"
              letterSpacing=".1rem"
            >
              {personalInfo?.name?.firstName +
                " " +
                personalInfo?.name?.lastName || "Name"}
            </Typography>
            <Typography variant="h2" fontSize="1.25rem" letterSpacing=".1rem">
              {personalInfo?.title || "Title"}
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body1">
              {personalInfo?.description || "No Discription"}
            </Typography>

            <Button
              variant="contained"
              sx={{ my: 2, gap: 2 }}
              LinkComponent={Link}
              to={
                socialAccounts?.find((account) => account.name === "GitHub")
                  ?.link
              }
              target="_blank"
            >
              <GitHub /> Let’s Collaborate
            </Button>
          </Grid2>
          <Grid2 size={12} container justifyContent="center" spacing={4}>
            {socialAccounts?.slice(0, 3)?.map((account, index) => (
              <Grid2 xs={12} sm={8} md={4} key={index}>
                <SocialLink socialAccount={account} borderRadius="50%" />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default HomePage;
