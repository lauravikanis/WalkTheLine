import styled from "styled-components/macro";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  border-radius: 15px;
  width: 100%;
  height: 100px;
  margin: 15px auto;
  padding: 0 2.5rem;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};

  h2 {
    color: var(--secondary-color);
    text-align: left;
  }
  img {
    width: 50px;
    height: 50px;
    margin-left: 30px;
  }

  p {
    color: var(--secondary-color);
    text-align: center;
    display: inline-block;
  }
`;

export default Card;