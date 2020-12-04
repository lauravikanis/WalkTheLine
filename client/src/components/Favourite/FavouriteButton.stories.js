import React from "react";
import FavouriteButton from "./FavouriteButton";

import FavoriteOnpath from "../../assets/favorite_on.svg";
import FavoriteOffpath from "../../assets/favorite_off.svg";

export default {
  title: "Components/FavoriteButton",
  component: FavouriteButton,
};

const Template = (args) => <FavouriteButton {...args} />;

export const active = Template.bind({});
active.args = {
  children: <img src={FavoriteOnpath} alt="favorite_on" />,
};

export const passive = Template.bind({});
passive.args = {
  children: <img src={FavoriteOffpath} alt="favorite_off" />,
};
