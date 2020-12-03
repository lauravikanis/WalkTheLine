// import { Router } from "express";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import GlobalStyle from "../src/GlobalStyles";

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyle />
      <Story />
    </MemoryRouter>
  ),
];
export const parametesr = {
  actions: { argTypesRegex: "^cn[A-Z].*" },
  layout: "fullscreen",
};
