import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

export default function ShareButton() {
  return (
    <Button
      endIcon={<ShareIcon />}
      sx={{
        fontSize: "1.5rem",
        marginBottom: "2rem",
      }}
      variant="contained"
      color="primary"
    >
      Share Star
    </Button>
  );
}
