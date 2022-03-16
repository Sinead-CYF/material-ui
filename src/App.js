import React from "react";
import "./App.css";
import "@fontsource/roboto/400.css";
import StarUI from "./Components/StarUI.js";
import ShareButton from "./Components/ShareButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import themeMUI from './themes/themeMUI';
import themeCYF from './themes/themeCYF';
import themeDark from './themes/themeDark';
import CustomAppBar from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <ThemeProvider theme={themeCYF}>
      <div className="App">
        <CustomAppBar/>
        <Hero/>
        <StarUI />
        <ShareButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
