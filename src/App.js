import React from 'react';
import './App.css';

import Main from './components/main'
import Socials from './components/socials'

function App() {
  return (
    <div className="root">
      <div className="content-main">
        <Main/>
      </div>

      <div className="content-main">
        <Socials/>
      </div>
    </div>
  );
}

export default App;
