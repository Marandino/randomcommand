import React, { Component } from "react";
const style = {
  padding: "1em",
  backgroundColor: "#1B1818",
};
export default class Header extends Component {
  render() {
    return (
      <div style={style}>
        <ul className="navbar">
          <li>Rules</li>
          <li>Log In</li>
        </ul>
      </div>
    );
  }
}
