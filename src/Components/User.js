import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.func(false)}
      </div>
    )
  }
}

export default User