import React, { Component } from "react";
import PropTypes from "prop-types";

import BarItem from "../SkillBarItem";

import "./index.scss";

export default class SkillItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  };

  render() {
    const { name, level } = this.props;
    return (
      <div className="skill-item">
        <div className="bar">
          {new Array(level).fill(0).map((_, ind) => (
            <BarItem key={ind} />
          ))}
        </div>
        <div className="skill-info">
          <img
            className="icon"
            src={require(`../../static/image/${name}.svg`).default}
            alt={name}
          />
          <span className="name">{name}</span>
        </div>
      </div>
    );
  }
}
