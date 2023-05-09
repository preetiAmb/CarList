import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CarProvider } from '../src/components/CarContext';
import type { AppProps } from "next/app";

import "../public/css/styles.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Box>
            <CarProvider>
            <Component {...pageProps} />
            </CarProvider>
          </Box>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default HomePage;
