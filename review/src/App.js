import React, { useState } from "react";

const Person = props => {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>
        {props.name} is a great name! never change it!
      </p>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState('kirkby');
  const handleClick = 

  return (
    <div>
      <Person name={name} />
      <button onClick={ } />set Liz</button>
    </div >
  );
};

export default App;