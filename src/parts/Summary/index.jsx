import React, { Component } from "react";

import "./index.scss";

export default class Summary extends Component {
  render() {
    return (
      <section className="section summary">
        <h2 className="title">
          <span className="glitch" data-text="个人简介">
            个人简介
          </span>
        </h2>
        <div className="summary-main">
          <p>
            您好，我是<b>华中科技大学19级本科生</b>
            熊逸朗。我熟悉多种前端框架和技术，
            <b>有多段项目经历</b>
            （详见下方专业技能和项目经历模块），个人能力突出。此外，我开朗大方，认真负责，还
            <b>对后端有一定了解</b>
            ，这让我在团队合作时更得心应手。学习方面，我勤奋刻苦，
            <b>学习能力强</b>
            ，相信在未来的工作中能得到进一步的成长！
          </p>
          <p>期待得到您的认可！</p>
        </div>
      </section>
    );
  }
}
