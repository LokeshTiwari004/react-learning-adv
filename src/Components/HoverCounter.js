import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <h1
        style={{ backgroundColor: "black", color: "white" }}
        onMouseOver={this.props.incrementCount}
      >
        Hover Count : {this.props.count}
      </h1>
    );
  }
}

export default withCounter(HoverCounter, 10);
