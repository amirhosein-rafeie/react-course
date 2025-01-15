import "./App.css";
import { useEffect, useState } from "react";
import ComponentA from "./ComponentA";

function App() {
  const [count, setCount] = useState(0);

  // mounting
  // useEffect(() => {
  //   console.log("Component is mounted.");
  // }, []);

  // updating
  // useEffect(() => {
  //   console.log(`Count is ${count}`);
  //   document.title = `Count is ${count}`;
  // }, [count]);

  return (
    <div className="container">
      <h1>Welcome To Jetino React Course</h1>
      {count === 0 && <ComponentA />}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
