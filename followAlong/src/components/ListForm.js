import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemName: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ itemName: e.target.value })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    // do something with the inputted item name
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} value={this.state.itemName} type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;