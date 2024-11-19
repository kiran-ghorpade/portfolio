import { Button, Grid2, Stack, Typography } from "@mui/material";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";
import SocialLink from "../../common/SocialLink";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";

function Contact() {
  const { socialAccounts } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Let’s Connect!</SectionHead>

        <Grid2 container spacing={4}>
          {socialAccounts?.map((account, index) => (
            <Grid2 xs={12} sm={8} md={4} key={index}>
              <SocialLink socialAccount={account} />
            </Grid2>
          ))}
        </Grid2>

        <Typography variant="body2" maxWidth={700} textAlign="center">
          Got a project in mind or just want to chat about tech? Feel free to
          reach out!
        </Typography>

        <Button variant="contained" LinkComponent={Link} to="/contact">
          Contact Me
        </Button>
      </Stack>
    </Section>
  );
}

export default Contact;
