import React from 'react'
import FormComponent from './components/FormComponent'
import CardComponent from './components/CardComponent'
import { useState } from 'react'

const App = () => {
  const [FormInputValue, setFormInputValue] = useState("")
  return (
    <div>
      <FormComponent setFormInputValue={setFormInputValue}/>
      <CardComponent FormInputValue={FormInputValue} />
    </div>
  )
}

export default App