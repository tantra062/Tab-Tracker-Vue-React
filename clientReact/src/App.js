import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navi from './components/container/Navi';
import routes from './routes/index';
import './assets/css/materialize.min.css';

import {AuthenticationProvider} from './components/context/AuthenticationContext';

function App() {
  return (
      <AuthenticationProvider>
        <Router>
            <Navi />
            <div className="container col m12" >
                {routes}
            </div>
        </Router>
      </AuthenticationProvider>

  );
}

export default App;