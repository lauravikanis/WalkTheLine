import styled from "styled-components/macro";

const WarnNote = styled.div`
  padding: 0;
  background: var(--favorite-color);
  border: none;
  text-align: center;
  padding: 1rem;
  border-radius: 15px;
  margin: 15px auto;
  h4 {
    color: white;
    margin-top: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  p {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.25rem;
    margin-bottom: 0;
  }
`;

const CoronaNote = () => {
  return (
    <WarnNote>
      <h4> ! Achtung ! </h4>
      <p>
        Auf Grund der aktuellen Corvid-19 Pandemie sind die meisten der hier
        gelisteten Locations aktuell geschlossen. Ein Ende der Pandemie ist
        leider noch nicht in Sicht. Damit die Locations bald wieder aufmachen
        können bitten wir euch, euch an die geltenden Abstand und
        Hygienemaßnahmen zu halten. Damit wir bald wieder zusammen Konzerte und
        Partys besuchen können.
      </p>
    </WarnNote>
  );
};

export default CoronaNote;
