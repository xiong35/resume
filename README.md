# xiong35 的个人简历 😎

用 react 编写的个人简历, 来[简历部署网站](http://resume.xiong35.cn)看看吧

## Features 💎

- 响应式布局，手机上也有极佳体验
- 支持[自定义配置](#自定义配置)
- 文档详尽

## 项目结构 🎄

```text
├── build                   # 打包生成的文件目录
└── src
    ├── parts
    │   ├── Experience      # 代表性项目经历
    │   ├── Info            # 基本信息
    │   ├── Skills          # 专业技能
    │   └── Summary         # 个人简介
    └── static
        ├── image
        │   ├── *.svg       # 专业技能 部分用到的 logo， 文件名(不带后缀)与展示文字相同
        │   ├── photo.jpg   # 自己的照片
        ├── footers.js      # 配置底部 footer 链接
        ├── experiences.js  # 配置代表性项目经历
        ├── infos.js        # 配置基本信息
        ├── skills.js       # 配置专业技能
        ├── summaries.js    # 配置个人简介
        └── vars.scss       # 配置主题颜色
```

## 启动项目 🏁

> 需有 [node](https://nodejs.org/zh-cn/download/) 12+ 版本

```bash
git clone git@github.com:xiong35/resume.git
cd resume

# 下载依赖
npm install

# 本地调试
npm start # 打开 http://localhost:3000/ 预览

# 打包为 html 文件
npm run build # 打包到 build 文件夹下
```

## 导出 pdf

执行`npm start`，chrome 中打开`http://localhost:3000/`，右键选择**打印**，点开**更多设置**，配置如下：

- 纸张尺寸：A3（或者自己摸索）
- 每个工作表页数：1
- 边距：无
- 缩放：自定义
  - 比例为 80（或者在这个范围附近摸索一个合适的）
- 勾选**选项：背景图形**（重要‼️）

点击保存即可导出

## 自定义配置 ⚙️

在 `src/static` 文件夹下可找到相关配置文件，文件内有相关注释，搬运如下：

`expirience.js` 文件为**代表性项目经历**相关配置：

```js
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
  /* ... */
];

export default experiences;
```

`footer.js` 文件为**底部相关链接**配置：

```js
/**
 * @typedef FooterLinkItem
 * @property {string} content 链接文本
 * @property {string} href 链接跳转路由
 */

/** @type {Array<FooterLinkItem>} */
const footerLinks = [
  {
    content: '简历链接',
    href: 'http://resume.xiong35.cn',
  },
  {
    content: '博客链接',
    href: 'http://www.xiong35.cn',
  },
  {
    content: 'GitHub',
    href: 'https://github.com/xiong35',
  },
];

export default footerLinks;
```

`infos.js` 文件为**基本信息**配置：

```js
/**
 * @typedef InfoItem
 * @property {string} name 个人信息的 key
 * @property {string} value 个人信息的 value
 * @property {string | undefined} href 【可选】跳转链接(不设置则展示纯文本，设置则展示链接)
 */

/** @type {Array<InfoItem>} */
const infos = [
  { name: '姓名', value: '熊逸朗' },
  { name: '性别', value: '男' },
  {
    name: '网站',
    value: 'www.xiong35.cn',
    href: 'http://www.xiong35.cn',
  },
];

export default infos;
```

`skills.js` 文件为**专业技能**配置：

```js
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
];

export default skills;
```

`summaries.js` 文件为**个人介绍**配置：

```js
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
    brief: '持续产出技术博客',
    detail:
      '博客部署于<a href="http://www.xiong35.cn/blog3.0/posts" target="_blank" rel="noreferrer">此地址</a>',
  },
];

export default summaries;
```

`var.scss` 文件为**主题色**配置：

```scss
$bg-light: #fff; // 背景色
$text-light: #212121; // 前景色（文本颜色）

$purple: #5b86e5;
$blue: #36d1dc;
$dark-blue: #007991;
$cyan: #78ffd6;
$green: #54ca72;
$yellow: #f5de19;
$orange: #ef9d46;
$red: #f86058;
$black: #333333;
$white: #f0f0f0;
```
