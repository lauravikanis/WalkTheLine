import React from "react";
import BackButton from "./BackButton";

export default {
  title: "Components/Button_back",
  component: BackButton,
};

const Template = (args) => <BackButton {...args} />;

export const backButton = Template.bind({});
backButton.args = {
  active: true,
};
