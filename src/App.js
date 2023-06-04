import { useEffect, useState } from "react";

function App() {
  const [solution,setsolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/solution")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsolution(data);
      });
  },[]);
  return (
    <div className="App">
      <h1>Wordle</h1>
    </div>
  );
}

export default App;
