import classes from "./Card.module.scss";

interface Cardprops {
  name: string;
  src: string;
  alt: string;
  type?: string;
}

const Card = ({ name, src, alt }: Cardprops) => {
  return (
    <div className={classes.card_basic}>
      {name && (
        <>
          <h2>{name}</h2>
          <img src={src} alt={alt} />
        </>
      )}
    </div>
  );
};

export default Card;
