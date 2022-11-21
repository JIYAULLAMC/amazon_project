import React, { Component } from "react";
import UpdateComponent from "./UpdateComponent";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hover Counter{count}</h2>
      </div>
    );
  }
}
export default UpdateComponent(HoverCounter);
