import React, { useRef } from 'react'

const Task = () => {
     const boxRef =   useRef();
     // const handleInputChange = () =>{
     //      console.log(inputRef.current.value);

     // }
     let flag =true;
     const handleButtonClick = () =>{
          if(flag ===true){
               boxRef.current.style.background = 'red'
               flag = false;
          }
          else if(flag === false){
               // boxRef.current.style.display = "block"
               boxRef.current.style.background = "black"

               flag = true;
          }
         
     }
  return (
    <div>
          {/* <input ref={inputRef} onChange={handleInputChange} type="text" /> */}
          <div ref={boxRef} style={{width:"100px" ,height:"100px",background:"red"}}></div>
          <button onClick={handleButtonClick}>Hide Box</button>
    </div>
  )
}

export default Task