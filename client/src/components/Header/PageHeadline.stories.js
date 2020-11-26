import React from "react";
import PageHeadline from "./PageHeadline";

export default {
  title: "Components/Header",
  component: PageHeadline,
};

// export const pageHeader = () => <PageHeadline />;

const Template = (args) => <PageHeadline {...args} />;

export const Choice = Template.bind({});
Choice.args = {
  children: "Page Headline",
};
