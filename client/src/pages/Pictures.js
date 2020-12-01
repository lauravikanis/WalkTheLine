import React from "react";
import styled from "styled-components/macro";
import Button from "../components/Button/Button";
import placeholder from "../assets/placeholder.jpeg";

import PageHeadline from "../components/Header/PageHeadline";
import PictureContainer from "../components/Image/Picture";

const PicturesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Pictures = () => {
  return (
    <PicturesDiv>
      <PictureContainer>
        <img src={placeholder} alt="placeholder" />
      </PictureContainer>
      <PageHeadline>Suche</PageHeadline>
      <p>
        Der Dom. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.{" "}
      </p>
      <hr />
      <p>Du willst dich mir Bildmaterial beteiligen? Dann klick hier</p>
      <Button active>Bild Upload</Button>
    </PicturesDiv>
  );
};

export default Pictures;
