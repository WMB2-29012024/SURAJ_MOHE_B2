import React, { useState } from "react";

const Task3 = () => {
  const [todoData, setTodoData] = useState([]);
  const handleApiClick = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodoData(data);
  };
  return (
    <div>
      <button onClick={handleApiClick}>Click</button>
      <ol>
        {todoData.map((todo, index) => {
          return <li key={index}>{todo.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default Task3;
