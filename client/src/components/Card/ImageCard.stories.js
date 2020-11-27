import React from "react";
import ImageCard from "./ImageCard";
import platzhalter from "../../assets/platzhalter.jpeg";

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
      <img src={platzhalter} alt="Platzhalter" />
      <img src={platzhalter} alt="Platzhalter" />
      <img src={platzhalter} alt="Platzhalter" />
      <img src={platzhalter} alt="Platzhalter" />
      <img src={platzhalter} alt="Platzhalter" />
      <img src={platzhalter} alt="Platzhalter" />
    </>
  ),
};
