import React, { useState } from "react";


const Person = () => {
  return(<div>
    <h1>Hello { name }.</h1>
    <p>{name} is a great name! Never change it {name}.</p>
  </div>);
}

const App = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  }

  return (
    <div>
      <Person />
      <button onClick={handleClick}>Change it to Allison.</button>
    </div>
  );
};

export default App;