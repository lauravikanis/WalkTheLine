import React from "react";

import Image from "./Image";
import PictureContainer from "./PictureContainer";

export default {
  title: "Components/PictureContainers",
  component: PictureContainer,
};

const Template = (args) => <PictureContainer {...args} />;

export const pictureContainer = Template.bind({});
pictureContainer.args = {
  children: (
    <>
      <Image
        src={
          "https://res.cloudinary.com/walktheline/image/upload/v1608287498/gewoelbe/19402138_1542682105776287_1147230192623484598_o_db9wgw.jpg"
        }
        alt={"Köln West"}
        picname={"Köln West"}
        locationname={"Gewölbe"}
      />
      <Image
        src={
          "https://res.cloudinary.com/walktheline/image/upload/v1608287498/gewoelbe/19402138_1542682105776287_1147230192623484598_o_db9wgw.jpg"
        }
        alt={"Köln West"}
        picname={"Köln West"}
        locationname={"Gewölbe"}
      />
      <Image
        src={
          "https://res.cloudinary.com/walktheline/image/upload/v1608287498/gewoelbe/19402138_1542682105776287_1147230192623484598_o_db9wgw.jpg"
        }
        alt={"Köln West"}
        picname={"Köln West"}
        locationname={"Gewölbe"}
      />
    </>
  ),
};
