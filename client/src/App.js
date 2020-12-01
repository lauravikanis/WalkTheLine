import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Choice from "./pages/Choice";
import Tour from "./pages/Tour";
import Location from "./pages/Location";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Pictures from "./pages/Pictures";
import Splashscreen from "./pages/Splashscreen";
import Header from "./components/Header/Header";

// const Main = styled.main`
//   padding: 1rem;
//   max-width: 375px;
//   display: flex;
//   flex-direction: column;
//   margin: auto;
// `;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/splashscreen">
          <Splashscreen />
        </Route>
        <Route path="/choice">
          <Choice />
        </Route>
        <Route path="/tour">
          <Tour />
        </Route>
        <Route path="/location">
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <a href="/storybook">To Storybook</a>
    </Router>
  );
}

export default App;
