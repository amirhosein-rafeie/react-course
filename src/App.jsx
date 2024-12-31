import "./App.css";

function App() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        {/* Row 1  */}
        <button className="clear">C</button>
        <button className="del">DEL</button>
        <button className="operator">%</button>
        <button className="operator">÷</button>
        {/* Row 2  */}
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="operator">×</button>
        {/* Row 3  */}
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="operator">-</button>
        {/* Row 4  */}
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="operator">+</button>
        {/* Row 5  */}
        <button className="number" style={{ gridColumn: "span 3" }}>
          0
        </button>
        <button className="operator equal">=</button>
      </div>
    </div>
  );
}

export default App;
