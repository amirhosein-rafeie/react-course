import { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Welcome To Jetino React Course</h1>
      )}
    </div>
  );
}

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const clickHandler = () => {
//     setLoggedIn(true);
//   };

// if (loggedIn) {
//   return (
//     <div className="container">
//       <h1>Welcome To Jetino React Course</h1>
//     </div>
//   );
// }

//   return (
//     <div className="container">
//       {loggedIn && <h4>Hello Amir!</h4>}
//       {loggedIn ? (
//         <h1>Welcome To Jetino React Course</h1>
//       ) : (
//         <button onClick={clickHandler}>Login</button>
//       )}
//     </div>
//   );
// }

export default App;
