import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">

      
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tagline">Together, we can make a difference 🌍</span>
          <h1>Welcome to Our Prema Ananda Spiritual Society</h1>
          <p>
            We are dedicated to improving lives and empowering communities through
            education, healthcare, and women empowerment initiatives.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Involved</button>
            <button className="btn secondary-btn">Donate Now</button>
          </div>
          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Children Educated</p>
            </div>
            <div>
              <h3>120+</h3>
              <p>Health Camps</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>Women Trained</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p className="section-subtitle">
          We work on key areas that help build a stronger and more inclusive society.
        </p>
        <div className="card-grid">

          <div className="card">
            <div className="card-image-wrapper">
             <img src="/ngo3.jpg" alt="NGO Activity" />

            </div>
            <div className="card-content">
              <h3>Education</h3>
              <p>
                Providing access to quality education for underprivileged children
                through scholarships, learning centers, and mentorship.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-wrapper">
              <img
                src="/ngo2.jpg"
                alt="Healthcare camp"
              />
            </div>
            <div className="card-content">
              <h3>Healthcare</h3>
              <p>
                Organizing medical camps, awareness drives, and preventive care
                programs to ensure healthy communities.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-wrapper">
              <img
                src="ngo1.jpg"
                alt="Women empowerment"
              />
            </div>
            <div className="card-content">
              <h3>Women Empowerment</h3>
              <p>
                Empowering women with vocational training, financial literacy,
                and leadership opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>

     
      <section className="story">
        <div className="story-image">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Volunteers working together"
          />
        </div>
        <div className="story-content">
          <h2>Changing Lives, One Project at a Time</h2>
          <p>
            Our volunteers and supporters are at the heart of everything we do.
            From conducting workshops to supporting local communities, your
            contribution creates real impact on the ground.
          </p>
          <p>
            Join us in building a world where everyone has access to basic
            education, healthcare, and equal opportunities.
          </p>
          <button className="btn primary-btn">Become a Volunteer</button>
        </div>
      </section>

      
      <section className="call-to-action">
        <div className="cta-content">
          <h2>Join Us Today</h2>
          <p>
            Be a part of our mission to bring positive change. Volunteer with us,
            support a child&apos;s education, or donate to our ongoing projects.
          </p>
          <button className="btn cta-button">Get Involved</button>
        </div>
      </section>

    </div>
  );
};

export default Home;
