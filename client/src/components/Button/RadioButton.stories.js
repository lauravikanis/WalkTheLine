import React from "react";

import RadioButton from "./RadioButton";

export default {
  title: "Components/Button_radio",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const radioButton = Template.bind({});
radioButton.args = {
  value: "type",
  name: "poi",
};
