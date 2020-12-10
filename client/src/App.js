import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choice from "./pages/Choice";
import Tour from "./pages/Tour";
import Location from "./pages/Location";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Pictures from "./pages/Pictures";
import Splashscreen from "./pages/Splashscreen";
import Header from "./components/Header/Header";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Main>
        <Switch>
          <Route path="/splashscreen">
            <Splashscreen />
          </Route>
          <Route path="/choice">
            <Choice />
          </Route>
          <Route path="/tour/:tourname">
            <Tour />
          </Route>
          <Route path="/location/:name">
            <Location />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/pictures">
            <Pictures />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/map">{/* <Map /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <a href="/storybook">To Storybook</a>
      </Main>
    </Router>
  );
}

export default App;
