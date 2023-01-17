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

function ContentSection () {

}

function Main() {
    return (
        <div className="main">
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

      <section className="timeline">
        <h2>Timeline</h2>
        <div className="split" id="genei">
          <div className="label">2019–Now</div>
          <div className="content">
            <h3>Genei.io</h3>
            <small>Founder and Chief Science Officer</small>
            <p>Using large language models to speed up research. 
              Think ChatGPT but scoped to documents you upload.
              We went through YC combinator in 2021 and recieved funding from some great people.
              If you're passionate about applying all the recent advances of generative AI, we're hiring!
            </p>
          </div>
        </div>
        <div className="split" id="halo">
          <div className="label">2020</div>
          <div className="content">
            <h3>Halo</h3>
            <small>Founder and Chief Technology Officer</small>
            <p>Whirlwind ride trying to help out during the pandemic.
              Started doing PCR tests out of a shipping container with a friend from uni.
              Scaled to 1,000 tests a day.
              I've written more about my experiences with Halo here.
            </p>
          </div>
        </div>
        <div className="split" id="oxford">
          <div className="label">2016-2020</div>
          <div className="content">
            <h3>Master's in Computer Science</h3>
            <small>University of Oxford</small>
            <p>2nd in cohort. Microsoft prize for best undergrad dissertation.</p>
          </div>
        </div>
      </section>
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