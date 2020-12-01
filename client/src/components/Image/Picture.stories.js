import React from "react";
import placeholder from "../../assets/placeholder.jpeg";
import PictureContainer from "./Picture";

export default {
  title: "Components/Pictures",
  component: PictureContainer,
};

const Template = (args) => <PictureContainer {...args} />;

export const placeholderPic = Template.bind({});
placeholderPic.args = {
  children: <img src={placeholder} alt="placeholder" />,
};
