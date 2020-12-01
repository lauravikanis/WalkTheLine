import styled from "styled-components/macro";
import Backarrow from "../../assets/back.svg";
import { useHistory } from "react-router-dom";

const Back = styled.button`
  /* height: 55px; */
  padding: 0 2rem;
  border: none;

  img {
    height: 55px;
    padding-bottom: 0;
  }
`;

const BackButton = () => {
  const history = useHistory();

  return (
    <Back onClick={() => history.goBack()}>
      <img src={Backarrow} alt="Go back" />
    </Back>
  );
};
export default BackButton;
