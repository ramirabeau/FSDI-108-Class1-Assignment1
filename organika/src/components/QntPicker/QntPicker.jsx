import React, { Component } from "react";
import "./QntPicker.css";

class QntPicker extends Component {
  state = {
    qnty: 28,
    name: "Raven",
  };

  render() {
    return (
      <div className="QntPicker">
        <div>
          <h6>{this.state.name}</h6>
          <button onClick={this.decrease}>-</button>
          <label>{this.state.qnty}</label>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    );
  }

  increase = () => {
    console.log("Increase btn clicked");
  };
  decrease() {
    console.log("Decrease btn clicked");
  }
}

export default QntPicker;
