/**
 * @typedef SummaryItem
 * @property {string} brief 介绍的重点
 * @property {string | undefined} detail 【可选】详细说明(支持 HTML 格式)
 */

/** @type {Array<SummaryItem>} */
const summaries = [
  {
    brief: '有扎实的 JS/HTML/CSS 基础',
    detail: '读过多本相关书籍并有笔记产出',
  },
  {
    brief: '熟悉前端框架',
    detail: '熟练使用 Vue 和 React，了解二者底层原理，了解二者联系与区别，熟悉二者相关生态',
  },
  {
    brief: '持续产出技术博客',
    detail: '博客部署于<a href="http://www.xiong35.cn/blog3.0/posts" target="_blank" rel="noreferrer">此地址</a>',
  },
  {
    brief: '有较多实战经验',
    detail:
      '加入<a href="https://www.bingyan.net/" target="_blank" rel="noreferrer">冰岩作坊团队</a>，参与完成过二十余个前端项目(见<a href="https://github.com/xiong35">我的GitHub</a>)，有多人协作开发经验',
  },
  {
    brief: '有跨端开发能力',
    detail: '熟练使用 Node.js 进行后端开发。会使用 Flutter 和小程序进行开发。',
  },
  {
    brief: '具有抽象封装的能力，了解设计模式',
    detail: '会在项目中抽离出通用组件、布局、工具函数、高阶函数等，会在项目中使用设计模式',
  },
  {
    brief: '熟练使用 TypeScript',
    detail:
      '目前正在挑战Type Challenge中的题目并将解答<a href="https://github.com/xiong35/type-challenges-solutions" target="_blank" rel="noreferrer">开源</a>',
  },
  {
    brief: '掌握基本算法和数据结构',
    detail:
      '除常见的数据结构和算法外，还出于兴趣了解并实现过<a href="https://github.com/xiong35/color-extraction" target="_blank" rel="noreferrer">图片主色提取算法</a>和<a href="http://www.xiong35.cn/blog3.0/post/614d9878f166d62decd2c8af" target="_blank" rel="noreferrer">多种机器学习算法</a>',
  },
];

export default summaries;
