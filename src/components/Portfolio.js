import React from 'react';
import '../Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Nicolas Davis</h1>
        <h2>Full Stack Mern Developer</h2>
      </header>
      <section>
        <h3>About Me</h3>
        <p>
          I am a passionate front-end developer with experience in building
          user-friendly and performant web applications. I love learning new
          technologies and applying them to create innovative solutions.
        </p>
        <a
              href="https://www.linkedin.com/in/nicolasdavis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect Via Linkedin
            </a>
            <br></br>
            <a
              href="https://drive.google.com/file/d/1gehbizr3Xk9KP7mSaKQXJjxDl7q3HS3A/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Resume
            </a>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <a
              href="https://nd1391.github.io/Mod1-Proj-Trail-Best/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oregon Trail Remake
            </a>
          </li>
          <li>
            <a
              href="https://sage-sunburst-54c5c1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sweater Weather
            </a>
          </li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 Nicolas Davis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;