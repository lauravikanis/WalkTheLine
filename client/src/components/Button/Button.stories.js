import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button_reg",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  value: "Click me",
};
