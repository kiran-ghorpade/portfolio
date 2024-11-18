import { Container, Stack } from "@mui/material";
import ContactForm from "./contact/ContactForm";
import Header from "./contact/Header";

function ContactPage() {
  return (
    <Container>
      <Stack direction='row' gap={2} flexWrap='wrap' justifyContent='space-around'>
        <ContactForm />
        <Header />
      </Stack>
    </Container>
  );
}

export default ContactPage;
