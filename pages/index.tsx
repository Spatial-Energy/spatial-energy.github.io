import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@300&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className="center">
          <div className="content">
            <h1>Spatial Energy</h1>
            <p>please check these links:</p>
            <ul>
              <li>
                our product{" "}
                <a href="https://energyopenpiazza.io/">Energy Open Piazza</a>
              </li>
              <li>
                our partner company <a href="https://u9t.co.uk/">UNIT9 / U9T</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
