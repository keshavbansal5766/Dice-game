import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

function Main() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  let diceElements = dice.map((obj) => <Die key={obj.id} value={obj.value} />);

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function handleSelectNumber() {
    // setDice((prev) => )
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default Main;
