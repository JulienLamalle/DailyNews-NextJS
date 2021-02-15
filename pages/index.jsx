import Head from 'next/head'
import axios from 'axios';

//COMPONENTS 
import Layout from '../components/layout'
import HeroBanner from '../components/hero-banner'
import Card from '../components/card'
import Footer from '../components/footer'

export default function Home({data}) {
  const styles = {
    gradient: {
      background: 'linear-gradient(90deg, rgba(110,231,183,1) 0%, rgba(16,185,129,1) 50%, rgba(4,120,87,1) 100%)'
    }
  }

  return (
    <div>
      <Head>
        <title>Actual News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <HeroBanner />
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Les dernières actualités
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-60 my-0 py-0 rounded-t" style={styles.gradient}></div>
        </div>
        </div>
        <Card data={data} />
        <Footer />
      </Layout>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const url = `http://newsapi.org/v2/top-headlines?country=fr&apikey=${process.env.NEWS_APIKEY}`
  const { data } = await axios.get(url)
  console.log(data)
  return {
    props: {
      data
    }
  }
}
