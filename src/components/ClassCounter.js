import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.state((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h5>Class counter</h5>
        <button onClick={this.incrementCounter}>
          {" "}
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
