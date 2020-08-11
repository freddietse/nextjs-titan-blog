import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        {allPostsData.map((post) => (
          <article key={post.id} className="mb-16">
            <header className="mb-4">
              <h3 className="entry-title hover:text-yellow-500 hover:underline">
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h3>
              <time className="text-base text-gray-700">{post.date}</time>
            </header>
            <div>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
