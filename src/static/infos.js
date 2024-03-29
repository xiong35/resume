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
  { name: '电话', value: '18827090877' },
  { name: '邮箱', value: 'xiong35@foxmail.com' },
  {
    name: '网站',
    value: 'www.xiong35.cn',
    href: 'http://www.xiong35.cn',
  },
  { name: '学校', value: '华中科技大学' },
  { name: '专业', value: '计算机科学与技术' },
  {
    name: 'GitHub',
    value: 'xiong35',
    href: 'https://github.com/xiong35',
  },
];

export default infos;
