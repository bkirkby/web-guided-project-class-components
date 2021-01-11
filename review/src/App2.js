import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Warren"
        }
    }

    render() {
        const name = "Warren";

        return(<div>
            <h1>Hello {name}.</h1>
        </div>);
    }
}

export default App2;