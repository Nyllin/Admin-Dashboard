import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00688b",
    },
    secondary: {
      main: "#e6f0f3",
    },
    neutral: {
      main: "#4a666f",
    },
    info: {
      main: "#02766f",
    },
    success: {
      main: "#007e33",
    },
    warning: {
      main: "#ff8800",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>
);

reportWebVitals();
