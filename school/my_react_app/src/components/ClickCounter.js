import React, { Component } from "react";
import UpdateComponent from "./UpdateComponent";
class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click Here {count}</button>
      </div>
    );
  }
}
export default UpdateComponent(ClickCounter);
