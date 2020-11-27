import React from "react";
import ImageCard from "./ImageCard";
import placeholder from "../../assets/placeholder.jpeg";

export default {
  title: "Components/Card",
  component: ImageCard,
};

const Template = (args) => <ImageCard {...args} />;

export const locationpics = Template.bind({});
locationpics.args = {
  primary: false,
  children: (
    <>
      <img src={placeholder} alt="placeholder" />
      <img src={placeholder} alt="placeholder" />
      <img src={placeholder} alt="placeholder" />
      <img src={placeholder} alt="placeholder" />
      <img src={placeholder} alt="placeholder" />
      <img src={placeholder} alt="placeholder" />
    </>
  ),
};
