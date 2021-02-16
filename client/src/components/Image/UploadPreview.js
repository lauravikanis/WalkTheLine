import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Display = styled.div`
  background: ${(props) => props.theme.bg};
  height: 50vw;
  width: 50vw;
  margin: 1rem auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    height: 50vh;
    width: 50vh;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    height: 50vh;
    width: 50vh;
  }
`;
const PreviewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const UploadPreview = ({ src, alt }) => {
  return (
    <Display>
      <PreviewImage src={src} alt={alt} />
    </Display>
  );
};

export default UploadPreview;

UploadPreview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
