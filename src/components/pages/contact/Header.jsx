import { Grid2, Stack } from "@mui/material";
import socialAccounts from "../../../../public/config/socialAccounts";
import SocialLink from "../../common/SocialLink";
import SectionHead from "../../common/SectionHead";
import Section from "../../common/Section";

function Header() {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <SectionHead>Social Links</SectionHead>
      <Section>
        <Grid2 container spacing={4}>
          {socialAccounts.map((account, index) => (
            <Grid2  xs={12} sm={8} md={4} key={index}>
              <SocialLink socialAccount={account} />
            </Grid2>
          ))}
        </Grid2>
      </Section>

    </Stack>
  );
}

export default Header;
