import Head from 'next/head';
import { useEffect, useState } from 'react';
import checker from 'utils/checker';

//COMPONENTS 
import Layout from '../components/layout'
import Card from '../components/card'
import Footer from '../components/footer'
import Input from '../components/input';

export default function Search() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState();

  const styles = {
    gradient: {
      background: 'linear-gradient(90deg, rgba(110,231,183,1) 0%, rgba(16,185,129,1) 50%, rgba(4,120,87,1) 100%)'
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
    try {
      await fetch(`${proxyUrl}https://api.aylien.com/news/stories?body=${checker(query)}&language=fr&per_page=21`, {
      mode: 'no-cors',
      method: 'get',
      headers: {
        'X-AYLIEN-NewsAPI-Application-ID' : `${process.env.NEXT_PUBLIC_NEWS_APPID}`,
        'X-AYLIEN-NewsAPI-Application-Key' : `${process.env.NEXT_PUBLIC_NEWS_APIKEY}`
      }
    })
    .then(response => response.json())
    .then(response => {
      setData(response);
      console.log(response);
    })
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Head>
        <title>Actual News - Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Recherchez les articles qui vous plaisent...
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-60 my-0 py-0 rounded-t" style={styles.gradient}></div>
          </div>
        </div>
        <Input query={query} handleSubmit={handleSubmit} handleChange={handleChange}/>
        <Card data={data} />
        <Footer />
      </Layout>
    </div>
  )
}