import styled from "styled-components/macro";
import PropTypes from "prop-types";

const PageHeadline = styled.h2`
  text-align: center;
`;
PageHeadline.propTypes = {
  primary: PropTypes.bool,
};

export default PageHeadline;
