import { Icon } from "@mui/material";

// eslint-disable-next-line react/prop-types
function SkillIcon({ src, alt }) {
  return (
    <Icon
      sx={{
        height: 100,
        width: 100,
      }}
    >
      <img height={100} width={100} src={src} alt={alt} />
    </Icon>
  );
}

export default SkillIcon;
