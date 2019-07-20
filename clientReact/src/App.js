import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navi from './components/container/Navi';
import routes from './routes/index';
import './assets/css/materialize.min.css';

import {AuthenticationProvider} from './context/AuthenticationContext';
import {SongsProvider} from './context/SongsContext'

function App() {
    return (
        <AuthenticationProvider>
            <SongsProvider>
                <Router>
                    <Navi />
                    <div className="container col m12" >
                        {routes}
                    </div>
                </Router>
            </SongsProvider>
        </AuthenticationProvider>

    );
}

export default App;