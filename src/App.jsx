import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [isNewNumber, setIsNewNumber] = useState(false);

  const handleNumberClick = (e) => {
    const newValue = e.target.innerText;

    if (newValue === "0" && isNewNumber) {
      return;
    }

    setIsNewNumber(false);
    setDisplay(display === "0" ? newValue : display + newValue);
  };

  const handleOperatorClick = (operator) => {
    const lastChar = display[display.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      const sliceDisplay = display.slice(0, display.length - 1);
      setDisplay(sliceDisplay + operator);
    } else {
      setDisplay(display === "0" ? display : display + operator);
    }
    setIsNewNumber(true);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleDelete = () => {
    if (display.length <= 1) {
      setDisplay("0");
    } else {
      const sliceDisplay = display.slice(0, display.length - 1);
      setDisplay(sliceDisplay);
    }
    setIsNewNumber(false);
  };

  const handlePercent = () => {
    setDisplay(display + "*0.01");
  };

  const handleEqual = () => {
    const lastChar = display[display.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      return;
    }

    const result = eval(display).toString();
    setDisplay(result);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Row 1  */}
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="del" onClick={handleDelete}>
          DEL
        </button>
        <button className="operator" onClick={handlePercent}>
          %
        </button>
        <button className="operator" onClick={() => handleOperatorClick("/")}>
          ÷
        </button>
        {/* Row 2  */}
        <button className="number" onClick={handleNumberClick}>
          7
        </button>
        <button className="number" onClick={handleNumberClick}>
          8
        </button>
        <button className="number" onClick={handleNumberClick}>
          9
        </button>
        <button className="operator" onClick={() => handleOperatorClick("*")}>
          ×
        </button>
        {/* Row 3  */}
        <button className="number" onClick={handleNumberClick}>
          4
        </button>
        <button className="number" onClick={handleNumberClick}>
          5
        </button>
        <button className="number" onClick={handleNumberClick}>
          6
        </button>
        <button className="operator" onClick={() => handleOperatorClick("-")}>
          -
        </button>
        {/* Row 4  */}
        <button className="number" onClick={handleNumberClick}>
          1
        </button>
        <button className="number" onClick={handleNumberClick}>
          2
        </button>
        <button className="number" onClick={handleNumberClick}>
          3
        </button>
        <button className="operator" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        {/* Row 5  */}
        <button
          className="number"
          style={{ gridColumn: "span 3" }}
          onClick={handleNumberClick}
        >
          0
        </button>
        <button className="operator equal" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
