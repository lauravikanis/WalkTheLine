import React from "react";
import Form from "./Form";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const typeForm = Template.bind({});
typeForm.args = {
  checked: false,
  children: (
    <>
      <label>
        option3
        <input type="radio" />
      </label>
      <label>
        option2
        <input type="radio" />
      </label>
      <label>
        option3
        <input type="radio" />
      </label>
    </>
  ),
};
