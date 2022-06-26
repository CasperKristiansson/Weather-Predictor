import './App.css';
import React from 'react';
import Home from './Home/home';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {

  return (
    <>
      <div className="App">
        <ReactNotifications />
        <Home />
      </div>
      <div className="displayMobile">
        <h1>Content Not Design For Mobile (less than 1000px), please view on Desktop</h1>
      </div>
    </>
  );
}

export default App;