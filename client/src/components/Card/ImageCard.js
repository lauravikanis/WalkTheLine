import styled from "styled-components/macro";

const ImageCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  height: 100px;
  margin: 15px auto;
  padding: 0 2.5rem;

  img {
    max-width: 5rem;
    max-height: 5rem;
    margin: 5px;
    border-radius: 15px;
  }
`;

export default ImageCard;
