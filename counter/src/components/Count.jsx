import React from 'react'

const CountComponent = ({countNumber}) => {
  console.log(countNumber);
  return (
    <div>{countNumber}</div>
  )
}

export default CountComponent