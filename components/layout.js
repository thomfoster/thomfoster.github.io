import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import Head from "next/head";

function Header() {
  return (
    <div className={styles.header}>
      <header>
        <div>
          <Link href="/">
            <h2>Thomas Foster</h2>
          </Link>
          Building and exploring deep learning
          <br />
          London, UK
        </div>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        priority
        src="/images/me2.png"
        className={styles.closeUpImage}
        width={512}
        height={512}
      />
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <h3>Made by me in 2023. fosterthom16(at)gmail(dot)com. </h3>
    </div>
  );
}

export default function Layout({ children, retPage }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thom Foster | About</title>
        <meta name="title" content="Thom Foster | About"/>
        <meta name="description" content="Thom Foster's personal website"/>
        <meta name="author" content="Thom Foster"/>
      </Head>
      <Header />
      <Hero />
      <div className={styles.main}>
        {children}
        {retPage != "/" && (
          <div className={styles.backToHome}>
            {retPage == "/blog" ? (
              <Link href="/blog">← Back to all posts</Link>
            ) : (
              <Link href="/">← Back to home</Link>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
