import React from "react";
import Card from "./Card";
import tourPath from "../../assets/tour.svg";
import electronicaPath from "../../assets/electronica.svg";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Tour = Template.bind({});
Tour.args = {
  primary: true,
  children: (
    <>
      <h2>TOUR</h2>
      <img src={tourPath} alt="touricon" />
    </>
  ),
};

export const Electronica = Template.bind({});
Electronica.args = {
  primary: false,
  children: (
    <>
      <h2>ELECTRONICA</h2>
      <img src={electronicaPath} alt="touricon" />
    </>
  ),
};

export const Location = Template.bind({});
Location.args = {
  count: false,
  children: (
    <p>
      Name <br /> Address, <br />
      City + postcode <br />
      OpeningHours
    </p>
  ),
};
