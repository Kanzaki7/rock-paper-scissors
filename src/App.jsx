import './App.css';
import Score from './components/Score/Score';
import Coin from './components/Coin/Coin';
import Game from './components/Game/Game';
import title from './assets/img/logo.svg';
import Modal from './components/Modal/Modal';
import { useState } from 'react';


function App() {

  const [game, setGame] = useState("");
  const [choice, setChoice] = useState("");
  
  let classes = ["paper", "scissors", "rock"];
  let random = classes[Math.floor(Math.random(0)*classes.length)];

  const [computerChoice, setcomputerChoice] = useState(random);

  const [result, setresult] = useState("");
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState("");
  const [playerCoin, setPlayerCoin] = useState("");
  const [computerCoin, setComputerCoin] = useState("");

  let chooseCoin = (e) => {
    if (e.target.classList.contains("piecePaper")) {
      // setPlayerCoin("playerCoin1");
      setGame("Start");
      setChoice("paper");
      setcomputerChoice(random);
      {random === "rock" ? setresult("You Win") : random === "paper" ? setresult("Draw") : random === "scissors" && setresult("You Lose")}
      {random === "rock" ? setComputerCoin("playerCoin3") : random === "paper" ? setComputerCoin("playerCoin1") : random === "scissors" && setComputerCoin("playerCoin2Win")}
      {random === "rock" ? setPlayerCoin("playerCoin1Win") : random === "paper" ? setPlayerCoin("playerCoin1") : random === "scissors" && setPlayerCoin("playerCoin1")}
      console.log(random);
      console.log(computerChoice);
      console.log(result);
      {random === "rock" ? setScore(score+1) : random === "scissors" ? setScore(score-1) : score}
      console.log(score);
    } else if (e.target.classList.contains("pieceScissors")) {
      setPlayerCoin("playerCoin2");
      setGame("Start");
      setChoice("scissors");
      setcomputerChoice(random);
      {random === "rock" ? setresult("You Lose") : random === "paper" ? setresult("You Win") : random === "scissors" && setresult("Draw")}
      {random === "rock" ? setComputerCoin("playerCoin3Win") : random === "paper" ? setComputerCoin("playerCoin1") : random === "scissors" && setComputerCoin("playerCoin2")}
      {random === "rock" ? setPlayerCoin("playerCoin2") : random === "paper" ? setPlayerCoin("playerCoin2Win") : random === "scissors" && setPlayerCoin("playerCoin2")}
      console.log(random);
      console.log(computerChoice);
      console.log(result);
      {random === "rock" ? setScore(score-1) : random === "paper" ? setScore(score+1) : score}
      console.log(score);
    } else if (e.target.classList.contains("pieceRock")) {
      setPlayerCoin("playerCoin3");
      setGame("Start");
      setChoice("rock");
      setcomputerChoice(random);
      {random === "rock" ? setresult("Draw") : random === "paper" ? setresult("You Lose") : random === "scissors" && setresult("You Win")}
      {random === "rock" ? setComputerCoin("playerCoin3") : random === "paper" ? setComputerCoin("playerCoin1Win") : random === "scissors" && setComputerCoin("playerCoin2")}
      {random === "rock" ? setPlayerCoin("playerCoin3") : random === "paper" ? setPlayerCoin("playerCoin3") : random === "scissors" && setPlayerCoin("playerCoin3Win")}
      console.log(random);
      console.log(computerChoice);
      console.log(result);
      {random === "paper" ? setScore(score-1) : random === "scissors" ? setScore(score+1) : score}
      console.log(score);
    }
  }

  let restart = () => {
    setGame("");
  }

  let rulesDisplay = () => {
    setRules('Affiché');
  }
  let cachéModal = () => {
    setRules('');
  }

  return (
    <>
      <div className='menu'>
        <div className='divTitle'>
          <img src={title} alt="" />
        </div>
        <Score score={score}/>
      </div>
      {}
      {/* <Coin coinChoose = {chooseCoin}/> */}
      {game === "" && <Coin coinChoose = {chooseCoin} display = {rulesDisplay} />}
      {game === "Start" && <Game classCoin = {choice} classComputer = {computerChoice} result={result} restart={restart} display = {rulesDisplay} playerCoin={playerCoin} computerCoin={computerCoin}/>}
      {rules === "Affiché" && <Modal caché={cachéModal}/>}
    </>
  )
}

export default App
