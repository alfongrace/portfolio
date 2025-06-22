import React from 'react';
import '../../styles/App.css';
import ProfileImage from '../images/profile.jpeg';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-split-section">
        <div className="hero-left-content">
          <h1>&lt;software&gt; &lt;dev&gt;</h1>
          <p style={{ fontSize: '15px'}}> junior software developer with a passion for learning and problem solving</p>
        </div>

        <div className="hero-center-image">
          <img src={ProfileImage} alt="Grace Alfon" className="profile-hero-image" />
        </div>

      </section>

      <section className="latest-work-section">
        <h2>Some of My Latest Work</h2>
        <p style={{ fontSize: '18px', fontFamily: 'sans-serif' }}>Explore my recent projects to see what I've been building.</p>
        <div style= {{padding: '0px' }} className="home-cta">
          <a href="/projects" className="button" style={{ padding: '10px 20px' }}>View All Projects</a>
        </div>
      </section>
    </div>
  );
}

export default Home;