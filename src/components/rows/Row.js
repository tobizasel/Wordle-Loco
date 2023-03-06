import React, { useEffect, useState } from 'react';
import Letter from '../letter/Letter';
import './Row.scss'

const initColorLetters = [0,0,0,0,0]

const Row = ({guess, word}) => {
  const [letters, setLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [colorLetters, setColorLetters] = useState(initColorLetters);

  useEffect(() => {
    if (guess) {
      setLetters(guess.split(""))
      setColorLetters(initColorLetters)
    }
  }, [guess])

  useEffect(() => {

    setCorrectLetters(word.split(""))

    letters.forEach((letter, idx) => {
      const index = correctLetters.indexOf(letter);
      
      if (index !== -1) {

    if(index === letters.indexOf(letter)){
      
      setColorLetters(prev => {
        return prev.map((num, i) => {
          if (i === idx) {
            return 1;
          } else {
            return num;
          }
      })})    

        }
        else{
          console.log("VERDE", letter);
          
          if (hasDuplicates(correctLetters)) {
            console.log("NARANJA UNICO");
            const orangeL = correctLetters.find(correctL => correctL === letter);
            const orangeI = letters.indexOf(orangeL);
            
            setColorLetters(prev => {
              return prev.map((num, i) => {
                if (i === orangeI) {
                  return 1;
                } else {
                  return num;
                }
            })})    
          } if(findDuplicates(correctLetters).includes(letter)){
            console.log("NARANJA REPETIDO");
            setColorLetters(prev => {
              return prev.map((num, i) => {
                if (i === idx) {
                  return 1;
                } else {
                  return num;
                }
            })})   
          } 
    }
      }
    });
  
  }, [word, letters])

  const hasDuplicates = (arr) => {
    return new Set(arr).size !== letters.length
  }

  const findDuplicates = (arr) => {
    const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(arr);
    return duplicateElements;
  }

  return (
    <div className='row'>
        <Letter letter={letters[0]} color={colorLetters[0]}/>
        <Letter letter={letters[1]} color={colorLetters[1]}/>
        <Letter letter={letters[2]} color={colorLetters[2]}/>
        <Letter letter={letters[3]} color={colorLetters[3]}/>
        <Letter letter={letters[4]} color={colorLetters[4]}/>
    </div>
  )
}

export default Row