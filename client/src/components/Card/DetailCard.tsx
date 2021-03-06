import styled from "styled-components/macro";

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.bgDetailCard};
  border-radius: 15px;
  width: 100%;
  min-height: 50px;
  margin: 15px auto;
  padding: 0.5rem 2.5rem;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};

  p {
    color: var(--secondary-color);
    text-align: center;
    align-self: center;
    font-size: 16p;
    margin: 3px auto;
  }
`;

export default DetailCard;
