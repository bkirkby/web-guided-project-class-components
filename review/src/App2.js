import React from 'react';

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
        const name = "Warren";

        return(<div>
            <h1>Hello {this.state.name}. You are {this.state.age}.</h1>
            <button onClick={this.handleClick}>Make it Allison instead.</button>
        </div>);
    }
}

export default App2;