import "./styles.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <img
          src="/iMockup.png" 
          alt="WUDI App"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight1">INNOVATE</span>
            <br />
            <span className="highlight2">YOUR</span>
            <br />
            <span className="highlight2">OWN</span>
            <br />
            <span className="highlight1">SELF</span>
          </h1>
          <p>Keep your Social Life alive with WUDI!</p>
          <button className="cta-button">Join the team</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
