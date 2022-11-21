import React, { Component } from "react";

const UpdateForm = (WrapperComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        firstName: "",
        lastName: "",
      };
    }
    changeHandler = (event) => {
        console.log(this.state)
      this.setState((preState) => {
        return {
          ...preState,
          [event.target.name]: event.target.value,
        };
      });
    };
    render() {
      return (
        <div>
          <WrapperComponent
            name={this.props.name}
            changeHandler={this.changeHandler}
            value={this.state.lastName}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default UpdateForm;
