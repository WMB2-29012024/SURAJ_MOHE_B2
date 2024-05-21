import React from 'react'

const Mybutton = (props) => {
  return (
    <button onClick={props.clicked}>{props.name}</button>
  )
}

export default Mybutton