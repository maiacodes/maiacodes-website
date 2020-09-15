import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Pages
import NoMatch from "./pages/404"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/About"
import ProjectsPage from "./pages/Projects"
import ContactPage from "./pages/Contact"
import MenuPage from "./pages/Menu"
import EekumBokum from "./pages/EekumBokum"

// Comps
import NavBar from './components/NavBar'

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/menu">
            <MenuPage />
          </Route>
          <Route exact path="/eekumbokum">
            <EekumBokum />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

