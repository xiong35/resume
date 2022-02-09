/**
 * @typedef ExperienceItem
 * @property {string} name 项目名称
 * @property {string} from 项目开始时间
 * @property {string} to 项目结束时间
 * @property {string} description 项目描述
 * @property {Array<{name: string, href: string}>} links 项目相关链接的数组，name为名字，href为跳转链接
 */

/** @type {Array<ExperienceItem>} */
const experiences = [
  {
    name: 'Panda',
    from: '2021/1/16',
    to: '2021/2/1',
    description:
      '合作完成的生活记录网站。用 react 进行前端开发，egg.js 编写后台逻辑。本人负责编写后台逻辑和前端的三个界面。现部署在服务器上，持续使用并维护。',
    links: [{ name: '部署地址', href: 'http://cancan.xiong35.cn:99/' }],
  },
  {
    name: '狼人杀',
    from: '2021/3/30',
    to: '2021/8/4',
    description:
      '独立完成的狼人杀项目，能由后端自动处理游戏操作。使用了责任链、策略模式等多种设计模式，便于后续进行功能迭代。前后端均使用 TS 开发，便于长期维护。',
    links: [
      { name: '部署地址', href: 'http://werewolf.xiong35.cn' },
      {
        name: '代码地址',
        href: 'https://github.com/xiong35/werewolf/',
      },
    ],
  },
  {
    name: '个人博客v3.0',
    from: '2021/9/17',
    to: '2021/10/1',
    description:
      '个人独立完成的第三版博客网站。使用 Vue3 + tsx + Koa 开发，使用 TS 编写前后端。通过将 Vue 和 tsx 结合能写出]更有表现力的代码。此项目中的诸多动画锻炼了 CSS 能力。现部署在服务器上，持续使用并维护。',
    links: [
      {
        name: '部署地址',
        href: 'http://www.xiong35.cn/blog3.0/posts',
      },
      {
        name: '代码地址',
        href: 'https://github.com/xiong35/blog3.0/',
      },
    ],
  },
  {
    name: 'BB Hust',
    from: '2021/5/23',
    to: '至今',
    description:
      '华科校内论坛，使用 Vue3 + TS 开发，本人独立负责前端的全部开发。界面繁多，在其中我多次抽离封装重复逻辑和布局，同时灵活使用 TS 技巧进行严格的类型约束。由于仅校内学生准入，可登录游客账号查看效果：账号:U000000000，密码:123456',
    links: [
      {
        name: '部署地址',
        href: 'https://bb.hust.online',
      },
    ],
  },
];

export default experiences;
