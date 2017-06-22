# 技术点介绍
-- 构建工具： webpack+babel+less & postcss
-- 系统框架： react + react-router + redux
-- 数据交互： fetch + mock
-- 其他辅助： git + npm

#view
1、主页显示：轮播图显示 + 列表的无限滚动，下拉刷新 + 个人信息显示更新

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/home.png)

2、选择城市: 城市选择更新redux

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/city.png)

3、登录页面：校验登录状态 + 登录信息更新

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/login.png)

4、个人主页：校验登录状态 + 用户名、地址拉取 + 订单展示

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/user.png)

5、评论：评价提交 + 取消评价

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/comment.png)

6、商家详情：下拉刷新列表 + 收藏 + 购买

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/detail.png)
![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/detail-store.png)


7、筛选列表：下拉刷新 + 列表展示 + 顶部搜索

![image](https://github.com/summer0719/react-dazhongAPP/blob/master/screen/search.png)

# 命令
mkdir test
rm rf test
pwd //查看路径

# 建立文件
- npm init
- npm install webpack webpack-dev-server --save-dev
- npm install react react-dom --save
- npm install webpack webpack-dev-server --save-dev

#package.json中的配置文件
 > "scripts": {
    "start": "NODE_ENV=dev webpack-dev-server --progress --colors",
    "mock": "node --harmony ./mock/server.js",
    "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
  }
//所以在开发的时候需要
$npm start 开发环境运行项目
$npm run mock 运行mock后台数据，通过接口转发获取数据

# 性能检测工具（官方版）
npm i react-addons-perf --save
Perf.start() //在控制台执行
Perf.stop //在控制台执行
Perf.printWasted() //即可打印出浪费性能的组件列表//在控制台执行

#性能优化（官方版）
npm i react-addons-pure-render-mixin --save
class List extends React.Component { constructor(props, context) { super(props, context); this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); } //...省略其他内容... }

#router
npm install react-router --save

#使用redux
npm install redux --save
npm install react-redux --save

# 文件结构
app
-- actions
-- components
-- containers
-- fetch
-- reducers
-- -- index.js
-- -- info.js
-- router
-- static
-- store
-- util
-- index.jsx
-- index.html

#react 和 redux结合
-- https://github.com/facebook/react-devtools
-- https://github.com/gaearon/redux-devtools

#mock
https://github.com/github/fetch
npm install whatwg-fetch --save
npm install es6-promise --save

#字体图标
Font Awesome
icomoon

#轮播图
https://github.com/voronianski/react-swipe
npm install swipe-js-iso whatwg-fetch --save //将依赖安装

#加载更多

#问题解决
1、报错： Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.

解决：you may be using libraries that still use propTypes the old way. What you can do is to delete the node_modules folder and install a package npm install -g npm-check-updates Then run npm-check-updates -u and npm install This will install the latest versions of each package from you. If the warning still persists you can revert to a older version of react till the updates for each package are available






