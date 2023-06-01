import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps(){
  const allPostsData =  getSortedPostsData();
  return {
    props:{
      allPostsData,
    }
  };
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a passionate self-taught web developer</p>
        <p>This home page and other contents of this website were built by me through NextJS framework</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link> {/* $ id is template literal    */}
              <br />
              <div className={utilStyles.lightText}>
              <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}
