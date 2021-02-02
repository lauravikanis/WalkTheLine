import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UploadContainer = styled(Link)`
  object-fit: scale-down;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 5px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const AddImage = ({ src, alt, picname, locationname }) => {
  return (
    <UploadContainer to={`/upload/${locationname}`}>
      <img src={src} alt={alt} picname={picname} locationName={locationname} />
    </UploadContainer>
  );
};
export default AddImage;

AddImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  picname: PropTypes.string,
  locationname: PropTypes.string,
};
