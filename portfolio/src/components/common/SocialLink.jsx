/* eslint-disable react/prop-types */

import { Icon } from "@mui/material";

//     font-size: 17px;
//     display: inline-block;
//     text-align: center;
//     border-radius: 50%;
//     background: rgba(0, 0, 0, .1);
//     color: #a5b3ce;

function SocialLink({ socialAccount }) {
  return (
    <Icon sx={{ height: "50px", width: "50px" }}>
      <a
        style={{
          width: "50px",
          height: "50px",
          paddingTop: "6px",
          fontSize: "17px",
          display: "inline-block",
          textAlign: "center",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.1)",
          color: "#a5b3ce",
        }}
        href={socialAccount?.link}
        target="_blank"
      >
        <img
          height={30}
          width={30}
          style={{ marginTop: 2, }}
          src={socialAccount?.icon}
          alt={socialAccount?.name}
        />
      </a>
    </Icon>
  );
}

export default SocialLink;
