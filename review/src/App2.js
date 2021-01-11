import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Allison",
            age: 33
        }
    }

    render() {
        const name = "Warren";

        return(<div>
            <h1>Hello {this.state.name}.</h1>
        </div>);
    }
}

export default App2;