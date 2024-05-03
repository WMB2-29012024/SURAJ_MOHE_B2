import React from 'react'

const FormComponent = ({setFormInputValue}) => {

const handleSubmitInput = (e) =>{
     e.preventDefault()
     console.log(e.target.input.value);
     setFormInputValue(e.target.input.value)
     
}

  return (
    <div>
    <form onSubmit={handleSubmitInput}>
        <input id='input' type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormComponent