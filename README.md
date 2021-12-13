这是一个弹弓射击小游戏。

游戏基于 matter.js 引擎，可以快速实现物理弹跳、碰撞等游戏特效。

打包 App 基于 Cordova 和 Github Actions。

Git 仓库推送一个 tag 到 Github 仓库， Actions 会自动打包构建，得到一个app文件: xx.apk，并发布到 release 页面。

Cordova 环境搭建依赖 java jdk 1.8 和 Node.js，目前在环境配置已经在 `/.github/workflows/main.yml` 配置完成。

How to dev
```
npm install
// 安装的时候出现 npm ERR! Line breaks can't be quoted on Windows 不影响使用，忽略错误，继续后续操作就行

npm run my-init
npm run dev
```
