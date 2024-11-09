import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import personalInfo from "../../../../public/config/personalInfo";

function Header() {
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <IconButton>
        <Avatar
          alt="My Image"
          src={personalInfo.image || "https://via.placeholder.com/200"}
          sx={{ width: 200, height: 200, objectFit: "cover" }}
        />
      </IconButton>

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
      <Button variant="contained" sx={{ color: "black", my: 2 }}>
        Let’s Collaborate
      </Button>
    </Box>
  );
}

export default Header;
