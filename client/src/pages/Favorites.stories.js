import React from "react";
import Favorite from "./Favorites";

export default {
  title: "Pages/Favorite",
  component: Favorite,
};

export const favorite = (args) => <Favorite {...args} />;
