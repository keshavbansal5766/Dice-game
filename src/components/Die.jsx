import React from "react";

function Die({ value, hold, isHeld }) {
  return (
    <button
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}

export default Die;
