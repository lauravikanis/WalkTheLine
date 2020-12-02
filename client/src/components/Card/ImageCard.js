import styled from "styled-components/macro";

const ImageCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 15px auto;

  img {
    width: 5rem;
    height: 5rem;
    margin: 5px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

export default ImageCard;
