import Layout from "../components/layout";
import Link from "next/link";

export default function Research() {
    return (
        <Layout>
            <section>
                <h2>
                    Projects
                </h2>
                <p>
                    Here are some projects I've been up to, for fun and for clients:
                    <ul>
                        <li><Link href="https://github.com/thomfoster/minRLHF">minRLHF</Link>: A tutorial on RLHF</li>
                        <li><Link href="https://wikiguesser.pythonanywhere.com/">Wikiguesser</Link>: A fun game for testing your general knowledge. If you're the owner of <Link href="https://www.wikiguesser.com/">wikiguesser.com</Link> and you're reading this - get your own ideas!</li>
                    </ul>
                </p>
            </section>
        </Layout>
    )
}