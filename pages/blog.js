import Layout from "../components/layout";
import {getSortedPostsData} from "../utils/posts";
import Link from "next/link";

export default function Blog({ allPostsData }) {
    console.log(allPostsData)
    return (
        <Layout>
            <section>
                <h2>Blog</h2>
                <p>
                    Not entirely sure why I write, but here goes!
                </p>
                    {allPostsData.map((post) => (
                        <p>
                            <small>{post.date}</small>
                            <Link href={`/blog/${post.slug}`}>
                                <h2>{post.title}</h2>
                            </Link>
                        </p>
                    ))}
            </section>
        </Layout>
    )
}

export function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}