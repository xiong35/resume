import React, { Component } from "react";

import Title from "../../components/CTitle";

import "./index.scss";

export default class Skills extends Component {
  render() {
    return (
      <section className="section skills">
        <Title text="专业技能" />
        <div className="skills-main"></div>
      </section>
    );
  }
}
