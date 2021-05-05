import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItemName: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    // e.target.value
    this.setState({
      newItemName: e.target.value
    })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    // this.state.newItemName
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input value={this.state.newItemName} type="text" name="item" onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;