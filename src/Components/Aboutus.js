import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* Hero / Intro */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tagline">Prema Ananda Spiritual Society</p>
          <h1>About Us</h1>
          <p className="about-hero-text">
            We are a non-profit, value-driven organization based in Telangana,
            working to awaken social consciousness, humanism, and democratic
            values among citizens – especially young people.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section mission-vision">
        <div className="about-section-block">
          <h2>Our Mission</h2>
          <p>
            To build a socio–cultural reform movement that inspires individuals
            to think critically, act responsibly, and stand for human dignity,
            equality, and justice in everyday life.
          </p>
        </div>
        <div className="about-section-block">
          <h2>Our Vision</h2>
          <p>
            A society where citizens are spiritually rooted, socially aware, and
            democratically active – taking responsibility for their actions and
            working together for a more just, compassionate India.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-section founder-section">
        <div className="founder-image-wrapper">
          <img
            src="/ngofounder.jpg"
            alt="Founder speaking to youth"
          />
        </div>
        <div className="founder-content">
          <h2>Our Founder</h2>
          <h3>Thomas</h3>
          <p>
            Thomas is the founder of Prema Ananda Spiritual Society and a
            committed socio–spiritual worker who believes that real change
            begins with awareness, dialogue, and collective action.
          </p>
          <p>
            With a deep concern for democracy, human rights, and the well-being
            of young people, he has been involved in campaigns, trainings, and
            awareness programs that encourage citizens to question injustice,
            participate in public life, and live with compassion and integrity.
          </p>
          <p>
            Under his leadership, the Society works to connect spiritual values
            like love, truth, and non-violence with practical action in society.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="about-section focus-section">
        <h2>What We Focus On</h2>
        <p className="section-subtitle">
          Our work combines spiritual values with social responsibility.
        </p>

        <div className="focus-grid">
          <div className="focus-card">
            <h3>Humanism & Democracy</h3>
            <p>
              Promoting fairness, equality, and respect for every person, while
              encouraging citizens to understand and protect democratic values.
            </p>
          </div>

          <div className="focus-card">
            <h3>Youth Awareness & Training</h3>
            <p>
              Engaging students and young professionals through sessions,
              workshops, and discussions on social issues, ethics, and active
              citizenship.
            </p>
          </div>

          <div className="focus-card">
            <h3>Social & Spiritual Dialogues</h3>
            <p>
              Organizing talks, small gatherings, and campaigns that connect
              inner growth with the responsibility to build a better society.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <h2>Our Team</h2>
        <p className="section-subtitle">
          A small but committed group of volunteers, supporters, and well-wishers
          working together for change.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <div className="avatar-circle">T</div>
            <h3>Thomas</h3>
            <p>Founder & Lead Organizer</p>
          </div>

          <div className="team-member">
            <div className="avatar-circle">V</div>
            <h3>Volunteer Leaders</h3>
            <p>Campaigns & On-ground Activities</p>
          </div>

          <div className="team-member">
            <div className="avatar-circle">Y</div>
            <h3>Youth Network</h3>
            <p>Student & Young Professional Volunteers</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-section about-cta">
        <div className="about-cta-box">
          <h2>Be Part of the Journey</h2>
          <p>
            If you believe in human values, justice, and democratic spirit, you
            are already one of us. Join our sessions, volunteer, or collaborate
            with us to reach more people.
          </p>
          <p className="cta-note">
            You can connect with us through our Facebook page:
            <span> Prema Ananda Spiritual Society</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
