import './App.css';
import React from 'react';
import MainProfile from './components/mainProfile';
import spotify from './images/spotify.webp';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import email from './images/email.png';

function App() {
  return (
    <div className="App">
      <div className="mainProfile">
        <MainProfile />
      </div>
      <div className="links">
        {/* open in new tab */}
        <a href="https://www.linkedin.com/in/emilymarievelez/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin logo"/>
        </a>
        <a href="https://github.com/emilyvelez" target="_blank" rel="noreferrer">
          <img src={github} alt="github logo"/>
        </a>
        <a href="mailto: emily.velez1234@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="email logo"/>
        </a>
        <a href="https://open.spotify.com/user/y65wgcrr33sgyucv10xyjn5nx?si=1a1500d7c3bb4770" target="_blank" rel="noreferrer">
          <img src={spotify} alt="spotify logo"/>
        </a>
      </div>
    </div>
  );
}

export default App;
