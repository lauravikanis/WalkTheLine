import React from "react";
import Standort from "./Standort";

export default {
  title: "Components/Standorte",
  component: Standort,
};

const Template = (args) => <Standort {...args} />;

export const StandortExample = Template.bind({});
StandortExample.args = {
  children: <li>1. Standort</li>,
};
