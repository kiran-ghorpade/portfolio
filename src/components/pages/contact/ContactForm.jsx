import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SectionHead from "../../common/SectionHead";
import { InformationContext } from "../../../services/context/InformationContextProvider";

function ContactForm() {
  const { personalInfo } = useContext(InformationContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <Stack
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      mt={{ xs: 0 }}
      data-aos="fade-up"
    >
      <SectionHead>Contact me</SectionHead>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          {/* Form Fields */}
          <form
            action={`mailto:${personalInfo?.contact?.email}`}
            method="post"
            encType="text/plain"
          >
            <TextField
              sx={{ mb: 2 }}
              autoFocus
              required
              fullWidth
              margin="dense"
              variant="standard"
              label="Name"
              type="text"
              name="name"
              onChange={handleInputChange}
              helperText="Enter your name"
              value={formData?.name}
            />
            <TextField
              sx={{ mb: 2 }}
              required
              fullWidth
              margin="dense"
              variant="standard"
              label="Email"
              type="email"
              name="email"
              onChange={handleInputChange}
              helperText="Enter your email"
              value={formData?.email}
            />
            <TextField
              sx={{ mb: 2 }}
              required
              fullWidth
              multiline
              margin="dense"
              variant="standard"
              label="Message"
              type="text"
              name="message"
              onChange={handleInputChange}
              helperText="Enter your message (multiline allowed)"
              value={formData?.message}
            />
            <Button
              type="submit"
              variant="contained"
              LinkComponent={Link}
              to="/contact"
            >
              Contact Me
            </Button>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default ContactForm;
