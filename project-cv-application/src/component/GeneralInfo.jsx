import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ onSubmit }) => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onSubmit(info);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>General Information</h2>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>General Information</h2>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;