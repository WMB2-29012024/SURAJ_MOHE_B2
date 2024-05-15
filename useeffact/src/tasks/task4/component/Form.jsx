import React, { useState } from "react";

const Form = ({ set }) => {
  const handleInputNumber = async (e) => {
    e.preventDefault();
    console.log(e.target.inputt.value);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${e.target.inputt.value}`
    );
    const data = await response.json();
    set(data);
  };
  return (
    <div>
      <form onSubmit={handleInputNumber}>
        <input style={{margin:"0px 20px"}} id="inputt" type="number" />
        <button type="submit" onChange={(e) => set(e.target.value)}>
          Get Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
