// Libraries
import React from 'react';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';

// Styles
import './App.scss';

// Components
import ConnectedRouter from './Components/Router/ConnectedRouter';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="theme-light">
      <div className="wrapper blocks-with-shadow-theme top-navigation">
        <ConnectedRouter history={history}/>
      </div>
    </div>
  );
}

export default App;
