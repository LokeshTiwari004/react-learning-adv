import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>
        React.Fragment groups child elements without adding extra DOM node!
        <br/>
        Only Attribute supported with React.Fragment is the key Attribute.
        You can also use "&lt;&gt;&lt;/&gt;" shorthand for React.Fragment but than you are not allowed to use key atttribute.
      </p>
    </React.Fragment>
  )
}

export default FragmentDemo