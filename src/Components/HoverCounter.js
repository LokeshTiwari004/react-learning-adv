import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () =>
    this.setState((preState) => ({ count: preState.count + 1 }));

  render() {
    return (
      <h1
        style={{ backgroundColor: "black", color: "white" }}
        onMouseOver={this.incrementCount}
      >
        Hover Count : {this.state.count}
      </h1>
    );
  }
}

export default HoverCounter;
