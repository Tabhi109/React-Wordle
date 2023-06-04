import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
const Wordle = ({ solution }) => {
    const {currentGuess,handleKeyup} = useWordle(solution);
    useEffect(() => {
        window.addEventListener("keyup",handleKeyup);
        return () => {
            window.removeEventListener("keyup",handleKeyup);
        }
    },[handleKeyup]);
  return (
    <div>
        <h1>current guess - {currentGuess}</h1>
        
    </div>
  )
}

export default Wordle
