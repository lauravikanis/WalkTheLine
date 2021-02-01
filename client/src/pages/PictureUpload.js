import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

// import Button from "../components/Button/Button";
import UploadPreview from "../components/Image/UploadPreview";
import Input from "../components/Input/Input";

import { PageHeadline } from "../imports";

const UploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  text-align: center;
`;

const UploadButton = styled.button`
  background: linear-gradient(160deg, var(--active), var(--active-gradient));
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageInput = styled.input`
  font-size: 1.5rem;
  border-radius: 50%;
  width: 100%;
  position: absolute;
  z-index: 1;
`;
const InputButton = styled.button`
  color: var(--light);
  background: var(--active);
  position: relative;
  z-index: 2;
  pointer-events: none;
`;

const PictureUpload = () => {
  const [uploadInput, setUploadInput] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const history = useHistory();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    previewFile(file);
    setUploadInput(event.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
      console.log(reader.result);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!previewSrc) {
      console.log("No preview file");
    }
    await uploadImage(previewSrc);
    history.push("/tagging");
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ image: base64EncodedImage, userName: "sven" }),
        headers: { "Content-Type": "application/json" },
      });
      setUploadInput("");
      setPreviewSrc("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UploadDiv>
      <PageHeadline>Upload</PageHeadline>
      <form onSubmit={handleSubmit}>
        <ButtonWrapper>
          <InputButton
            style={{
              background: previewSrc
                ? "var(--background)"
                : "linear-gradient(160deg, var(--active), var(--active-gradient))",
            }}
            htmlFor="upload"
          >
            Bild auswählen
          </InputButton>
          <ImageInput
            type="file"
            value={uploadInput}
            onChange={handleImageChange}
          />
        </ButtonWrapper>
        <Input placeholder="Bildname" />
        <Input placeholder="Bildbeschreibung" />
        {previewSrc && <UploadPreview src={previewSrc} alt="" />}
        <div>
          {previewSrc && (
            <UploadButton type="submit">Bild hochladen</UploadButton>
          )}
        </div>
      </form>
    </UploadDiv>
  );
};

export default PictureUpload;
