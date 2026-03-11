import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java / Software Developer Intern</h4>
                <h5>Pragati Computer Academy</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Gained hands-on experience in Java and Advanced Java, working with
              applets, event handling, and database connectivity. Developed
              efficient, functional, and interactive applications while
              strengthening core programming skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
