import React from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const searchInput = Template.bind({});
searchInput.args = {
  placeholder: "🕵️‍♀️ Was willst du suchen?",
  value: "",
};
