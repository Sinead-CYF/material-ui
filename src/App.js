import React from "react";
import "./App.css";
import "@fontsource/roboto/400.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar.js";
import BasicTable from "./BasicTable";
import StarUI from "./StarUI.js";
import ShareButton from "./ShareButton";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <PrimarySearchAppBar />
      <StarUI />
      <ShareButton />
      <BasicTable />
    </div>
  );
}

export default App;
