import React from "react";
import styled from "styled-components/macro";

const LoadNote: any = styled.div`
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

const LoadingNote: any = () => {
  return (
    <LoadNote>
      <h4> Loading... </h4>
    </LoadNote>
  );
};

export default LoadingNote;
