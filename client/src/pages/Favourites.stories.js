import React from "react";
import Favourite from "./Favourites";

export default {
  title: "Pages/Favourite",
  component: Favourite,
};

export const favourite = (args) => <Favourite {...args} />;
