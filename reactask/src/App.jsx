import React, { useRef, useState } from 'react'
import Mybutton from './component/Mybutton'

const App = () => {   
  const [count , setCount]   = useState(1)
  const title = useRef('')
  const img = useRef('')

  const getData =  async() =>{
    const fetched = await fetch(`https://jsonplaceholder.typicode.com/albums/${count}/photos`);
    const data = await fetched.json()
    console.log(data[0]['title']);
    title.current.innerText =data[0]["title"]
    setCount(count+1)
  }
  
  const preData =  async() =>{
    const fetched = await fetch(`https://jsonplaceholder.typicode.com/albums/${count}/photos`);
    const data = await fetched.json()
    console.log(data);
    title.current.innerText =data[0]["title"]
    setCount(count-1)
  }
  return (
    <div className='Main'>
        <Mybutton name= {"pre"} clicked= {preData} />
        <div className="Card">  
            <div className="Card-part1">
            <div className="Dp-img">
              <img src="" alt="" />
            </div>
            <h4>rani park</h4>
            <button className='Host'>host</button> 
            </div>
            <div className="Title" ref={title}>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam delectus blanditiis qui.</h3>
            </div>
        </div>
        <Mybutton name= {"Next"}  clicked={getData}/>
    </div>
  )
}

export default App