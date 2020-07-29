import React, { Component } from "react";

const style = {
  width: "100%",
  padding: "1em 0",
  position: "absolute",
  bottom: "0",
  backgroundColor: "#FF9234",
};
export default class Footer extends Component {
  render() {
    return (
      <div style={style}>
        <ul className="navbar">
          <li>About</li>
          <li>Contribute</li>
          <li>Github</li>
        </ul>
      </div>
    );
  }
}
