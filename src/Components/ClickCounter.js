import React, { Component } from "react";
import updatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCount}>
        Clicked {this.props.count} Times
      </button>
    );
  }
}

export default updatedComponent(ClickCounter);
