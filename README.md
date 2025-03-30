# React CV Application Documentation 🚀✨📝

## Overview 🎯🛠️📜
This project is a **CV Application** built using React. It allows users to input, edit, and display their general information, educational experience, and practical experience. The application leverages React state and props to dynamically manage form inputs. 🎨📋✅

## Features ⚡📝💡
- **General Information Section**: Users can enter their name, email, and phone number.
- **Educational Experience Section**: Users can input the school name, title of study, and date of study.
- **Practical Experience Section**: Users can provide company name, position title, job responsibilities, and employment duration.
- **Edit & Submit Functionality**: Each section includes buttons to edit and submit data.
- **Dynamic Form Display**: Submitted data is displayed as text, and clicking "Edit" restores the input fields with pre-filled values.
- **React Strict Mode Compatibility**: React's StrictMode may cause double rendering in development mode, which is expected behavior. 🔄🛑⚙️

## Project Setup 🏗️⚙️📌
### **1. Create a New React Project** 🎉📂💻
Run the following command to initialize a new React project:
```sh
npx create-react-app cv-application
cd cv-application
```

### **2. Project Structure** 📁🗂️📜
Organize your project as follows:
```
cv-application/
│── src/
│   ├── components/
│   │   ├── GeneralInfo.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── CVPreview.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── GeneralInfo.css
│   │   ├── Education.css
│   │   ├── Experience.css
│   ├── App.js
│   ├── index.js
```

## Components 🏗️🖥️📌
### **1. GeneralInfo.js** ✏️📄💡
Handles user input for general information.
```jsx
import React, { useState } from "react";

function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setEditing] = useState(true);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <input name="name" value={info.name} onChange={handleChange} />
      ) : (
        <p>{info.name}</p>
      )}
      <button onClick={() => setEditing(!isEditing)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  );
}

export default GeneralInfo;
```

### **2. Education.js** 🎓📘✏️
Manages educational details using a similar state-handling approach.

### **3. Experience.js** 💼📌🔍
Handles input and display for practical work experience.

### **4. CVPreview.js** 🖥️📜🔎
Displays the finalized CV after submission.

## Styling 🎨🖌️👕
Include a `styles/` directory to store component-specific CSS files and import them inside the component files.

Example (`GeneralInfo.css`):
```css
div {
  margin-bottom: 10px;
}
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
```

## Deployment 🚀📤🌍
Once development is complete, push the code to GitHub and deploy using:
```sh
git add .
git commit -m "Initial commit"
git push origin main
```
Deploy using **Netlify**, **Vercel**, or **GitHub Pages**. 🌐🎯📡

## Conclusion 🎯📌✅
This project reinforces core React concepts, including state management, props, and component reusability. Future improvements could include form validation, enhanced UI styling, and API integration for saving CV data persistently. 🔄💡🛠️

