import React, { useState } from "react";

import ChangeNameFunc from './ChangeNameFunc';

const App = () => {
  const [name, setName] = useState('kirkby');

  return (
    <div>
      <h1>Hello {name}</h1>
      <ChangeNameFunc setName={setName} />
    </div>
  );
};

export default App;