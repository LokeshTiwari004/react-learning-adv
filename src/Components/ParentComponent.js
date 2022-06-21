import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lokesh",
    };
  }


  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Lokesh"
      })
    }, 2000)
  }

  render() {
    console.log('------------------- Parent Component render -------------------')
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name}/>
        <RegComp name={this.state.name}/>
      </div>
    );
  }
}

export default ParentComponent;
