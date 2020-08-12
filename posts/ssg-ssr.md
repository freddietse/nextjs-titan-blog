---
title: "如何使用 Next.js 搭建一个静态博客"
description: "Coding is such a blissful activity."
date: "2020-01-02"
---

Next.js 一般被认为是一个服务端渲染框架（SSR），但在 9.3 版本发布后，它也开始[支持静态网站生成（SSG）](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support)了。

- react 16.13.1
- Next.js 9.5.1
- tailwindcss 1.6.2

### 创建 Next.js 应用

本文使用 `reate-next-app` ，运行如下命令：

```bash
$ npx create-next-app
```

### 渲染 Markdown

[react-markdown](https://github.com/rexxars/react-markdown) 是一个渲染 Markdown 的 React 库。

```bash
$ npm install react-markdown --save
```


### 语法高亮（syntax highlighting）

[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) 是一个支持代码语法高亮的 React 组件，可以选择 [prismjs](https://prismjs.com/) 或 [highlightjs](https://highlightjs.org/)。

```bash
$ npm install react-syntax-highlighter --save
```

1

```jsx
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Layout>
      <h3 className="entry-title">{postData.title}</h3>
      <ReactMarkdown
        className="entry-content"
        escapeHtml={false}
        source={postData.content}
        renderers={{ code: CodeBlock }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
```

### Google Fonts

#### 选项一：在自定义文档中引入 Google Fonts

在 `./pages` 中创建 `_document.js` 文件，然后引入 Google Fonts 链接。

```jsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

```

接着在 `globals.css` 中引入字体：

```css
body {
  font-family: "Noto Serif SC", serif;
}
```

#### 选项二：在 globals.css 文件中引入 Google Fonts

```css
@import "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap";

body {
  font-family: "Noto Serif SC", serif;
}
```


