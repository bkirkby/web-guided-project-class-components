import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  }
  
  return (
    <div>
      <h1>Hello { name }.</h1>
      <button onClick={handleClick}>Change it to Allison.</button>
    </div>
  );
};

export default App;