import React, { useEffect, useState } from 'react';
import './Letter.scss'

const Letter = ({letter, color}) => {

  const [green, setGreen] = useState(false);
  const [orange, setOrange] = useState(false)

    useEffect(() => {
        if (color === 2) {
            setGreen(true)
        } 
        else if (color === 1){
          setOrange(true)
        }

    }, [color])

  return (
    <div className={green ? "letter green" : orange ? "letter orange" : "letter"}>{letter}</div>
  )
}

export default Letter