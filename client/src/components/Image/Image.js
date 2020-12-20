import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageContainer = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  max-width: 100%;
  padding: 2px;
  margin-top: 15px;

  img {
    max-width: 100%;
    border-radius: 15px;
    object-fit: scale-down;
  }
`;

const Image = ({ src, alt, picname, locationName }) => {
  return (
    <ImageContainer to={`/location/${locationName}/${picname}`}>
      <img src={src} alt={alt} picname={picname} locationname={locationName} />
    </ImageContainer>
  );
};
export default Image;
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  picname: PropTypes.string,
  locationName: PropTypes.string,
};
