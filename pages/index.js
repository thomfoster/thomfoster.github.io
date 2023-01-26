import {timeline} from "../public/timeline";
import Layout from "../components/layout";
import timelineStyles from "../styles/timeline.module.css";
import styles from "../styles/index.module.css";
import Link from "next/link";

import Image from "next/image";

function About () {
    return (
        <section className="about">
            <h2>About</h2>

            <p>Hey! I'm Thom. I'm not quite sure what to call myself - not so long ago I was a student, and up until recently I was an entrepreuner. More on that below. </p>
            
            <p>Since late 2022, I've been increasingly focused on research, and am currently excitedly exploring opportunities in academia and industry. I'm particularly interested in how we can automate the evaluation and training of deep neural nets.</p>

            <p>This means I'm interested in how we evaluate models on complex criteria (such as with learned reward functions), how we can systematically generate examples the model finds challenging (as in curriculum/active/adversarial learning) and how we can turn this into a useful training paradigm (such as RLHF or open ended RL). If this interests you, you can read more about my <Link href="/research">research interests</Link>.</p>

            <p>Outside of work I love running, the outdoors and tinkering with <Link href="/projects">fun projects</Link>. Like any self-important programmer I have a <Link href="/blog">blog</Link>. If any of the above interests you, get in touch!</p>
        </section>
    )
}

function TimelineItem (props) {
    const {id, label, title, subtitle, body} = props
    return (
        <div className={timelineStyles.split} id={id} key={id}>
            <div className={timelineStyles.label}>{label}</div>
            <div className={timelineStyles.content}>
                <h3>{title}</h3>
                <small>{subtitle}</small>
                <p dangerouslySetInnerHTML={{'__html':body}}></p>
            </div>
        </div>
    )
}

function Timeline () {
    return (
        <section className={timelineStyles.timeline}>
            <h2>Timeline</h2>
            {timeline.map((el) => (TimelineItem(el)))}
        </section>
    )
}

export default function App () {
    return (
        <Layout retPage="/">
            <Image priority src="/images/me.png" className={styles.wideImage} width={1024} height={1024}/>
            <About />
            <Timeline />
        </Layout>
    )
}