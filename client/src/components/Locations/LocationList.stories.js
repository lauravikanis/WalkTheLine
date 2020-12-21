import React from "react";
import LocationList from "./LocationList";

export default {
  title: "Components/Standorte",
  component: LocationList,
};

const Template = (args) => <LocationList {...args} />;

export const StandortExample = Template.bind({});
StandortExample.args = {
  children: <li>1. Standort</li>,
};
