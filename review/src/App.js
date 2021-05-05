import React, { useState } from "react";

const Person = props => {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>
        {props.name} is a great name! never change it!
      </p>
    </div>
};

const App = () => {
  return (
    <div>
      <h1>Hello Warren</h1>
    </div>
  );
};

export default App;