import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import solutions from './Data/solutions';

function App() {
  const [solution, setSolution] = useState(null);
  
  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(randomSolution);
  }, []);

  console.log(solution);

  return (
    <div className="App">
      <div className="heading">
        <h1 className='head'>Wordle</h1>
      </div>
      
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
