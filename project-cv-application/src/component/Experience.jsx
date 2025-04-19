import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = ({ onSubmit }) => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperiences([...experiences, form]);
    setForm({ company: '', position: '', responsibilities: '', from: '', to: '' });
    setIsEditing(false);
    onSubmit([...experiences, form]);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>Practical Experience</h2>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Position Title"
            required
          />
          <textarea
            name="responsibilities"
            value={form.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
            required
          />
          <input
            type="text"
            name="from"
            value={form.from}
            onChange={handleChange}
            placeholder="From Date"
            required
          />
          <input
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
            placeholder="To Date"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Practical Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index}>
              <p>Company: {exp.company}</p>
              <p>Position: {exp.position}</p>
              <p>Responsibilities: {exp.responsibilities}</p>
              <p>From: {exp.from} - To: {exp.to}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;