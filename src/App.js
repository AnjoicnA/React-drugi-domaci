import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Quiz from './components/quiz/Quiz';


function App() {


  const [screenToShow, setScreenToShow] = useState("greetingMsg")

  const onStart = () => {
    setScreenToShow("quiz")
  }

  const showEnding = (correctCounter, incorrectCounter, minutes, seconds) =>{
    setScreenToShow("end");
    document.getElementById("ending").innerHTML = `Tačnih odgovora: ${correctCounter}. Netačnih: ${incorrectCounter}. Ukupno vrijeme: ${minutes}m ${seconds}s.`
  }

  const backToStart = () => {
    setScreenToShow("greetingMsg")
  }


  const getScreen = () => {
    switch (screenToShow) {
      case "greetingMsg":
        return (
          <div id='greetingMsg'>
            <h1>Dobrodošli!</h1>
            <h2>Jeste li spremni za jedan "Friends" kviz?</h2>
            <Button text='Započni kviz' onClick={onStart}/>
          </div>
        );
      case "quiz": 
        return (
          <div id='quiz'>
            <Quiz ending={showEnding}/>
            <Button text='Odustani' onClick={backToStart}/>
          </div>
        )
      case "end":
        return (
          <div id='end'>
            <h1>Kviz je završen!</h1>
            <div id='ending'>
              Pozzzz!
            </div>
            <Button text='Vrati se na početak' onClick={backToStart}/>
          </div>
        );
      default:
        return "Hmmm..."
    }
  }

  return (
    <>
      {getScreen()}
    </>
  );

}

export default App;
