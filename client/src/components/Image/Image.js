import styled from "styled-components/macro";
import PropTypes from "prop-types";
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