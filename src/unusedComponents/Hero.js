import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

export default function Hero() {
  return (
    <Box component="section" className="hero">
      <Box className="hero-content">
        <Typography variant="h1" className="hero-title">
          Welcome to Sirius
        </Typography>

        <Typography variant="body" className="hero-subtitle">
          The interview preparation tool utilising STAR methodology
        </Typography>

        <Button
          sx={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            width: "fit-content", 
          }}
          variant="contained"
          color="primary"
        >
          ENTER
        </Button>
      </Box>
    </Box>
  );
}
