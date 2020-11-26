import React from "react";
import Home from "./Home";

export default {
  title: "Example/Home",
  component: Home,
};

export const home = (args) => <Home {...args} />;
