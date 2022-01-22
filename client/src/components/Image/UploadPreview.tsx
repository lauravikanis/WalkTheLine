import React from "react";
import classes from "./uploadPreview.module.scss";

interface uploadProps {
  src: string;
  alt: string;
}

const UploadPreview = ({ src, alt }: uploadProps) => {
  return (
    <div className={classes.display}>
      <img className={classes.previewImage} src={src} alt={alt} />
    </div>
  );
};

export default UploadPreview;
