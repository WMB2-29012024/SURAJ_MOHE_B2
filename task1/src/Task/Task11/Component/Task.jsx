import React, { useRef } from 'react'

const Task = () => {
     const countRef = useRef();

const handleButtonClick = () =>{

     const currentNumber = countRef.current.innerText;
     countRef.current.innerText = Number(currentNumber) +1;

}

  return (
    <div>
          <h1 ref={countRef}>0</h1>
          <button onClick={handleButtonClick}>Increase</button>
    </div>
  )
}

export default Task