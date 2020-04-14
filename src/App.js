import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Jobs from "./components/Jobs";
import Apply from "./components/Apply";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Error from "./components/Error";
import FAQ from "./components/FAQ";
import TOS from "./components/TOS";
import FooterNav from "./components/Nav/footer-nav";
import MainNav from "./components/Nav/main-nav";
import { ThemeProvider } from "styled-components";
import theme from "./components/theme";
import "./style.scss";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <MainNav></MainNav>
          <br></br>
          <br></br>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/Jobs" component={Jobs} />
              <Route exact path="/apply" component={Apply} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/tos" component={TOS} />
              <Route component={Error} />
            </Switch>
          </div>
          <FooterNav></FooterNav>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
