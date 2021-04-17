import React, { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choice from "./pages/Choice";
import Tour from "./pages/Tour";
import Location from "./pages/Location";
import Search from "./pages/Search";
import MapPage from "./pages/Map";
import Disclaimer from "./pages/Disclaimer";

import Favorites from "./pages/Favorites";
import Pictures from "./pages/Pictures";
import PictureUpload from "./pages/PictureUpload";

import Splashscreen from "./pages/Splashscreen";
import styled from "styled-components";
import useStorage from "./hooks/useStorage";
import { dark, light } from "./utils/theme";
import Header from "./components/Header/Header";

const Main: any = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [page, setPage] = useState(true);
  const [storedValue, setStoredValue] = useStorage("theme", "light");

  useEffect(() => {
    setTimeout(() => setPage(false), 1000);
  }, []);

  const handleChangeTheme = () => {
    setStoredValue(storedValue === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <ThemeProvider theme={storedValue === "dark" ? dark : light}>
        <GlobalStyle />
        <Main>
          {page ? <></> : <Header toggleTheme={handleChangeTheme} />}
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
            <Route path="/upload/:name">
              <PictureUpload />
            </Route>
            <Route path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route path="/map">
              <MapPage />
            </Route>
          </Switch>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
