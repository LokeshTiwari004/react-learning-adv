import React from 'react'

// we are ignoring the first argument of props
const FRInput = (_, ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default React.forwardRef(FRInput)