/**
 * @typedef SkillItem
 * @property {string} name 掌握技能的名字，需在 src/static/image 文件夹下创建**同名**的 svg 文件当作 icon\
 *                         必须为 svg，如需修改，请改动 src/components/SkillItem/index.jsx 文件，l26
 * @property {string} level 熟练度（取值为 1-5）
 */

/** @type {Array<SkillItem>} */
const skills = [
  {
    name: 'Vue',
    level: 4,
  },
  {
    name: 'React',
    level: 4,
  },
  {
    name: 'TypeScript',
    level: 4,
  },
  {
    name: 'Node',
    level: 3,
  },
  {
    name: 'Flutter',
    level: 3,
  },
  {
    name: '小程序',
    level: 3,
  },
];

export default skills;
