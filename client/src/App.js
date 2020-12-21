import React, { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choice from "./pages/Choice";
import Tour from "./pages/Tour";
import Location from "./pages/Location";
import Search from "./pages/Search";
import MapPage from "./pages/Map";

import Favorites from "./pages/Favorites";
import Pictures from "./pages/Pictures";
import Splashscreen from "./pages/Splashscreen";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [page, setPage] = useState(true);

  useEffect(() => {
    setTimeout(() => setPage(false), 1000);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Switch>
          <Route exact path="/">
            {page ? <Splashscreen /> : <Home />}
          </Route>
          <Route path="/choice">
            <Choice />
          </Route>
          <Route path="/tour/:tourname">
            <Tour />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/location/:name/:pic">
            <Pictures />
          </Route>
          <Route path="/location/:name">
            <Location />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
