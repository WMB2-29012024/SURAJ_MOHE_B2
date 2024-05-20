import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
     const location  = useLocation()
  return (
    <div>
     <h1 style={{color:"black"}}>This is Contact Page{location.state } </h1>
    </div>
  )
}

export default Contact