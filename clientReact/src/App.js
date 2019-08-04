import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navi from './components/container/Navi';
import routes from './routes/index';
import './assets/css/materialize.min.css';

import Store from './components/AuthenticationComponent/Context/Store';

function App() {
    return (
        <Store>
            <Router>
                <Navi />
                <div className="container col m12" >
                    {routes}
                </div>
            </Router>
        </Store>
    );
}

export default App;