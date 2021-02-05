import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import imageAddpath from "../../assets/photo.svg";

const UploadContainer = styled(Link)`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    margin: 5px;
    border-radius: 15px;
  }
`;

const AddImage = ({ locationname }) => {
  return (
    <UploadContainer to={`/upload/${locationname}`}>
      <img src={imageAddpath} alt="Upload" locationName={locationname} />
    </UploadContainer>
  );
};
export default AddImage;

AddImage.propTypes = {
  src: PropTypes.string,
  locationname: PropTypes.string,
};
