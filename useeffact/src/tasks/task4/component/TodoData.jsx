import React from "react";

const TodoData = ({ count }) => {
  return (
    <div>
      <h1 style={{padding:"20px"}}>Todo Data :</h1>

      {count.title ?<>
          <p style={{padding:"0px 20px"}}>ID: {count.id}</p>
          <p style={{padding:"0px 20px"}}>Title: {count.title}</p>
          <p style={{padding:"0px 20px"}}>Status: {String(count.completed)}</p>

      </> : <p style={{padding:"0px 20px"}}> no data found</p>}
    </div>
  );
};

export default TodoData;
