import { Container, Stack } from "@mui/material";
import ContactForm from "./contact/ContactForm";
import Header from "./contact/Header";

function ContactPage() {
  return (
    <Container sx={{my:5}}>
      <Stack direction='row' gap={2} flexWrap='wrap' justifyContent='space-around'>
        <ContactForm />
        <Header />
      </Stack>
    </Container>
  );
}

export default ContactPage;
