import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Logo } from '../components/Logo';
import Drawdown from '../components/Drawdown';
import ThemeSwitcher from '../components/ThemeSwitcher';

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

      <header className={styles.header}>
        <Logo />
        <ThemeSwitcher />
      </header>

      <main className={styles.main}>
        <Drawdown />
      </main>
    </div>
  );
};

export default Home;
