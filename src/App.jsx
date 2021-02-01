import React, { Component } from "react";
import "./App.scss";

import Info from "./parts/Info";

export default class App extends Component {
  render() {
    return (
      <div className="resume dark">
        <h1 className="heading">熊逸朗的简历</h1>
        <Info />
        <Info />
        <Info />
      </div>
    );
  }
}
