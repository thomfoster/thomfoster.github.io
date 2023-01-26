import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <header>
        <div>
          <a href="/">
            <h2>Thomas Foster</h2>
          </a>
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
      <h3>Made with love (and react) by me in 2023.</h3>
    </div>
  );
}

export default function Layout({ children, retPage }) {
  return (
    <div className={styles.container}>
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
