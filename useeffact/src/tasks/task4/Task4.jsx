import React, { useState } from "react";
import Form from "./component/Form";
import TodoData from "./component/TodoData";
const Task4 = () => {
     const [Count, setCount] = useState([]);
  return (
    <div>
      <Form  set={setCount} />
      <TodoData count={Count}/>
    </div>
  );
};

export default Task4;
