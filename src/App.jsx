import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import User from "./User";

import React from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(function(){
    console.log("the app is rendering")
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default App;
