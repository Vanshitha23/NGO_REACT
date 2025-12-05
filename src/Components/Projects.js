import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>Our Initiatives</h1>
        <p>
          We lead social and spiritual programs that inspire young citizens to
          be responsible and aware human beings who stand for justice, values,
          and democratic society.
        </p>
      </section>

      <section className="project-list">
        {/* Project Cards */}
        <div className="project-card">
          <img
            src="/ngo4.jpg"
            alt="Youth Awareness"
          />
          <div className="project-content">
            <h3>Youth Awareness Campaigns</h3>
            <p>
              Interactive sessions in colleges and communities focusing on
              human values, justice, equality, and critical awareness about
              social issues affecting India.
            </p>
            <span className="status ongoing">Ongoing</span>
          </div>
        </div>

        <div className="project-card">
          <img
            src="/ngo5.jpg"
            alt="Social Responsibility Drives"
          />
          <div className="project-content">
            <h3>Social Responsibility Drives</h3>
            <p>
              Campaigns that encourage people to participate in community
              actions like cleanliness, public issue reporting, and citizen care.
            </p>
            <span className="status active">Active</span>
          </div>
        </div>

        <div className="project-card">
          <img
            src="/ngo6.jpg"
            alt="Democracy & Rights Workshops"
          />
          <div className="project-content">
            <h3>Democracy & Rights Workshops</h3>
            <p>
              Sessions designed to help people understand their civil rights &
              duties, encouraging transparency, accountability & participation.
            </p>
            <span className="status planned">Upcoming</span>
          </div>
        </div>

        <div className="project-card">
          <img
            src="ngo7.jpg"
            alt="Spiritual Reflection Circles"
          />
          <div className="project-content">
            <h3>Spiritual Reflection Circles</h3>
            <p>
              Small-group gatherings where youth explore love, truth,
              compassion and peaceful values with real-life application.
            </p>
            <span className="status ongoing">Ongoing</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
