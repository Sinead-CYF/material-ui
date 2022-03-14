import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ResponsiveAppBar from "./ResponsiveAppBar";

import "@fontsource/roboto/400.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import PrimarySearchAppBar from "./PrimarySearchAppBar.js";
import BasicTable from "./BasicTable";
import Hero from "./Hero.js"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <PrimarySearchAppBar />
      <Hero/>
      <BasicTable/>
      <Button
        startIcon={<SaveIcon />}
        endIcon={<SaveIcon />}
        onClick={() => alert("Hiii")}
        sx={{
          fontSize: "1.5rem",
        }}
        variant="contained"
        color="secondary"
      >
        Hello World
      </Button>
    </div>
  );
}

export default App;
