import React from 'react';
import '../styles/CVDisplay.css';

const CVDisplay = ({ generalInfo, education, experience }) => {
  return (
    <div className="cv-display">
      <h1>CV Preview</h1>
      <section>
        <h2>General Information</h2>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </section>
      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <p>School: {edu.school}</p>
            <p>Title: {edu.title}</p>
            <p>Date: {edu.date}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Practical Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.position}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
            <p>From: {exp.from} - To: {exp.to}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CVDisplay;