import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class InfoItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    const { name, value } = this.props;
    return (
      <span className="info-item">
        <span className="item-name">{name}：</span>
        {value.startsWith("http") ? (
          <a href={value} className="item-value">
            {value}
          </a>
        ) : (
          <span className="item-value">{value}</span>
        )}
      </span>
    );
  }
}
