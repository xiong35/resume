import React, { Component } from "react";
import "./App.scss";

import Info from "./parts/Info";
import Summary from "./parts/Summary";
import Skills from "./parts/Skills";
import Experience from "./parts/Experience";

const footerLinks = [
  {
    content: "简历链接",
    href: "http://resume.xiong35.cn",
  },
  {
    content: "博客链接",
    href: "http://www.xiong35.cn",
  },
  {
    content: "GitHub",
    href: "https://github.com/xiong35",
  },
];

export default class App extends Component {
  render() {
    return (
      <div className="resume dark">
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
