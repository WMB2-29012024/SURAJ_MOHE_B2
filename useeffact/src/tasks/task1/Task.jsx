import React from 'react'
import { useEffect } from 'react'
const Task = () => {

  useEffect(() =>{
    const fetchTodoData =  async () =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      console.log(data);
    }
    fetchTodoData()
  })

  return (
    <div>
    <h1>Hello World</h1>
    </div>
  )
}

export default Task