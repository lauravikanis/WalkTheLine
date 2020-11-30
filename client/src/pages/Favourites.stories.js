import React from "react";
import Favourites from "./Favourites";

export default {
  title: "Pages/Favourite",
  component: Favourites,
};

export const favourites = (args) => <Favourites {...args} />;
