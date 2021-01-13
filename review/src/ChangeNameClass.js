import React, { Component } from 'react';

// class ChangeNameClass extends React.Component {
class ChangeNameClass extends Component {
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