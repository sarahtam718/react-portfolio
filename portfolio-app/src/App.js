import React, { Component } from "react";
import "./App.css";
import About from "./components/about/about.js";
import Footer from "./components/footer.js";
import Portfolio from "./components/portfolio-card.js";
// import List from "./components/list.js";

class App extends Component {
  state = {};

  render() {
    console.log("rendered");
    return (
      <div className="container">
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
