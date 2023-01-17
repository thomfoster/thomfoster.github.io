const app = document.getElementById("app");

function Header () {
    return (
        <div className="header">
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
        <div className="hero">
            <img id="wide-image" src="assets/me.png"/>
            <img id="closeup-image" src="assets/me2.png"/>
        </div>
    )
}

function About () {
    return (
        <section className="about">
            <h2>About</h2>

            <p>Hey, I'm Thom! I'm not quite sure what to call myself - not so long ago I was a student, and up until recently I was an entrepreuner. More on that below. </p>
            
            <p>Since late 2022, I've been increasinly focused on research, and am currently excitedly exploring opportunities in academia and industry. I'm particularly interested in how techniques from RL, language and AI safety can be combined to create deep learning models that are powerful whilst being reliable, controllable and explainable.</p>

            <p>Outside of work I love running and the outdoors.</p>
        </section>
    )
}

function TimelineItem (props) {
    const {id, label, title, subtitle, body} = props
    return (
        <div className="split" id={id} key={id}>
            <div className="label">{label}</div>
            <div className="content">
                <h3>{title}</h3>
                <small>{subtitle}</small>
                <p dangerouslySetInnerHTML={{'__html':body}}></p>
            </div>
        </div>
    )
}

function Timeline () {
    return (
        <section className="timeline">
            <h2>Timeline</h2>
            {timeline.map((el) => (TimelineItem(el)))}
        </section>
    )
}

function Main () {
    return (
        <div className="main">
            <About />
            <Timeline />
        </div>
    )
}

function Footer () {
    return (
        <div className="footer">
            <h3>Made with love (and react) by me in 2023.</h3>
        </div>
    )
}

function App () {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, app)