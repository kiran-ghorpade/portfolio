import { Box, Button, List } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box display="flex" justifyContent="space-around">
      <List
        sx={{
          listStyle: "none",
          display: "felx",
          justifyContent: "space-around",
        }}
      >
        <Button LinkComponent={Link} to='/'>Home</Button>
        <Button LinkComponent={Link} to='/about'>About</Button>
        <Button LinkComponent={Link} to='/projects'>Project</Button>
        <Button LinkComponent={Link} to='/projects'>contact</Button>
      </List>
    </Box>
  );
}

export default Navbar;
