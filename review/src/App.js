import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");

  return (
    <div>
      <h1>Hello { name }.</h1>
      <button>Change it to Allison.</button>
    </div>
  );
};

export default App;