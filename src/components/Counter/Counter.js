import React, { Component } from "react";
import Controls from "./Controls";
import Value from "./Value";
import "./Counter.css";

class Counter extends Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {};

  handleDecrement = () => {};

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
