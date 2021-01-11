import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  }

  return (
    <div>
      <h1>Hello { name }.</h1>
      <p>{name} is a great name! Never change it {name}</p>
      
      <button onClick={handleClick}>Change it to Allison.</button>
    </div>
  );
};

export default App;