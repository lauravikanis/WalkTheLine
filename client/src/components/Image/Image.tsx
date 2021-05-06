import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const ImageContainer = styled(Link)`
  object-fit: scale-down;

  img {
    width: 6rem;
    height: 6rem;
    margin: 5px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const Image: any = ({ src, alt, picName, locationName }) => {
  console.log(picName);
  return (
    <ImageContainer to={`/location/${locationName}/${picName}`}>
      <img src={src} alt={alt} {...picName} locationName={locationName} />
    </ImageContainer>
  );
};
export default Image;
