import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}
