import React from "react";
import { useHistory } from "react-router";
import { useTheme } from "styled-components/macro";
import Backarrow from "../../assets/back.svg";
import { ReactComponent as FavOff } from "../../assets/favorite_off.svg";
import { ReactComponent as FavOn } from "../../assets/favorite_on.svg";
import { ReactComponent as TogglerDark } from "../../assets/night-mode.svg";
import { ReactComponent as Toggler } from "../../assets/sun.svg";
import "./button.css";

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
      <button onClick={onClick} className="button_favorite">
        {isFavorite ? <FavOn /> : <FavOff />}
      </button>
    );
  };

  const renderThemeToggle = () => {
    return (
      <button onClick={onClick} className="button_theme">
        {themepicker === "light" ? <Toggler /> : <TogglerDark />}
      </button>
    );
  };

  const renderUploadButton = () => {
    return (
      <button type={type} className="button_upload">
        Daten hochladen
      </button>
    );
  };

  const renderBackButton = () => {
    return (
      <button onClick={() => history.goBack()} className="button_back">
        <img src={Backarrow} alt="Go back" />
      </button>
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
