import React, { Component } from "react";
import "./App.scss";

import Info from "./parts/Info";
import Summary from "./parts/Summary";
import Skills from "./parts/Skills";
import Experience from "./parts/Experience";
import footerLinks from "./static/footers";

export default class App extends Component {
  render() {
    return (
      <div className="resume">
        
        <h1 className="heading">熊逸朗的简历</h1>
        
        <Info />
        <Summary />
        <Skills />
        <Experience />
        
        <footer className="footer">
          <h2 style={{ marginBottom: "3rem" }}>
            期待收到您的回复！
          </h2>
          {footerLinks.map((item) => (
            <a
              className="footer-item"
              href={item.href}
              key={item.href}
            >
              {item.content}
            </a>
          ))}
        </footer>
      </div>
    );
  }
}
