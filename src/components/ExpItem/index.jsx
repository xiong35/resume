import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class ExperienceItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
  };

  render() {
    const { name, from, to, description, links } = this.props;
    return (
      <div className="exp-item">
        <h3 className="exp-title">{name}</h3>
        <p className="time">
          <span className="from">{from}</span>
          <span className="to">{to}</span>
        </p>
        <p className="description">{description}</p>
        <ul className="links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
