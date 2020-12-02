import React from "react";

import BackButton from "./BackButton";

export default {
  title: "Components/BackButton",
  component: BackButton,
};

const Template = (args) => <BackButton {...args} />;

export const backButton = Template.bind({});
backButton.args = {
  active: true,
};
