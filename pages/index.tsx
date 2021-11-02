import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Drawdown from '../components/Drawdown';

import Footer from '../components/Footer';



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fin</title>
        <meta name="description" content="Drawdown calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* <Breadcrumbs /> */}
      </header>

      <main className={styles.main}>
        <Drawdown />
      </main>

      <Footer />
    </div>
  )
}

export default Home
