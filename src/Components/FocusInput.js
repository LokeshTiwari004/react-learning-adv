import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  componentDidMount() {
    console.log("Here it goes!");
    this.componentRef.current.focusInput()
  }

  clickHnadler = () => {
    alert(`Hello ${this.componentRef.current.inputRef.current.value}`)
  }

  render() {
    return (
      <div>
        Example of a Component Refs
        <br />
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHnadler}>Click!</button>
      </div>
    );
  }
}

export default FocusInput;
