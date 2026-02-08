import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const App = () => {
  const [number, setnumber] = useState(0);
  const [user, setuser] = useState("");

  async function getData() {
    const res = await axios.get("https://randomuser.me/api/");
    setuser(
      res.data.results[0].name.first + " " + res.data.results[0].name.last,
    );
  }

  useEffect(
    function () {
      getData();
    },
    [number],
  );

  return (
    <div>
      <h1>{user}</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default App;
