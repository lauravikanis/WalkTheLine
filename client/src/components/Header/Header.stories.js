import React from "react";
import Header from "./Header";
import PageHeadline from "./PageHeadline";

export default {
  title: "Components/Header",
  component: Header,
};

export const header = () => <Header />;

const Template = (args) => <PageHeadline {...args} />;

export const pageHeadline = Template.bind({});
pageHeadline.args = {
  children: "Page Headline",
};
