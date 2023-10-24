import "fontsource-roboto";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";
// import './style.scss'; // Global style SCSS

import Artist from "./artist/Artist";
import Contact from "./contact/Contact";
import Cours from "./cours/Cours";
import Footer from "./footer/Footer";
import Galerie from "./galerie/Galerie";
import Header from "./header/Header";
import Essai from "./presse/Essai";
import Presse from "./presse/Presse";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ea1c1c",
    },
  },
});

theme = responsiveFontSizes(theme);

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/">
                <Artist />
              </Route>
              <Route exact path="/galerie">
                <Galerie />
              </Route>
              <Route exact path="/presse">
                <Presse />
              </Route>
              <Route exact path="/cours">
                <Cours />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/essai">
                <Essai />
              </Route>
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
