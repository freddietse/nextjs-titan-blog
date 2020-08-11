---
title: '如何使用 Next.js 搭建一个静态博客'
description: "Coding is such a blissful activity."
date: '2020-01-02'
---

Next.js 一般被认为是一个服务端渲染框架（SSR），但在 9.3 版本发布后，它也开始[支持静态网站生成（SSG）](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support)了。

### 创建一个 Next.js 应用

官方推荐使用 `reate-next-app` 创建新应用，运行如下命令：

```bash
npx create-next-app
# or
yarn create next-app
```



We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
