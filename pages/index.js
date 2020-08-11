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
            </header>
            <div className="mb-4">
              <p className="text-gray-700">{post.description}</p>
            </div>
            <footer className="flex items-center">
              <time className="text-sm text-gray-700 flex items-center mr-5">
                <svg
                  className="h-4 w-4 text-gray-500 mr-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {post.date}
              </time>
            </footer>
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
