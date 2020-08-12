---
title: "深入理解 REST 架构"
description: "Coding is such a blissful activity."
date: "2020-07-16"
---

REST 是 Representational State Transfer 的缩写，译作「表现层状态转换」。Roy Thomas Fielding 在他的博士论文中最早提出了这一概念。他同时还是 HTTP 协议（ 1.0 版和 1.1 版 ）的主要设计者、Apache 服务器软件的作者之一、Apache 基金会的第一任主席。

![img](https://freddietse.com/wp-content/uploads/2020/07/1_-9Rl0ug-9yaYWIl-QVlZrQ.jpeg)

Roy during his Tuesday night keynote in Berlin, 12 years ago

### REST 的指导原则

#### 客户端-服务器（Client–server）

客户端-服务器架构是一种网络架构，也称 C/S 架构或主从式架构。客户端发送请求到服务器后，服务器可以拒绝这个请求，也可以执行这个请求并将响应内容发送回客户端。

客户端-服务器架构的原则就是关注点分离。功能的适当分离会简化服务器组件，从而提高可伸缩性。一个客户端可以向多个服务器发起请求，同时，一个服务器也可以为多个客户端提供服务。

> C/S 架构和B/S 架构有什么区别？B/S 架构派生自 C/S 架构，其客户端只需要浏览器即可，不需要安装专门的软件。浏览器与 Web 服务器（Apache、Nginx）交互，Web 服务器与后端数据库（MySQL、MongoDB）进行交互。举个例子，「微信 APP」属于 C/S 架构，而「微信网页版」则属于 B/S 架构。

#### 无状态（Stateless）

从客户端发起的每个请求必须包含理解请求所必需的全部信息。因此，会话状态（session state）应该存储在客户端，而不是服务器。

这个约束改善了可见性、可靠性和可伸缩性三个架构属性。但缺点也很明显，由于不能将状态数据保存在服务器上的共享上下文中，因此增加了在一系列请求中发送的重复数据（每次交互的开销），可能会降低网络性能。

#### 缓存（Cacheable）

#### 统一接口（Uniform interface）

### 如何设计一套合理的 RESTFul API ？

#### 协议

应该总是使用 HTTPS 协议。

#### 域名

应该总是将 API 部署在专用的子域名下。

```
https://api.example.com
```

也可以是主域名的子目录下。

```
https://example.com/api
```

#### 版本 (Versioning)

应该将 API 的版本号放入 URL。

```
https://api.example.com/v1
```

#### 路径（Endpoint）

每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表名对应。一般来说，数据库中的表都是同种记录的”集合”（collection），所以API中的名词也应该使用复数。

比如「文章」和「用户」的 API，路径应该设计成这样。

```
https://api.example.com/v1/posts
https://api.example.com/v1/users
```

#### 方法

应该总是使用以下 HTTP 方法对服务器资源进行 「增删改查」：

- GET：从服务器获取一个或多个资源
- POST：在服务器创建一个资源
- PUT / PATCH：在服务器更新资源
- DELETE：从服务器删除资源

下面是一些例子：

| 方法   | URL      | 含义                | 请求成功后的返回结果     |
| ------ | -------- | ------------------- | ------------------------ |
| GET    | /posts   | 获取所有文章        | 返回所有文章列表（数组） |
| GET    | /posts/1 | 获取 id 为 1 的文章 | 返回单个资源对象         |
| POST   | /posts   | 新增一篇文章        | 返回新生成的资源对象     |
| PUT    | /posts/1 | 更新 id 为 1 的文章 | 返回完整的资源对象       |
| PATCH  | /posts/1 | 更新 id 为 1 的文章 | 返回完整的资源对象       |
| DELETE | /posts/1 | 删除 id 为 1 的文章 | 返回一个空文档           |

#### 状态码

HTTP 状态码分成五大类：

- 1XX ：信息性状态码
- 2XX ：成功状态码
- 3XX ：重定向状态码
- 4XX ：客户端错误状态码
- 5XX ：服务器错误状态码

下面是一些例子：

| 状态码 | 原因短语              | 方法           | 含义                |
| ------ | --------------------- | -------------- | ------------------- |
| 200    | OK                    | GET            | 请求成功            |
| 201    | Created               | POST/PUT/PATCH | 新建或修改成功      |
| 204    | No Content            | DELETE         | 删除成功            |
| 404    | Not Found             | *              | 请求的 URL 无法找到 |
| 500    | Internal Server Error | *              | 服务器发生错误      |

#### 过滤（Filter）

使用 `.` 访问深层属性

```
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
```

#### 分页（Paginate）

使用 `_page` 和 `_limit` 对返回的数据进行分页，`_limit` 为可选参数，默认是 `10` 。

```
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```

#### 搜索（search）

```
GET /posts?q=internet
```

#### 切片（Slice）

使用 `_start` 和 `_end` （或 `_limit`）指定数据的起始位置和结束位置。

```
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
```

#### 排序（Sort）

`_sort` 指定排序的字段，`_order` 指定升序（`asc`）还是降序（`desc`），默认升序（`asc`）。

```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
```

### 参考资料

1. [架构风格与基于网络的软件架构设计](https://static001.infoq.cn/resource/ebook/1b/23/1ba47dd4e6944ddb2aade45aecbd4e23.pdf).
2. [json-server](https://github.com/typicode/json-server). Get a full fake REST API with zero coding in less than 30 seconds (seriously).
3. [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html). 阮一峰的网络日志.
4. [理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html). 阮一峰的网络日志.
5. [表现层状态转换](https://zh.wikipedia.org/wiki/表现层状态转换). 维基百科，自由的百科全书.