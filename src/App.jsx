import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Die from "./Die";
import { list } from "postcss";
import { nanoid } from "nanoid";
import Grid from "./Grid";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const isAllHeld = dice.every(die => die.isHeld);
    const firstDiceValue = dice[0].value;
    const isAllEqual = dice.every(die => die.value === firstDiceValue);
    if (isAllHeld && isAllEqual) {
      setTenzies(true)
      alert("you won")
    }
  }, [dice]);

  function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
  }
  function allNewDice() {
    const randonnumArray = [];
    for (let i = 0; i < 10; i++) {
      const newDie = {
        value: randomNum(),
        isHeld: false,
        id: nanoid(),
      };
      randonnumArray.push(newDie);
    }

    return randonnumArray;
  }
  const rollDice = () => {
   if(!tenzies) {
    setDice(dice =>
      dice.map(die => {
        if (die.isHeld) {
          return die;
        }
        return { ...die, value: randomNum() };
      })
    );
   } else{
    setDice(allNewDice())
    setTenzies(false)
   }
  };

  const holdDice = id => {
    setDice(dice =>
      dice.map(die => {
        if (die.id === id) {
          return { ...die, value: die.value, isHeld: !die.isHeld };
        }
        return die;
      })
    );
  };

  const diceElement = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElement}</div>
      <button onClick={rollDice} className="roll-dice"> {tenzies?"New Game": "roll"}  </button>
    </main>
  );
}
