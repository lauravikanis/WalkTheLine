import React from "react";
// import Page from "./pages/Page";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import Splashscreen from "./pages/Splashscreen";

const Main = styled.main`
  padding: 1rem;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Splashscreen />
      <a href="/storybook">To Storybook</a>
    </Main>
  );
}

export default App;
