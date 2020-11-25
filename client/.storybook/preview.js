import React from "react";
import GlobalStyle from "../src/GlobalStyles";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parametesr = {
  actions: { argTypesRegex: "^cn[A-Z].*" },
  layout: "fullscreen",
};
