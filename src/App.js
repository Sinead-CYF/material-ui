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
      <BasicTable/>
      <Button
        endIcon={<ShareIcon/>}
        onClick={() => alert("Hiii")}
        sx={{
          fontSize: "1.5rem",
        }}
        variant="contained"
        color="secondary"
      >
        Share Star
      </Button>
    </div>
  );
}

export default App;
