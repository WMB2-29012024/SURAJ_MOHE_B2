import React from 'react'
import { useParams } from 'react-router-dom'

const Rcourse = () => {
     const param = useParams()
  return (
    <div>This is course Page {param.coursename}</div>
  )
}

export default Rcourse