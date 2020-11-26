import React from "react";
import Home from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
};

export const home = (args) => <Home {...args} />;
