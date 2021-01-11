import React, { useState } from "react";

//Warren edited some code.

const Person = (props) => {
  return(<div>
    <h1>Hello { props.name }.</h1>
    <p>{props.name} is a great name! Never change it {props.name}.</p>
  </div>);
}

const App = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  }

  return (
    <div>
      <Person name={name}/>
      <button onClick={handleClick}>Change it to Allison.</button>
    </div>
  );
};

export default App;