import React from 'react';

class NameChangeClass extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.setName('patrick');
  };

  render() {
    return (
      <div><button onClick={this.handleClick}>set patrick</button></div>
    )
  }
};

export default NameChangeClass;