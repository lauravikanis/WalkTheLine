import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import UploadPreview from "../components/Image/UploadPreview";
import { useParams } from "react-router-dom";

import { PageHeadline } from "../imports";
import Input from "../components/Input/Input";
import { uploadImage } from "../api/image";

const UploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  text-align: center;
  p {
    font-size: 0.75rem;
  }
`;

const UploadButton = styled.button`
  background: linear-gradient(160deg, var(--active), var(--active-gradient));
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const PictureUpload = () => {
  const locationname = useParams();

  const [uploadInput, setUploadInput] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [uploadNameInput, setUploadNameInput] = useState("");
  const [uploadDetailInput, setUploadDetailInput] = useState("");
  const history = useHistory();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    setUploadInput(event.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!previewSrc) {
      console.log("No preview file");
    }
    await uploadImage(
      previewSrc,
      locationname,
      uploadNameInput,
      uploadDetailInput
    );
    setUploadInput("");
    setPreviewSrc("");
    history.goBack();
  };

  return (
    <UploadDiv>
      <PageHeadline>Upload</PageHeadline>
      <form onSubmit={handleSubmit}>
        <ButtonWrapper>
          <input
            type="file"
            placeholder="Bild"
            value={uploadInput}
            onChange={handleImageChange}
          />
        </ButtonWrapper>
        <Input
          placeholder="Bildname"
          type="text"
          value={uploadNameInput}
          onChange={(event) => {
            setUploadNameInput(event.target.value);
          }}
        />
        <Input
          placeholder="Bildbeschreibung"
          type="text"
          value={uploadDetailInput}
          onChange={(event) => {
            setUploadDetailInput(event.target.value);
          }}
        />
        {previewSrc && <UploadPreview src={previewSrc} alt="" />}
        <div>
          {previewSrc && (
            <UploadButton type="submit">Daten hochladen</UploadButton>
          )}
        </div>
      </form>
      <p> Bitte gib deinem Bild einen Namen und eine Beschreibung.</p>
    </UploadDiv>
  );
};

export default PictureUpload;
