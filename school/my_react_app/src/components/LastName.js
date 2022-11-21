import React, { Component } from "react";
import UpdateForm from "./UpdateForm";

export class LastName extends Component {
  render() {
    const { name, changeHandler, value } = this.props;
    return (
      <div>
        <h3>LastName</h3>
        <input name={name} onChange={changeHandler} value={value} />
      </div>
    );
  }
}

export default UpdateForm(LastName);
