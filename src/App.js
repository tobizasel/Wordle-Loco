import './app.scss';
import Row from './components/rows/Row';
import UserInput from './components/input/UserInput';
import { useState } from 'react';


//SE BUGUEA CON LETRAS REPETIDAS en WORD

function App() {

  const [guess, setGuess] = useState([]);
  const word = "gamer";

  return (
    <div className="App">
      <div className='rows'>
        <Row guess={guess[0]} word={word}/>
        <Row guess={guess[1]} word={word}/>
        <Row guess={guess[2]} word={word}/>
        <Row guess={guess[3]} word={word}/>
        <Row guess={guess[4]} word={word}/>
        <Row guess={guess[5]} word={word}/>
     </div>
     <UserInput guess={guess} setGuess={setGuess}/>
    </div>
  );
}

export default App;
