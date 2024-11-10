/* eslint-disable react/prop-types */

import { IconButton, useTheme } from "@mui/material";

function SocialLink({ socialAccount }) {
  const theme = useTheme();

  return (
    <a href={socialAccount?.link} target="_blank">
      <IconButton
        color={theme.palette.primary.main}
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10%",
          background: theme.palette.common.white,
        }}
      >
        <img
          height={30}
          width={30}
          style={{ marginTop: 2 }}
          src={socialAccount?.icon}
          alt={socialAccount?.name}
        />
      </IconButton>
    </a>
  );
}

export default SocialLink;
