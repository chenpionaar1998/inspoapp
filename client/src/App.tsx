// Libraries
import React from 'react';
import { createBrowserHistory } from 'history';

// Styles
import './App.scss';

// Components
import Router from './Components/Router/Router';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="theme-light">
      <div className="wrapper blocks-with-shadow-theme top-navigation">
        <Router history={history}/>
      </div>
    </div>
  );
}

export default App;
