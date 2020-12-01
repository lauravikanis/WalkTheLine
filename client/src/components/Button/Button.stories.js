import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const passive = Template.bind({});
passive.args = {
  active: true,
  children: <h2>Shop</h2>,
};

export const active = Template.bind({});
active.args = {
  active: true,
  children: <h2>Shop</h2>,
};
