import styled from "styled-components/macro";

const PlayCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.detailCard};
  border-radius: 15px;
  width: 100%;
  padding: 0.75rem 2.5rem;
  color: var(--secondary-color);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  img {
    width: 80px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.25rem;
    align-items: center;
    justify-content: center;
  }
`;

export default PlayCard;
