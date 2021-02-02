import React, { Component } from "react";

import Title from "../../components/CTitle";
import ExpItem from "../../components/ExpItem";

import experiences from "../../static/experiences";

import "./index.scss";

export default class Experience extends Component {
  render() {
    return (
      <section className="section experience">
        <Title text="项目经历" />
        <div className="experience-items">
          {experiences.map((e) => (
            <ExpItem key={e.name} {...e} />
          ))}
        </div>
      </section>
    );
  }
}
