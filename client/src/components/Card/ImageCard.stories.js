import React from "react";
import ImageCard from "./ImageCard";
import placeholder from "../../assets/icon_blue.png";

export default {
  title: "Components/Card_Image",
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
