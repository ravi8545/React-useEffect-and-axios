import React from "react";
import "./App.css"
const User = (props) => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div style={{ backgroundColor: color }} className="user-card">
      <h1>{props.elem.name}</h1>
      <p>{props.email}</p>
    </div>
  );
};

export default User;
