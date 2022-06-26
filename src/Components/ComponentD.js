import React, { Component } from 'react'
import UserContext from './userContext'

export class ComponentD extends Component {
  static contextType = UserContext
  
  render() {
    return (
      <div>
        Component D Context {this.context}
      </div>
    )
  }
}

export default ComponentD