import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

export default function Header() {
  return (
    <Box className="header" sx={{ flexGrow: 1, marginBottom: "0rem" }}>
      <AppBar position="static">
        <Toolbar>
          <Button>
         
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
