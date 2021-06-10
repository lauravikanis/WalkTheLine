import React from "react";
import styled, { useTheme } from "styled-components/macro";
import { ReactComponent as Toggler } from "../../assets/sun.svg";
import { ReactComponent as TogglerDark } from "../../assets/night-mode.svg";
import { ReactComponent as FavOn } from "../../assets/favorite_on.svg";
import { ReactComponent as FavOff } from "../../assets/favorite_off.svg";
import Backarrow from "../../assets/back.svg";
import { useHistory } from "react-router";

export const IconButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  color: grey;
  background: none;
  transition: 0.5s;

  svg {
    width: 100%;
    max-width: 70px;

    height: 100%;
    padding: 0;
    margin: 0;
    margin-right: 1rem;
  }
`;
const FavoriteIcon: any = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;
const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 15px;
  border: none;
  height: 50px;
  margin: 15px auto;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;

  :active {
    background-color: white;
    color: var(--primary-color);
  }
`;

const Back: any = styled.button`
  padding: 0 2rem;
  border: none;
  background: none;

  img {
    height: 55px;
    padding-bottom: 0;
  }
`;

const Button: any = ({
  onClick,
  isFavorite,
  favorite,
  theme,
  upload,
  type,
  backbutton,
}: any) => {
  const themepicker = Object.entries(useTheme())[0][1];
  const history = useHistory();

  return (
    <>
      {favorite && (
        <FavoriteIcon onClick={onClick} favorite={isFavorite}>
          {isFavorite ? <FavOn /> : <FavOff />}
        </FavoriteIcon>
      )}
      {theme && (
        <IconButton onClick={onClick}>
          {themepicker === "light" ? <Toggler /> : <TogglerDark />}
        </IconButton>
      )}
      {upload && <UploadButton type={type}>Daten hochladen</UploadButton>}
      {backbutton && (
        <Back onClick={() => history.goBack()}>
          <img src={Backarrow} alt="Go back" />
        </Back>
      )}
    </>
  );
};
export default Button;
