import React from "react";
import "./App.css";
import "@fontsource/roboto/400.css";
import ResponsiveAppBar from "./Components/ResponsiveAppBar.js";
import PrimarySearchAppBar from "./Components/PrimarySearchAppBar.js";
import StarUI from "./Components/StarUI.js";
import ShareButton from "./Components/ShareButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import themeMUI from './themes/themeMUI';
import themeCYF from './themes/themeCYF';
import themeDark from './themes/themeDark';

function App() {
  return (
    <ThemeProvider theme={themeCYF}>
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
