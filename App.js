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
            
            <p>I'm currently learning, building and researching at the intersection of reinforcement learning, language and AI safety. 
            This means I'm looking to design agents that do things in a safe fashion.
            I'm particularly interested in X, and am currently seeking a PhD to do research full time.
            Check out <a href="/research.html"><em>research</em></a>/research for more here. 
            </p>
            <p>In between graduating from Oxford and deciding to pursue research full time, I founded several successful startups.
            Before focusing on research, I founded and was head of AI at genei. 
            We use large language models to speed up research.
            We went through YC combinator in 2021 and recieved funding from some great people.
            If this excites you, we're hiring!</p>
            <p>In my spare time I love running and the outdoors.</p>
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
                <p>{body}</p>
            </div>
        </div>
    )
}

function Timeline () {
    return (
        <div className="timeline">
            <h2>Timeline</h2>
            {timeline.map((el) => (TimelineItem(el)))}
        </div>
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
            <h3>This site is currently unpublished, any facts or figures must be treated as draft.</h3>
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