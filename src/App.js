import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
function App() {
  const [solution,setsolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/solutions")
      .then((res) => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setsolution(randomSolution.word);
      });
  },[setsolution]);
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <div>Solution is : {solution}</div>}
      <Wordle solution={solution} />
    </div>
  );
}

export default App;
