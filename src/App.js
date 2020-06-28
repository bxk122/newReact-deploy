import React from 'react';
import logo from './badal2.png';
import pic from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
    <img className="photo" src={logo} alt="image" />
        <p style={{fontSize: '2rem'}}>
          Team Members:
        </p>
        <ul>
          <li>Anish Karki</li>
          <li>Ashis Rajthala</li>
          <li>Badal karki</li>
          <li>Nischal Shrestha</li>
        </ul>
      </div>
  );
}

export default App;
