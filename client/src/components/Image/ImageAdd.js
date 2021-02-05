import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import imageAddpath from "../../assets/photo.svg";

const UploadContainer = styled(Link)`
  /* object-fit: scale-down; */
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 5px;
    object-fit: cover;
  }
`;

const AddImage = ({ locationname }) => {
  return (
    <UploadContainer to={`/upload/${locationname}`}>
      <img src={imageAddpath} alt="pictureupload" locationName={locationname} />
    </UploadContainer>
  );
};
export default AddImage;

AddImage.propTypes = {
  src: PropTypes.string,
  locationname: PropTypes.string,
};
