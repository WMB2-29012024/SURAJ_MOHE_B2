import React, { useState } from 'react'

let count = 0;

const Mybtn = () => {
  const [toggle, setToggle] = useState(0)

  console.log("first",count);

  const handleClick = () => {
    console.log("index1",count)
    count++
    console.log("index2",count);
    setToggle(toggle + 1)
    console.log({toggle});
  }
  console.log("outer",count);


  return (
    <div>
      { console.log("return",count)}
       <button style={
        {margin:"20px",padding:"8px 10px", background:"black", color:"red"}
       } 
       onClick={handleClick}>Click</button>
    </div>
  )
}

export default Mybtn