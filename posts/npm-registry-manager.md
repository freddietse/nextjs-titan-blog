---
title: "npm 源管理"
description: "nrm ( NPM registry manager )是一个 npm 源管理器，能够帮助大家简单且快速地在不同源之间切换，比如 npm、yarn、cnpm、taobao 等。"
date: "2020-08-12"
---

[nrm ( NPM registry manager )](https://github.com/Pana/nrm) 是一个 npm 源管理器，能够帮助大家简单且快速地在不同源之间切换，比如 npm、yarn、cnpm、taobao 等。

#### 全局安装

```bash
$ npm install -g nrm
```

#### 常用操作

```bash
# List all the registries
$ nrm ls

# Change registry to registry
$ nrm use cnpm

# Show the response time for all registries
$ nrm test

# Show current registry name
$ nrm current
```

