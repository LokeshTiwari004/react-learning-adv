import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCount}>
        {this.props.name} Clicked {this.props.count} Times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
