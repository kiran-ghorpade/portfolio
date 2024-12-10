import { Avatar, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Section from "../../common/Section";

function Header() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Section>
      <Stack
        textAlign="end"
        alignItems="center"
        justifyContent="space-around"
        spacing={1}
      >
        <Avatar
          alt="My Image"
          src={personalInfo?.image || "https://via.placeholder.com/200"}
          sx={{
            width: 150,
            height: 200,
            borderRadius: 0,
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h5"
          fontSize="1.5rem"
          fontWeight=" 900"
          letterSpacing=".01rem"
        >
          {personalInfo?.name?.firstName +
            " " +
            personalInfo?.name?.middleName +
            " " +
            personalInfo?.name?.lastName}
        </Typography>
        <Typography variant="body1">{personalInfo?.contact?.phone}</Typography>
        <Typography variant="body1">{personalInfo?.contact?.email}</Typography>
        <Typography variant="body1">
          {personalInfo?.contact?.address}
        </Typography>
        <Typography variant="body1">{personalInfo?.links?.linkedin}</Typography>
      </Stack>
    </Section>
  );
}

export default Header;
