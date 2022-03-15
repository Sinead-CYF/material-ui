import React from "react";
import "./App.css";
import "@fontsource/roboto/400.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar.js";
import StarUI from "./StarUI.js";
import ShareButton from "./ShareButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeCYF = createTheme({
  palette: {
    primary: {
      main: "#d12f2f",
    },
    secondary: {
      main: "#29539b",
    },
  },
});

const themeBlue = createTheme({
  palette: {
    primary: {
      main: "#29539b", 
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const themeMUI = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#f50057",
    },
  },
});

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
