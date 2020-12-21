import React from "react";
import DetailCard from "./DetailCard";

export default {
  title: "Components/Card_Detail",
  component: DetailCard,
};

const Template = (args) => <DetailCard {...args} />;

export const detailCard = Template.bind({});
detailCard.args = {
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
