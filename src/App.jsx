function App() {
  const names = ["Amir", "Ali", "Sara", "Mina"];

  return (
    <ul>
      {names.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default App;
