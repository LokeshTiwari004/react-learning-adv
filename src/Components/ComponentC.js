import React from 'react'
import { UserConsumer } from './userContext'

function ComponentC() {
  return (
    <UserConsumer>
      {
        (user) => {
          return <h1>Hello {user}</h1>
        }
      }
    </UserConsumer>
  )
}

export default ComponentC