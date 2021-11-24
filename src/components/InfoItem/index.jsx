import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class InfoItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    const { name, value, href } = this.props;
    return (
      <span className="info-item">
        <span className="item-name">{name}：</span>
        {href ? (
          <a href={href} target="_blank" className="item-value" rel="noreferrer">
            {value}
          </a>
        ) : (
          <span className="item-value">{value}</span>
        )}
      </span>
    );
  }
}
