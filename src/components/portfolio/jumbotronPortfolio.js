import React, { Component } from "react";
import PortCard from "./portfolio-card.js";
import cardData from "./cardData.json";

class JumbotronPortfolio extends Component {
  render() {
    console.log("jumbo rendered");
    return (
      <div className="px-4">
        <div
          class="jumbotron shadow"
          style={{ backgroundColor: "#f8f9fa", color: "#613A43" }}
        >
          <div class="container">
            <h1 class="display-4">Portfolio</h1>
            <div className="d-flex flex-wrap justify-content-center">
              {cardData.map(project => (
                <PortCard obj={project} key={project.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronPortfolio;
