import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class Title extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;
    return (
      <h2 className="title">
        <span className="glitch" data-text={text}>
          {text}
        </span>
      </h2>
    );
  }
}
