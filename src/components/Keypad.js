import React from 'react'
import { useEffect,useState } from 'react';
import letters from '../Data/letters';
export default function Keypad({usedKeys}) {
  const [letter,setLetter] = useState(null)

    useEffect(() => {
          setLetter(letters)
    }, []);
  return (
    <div className='keypad'>
      {letter && letter.map((l) => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
