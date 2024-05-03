import React, { useState } from 'react'
import TextComponent from "./components/TextComponent"
import InputComponent  from "./components/InputComponent"

const App = () => {

const [InputText, setInputText]  = useState("Hello World")

  return (
    <div>
     <InputComponent setInputText={setInputText}/>
     <TextComponent InputText = {InputText}/>
    </div>
  )
}

export default App