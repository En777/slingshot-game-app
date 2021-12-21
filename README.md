这是一个弹弓射击小游戏。

游戏基于 matter.js 引擎，可以快速实现物理弹跳、碰撞等游戏特效。

[下载试玩](https://github.com/En777/slingshot-game-app/releases)

本程序使用 Cordova 把 web 代码包装成了 app。

打包和发布使用 Github Actions 服务，提交代码到 Github， 就会自动打包构建，得到一个app文件: xx.apk，并发布到 release 页面。

自动化CICD打包发布，体验很不错，感谢 Github。

Cordova 环境搭建依赖 java jdk 1.8 和 Node.js，目前在环境配置已经在 `/.github/workflows/main.yml` 配置完成。

How to dev
```
npm install
// 安装的时候出现 npm ERR! Line breaks can't be quoted on Windows 不影响使用，忽略错误，继续后续操作就行

npm run my-init
npm run dev
```
