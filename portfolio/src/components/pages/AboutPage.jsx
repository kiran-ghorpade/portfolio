import {
  Container
} from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";
import Header from "./about/Header";
import Education from "./about/Education";

function AboutPage() {
  const { personalInfo } = useContext(InformationContext);

  return (
    <Container>
     <Header/>
     <Education/>
    </Container>
  );
}

export default AboutPage;
