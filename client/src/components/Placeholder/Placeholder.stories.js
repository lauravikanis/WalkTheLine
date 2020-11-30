import React from "react";
import Placeholder from "../Placeholder/Placeholder";

export default {
  title: "Components/Placeholder",
  component: Placeholder,
};

const Template = (args) => <Placeholder {...args} />;

export const placeholder = Template.bind({});
placeholder.args = {
  primary: false,
  children: <p>Placeholder</p>,
};
