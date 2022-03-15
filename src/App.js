import React from "react";
import "./App.css";
import "@fontsource/roboto/400.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar.js";
import StarUI from "./StarUI.js";
import ShareButton from "./ShareButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import themeMUI from './themeMUI';
import themeCYF from './themeCYF';
import themeDark from './themeDark';

function App() {
  return (
    <ThemeProvider theme={themeMUI}>
      <div className="App">
        <ResponsiveAppBar />
        <PrimarySearchAppBar />
        <StarUI />
        <ShareButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
