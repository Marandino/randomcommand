import React, { Component } from "react";

////STYLING
const buttonsStyle = {
  display: "flex",
  justifyContent: "center",
};

export default class Main extends Component {
  render() {
    return (
      <div>
        <h2>Random Command_</h2>
        <h3>Totally Randomized Command Generator</h3>
        <div style={buttonsStyle}>
          <button id="start">Start</button>
          <button id="settings">Settings</button>
        </div>
      </div>
    );
  }
}
