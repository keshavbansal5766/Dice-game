import React, { useEffect, useState } from "react";
import Die from "./Die";

function Main() {
//   const [values, setValues] = useState([]);

//   useEffect(() => {
//     const diceArray = [1, 2, 3, 4, 5, 6];

//     for (let i = 0; i < 10; i++) {
//       let randomNumber = Math.floor(Math.random() * 6);
//       let diceValue = diceArray[randomNumber];
//       setValues((prev) => [...prev, diceValue]);
//     }
//   }, []);

//   const listItem = values.map((value) => <Die value={value} />);

  return (
    <main>
      <div className="dice-container">{listItem}</div>
    </main>
  );
}

export default Main;
