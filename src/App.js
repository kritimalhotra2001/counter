import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
