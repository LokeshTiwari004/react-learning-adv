import React from 'react'
import { UserConsumer } from './userContext'

function ComponentC() {
  return (
    <UserConsumer>
      {
        (value) => {
          return <h1>Hello {value}</h1>
        }
      }
    </UserConsumer>
  )
}

export default ComponentC