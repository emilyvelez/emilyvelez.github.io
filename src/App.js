import './App.css';
import React from 'react';
import MainProfile from './components/mainProfile';
import spotify from './images/spotify.png';

function App() {
  return (
    <div className="App">
      <div className="mainProfile">
        <MainProfile />
      </div>
      <div className="links">
        {/* <a href="https://open.spotify.com/user/y65wgcrr33sgyucv10xyjn5nx?si=1a1500d7c3bb4770">
          <img src={spotify} alt="spotify logo"/>
        </a> */}
      </div>
    </div>
  );
}

export default App;
