import React from 'react';

class Person extends React.Component {
    render() {
        return(<div>
            <h1>Hello {this.props.name}.</h1>
            <p>{this.props.name} is a great name!!!</p>
        </div>);
    }
}

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Warren",
            age: 32
        }
    }

    handleClick = ()=> {
        this.setState({
            name:"Allison"
        })
    }

    render() {
        return(<div>
            <Person name={this.state.name}/>
            <button onClick={this.handleClick}>Make it Allison instead.</button>
        </div>);
    }
}

export default App2;