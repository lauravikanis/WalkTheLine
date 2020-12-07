import React from "react";
import DetailCard from "./LocationDetails";

export default {
  title: "Components/DetailCard",
  component: DetailCard,
};

const Template = (args) => <DetailCard {...args} />;

export const details = Template.bind({});
details.args = {
  visibility: true,
  children: (
    <>
      <p>Name</p>
      <p>Straße Hausnummer</p>
      <p>Stadt PLZ</p>
      <p>Öfnungszeiten</p>
    </>
  ),
};
