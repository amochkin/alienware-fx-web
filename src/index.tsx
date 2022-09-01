import React from "react";
import "./styles/global.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ChakraProvider, Container } from "@chakra-ui/react";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <ChakraProvider>
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
