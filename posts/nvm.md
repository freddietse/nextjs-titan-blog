---
title: "NVM – Node.js 版本管理器"
description: "Coding is such a blissful activity."
date: "2020-07-16"
---

### 安装

#### Mac OS

a. 卸载电脑上已经安装的 Node.js

```bash
$ sudo npm uninstall npm -g
```

#### Windows

a. 下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) ( 推荐选择 `nvm-setup.zip` )。

b. 安装成功后，在安装根目录打开 `settings.txt` 文件，添加如下内容：

```bash
...
arch: 64
proxy: none
node_mirror:npm.taobao.org/mirrors/node/
npm_mirror:npm.taobao.org/mirrors/npm/
```

### 常用操作

#### 安装 Node.js

```bash
# 安装最新版
$ nvm install node

# 安装固定版本
$ nvm install 12.18.0
```

#### 查看 Node.js 版本列表

```bash
$ nvm list
```

#### 切换 Node.js 版本

```bash
$ nvm use 12.18.0
```