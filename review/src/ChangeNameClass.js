import React from 'react';

class ChangeNameClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClick = e => {
    e.preventDefault();
    this.props.setName('patrick');
  }

  render() {
    return (
      <div><button onClick={this.handleClick}>set patrick</button></div>
    )
  }

};

export default ChangeNameClass;