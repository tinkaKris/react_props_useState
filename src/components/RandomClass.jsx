import React from "react";

function random() {
  return Math.floor(Math.random() * 100);
}

class RandomClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  changeNum = () => {
    this.setState({ number: random() });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>{this.state.number}</h1>
          <button onClick={this.changeNum} className="plus">
            Випадкове число
          </button>
        </div>
      </div>
    );
  }
}

export default RandomClass;
