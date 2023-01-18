import "./App.css";
import * as React from "react";
import NavBar from "./components/NavBar";
import theme from "theme";
import { ThemeProvider } from "@mui/material/styles";
import getRoutes from "routes";

const userRole = "FARM_ADMIN";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        {getRoutes()}
    </ThemeProvider>
  );
}

export default App;
