import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        {this.props.children}
        <button className="btn btn-warning btn-sm ml-2 mr-2">
          {this.props.counter.value}
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "bage m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
