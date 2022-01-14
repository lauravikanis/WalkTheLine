import React from "react";
import { Link } from "react-router-dom";
import classes from "./Image.module.scss";

interface ImageContainerProps {
  src: string;
  alt: string;
  picName: string;
  locationName: string;
}

const Image = ({ src, alt, picName, locationName }: ImageContainerProps) => {
  return (
    <Link
      className={classes.imageContainer}
      to={`/location/${locationName}/${picName}`}
    >
      <img src={src} alt={alt} {...picName} locationName={locationName} />
    </Link>
  );
};
export default Image;
