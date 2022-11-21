import React, { Component } from "react";

const UpdateComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((preState) => {
        return {
          ...preState,
          count: preState.count + 1,
        };
      });
    };

    render() {
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
          />
          
        </div>
      );
    }
  }
  return NewComponent;
};

export default UpdateComponent;
