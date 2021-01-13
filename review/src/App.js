import React, { useState } from "react";

import ChangeNameFunc from './ChangeNameFunc';
import ChangeNameClass from './ChangeNameClass';

const App = () => {
  const [name, setName] = useState('kirkby');

  return (
    <div>
      <h1>Hello {name}</h1>
      <ChangeNameFunc setName={setName} />
      <ChangeNameClass setName={setName} />
    </div>
  );
};

export default App;