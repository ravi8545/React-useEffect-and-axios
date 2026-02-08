import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


const App = () => {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [number3, setnumber3] = useState(0);

  useEffect(()=>{
    console.log("number 1 and number 2 are change so the code inside the use effect are running")
  }, [number1, number2]);

  return (
    <div className="flex">
      <div>
        <h1>{number1}</h1>
        <button
          onClick={() => {
            setnumber1(Math.floor(Math.random() * 10));
          }}
        >
          change number 1
        </button>
      </div>

      <div>
        <h1>{number2}</h1>
        <button
          onClick={() => {
            setnumber2(Math.floor(Math.random() * 10));
          }}
        >
          Change number 2
        </button>
      </div>

      <div>
        <h1>{number3}</h1>
        <button
          onClick={() => {
            setnumber3(Math.floor(Math.random() * 10));
          }}
        >
          chnage number 3
        </button>
      </div>
    </div>
  );
};

export default App;
