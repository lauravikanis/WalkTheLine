import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import UploadPreview from "../components/Image/UploadPreview";
import { useParams } from "react-router-dom";

import Input from "../components/Input/Input";
import { uploadImage } from "../api/image";
import UploadDiv from "../components/Upload/UploadDiv";
import ButtonWrapper from "../components/Upload/ButtonWrapper";
import toast, { Toaster } from "react-hot-toast";
import Button from "components/Button/Button";

const PictureUpload = () => {
  const locationname = useParams();

  const [uploadInput, setUploadInput] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [uploadNameInput, setUploadNameInput] = useState("");
  const [uploadDetailInput, setUploadDetailInput] = useState("");
  const history = useHistory();

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    previewFile(file);
    setUploadInput(event.target.value);
  };

  const previewFile: any = (file: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
  };

  const handleSubmit: any = async (event: any) => {
    event.preventDefault();
    if (!previewSrc) {
      console.log("No preview file");
      toast.error("Bitte wähle ein Bild");
    }
    if (!uploadNameInput || !uploadDetailInput) {
      console.log("Please a name and a description");
      toast.error(
        "Bitte wähle einen Namen für dein Bild und eine Beschreibung"
      );
    }

    if (previewSrc && locationname && uploadNameInput && uploadDetailInput) {
      await uploadImage(
        previewSrc,
        locationname,
        uploadNameInput,
        uploadDetailInput
      );
      setUploadInput("");
      setPreviewSrc("");
      history.goBack();
    }
  };

  return (
    <UploadDiv>
      <h2>Upload</h2>
      <Toaster />
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
        <p> Bitte gib deinem Bild einen Namen und eine Beschreibung.</p>
        {previewSrc && <UploadPreview src={previewSrc} alt="" />}
        <div>{previewSrc && <Button type="submit" upload />}</div>
      </form>
    </UploadDiv>
  );
};

export default PictureUpload;
