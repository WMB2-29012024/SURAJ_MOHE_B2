import React, { useState } from "react";
const Button = ({ setCount }) => {

  const handleCountDecrease = () => {
    setCount((currentValue) => currentValue !== 0 ? currentValue - 1 :0)

  };
  const handleCountIncrease = () => {
    setCount((currentValue) => currentValue+1)
    
  };

  return (
    <div>
      <button onClick={handleCountDecrease}>Decrease</button>
      <button onClick={handleCountIncrease}>Increase</button>
    </div>
  );
};

export default Button;
