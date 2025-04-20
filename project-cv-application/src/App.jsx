import React, { useState } from 'react';
import GeneralInfo from './component/GeneralInfo';
import Education from './component/Education';
import Experience from './component/Experience';
import CVDisplay from './component/CVDisplay';
import './App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo onSubmit={setGeneralInfo} />
      <Education onSubmit={setEducation} />
      <Experience onSubmit={setExperience} />
      <CVDisplay
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
