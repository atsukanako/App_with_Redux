import React from "react";

const App = ({ number, day, title, plus, minus, asyncMinus, getJson }) => {
  return (
    <>
      <h2>
        {title} {number} {day}
      </h2>
      <button
        onClick={() => {
          plus(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          minus(10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          asyncMinus(10);
        }}
      >
        async -10
      </button>
      <button
        onClick={() => {
          getJson();
        }}
      >
        getJson
      </button>
    </>
  );
};

export default App;
