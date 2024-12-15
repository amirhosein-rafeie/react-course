import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const clickHandler = () => {
    setShowMessage((prev) => !prev);
  };

  const clearHandler = () => {
    setValue("");
    setShowMessage(false);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Show message</button>
      <button onClick={clearHandler}>Clear</button>
      {showMessage && <p>{value}</p>}
    </div>
  );
}

export default App;
