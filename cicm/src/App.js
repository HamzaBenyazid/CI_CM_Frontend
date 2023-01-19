import "./App.css";
import * as React from "react";
import NavBar from "./components/NavBar";
import theme from "theme";
import { ThemeProvider } from "@mui/material/styles";
import getRoutes from "routes";
import { BrowserRouter as Router } from "react-router-dom";

const userRole = "FARM_ADMIN";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        {getRoutes()}
      </Router>
    </ThemeProvider>
  );
}

export default App;
