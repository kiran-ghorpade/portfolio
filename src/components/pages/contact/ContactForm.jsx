import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHead from "../../common/SectionHead";

function ContactForm() {
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
            type="text"
            name="email"
            onChange={handleInputChange}
            helperText="Enter your name"
            value={formData?.email}
          />
          <TextField
            sx={{ mb: 2 }}
            required
            fullWidth
            margin="dense"
            variant="standard"
            label="Email"
            type="text"
            name="message"
            onChange={handleInputChange}
            helperText="Enter your name"
            value={formData?.message}
          />
          <Button variant="contained" LinkComponent={Link} to="/contact">
            Contact Me
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default ContactForm;
