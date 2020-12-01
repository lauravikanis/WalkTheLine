import styled from "styled-components/macro";

const PictureContainer = styled.div`
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

export default PictureContainer;
