import { Avatar, Button, Grid2, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import { Link } from "react-router-dom";
import { GitHub } from "@mui/icons-material";

function Header() {
  const { personalInfo, socialAccounts } = useContext(InformationContext);

  return (
    <Grid2
      container
      textAlign="center"
      alignItems="center"
      justifyContent="space-around"
      height="85vh"
    >
      <Grid2 xs={12} sm={6} md={8}>
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

      <Grid2 xs={12} sm={6} md={4} width={400}>
        <Typography
          variant="h2"
          fontSize="1.75rem"
          fontWeight=" 900"
          letterSpacing=".1rem"
        >
          {personalInfo?.name?.firstName + " " + personalInfo?.name?.lastName}
        </Typography>
        <Typography variant="body1">
          I&apos;m passionate about building software that solves problems and
          learning new technologies every day
        </Typography>
        <Button
          variant="contained"
          sx={{ my: 2, gap: 2 }}
          LinkComponent={Link}
          to={
            socialAccounts?.find((account) => account.name === "GitHub")?.link
          }
        >
          <GitHub /> Let’s Collaborate
        </Button>
      </Grid2>
    </Grid2>
  );
}

export default Header;
