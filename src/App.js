import './App.css';
import React from 'react';
import Home from './Home/home';

function App() {

  return (
    <>
      <div className="App">
        <Home />
      </div>
      <div className="displayMobile">
        <h1>Content Not Design For Mobile (less than 1000px), please view on Desktop</h1>
      </div>
    </>
  );
}

export default App;