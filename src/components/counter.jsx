import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        <button className="btn btn-warning btn-sm mr-2">
          {this.state.value}
        </button>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
