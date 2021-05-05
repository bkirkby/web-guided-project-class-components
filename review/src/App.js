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

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      name: 'Liz'
    });
  }

  // handleSomethingElse() {
  // }

  render() {
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.handleClick}>set Liz</button>
      </div>
    )
  }
}

export default App;