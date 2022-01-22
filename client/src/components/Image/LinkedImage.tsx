import React from "react";
import { Link } from "react-router-dom";
import imageAddpath from "../../assets/photo.svg";
import classes from "./LinkedImage.module.scss";

interface ImageContainerProps {
  pictureSrc?: string;
  alt: string;
  picName: string;
  locationName: string;
}

export const LinkedImage = ({
  pictureSrc,
  alt,
  picName,
  locationName,
}: ImageContainerProps) => {
  const pathSwitch = pictureSrc
    ? `/location/${locationName}/${picName}`
    : `/upload/${locationName}`;

  return (
    <Link className={classes.imageContainer} to={pathSwitch}>
      <img
        src={pictureSrc ? pictureSrc : imageAddpath}
        alt={alt}
        {...picName}
        locationName={locationName}
      />
    </Link>
  );
};
export default LinkedImage;
