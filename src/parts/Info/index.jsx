import React, { Component } from "react";

import InfoItem from "../../components/InfoItem";

import "./index.scss";

const infoMap = {
  姓名: "熊逸朗",
  性别: "男",
  电话: "18827090877",
  邮箱: "xiong35@qq.com",
  微信: "xyl2242787668",
  网站: "www.xiong35.cn",
};

class index extends Component {
  render() {
    return (
      <section className="section info">
        <h2 className="title">
          <span className="glitch" data-text="个人信息">
            个人信息
          </span>
        </h2>
        <div className="items">
          {Object.keys(infoMap).map((key) => (
            <InfoItem key={key} name={key} value={infoMap[key]} />
          ))}
        </div>
      </section>
    );
  }
}

export default index;
