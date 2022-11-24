import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { useState } from 'react';

import CodeTable from '../components/code_table';
import Hero from '../components/hero';
import Navbar from '../components/nav_bar';
import { countryCodes } from '../data/codes';

export default function Home() {
  const [query, setQuery] = useState("");
  const keys = ["name", "code", "iso"];

  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(query));
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title> Country Codes </title>
        <meta name="description" content="Search your country codes in instant. Know your country with mobile phone codes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
        <input name="search_query" type="text" placeholder="Search Country Name, Country Code or ISO..." onChange={(e) => setQuery(e.target.value)} className={styles['search-field']}/>
	<CodeTable data={search(countryCodes)}/>
      </main>

      <footer className={styles.footer} id="bottom">
        <a
          href="https://raisaroj360.com.np"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by
          <span className={styles.logo}>
            <Image src="/country_code_logo.png" alt="Country Code Logo" width={72} height={72} />
          </span>
        </a>
      </footer>
    </div>
  );
}
