import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.inputRef = React.createRef();
    // this.inputRef = {current: null}; // this line is equivalent above line
    console.log(`inputRef`, this.inputRef);
    

    // Callback Refs
    this.cbRef = null;
    this.createCbRef = (element) => {
      this.cbRef = element;
    }
    console.log(`cbRef`, this.cbRef);
  }
  
  componentDidMount() {
    console.log(`inputRef`, this.inputRef);
    this.inputRef.current.focus()
    
    if (this.cbRef) {
      console.log(`cbRef`, this.cbRef);
      this.cbRef.value = "Tiwari"
    }
  }

  handleFname = () => {
    alert(`${this.inputRef.current.value}`)
  }

  handleLname = () => {
    alert(`${this.cbRef.value}`)
  }

  render() {
    return (
      <div>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" ref={this.inputRef}/>
        <button onClick={this.handleFname}>CLick!</button>

        <br />
        <br />
        <br />

        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" ref={this.createCbRef}/>
        <button onClick={this.handleLname}>CLick!</button>
      </div>
    );
  }
}

export default RefsDemo;
