import React from "react";
import Standort from "./Standort";

export default {
  title: "Components/Standorte",
  component: Standort,
};

const Template = (args) => <Standort {...args} />;

export const standort = Template.bind({});
standort.args = {
  children: "Standort",
};
