import * as React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import imageAddpath from "../../assets/photo.svg";

const UploadContainer: any = styled(Link)`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    margin: 5px;
    border-radius: 15px;
  }
`;

const AddImage: any = (locationName: any) => {
  return (
    <UploadContainer to={`/upload/${locationName}`}>
      <img src={imageAddpath} alt="Upload" />
    </UploadContainer>
  );
};
export default AddImage;
