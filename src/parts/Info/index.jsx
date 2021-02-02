import React, { Component } from "react";

import InfoItem from "../../components/InfoItem";
import Title from "../../components/CTitle";

import infoMap from "../../static/infos";

import "./index.scss";

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
