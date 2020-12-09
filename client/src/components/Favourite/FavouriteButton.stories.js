import React from "react";
import FavoriteButton from "./FavoriteButton";

export default {
  title: "Components/FavoriteButton",
  component: FavoriteButton,
};

const Template = (args) => <FavoriteButton {...args} />;

export const active = Template.bind({});
active.args = {
  isFavorite: true,
};

export const passive = Template.bind({});
passive.args = {
  isFavorite: false,
};
