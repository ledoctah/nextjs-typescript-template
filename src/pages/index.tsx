import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Typescript Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <img className={styles.image} src="/react.png" alt="React Logo" />

        <h1 className={styles.welcome}>
          Welcome to{' '}
          <a href="https://github.com/ledoctah/nextjs-typescript-template">
            Next.js Typescript Template
          </a>
        </h1>

        <p>
          You can start editing{' '}
          <span className={styles.code}>src/pages/index.tsx</span>
        </p>

        <footer className={styles.footer}>
          Made with ❤️ by{' '}
          <a href="https://github.com/ledoctah">Matheus Ferreira</a>
        </footer>
      </main>
    </div>
  );
}
