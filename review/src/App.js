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

  return (
    <div>
      <Person name={name} />
    </div>
  );
};

export default App;