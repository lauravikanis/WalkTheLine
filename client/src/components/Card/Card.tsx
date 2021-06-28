import "./card.css";

const Card: any = ({ name, src, alt }: any) => {
  return (
    <div className="card_basic">
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
