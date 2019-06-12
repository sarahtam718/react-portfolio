import React, { Component } from "react";
import "./App.css";
import About from "./components/about.js";
import Footer from "./components/footer.js";
// import PortCard from "./components/portfolio/portfolio-card.js";
// import cardData from "./components/portfolio/cardData.json";
import Navbar from "./components/navbar.js";
import JumbotronPortfolio from "./components/portfolio/jumbotronPortfolio.js";

document.body.style = "background-color: #613A43;";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <About />
          <JumbotronPortfolio />
          <div style={{ marginTop: 40 }}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
