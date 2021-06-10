import styled from "styled-components/macro";

const Cardwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--primary-color); */
  background: ${(props) => props.theme.cardBackground};

  border-radius: 15px;
  width: 100%;
  height: 100px;
  margin: 15px auto;
  padding: 0 2.5rem;
  color: var(--secondary-color);

  h2 {
    color: var(--secondary-color);
    text-align: left;
  }
  img {
    width: 50px;
    height: 50px;
    margin-left: 30px;
  }

  p {
    text-align: center;
    display: inline-block;
  }
`;

const Card: any = ({ name, src, alt }: any) => {
  return (
    <Cardwrapper>
      {name && (
        <>
          <h2>{name}</h2>
          <img src={src} alt={alt} />
        </>
      )}
    </Cardwrapper>
  );
};

export default Card;
