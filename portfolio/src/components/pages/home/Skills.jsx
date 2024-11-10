import { Grid2, Stack, Typography } from "@mui/material";
import SkillIcon from "../../common/SkillIcon";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";

function Skills() {
  const { skills } = useContext(InformationContext);


  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>Skills</SectionHead>

        <Grid2 container spacing={4} justifyContent="center" marginY={5}>
          {skills?.programmingLanguages?.map((skill, index) => (
            <Grid2 xs={12} sm={8} md={4} key={index}>
              <SkillIcon src={skill.icon} alt={skill.name} />
            </Grid2>
          ))}
        </Grid2>

        <Typography variant="body2" maxWidth={700} textAlign="center">
          When I’m not coding, you’ll find me exploring new technologies,
          participating in hackathons, or playing around with personal projects
          to learn more.
        </Typography>
      </Stack>
    </Section>
  );
}

export default Skills;
