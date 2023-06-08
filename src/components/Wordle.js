import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup,usedKeys } = useWordle(solution)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      console.log('Congrats ! you Won')
      window.removeEventListener('keyup', handleKeyup)
    } 

    if (turn > 5) {
      console.log('you used all your guesses!')
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect,turn])

  return (
    <div>
      <div>solution - {solution}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys = {usedKeys}/>
    </div>
  )
}