import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputVal, setInputVal] = useState([]);

  function getValue(e) {
    e.preventDefault();
    let clearInput = e.target[0].value;
    console.log(e.target[0].value);
    setInputVal((current) => {
      return [...current, clearInput];
    });
    e.target[0].value = "";
  }

  return (
    <div className="App">
      <form onSubmit={getValue}>
        <input />
      </form>

      <ul>
        {inputVal.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
