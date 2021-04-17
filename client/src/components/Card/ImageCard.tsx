import styled from "styled-components/macro";

const ImageCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 15px auto;

  p {
    font-size: 0.75rem;
    display: flex;
    width: 30%;
  }
`;

export default ImageCard;
