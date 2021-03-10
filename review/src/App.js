import React, { useState } from "react";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      mood: 'fun',
      otherState: ''
    }
  }

  render() {
    return (
      <div>
        <h2>lambda school is:</h2>
        <h1>{this.state.mood}</h1>
        <div>
          <button onClick={() => this.setState({ mood: 'fun' })}>fun</button>
          <button onClick={() => this.setState({ mood: 'tiring' })}>tiring</button>
        </div>
      </div>
    );
  }
}

// const App = () => {
//   // const mood = 'fun';
//   const [mood, setMood] = useState('fun');
//   const [otherState, setOtherState] = useState('');
//   const [state, setState] = useState({mood:'fun'});
//   return (
//     <div>
//       <h2>lambda school is:</h2>
//       <h1>{mood}</h1>
//       <div>
//         <button onClick={() => setMood('fun')}>fun</button>
//         <button onClick={() => setMood('tiring')}>tiring</button>
//       </div>
//     </div>
//   );
// };

export default App;