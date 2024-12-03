import { Grid2, Stack } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";
import SocialLink from "../../common/SocialLink";

function Header() {
  const { socialAccounts } = useContext(InformationContext);
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      data-aos="fade-up"
    >
      <SectionHead>Social Links</SectionHead>
      <Section>
        <Grid2 container spacing={4}>
          {socialAccounts?.map((account, index) => (
            <Grid2 xs={12} sm={8} md={4} key={index}>
              <SocialLink
                socialAccount={account}
                borderRadius="10%"
              />
            </Grid2>
          ))}
        </Grid2>
      </Section>
    </Stack>
  );
}

export default Header;
