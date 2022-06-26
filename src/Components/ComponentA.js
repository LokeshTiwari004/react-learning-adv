import React, { Component } from "react";
import { UserProvider } from "./userContext";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Lokesh">
          <ComponentB />
        </UserProvider>
      </div>
    );
  }
}

export default ComponentA;
