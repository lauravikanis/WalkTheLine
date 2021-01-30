import React from "react";
import styled from "styled-components/macro";

import placeholder from "../assets/search.svg";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

import { PageHeadline, PictureContainer } from "../imports";

const UploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  text-align: center;
`;

const PictureUpload = () => {
  return (
    <UploadDiv>
      <PageHeadline>Upload</PageHeadline>
      <PictureContainer>
        <img src={placeholder} alt="placeholder" />
      </PictureContainer>
      <Input placeholder="Bildname" />
      <Input placeholder="Bildbeschreibung" />
      <Button value="Upload" type="button" onClick="handleClick" />
    </UploadDiv>
  );
};

export default PictureUpload;
