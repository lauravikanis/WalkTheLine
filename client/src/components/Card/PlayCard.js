import styled from "styled-components/macro";

const PlayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: var(--primary-color);
  border-radius: 15px;
  width: 100%;
  height: 100px;
  padding: 1rem 2.5rem;
  color: var(--secondary-color);

  img {
    width: 40px;
    margin-left: 2rem;
    margin-top: 0.5rem;
  }
`;

export default PlayCard;
