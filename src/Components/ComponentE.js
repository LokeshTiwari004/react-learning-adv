import React, { Component } from 'react'
import UserContext from './userContext'

export class ComponentE extends Component {
  static contextType = UserContext
  
  render() {
    return (
      <div>
        Component E Context {this.context}
      </div>
    )
  }
}

export default ComponentE