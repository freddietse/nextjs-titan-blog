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
      <header className="mb-4">
        <h3 className="entry-title">{postData.title}</h3>
        <time className="text-base text-gray-700">{postData.date}</time>
      </header>
      {/* <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      /> */}
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
