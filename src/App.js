// App.js
import React from 'react';
import './App.css';
import ExperienceTimeline from './components/ExperienceTimeline';
import hero_hex from './assets/header_hex_comb.png';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Jack Gourdeau</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section 
        className="hero relative w-full bg-center bg-fixed"
        style={{
          backgroundImage: `url(${hero_hex})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="content">
          <h1>Hi, I'm  Jack Gourdeau</h1>
          <p> Computational Biology | Microbiology | Protein Engineering</p>
          <div>
            Boston, MA
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/jackgourdeau/" ><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/JGourdeau" ><i class="fab fa-github"></i></a>
            <a href="mailto:youremail@example.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="content">
          <h2>About Me</h2>
          <div className="about-card">
            <p>
              I am a <strong>hybrid scientist</strong> with experience in evolutionary computational biology, microbiology, and protein engineering. 
            </p>
            <p>
              I studied Genomics, Bioinformatics and Computational Biology at <strong>Dartmouth College</strong>. 
              I'm now an Associate Scientist with <strong>Manifold Bio</strong>.
            </p>
            <p>
              When I'm not coding or setting up experiments at the bench I'm probably  on a run!
            </p>
          </div>
        </div>
      </section>
      <section>

        <ExperienceTimeline>
        </ExperienceTimeline>
        
      </section>

      <section id="contact" className="contact">
        <div className="content">
          <h2>Get in Touch</h2>
          <div className="contact-card">
            <p>
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div class="contact-links">
              <a href="https://www.linkedin.com/in/yourprofile"><i class="fab fa-linkedin"></i></a>
              <a href="https://github.com/yourusername"><i class="fab fa-github"></i></a>
              <a href="mailto:youremail@example.com"><i class="fas fa-envelope"></i></a>
          </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="content">
          <p>© {new Date().getFullYear()} John Gourdeau. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;