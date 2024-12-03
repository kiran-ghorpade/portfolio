import { Container, Grid2, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";
import SectionHead from "../common/SectionHead";
import CertificationCardHorizontal from "./certifications/CertificationsCard";
import CertificationsDialog from "./certifications/CertificationsDialog";

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

        <Grid2 container spacing={2}>
          {certifications?.map((certification, index) => (
            <Grid2 size={{md:6, xs:12}} key={index}>
              <CertificationCardHorizontal
                project={certification}
                handleCardClick={handleCardClick}
              />
            </Grid2>
          ))}
        </Grid2>

        <CertificationsDialog
          open={openCertificationsDialog}
          project={certification}
          handleCardClick={handleCardClick}
        />
      </Stack>
    </Container>
  );
}

export default CertificationsPage;
