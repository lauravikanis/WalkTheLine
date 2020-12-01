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
  max-width: 600px;
`;

const Pictures = () => {
  return (
    <PicturesDiv>
      <PageHeadline>Bildname</PageHeadline>
      <PictureContainer>
        <img src={placeholder} alt="placeholder" />
      </PictureContainer>
      <p>
        Bildbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. <hr />
        Du willst dich mir Bildmaterial beteiligen? Dann klick hier
      </p>
      <Button active>Bild Upload</Button>
    </PicturesDiv>
  );
};

export default Pictures;
