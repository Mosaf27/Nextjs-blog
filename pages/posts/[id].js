import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }


export async function getStaticProps({ params }) {
    const postData =  await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }


export default function Post ({postData}){
    return(
        <Layout>

          <Head>
          <title>{postData.title}</title>
          </Head>

        <article> {/*html article element   */}
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date className = {utilStyles.lightText} dateString={postData.date}/>
        </div>

          <div dangerouslySetInnerHTML={{__html: postData.convertedContent}} /> {/* converting markdown into 
                                                                                       regular html   */}
          </article> 


        </Layout>
    )
}