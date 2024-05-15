import React, { useState } from "react";
import { useEffect } from "react";
const Task = () => {
  const [todoData, setTodoData] = useState([]);
  console.log("1", todoData);
  useEffect(() => {
    const fetchTodoData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodoData(data);
    };
    fetchTodoData();
  }, []);
  console.log("2", todoData);

  return (
    <div>
      <ol>
        {todoData.map((e) => {
          return <li>{e.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default Task;
