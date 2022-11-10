import './App.css';
import AnimationPractice from './AnimationPractice';
import Typical from "react-typical";
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
import Introduction from './Introduction.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <Projects/>
    </div>
  );
}

export default App;
