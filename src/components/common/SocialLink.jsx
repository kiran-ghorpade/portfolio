/* eslint-disable react/prop-types */

import { IconButton, useTheme } from "@mui/material";

function SocialLink({ socialAccount, color, borderRadius }) {
  const theme = useTheme();
  return (
    <a href={socialAccount?.link} target="_blank" rel="noopener noreferrer">
      <IconButton
        color={color}
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: borderRadius,
          background: theme.palette.grey.A400,
        }}
      >
        <img
          height={20}
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
