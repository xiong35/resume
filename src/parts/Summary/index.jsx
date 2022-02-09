import React, { Component, Fragment } from "react";
import Title from "../../components/CTitle";

import summaries from "../../static/summaries";

import "./index.scss";

export default class Summary extends Component {
  render() {
    return (
      <section className="section summary">
        <Title text="个人简介" />
        <div className="summary-main">
          <p>
            您好，我是<b>华中科技大学计算机学院23届本科生</b>
            熊逸朗。以下是我的优势：
          </p>
          <ul className="introductions">
            {summaries.map((sum) => (
              <li key={sum.brief}>
                <strong>
                  {sum.brief}
                  {sum.detail ? "：" : "。"}
                </strong>
                <span dangerouslySetInnerHTML={{ __html: sum.detail }}></span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
