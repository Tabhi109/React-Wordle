import React, { useEffect, useState } from 'react';
import letters from '../Data/letters';

const Keypad = ({ usedKeys }) => {
  const [keypadKeys, setKeypadKeys] = useState([]);

  useEffect(() => {
    setKeypadKeys(letters);
  }, []);

  const handleButtonClick = (key) => {
    // Handle button click logic here
    console.log(`Clicked key: ${key}`);
  };

  return (
    <div className='keypad'>
      {keypadKeys.map((key) => {
        const color = usedKeys[key.key];
        return (
          <div
            key={key.key}
            className={color}
            onClick={() => handleButtonClick(key.key)}
          >
            {key.key}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
