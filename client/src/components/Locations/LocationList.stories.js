import React from "react";
import LocationList from "./LocationList";

export default {
  title: "Components/LocationLists",
  component: LocationList,
};

const Template = (args) => <LocationList {...args} />;

export const locationList = Template.bind({});
locationList.args = {
  children: <li>1. Standort</li>,
};
