import React, { Component } from "react";
import "./App.css";
import About from "./components/about-me.js";
import Footer from "./components/footer.js";
import Portfolio from "./components/portfolio-card";

class App extends Component {
  state = {};

  render() {
    console.log("rendered");
    return (
      <div>
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
