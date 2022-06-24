// import React from "react";

// function Hero({ heroName }) {
//   if (heroName==="Joker") {
//     throw new Error("Not a Hero!");
//   }

//   return <div>{heroName}</div>;
// }

// export default Hero;

import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state ={}
    if (props.heroName === "Joker") {
      throw new Error(`${props.heroName} is Not a Hero`);
    }
  }

  handler = () => {
    throw new Error("You should not click here");
  }
  
  render() {
    return <div onClick={this.handler}>{this.props.heroName}</div>;
  }
}

export default Hero;
