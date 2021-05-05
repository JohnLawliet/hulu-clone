import Layout from '../components/layout'
import '../styles/globals.css'


const App = ({ Component, pageProps }) => (
  <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)

export default App