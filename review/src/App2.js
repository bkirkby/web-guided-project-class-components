import { Component } from 'react';

class Person extends Component {
    render() {
        const { name } = this.props;

        return(<div>
            <h1>Hello {name}.</h1>
            <p>{name} is a great name!!!</p>
        </div>);
    }
}

class App2 extends Component {
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
        });
    }

    render() {
        const { name } = this.state;
        return(<div>
            <Person name={this.state.name}/>
            <button onClick={this.handleClick}>Make it Allison instead.</button>
        </div>);
    }
}

export default App2;