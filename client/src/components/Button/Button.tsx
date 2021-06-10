import React from "react";
import styled, { useTheme } from "styled-components/macro";
import { ReactComponent as Toggler } from "../../assets/sun.svg";
import { ReactComponent as TogglerDark } from "../../assets/night-mode.svg";
import { ReactComponent as FavOn } from "../../assets/favorite_on.svg";
import { ReactComponent as FavOff } from "../../assets/favorite_off.svg";
import Backarrow from "../../assets/back.svg";
import { useHistory } from "react-router";

const IconButton = styled.button`
  margin: 0;
  padding: 0;
  color: grey;
  background: none;
  transition: 0.5s;
  border: none;

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
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
  border: none;
`;
const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 15px;
  height: 50px;
  margin: 15px auto;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;

  :active {
    background-color: white;
    color: var(--primary-color);
  }
`;

const Back = styled.button`
  padding: 0 2rem;
  background: none;
  border: none;

  img {
    height: 55px;
    padding-bottom: 0;
  }
`;

const Button: React.ElementType = ({
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

  const rendeFavoriteButton = () => {
    return (
      <FavoriteIcon onClick={onClick}>
        {isFavorite ? <FavOn /> : <FavOff />}
      </FavoriteIcon>
    );
  };

  const renderThemeToggle = () => {
    return (
      <IconButton onClick={onClick}>
        {themepicker === "light" ? <Toggler /> : <TogglerDark />}
      </IconButton>
    );
  };

  const renderUploadButton = () => {
    return <UploadButton type={type}>Daten hochladen</UploadButton>;
  };

  const renderBackButton = () => {
    return (
      <Back onClick={() => history.goBack()}>
        <img src={Backarrow} alt="Go back" />
      </Back>
    );
  };

  return (
    <>
      {favorite && rendeFavoriteButton()}
      {theme && renderThemeToggle()}
      {upload && renderUploadButton()}
      {backbutton && renderBackButton()}
    </>
  );
};
export default Button;
