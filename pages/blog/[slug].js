import {getPostsSlugs, getPostsData} from "../../utils/posts";
import Layout from "../../components/layout";
import Date from "../../components/date";
import Head from "next/head";

export default function Post({ postData }) {
    return (
        <Layout retPage="/blog">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <section>
                <small>
                    <Date dateString={postData.date}/>
                </small>
                <h2>{postData.title}</h2>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    return getPostsSlugs()
}

export async function getStaticProps({ params }) {
    const data = await getPostsData(params.slug)
    return {
        props: {
            postData: data
        }
    }
}