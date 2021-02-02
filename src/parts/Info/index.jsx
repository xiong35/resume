import React, { Component } from "react";

import InfoItem from "../../components/InfoItem";
import Title from "../../components/CTitle";

import "./index.scss";

const infoMap = {
  姓名: "熊逸朗",
  性别: "男",
  电话: "18827090877",
  邮箱: "xiong35@qq.com",
  微信: "xyl2242787668",
  网站: "www.xiong35.cn",
};

export default class Info extends Component {
  render() {
    return (
      <section className="section info">
        <Title text="基本信息" />
        <div className="info-main">
          <div className="items">
            {Object.keys(infoMap).map((key) => (
              <InfoItem
                key={key}
                name={key}
                value={infoMap[key]}
              />
            ))}
          </div>
          <div className="photo-holder">
            <img
              className="photo"
              src={require("../../static/image/photo.jpg").default}
            ></img>
          </div>
        </div>
      </section>
    );
  }
}
