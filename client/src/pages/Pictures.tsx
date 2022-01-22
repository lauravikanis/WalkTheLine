import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getLocationByName } from "../api/locations";
import classes from "./Pictures.module.scss";

const Pictures: any = () => {
  const name = useParams();
  const pictureName = name;

  const {
    isLoading,
    error,
    data: locationByName,
  } = useQuery(name, getLocationByName);

  if (isLoading) {
    return <p>Inhalt wird geladen</p>;
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error}`;
  }

  const filterByPicName = locationByName.pic;

  const picDetails = filterByPicName.filter((onePic) =>
    onePic.name.includes(pictureName)
  );

  return (
    <div className={classes.pictures}>
      <h2>{picDetails[0].name}</h2>
      <div className={classes.pictureContainer}>
        <img src={picDetails[0].link} alt={picDetails[0].name} />
      </div>
      <p> {picDetails[0].description}</p>
    </div>
  );
};

export default Pictures;
