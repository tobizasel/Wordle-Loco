import React, { useEffect, useState } from 'react'

const UserInput = ({guess, setGuess}) => {

    const [actualGuess, setActualGuess] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleInput = (e) => {
        setActualGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGuess(prevGuesses => [...prevGuesses, actualGuess])
        console.log(guess);
        setActualGuess("")
    }

    useEffect(() => {
        if(actualGuess.length !== 5 || actualGuess.includes(" ")){
                 setDisabled(true)
         } 
         else{
            setDisabled(false)
         }
    }, [actualGuess])

  return (
    <form>
    <input type="text" placeholder='Adivina' value={actualGuess} onChange={handleInput}/>
    <button type='submit' onClick={handleSubmit} disabled={disabled}>Enviar</button>
    </form>
    
  )
}

export default UserInput;