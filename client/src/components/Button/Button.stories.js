import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const passive = Template.bind({});
passive.args = {
  onClick: true,
  label: "Shop",
};

export const active = Template.bind({});
active.args = {
  onClick: true,
  label: "Shop",
};
