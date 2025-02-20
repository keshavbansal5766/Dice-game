import React from "react";

function Die({ value }) {
  const handleClick = () => {
    console.log("u clicked on", value, "button");
  };

  return <button onClick={handleClick}>{value}</button>;
}

export default Die;
