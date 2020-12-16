import React from "react";
import FavoriteButton from "./FavoriteButton";

export default {
  title: "Components/Button_fav",
  component: FavoriteButton,
};

const Template = (args) => <FavoriteButton {...args} />;

export const favoriteButtonOn = Template.bind({});
favoriteButtonOn.args = {
  isFavorite: "true",
};

export const favoriteButtonOff = Template.bind({});
favoriteButtonOff.args = {
  isFavorite: "false",
};
