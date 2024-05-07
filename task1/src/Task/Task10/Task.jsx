import React, { useState } from 'react'
import Count from './component/Count'
import Mybutton from './component/Mybutton'

const Task = () => {
     const [CountNum ,setCountNum] = useState(0)
  return (
    <div>
     <Count CountNum={CountNum}/>
     <Mybutton CountNum={CountNum}  setCountNum={setCountNum}/>
    </div>
  )
}

export default Task