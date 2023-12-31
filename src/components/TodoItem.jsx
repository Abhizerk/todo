import React, { useState } from "react";

function TodoList(props) {
  const [strike, setStrike] = useState(false);

  function handleClick() {
    setStrike((previousValue) => {
      return !previousValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: strike ? "line-through" : "none" }}
 // Enclosed 'none' in quotes
    >
      {props.text}
    </li>
  );
}

export default TodoList;
