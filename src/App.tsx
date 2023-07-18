import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/Router";

import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
