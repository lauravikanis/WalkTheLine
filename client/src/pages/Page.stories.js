import React from "react";
import Page from "./Page";

export default {
  title: "Example/Page",
  component: Page,
};

export const Standard = (args) => <Page {...args} />;
