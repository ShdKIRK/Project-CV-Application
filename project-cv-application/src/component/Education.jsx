import React, { useState } from 'react';
import '../styles/Education.css';

const Education = ({ onSubmit }) => {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({ school: '', title: '', date: '' });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation([...education, form]);
    setForm({ school: '', title: '', date: '' });
    setIsEditing(false);
    onSubmit([...education, form]);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="education">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>Education</h2>
          <input
            type="text"
            name="school"
            value={form.school}
            onChange={handleChange}
            placeholder="School Name"
            required
          />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title of Study"
            required
          />
          <input
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Date of Study"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <p>School: {edu.school}</p>
              <p>Title: {edu.title}</p>
              <p>Date: {edu.date}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;