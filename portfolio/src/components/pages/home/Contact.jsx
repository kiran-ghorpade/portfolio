import { Grid2, Stack, Typography } from "@mui/material";
import Section from "../../core/Section";
import SectionHead from "../../core/SectionHead";
import socialAccounts from "../../../../public/config/socialAccounts";
import SocialLink from "../../common/SocialLink";

function Contact() {
  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Let’s Connect!</SectionHead>

        <Grid2 container spacing={4}>
          {socialAccounts.map((account, index) => (
            <Grid2 item xs={12} sm={8} md={4} key={index}>
              <SocialLink socialAccount={account} />
            </Grid2>
          ))}
        </Grid2>

        <Typography variant="body2" maxWidth={700} textAlign="center">
          Got a project in mind or just want to chat about tech? Feel free to
          reach out!
        </Typography>
      </Stack>
    </Section>
  );
}

export default Contact;
