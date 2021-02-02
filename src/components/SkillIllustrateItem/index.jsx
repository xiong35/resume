import React, { Component } from "react";
import PropTypes from "prop-types";

import BarItem from "../SkillBarItem";
import "./index.scss";

export default class IllustrateItem extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { level, text } = this.props;
    return (
      <div className="illustrate-item">
        <span className="text">{text}</span>
        <div className="cubes">
          {new Array(level).fill(0).map((_, i) => (
            <BarItem key={i} />
          ))}
        </div>
      </div>
    );
  }
}
