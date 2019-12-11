import React, { Component } from 'react';
import PortCard from './portfolio-card.js';
import cardData from './cardData.json';

class JumbotronPortfolio extends Component {
  state = {
    active: null
  };

  setActive = option => {
    this.setState({ active: option });
  };

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Portfolio</h1>
        {this.state.active === null ? (
          <div className='card-container'>
            {cardData.map(project => (
              <PortCard
                obj={project}
                key={project.id}
                handleActive={this.setActive}
              />
            ))}
          </div>
        ) : (
          <h1 onClick={() => this.setActive(null)}>Hello - True</h1>
          // show only one card's data
          // we know the id because state is active: id
          // cardData[this.state.active] would give me that object
          // pass in each item in object as props & display
        )}
      </div>
    );
  }
}

export default JumbotronPortfolio;
