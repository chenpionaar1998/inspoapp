// Libraries
import React from 'react';

// Styles
import './App.scss';

// Components
import Router from './Components/Router/Router';

const App: React.FC = () => {
  return (
    <div className="theme-light">
      <div className="wrapper blocks-with-shadow-theme top-navigation">
        <Router />
      </div>
    </div>
  );
}

export default App;
