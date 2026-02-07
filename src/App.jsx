import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import User from "./User";

import React from "react";

const App = () => {
  const [allData, setallData] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setallData(response.data);
  }  

  getData();
  return (
    <div>
      <button>Get data</button>

      <div className="cards">
        {allData.map((elem, idx) => {
          return (
            <div key={idx}>
                 <User elem={elem} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
