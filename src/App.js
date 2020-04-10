import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./global";
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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        <BrowserRouter>
          <MainNav></MainNav>
          <br></br>
          <br></br>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/menu" component={Menu} exact />
              <Route path="/Jobs" component={Jobs} exact />
              <Route path="/apply" component={Apply} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/faq" component={FAQ} />
              <Route path="/tos" component={TOS} />
              <Route component={Error} />
            </Switch>
          </div>
          <FooterNav></FooterNav>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
