import React, { Component } from "react";

import Title from "../../components/CTitle";
import SkillItem from "../../components/SkillItem";
import IllustrateItem from "../../components/SkillIllustrateItem";

import skills from "../../static/skills";

import "./index.scss";

export default class Skills extends Component {
  render() {
    return (
      <section className="section skills">
        <Title text="专业技能" />
        <div className="skills-main">
          <div className="skill-items">
            {skills.map((sk) => (
              <SkillItem key={sk.name} {...sk} />
            ))}
          </div>
          <footer className="illustrate">
            <IllustrateItem level={5} text="精通😎" />
            <IllustrateItem level={4} text="熟练掌握🧐" />
            <IllustrateItem level={3} text="有一定经验😏" />
            <IllustrateItem level={2} text="会使用🌝" />
          </footer>
        </div>
      </section>
    );
  }
}
