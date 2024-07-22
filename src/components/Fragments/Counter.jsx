import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center justify-center space-x-4 mt-4">
        <div>{this.state.count}</div>
        <div
          className="p-2 bg-black text-white cursor-pointer"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </div>
      </div>
    );
  }
}

export default Counter;
