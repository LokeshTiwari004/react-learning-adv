import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => this.setState(preState => ({ count: preState.count + 1 }));

  render() {
    return (
      <button onClick={this.incrementCount}>
        Clicked {this.state.count} Times
      </button>
    );
  }
}

export default ClickCounter;
