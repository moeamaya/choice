import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Drawdown from '../components/Drawdown';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fin</title>
        <meta name="description" content="Drawdown calculator" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{/* <Breadcrumbs /> */}</header>

      <main className={styles.main}>
        <Drawdown />
      </main>
    </div>
  );
};

export default Home;
