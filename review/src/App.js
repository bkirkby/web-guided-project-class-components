import React from 'react';

const Person = props => {
  return (
    <div>
      <h1>hello {props.name}</h1>
      <p>
        {props.name} is a great name. never change it!
      </p>
    </div>
  )
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'kirkby'
    }
  }

  handleSomething = () => {
  }

  // handleSomethingElse() {
  // }

  render() {
    return (
      <div>
        <Person name={this.state.name} />
      </div>
    )
  }
}

export default App;