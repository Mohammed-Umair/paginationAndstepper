import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Components/unUsed/Home";
import HomePage from "./Components/CustomPagination/HomePage";
import CustomTheme from "./Components/CustomTheme/CustomTheme";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import FetchAxios from "./Components/unUsed/FetchAxios";
import ParentComp from "./Components/pureComponent/ParentComp";
import DemoForm from "./Components/Formik/DemoForm";
import Basic from "./Components/Formik/Basic";
import BasicForm from "./Components/Formik/BasicForm";

export const theme = createTheme({
  palette: {
    secondary: {
      main: colors.cyan[600],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage/>
      
        <CustomTheme />

        {/* <FetchAxios/> */}
        {/* <ParentComp/> */}
        {/* <DemoForm/> */}
        {/* <Basic/> */}
        {/* <BasicForm/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
