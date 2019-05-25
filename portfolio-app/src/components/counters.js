import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     counters: [
  //       {
  //         id: 1,
  //         value: 0
  //       },
  //       {
  //         id: 2,
  //         value: 0
  //       },
  //       {
  //         id: 3,
  //         value: 0
  //       },
  //       {
  //         id: 4,
  //         value: 0
  //       }
  //     ]
  //   };

  //   handleIncrement = counter => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     // make a copy of the individual counter
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters: counters });
  //   };

  //   handleDelete = counterId => {
  //     const counters = this.state.counters.filter(c => c.id !== counterId);
  //     this.setState({ counters: counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map(c => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters: counters });
  //   };

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
