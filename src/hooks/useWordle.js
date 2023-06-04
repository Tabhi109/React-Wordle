import {useState} from 'react';
const useWordle = (solution) => {

    const [turn,setTurn] = useState(0);
    const [currentGuess,setCurrentGuess] = useState("");
    const [guesses,setGuesses] = useState([]);
    const [history,setHistory] = useState([]);
    const [isCorrect,setIsCorrect] = useState(false);


    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key:letter,color:'grey'};
        });
    }

    const addNewGuess = () => {
    
    }

    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            if (turn > 5) {
                console.log("Game over");
                return;}
            if (history.includes(currentGuess)) {
                console.log("Already guessed");
                return;
            }
            if (currentGuess.length !== 5) {
                console.log("Invalid guess");
                return;
            }
            formatGuess();   
        }
            if (key === 'Backspace') {
                setCurrentGuess((prev) => prev.slice(0,-1));
                return;
            }
            if (/^[a-z]$/.test(key)) {
                if (currentGuess.length < 5) {
                    setCurrentGuess((prev) => prev + key);
                }
            }
}

    return {turn,currentGuess,guesses,isCorrect,handleKeyup};

}

export default useWordle;