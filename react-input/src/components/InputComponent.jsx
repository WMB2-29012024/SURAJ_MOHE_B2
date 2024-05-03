import React from 'react'

const InputComponent = ({setInputText}) => {

  const handleInputText = (e) =>{
    // console.log(e.target.value);
    setInputText(e.target.value)
  }

  return (
    <div>
      <input type="text"  onChange={handleInputText}/>
    </div>
  )
}

export default InputComponent