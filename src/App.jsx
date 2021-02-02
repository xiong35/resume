import React, { Component } from "react";
import "./App.scss";

import Info from "./parts/Info";
import Summary from "./parts/Summary";
import Skills from "./parts/Skills";

export default class App extends Component {
  render() {
    return (
      <div className="resume dark">
        <h1 className="heading">熊逸朗的简历</h1>
        <Info />
        <Summary />
        <Skills />
        <Info />
        <footer className="footer">
          <a
            className="footer-item"
            href="http://resume.xiong35.cn"
          >
            简历链接
          </a>
          <a className="footer-item" href="http://www.xiong35.cn">
            博客链接
          </a>
        </footer>
      </div>
    );
  }
}
