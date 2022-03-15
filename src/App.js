import React from "react";
import "./App.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import "@fontsource/roboto/400.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import PrimarySearchAppBar from "./PrimarySearchAppBar.js";
import BasicTable from "./BasicTable";
import Hero from "./Hero.js";
import StarUI from "./StarUI.js"
import ShareIcon from '@mui/icons-material/Share';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <PrimarySearchAppBar />
      <StarUI/>
      <Button
        endIcon={<ShareIcon/>}
        sx={{
          fontSize: "1.5rem",
          marginBottom: "2rem"
        }}
        variant="contained"
        color="secondary"
      >
        Share Star
      </Button>
      <BasicTable/>
  
    </div>
  );
}

export default App;
