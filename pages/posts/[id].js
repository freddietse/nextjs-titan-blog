import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

export default function Post({ postData }) {
  return (
    <Layout>
      <h3 className="entry-title">{postData.title}</h3>
      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
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
