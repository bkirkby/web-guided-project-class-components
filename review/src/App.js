import React, { useState } from "react";

import NameChangeFunc from './NameChangeFunc';
import NameChangeClass from './NameChangeClass';

const App = () => {
  const [name, setName] = useState('kirkby');
  return (
    <div>
      <h1>Hello {name}</h1>
      <NameChangeFunc setName={setName} />
      <NameChangeClass setName={setName} />
    </div>
  );
};

export default App;