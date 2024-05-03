import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import CountComponent from "./components/Count"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter Example Project</h1>
      <CountComponent countNumber={count} />
      <Button setCount={setCount} />
    </div>
  );
}

export default App;
