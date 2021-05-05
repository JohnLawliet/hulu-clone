import Head from 'next/head'
import Results from '../components/results/results.component'
import { HomepageContainer } from '../styles/homepage.styles'
import requests from '../utils/requests'


const IndexPage = ({results}) => {
  

  return(
    <HomepageContainer>
      <Head>
        <title>hulu 2.0</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>    
      <Results results={results}/>
    </HomepageContainer>
  )
}

export default IndexPage

export async function getServerSideProps(context){
  // make it genre = fetchTrending.url later on
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json())

  return {
    props: {
      results: request.results
    }
  }
}