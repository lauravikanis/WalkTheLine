import styled from "styled-components/macro";

const LocationList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin-bottom: 1.75rem;

  a {
    color: var(--secondary-color);
  }
`;

export default LocationList;
