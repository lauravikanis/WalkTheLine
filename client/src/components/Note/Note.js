import styled from "styled-components/macro";

const WarnNote = styled.div`
  padding: 0;
  background: var(--favorite-color);
  border: none;
  text-align: center;
  padding: 1rem;
  border-radius: 15px;
  h5 {
    color: white;
    margin: 0;
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
      <h5> ! Achtung ! </h5>
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
