import Image from "next/image";
import styles from "./layout.module.css";

function Header () {
    return (
        <div className={styles.header}>
            <header>
                <div>
                    <a href="/">
                        <h2>Thomas Foster</h2>
                    </a>
                    Building and exploring deep learning<br/>
                    London, UK
                </div>
            </header>
        </div>
    )
}

function Hero () {
    return (
        <div className={styles.hero}>
            <Image priority src="/images/me.png" className={styles.wideImage} width={1024} height={1024}/>
            <Image priority src="/images/me2.png" className={styles.closeUpImage} width={512} height={512} />
        </div>
    )
}

function Footer () {
    return (
        <div className={styles.footer}>
            <h3>Made with love (and react) by me in 2023.</h3>
        </div>
    )
}

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <Hero />
            <div className={styles.main}>
                {children}
            </div>
            <Footer />
        </div>
    )
}