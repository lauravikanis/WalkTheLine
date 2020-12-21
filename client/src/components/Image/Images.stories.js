import React from "react";

import Image from "./Image";

export default {
  title: "Components/Images",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const image = Template.bind({});
image.args = {
  src:
    "https://res.cloudinary.com/walktheline/image/upload/v1608287498/gewoelbe/19402138_1542682105776287_1147230192623484598_o_db9wgw.jpg",

  alt: "Köln West",
  picname: "Köln West",
  locationname: "Gewölbe",
};
