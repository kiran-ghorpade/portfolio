import { Container, Grid2, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";
import SectionHead from "../common/SectionHead";
import Project from "./projects/ProjectDialog";
import CertificationCardHorizontal from "./certifications/CertificationCard";

function CertificationsPage() {
  const { certifications } = useContext(InformationContext);
  const [openCertificationsDialog, setOpenCertificationsDialog] = useState(false);
  const [certification, setCertification] = useState({});

  const handleCardClick = (certification) => {
    setOpenCertificationsDialog(!openCertificationsDialog);
    setCertification(certification);
  };
  return (
    <Container>
      <Stack alignItems="center" spacing={4}>
        <SectionHead>Certifications</SectionHead>

        <Grid2 container spacing={4} direction='column'>
          {certifications?.map((certification, index) => (
            <Grid2 xs={6} sm={8} md={3} key={index}>
              <CertificationCardHorizontal
                direction="horizontal"
                project={certification}
                handleCardClick={handleCardClick}
              />
            </Grid2>
          ))}
        </Grid2>

        <Project
          open={openCertificationsDialog}
          project={certification}
          handleCardClick={handleCardClick}
        />
      </Stack>
    </Container>
  );
}

export default CertificationsPage;
