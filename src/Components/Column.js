import React from 'react'

function Column() {
  return (
    // we cannot use "key" attribute here

    // <>
    //   <td>Name:</td>
    //   <td>Lokesh</td>
    // </>

    
    // we can use "key" attribute here
    
    <React.Fragment>
      <td>Name:</td>
      <td>Lokesh</td>
    </React.Fragment>
  )
}

export default Column